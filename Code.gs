/**
 * Suvaikoodu – A Nest of Flavours
 * Google Apps Script Web App Backend (Code.gs)
 *
 * SETUP & DEPLOYMENT INSTRUCTIONS:
 * 1. Open https://script.google.com/ and create a new project named "Suvaikoodu Enquiries".
 * 2. Replace the default Code.gs contents with this entire file.
 * 3. Update OWNER_EMAIL (and optionally SHEET_ID if not bound to a Sheet) below.
 *    Tip: If you create this script via Extensions -> Apps Script inside a Google Sheet,
 *    SpreadsheetApp.getActiveSpreadsheet() works automatically without needing a Sheet ID.
 * 4. Click Deploy -> New deployment -> Select type: "Web app".
 * 5. Set "Execute as" to "Me", and "Who has access" to "Anyone".
 * 6. Click Deploy, authorize permissions, and copy the Web App URL.
 * 7. Paste that URL into script.js at: const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";
 */

var CONFIG = {
  OWNER_EMAIL: 'orders@suvaikoodu.in', // Replace with bakery owner's real email
  BRAND_NAME: 'Suvaikoodu – A Nest of Flavours',
  SHEET_NAME: 'Enquiries',
  SPREADSHEET_ID: '' // Optional: paste Sheet ID if running as standalone script
};

/**
 * Handles POST requests submitted via Vanilla JS FormData (avoids CORS preflight).
 */
function doPost(e) {
  try {
    var params = (e && e.parameter) ? e.parameter : {};

    var referenceId = params.referenceId || ('SUV-' + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd-HHmmss'));
    var fullName = sanitizeText_(params.fullName);
    var phone = sanitizeText_(params.phone);
    var email = sanitizeText_(params.email);
    var enquiryType = sanitizeText_(params.enquiryType);
    var preferredItem = sanitizeText_(params.preferredItem);
    var quantityBudget = sanitizeText_(params.quantityBudget);
    var eventDate = sanitizeText_(params.eventDate);
    var message = sanitizeText_(params.message);

    if (!fullName || !phone || !email || !enquiryType) {
      return createJsonResponse_({
        status: 'error',
        message: 'Missing required fields: fullName, phone, email, or enquiryType.'
      });
    }

    var sheet = getOrCreateEnquiriesSheet_();
    var submittedAt = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'dd MMM yyyy, hh:mm a z');

    sheet.appendRow([
      submittedAt,
      referenceId,
      fullName,
      phone,
      email,
      enquiryType,
      preferredItem || 'Chef Recommendation',
      quantityBudget || 'Not specified',
      eventDate || 'Flexible',
      message || '—',
      'New Enquiry'
    ]);

    sendOwnerNotificationEmail_({
      submittedAt: submittedAt,
      referenceId: referenceId,
      fullName: fullName,
      phone: phone,
      email: email,
      enquiryType: enquiryType,
      preferredItem: preferredItem || 'Chef Recommendation',
      quantityBudget: quantityBudget || 'Not specified',
      eventDate: eventDate || 'Flexible',
      message: message || '—'
    });

    return createJsonResponse_({
      status: 'success',
      referenceId: referenceId,
      message: 'Enquiry recorded and owner notified.'
    });
  } catch (err) {
    return createJsonResponse_({
      status: 'error',
      message: err && err.message ? err.message : 'Unexpected server error.'
    });
  }
}

/**
 * Optional GET health-check endpoint so visiting the Web App URL in a browser confirms status.
 */
function doGet() {
  return createJsonResponse_({
    status: 'ok',
    service: CONFIG.BRAND_NAME + ' Enquiry Endpoint'
  });
}

function getOrCreateEnquiriesSheet_() {
  var ss = CONFIG.SPREADSHEET_ID
    ? SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();

  if (!ss) {
    throw new Error('No active spreadsheet bound. Set CONFIG.SPREADSHEET_ID or bind script to a Google Sheet.');
  }

  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    var headers = [
      'Timestamp',
      'Reference ID',
      'Full Name',
      'Phone Number',
      'Email',
      'Enquiry Type',
      'Preferred Sweet / Item',
      'Quantity / Budget',
      'Event Date',
      'Message',
      'Status'
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length)
      .setBackground('#24002E')
      .setFontColor('#F5E1A4')
      .setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function sendOwnerNotificationEmail_(data) {
  if (!CONFIG.OWNER_EMAIL) return;

  var subject = '[' + data.enquiryType + '] New Suvaikoodu Enquiry from ' + data.fullName + ' (' + data.referenceId + ')';

  var htmlBody = ''
    + '<div style="font-family: Georgia, serif; background:#1E0026; padding:28px; color:#FFF9F0;">'
    + '  <div style="max-width:600px; margin:0 auto; background:#2A0036; border:1px solid #D4AF37; border-radius:12px; overflow:hidden;">'
    + '    <div style="padding:24px 28px; border-bottom:1px solid rgba(212,175,55,0.35); text-align:center;">'
    + '      <h1 style="margin:0; font-size:24px; color:#FFD700; letter-spacing:0.04em;">Suvaikoodu</h1>'
    + '      <p style="margin:6px 0 0; font-size:13px; color:#F5E1A4; font-style:italic;">A Nest of Flavours · New Royal Enquiry</p>'
    + '    </div>'
    + '    <div style="padding:24px 28px; font-family: Arial, sans-serif; font-size:14px; line-height:1.6; color:#FFF9F0;">'
    + '      <p style="margin-top:0;">A new order enquiry has been received on <strong>' + escapeHtml_(data.submittedAt) + '</strong>.</p>'
    + '      <table style="width:100%; border-collapse:collapse; margin:16px 0;">'
    +          emailRow_('Reference ID', data.referenceId)
    +          emailRow_('Full Name', data.fullName)
    +          emailRow_('Phone Number', data.phone)
    +          emailRow_('Email', data.email)
    +          emailRow_('Enquiry Type', data.enquiryType)
    +          emailRow_('Preferred Item', data.preferredItem)
    +          emailRow_('Quantity / Budget', data.quantityBudget)
    +          emailRow_('Event Date', data.eventDate)
    +          emailRow_('Message', data.message)
    + '      </table>'
    + '      <p style="margin-bottom:0; color:#F5E1A4; font-size:12px;">Reply directly to <a href="mailto:' + escapeHtml_(data.email) + '" style="color:#FFD700;">' + escapeHtml_(data.email) + '</a> or call ' + escapeHtml_(data.phone) + '.</p>'
    + '    </div>'
    + '  </div>'
    + '</div>';

  MailApp.sendEmail({
    to: CONFIG.OWNER_EMAIL,
    replyTo: data.email,
    subject: subject,
    htmlBody: htmlBody
  });
}

function emailRow_(label, value) {
  return ''
    + '<tr>'
    + '  <td style="padding:8px 10px; border-bottom:1px solid rgba(212,175,55,0.18); color:#F5E1A4; width:38%; font-weight:bold;">' + escapeHtml_(label) + '</td>'
    + '  <td style="padding:8px 10px; border-bottom:1px solid rgba(212,175,55,0.18); color:#FFF9F0;">' + escapeHtml_(value) + '</td>'
    + '</tr>';
}

function createJsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function sanitizeText_(val) {
  return val ? String(val).trim() : '';
}

function escapeHtml_(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
