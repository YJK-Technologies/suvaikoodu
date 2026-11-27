import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

interface SuvaikooduProduct {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  image: string;
  packOptions: Array<{label: string; multiplier: number}>;
}

interface SuvaikooduCoreApi {
  PRODUCTS: SuvaikooduProduct[];
  filterProductsByCategory: (products: SuvaikooduProduct[], category: string) => SuvaikooduProduct[];
  calculateVariantPrice: (basePrice: number, multiplier: number) => number;
  formatInr: (amount: number) => string;
  validateEnquiryPayload: (data: Record<string, string>) => {valid: boolean; errors: Record<string, string>};
  generateReferenceId: (date?: Date) => string;
  calculateHeroAudioGain: (scrollY: number, heroHeight: number, isPlaying: boolean, maxGain?: number) => number;
  nextSoundscapeToggleState: (currentPlaying: boolean) => {playing: boolean; userMuted: boolean; label: string};
  shouldRunHeroEffects: (heroIntersecting: boolean, documentHidden: boolean, prefersReduced: boolean) => boolean;
}

function loadScriptCore(): SuvaikooduCoreApi {
  const scriptPath = path.resolve(process.cwd(), 'script.js');
  const code = fs.readFileSync(scriptPath, 'utf8');
  const sandbox: Record<string, unknown> = {
    console,
    Math,
    Date,
    Number,
    String,
    Array,
    Object,
    RegExp,
    JSON,
  };
  sandbox.globalThis = sandbox;
  vm.runInNewContext(code, sandbox);
  return sandbox.SuvaikooduCore as SuvaikooduCoreApi;
}

const core = loadScriptCore();

test('catalog contains 8 creations across 4 categories with valid relative asset paths', () => {
  assert.equal(core.PRODUCTS.length, 8);
  for (const item of core.PRODUCTS) {
    assert.ok(item.image.startsWith('./src/assets/images/'), `Expected relative image path for ${item.id}`);
    const absImg = path.resolve(process.cwd(), item.image.replace(/^\.\//, ''));
    assert.equal(fs.existsSync(absImg), true, `Image file must exist: ${absImg}`);
  }
});

test('filterProductsByCategory filters accurately', () => {
  assert.equal(core.filterProductsByCategory(core.PRODUCTS, 'All').length, 8);
  assert.equal(core.filterProductsByCategory(core.PRODUCTS, 'Royal Laddus').length, 2);
  assert.equal(core.filterProductsByCategory(core.PRODUCTS, 'Heritage Mithai').length, 2);
  assert.equal(core.filterProductsByCategory(core.PRODUCTS, 'Artisan Bakery & Cakes').length, 2);
  assert.equal(core.filterProductsByCategory(core.PRODUCTS, 'Luxury Gift Hampers').length, 2);
});

test('calculateVariantPrice and formatInr compute INR pricing cleanly', () => {
  assert.equal(core.calculateVariantPrice(890, 0.55), 490);
  assert.equal(core.calculateVariantPrice(890, 1.9), 1690);
  assert.equal(core.formatInr(1950), '₹1,950');
});

test('validateEnquiryPayload rejects invalid inputs and accepts valid submissions', () => {
  const invalid = core.validateEnquiryPayload({
    fullName: 'A',
    phone: '123',
    email: 'not-an-email',
    enquiryType: '',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.enquiryType);

  const valid = core.validateEnquiryPayload({
    fullName: 'Meenakshi Sundaram',
    phone: '+91 98400 12345',
    email: 'meenakshi@example.com',
    enquiryType: 'Wedding Bulk Order',
  });
  assert.equal(valid.valid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('generateReferenceId formats SUV-YYYYMMDD-XXXX', () => {
  const ref = core.generateReferenceId(new Date('2026-11-24T10:00:00Z'));
  assert.match(ref, /^SUV-20261124-\d{4}$/);
});

test('ambient soundscape attenuates smoothly on scroll and toggles state cleanly', () => {
  assert.equal(core.calculateHeroAudioGain(0, 800, false), 0);
  assert.equal(core.calculateHeroAudioGain(0, 800, true), 0.25);
  assert.ok(core.calculateHeroAudioGain(600, 800, true) < 0.25);
  assert.ok(core.calculateHeroAudioGain(600, 800, true) > 0.14);
  assert.equal(core.calculateHeroAudioGain(3000, 800, true), Number((0.25 * 0.28).toFixed(4)));

  const onState = core.nextSoundscapeToggleState(false);
  assert.equal(onState.playing, true);
  assert.equal(onState.userMuted, false);
  assert.equal(onState.label, 'Temple Soundscape: Playing');

  const offState = core.nextSoundscapeToggleState(true);
  assert.equal(offState.playing, false);
  assert.equal(offState.userMuted, true);
  assert.equal(offState.label, 'Temple Soundscape: Off');
});

test('shouldRunHeroEffects pauses background loops when offscreen, hidden, or reduced motion', () => {
  assert.equal(core.shouldRunHeroEffects(true, false, false), true);
  assert.equal(core.shouldRunHeroEffects(false, false, false), false);
  assert.equal(core.shouldRunHeroEffects(true, true, false), false);
  assert.equal(core.shouldRunHeroEffects(true, false, true), false);
});
