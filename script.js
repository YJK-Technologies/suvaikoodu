/* ==========================================================================
   Suvaikoodu – A Nest of Flavours
   Interactive Motion, Catalog, Quick-View & Apps Script Form Engine
   ========================================================================== */

const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";

const PRODUCTS = [
  {
    id: "royal-motichoor-laddu",
    name: "Royal Motichoor Ghee Laddu",
    category: "Royal Laddus",
    craftTag: "Pure A2 Ghee · Kashmiri Saffron",
    basePrice: 890,
    defaultPack: "500g (12 pcs)",
    image: "./src/assets/images/hero_royal_laddu_1795513948761.jpg",
    shortDesc:
      "Fine hand-dropped golden boondi pearls steeped in Pampore saffron syrup, slow-folded with pure A2 Bilona ghee and topped with Iranian pistachios.",
    ingredients: "A2 Cow Bilona Ghee, Heirloom Gram Flour, Pampore Kashmiri Saffron, Green Cardamom, Iranian Pistachios, 24K Edible Gold Leaf",
    shelfLife: "7 days refrigerated · Best enjoyed slightly warm",
    packOptions: [
      { label: "250g (6 pcs)", multiplier: 0.55 },
      { label: "500g (12 pcs)", multiplier: 1 },
      { label: "1 kg Royal Box", multiplier: 1.9 }
    ]
  },
  {
    id: "besan-pistachio-laddu",
    name: "Slow-Roasted Besan Pistachio Laddu",
    category: "Royal Laddus",
    craftTag: "90-Min Copper Kadai Roast",
    basePrice: 820,
    defaultPack: "500g (10 pcs)",
    image: "./src/assets/images/sweet_besan_pistachio_laddu_1795513947512.jpg",
    shortDesc:
      "Coarse chana dal flour slow-roasted over gentle flames in heavy copper kadais until nutty gold, bound with raw khand sugar and roasted pistachios.",
    ingredients: "Coarse Chana Besan, Pure A2 Ghee, Organic Khand Sugar, Roasted Iranian Pistachios, Freshly Pounded Elaichi",
    shelfLife: "14 days in airtight keepsake tin",
    packOptions: [
      { label: "250g (5 pcs)", multiplier: 0.54 },
      { label: "500g (10 pcs)", multiplier: 1 },
      { label: "1 kg Celebration Tin", multiplier: 1.92 }
    ]
  },
  {
    id: "imperial-kaju-katli-barfi",
    name: "Imperial Kaju Katli & Kesar Barfi",
    category: "Heritage Mithai",
    craftTag: "W180 Goan Cashews · Pure Varq",
    basePrice: 1150,
    defaultPack: "500g Assorted",
    image: "./src/assets/images/sweet_kaju_saffron_barfi_1795513948655.jpg",
    shortDesc:
      "Velvety diamond-cut W180 Goan cashew fudge paired with saffron-kissed pistachio barfi, hand-dressed with edible silver varq and damask rose petals.",
    ingredients: "Single-Origin W180 Goan Cashews, Pure Milk Khoya, Pampore Saffron, Edible Silver Varq, Dried Damask Rose Petals",
    shelfLife: "10 days cool dry storage",
    packOptions: [
      { label: "250g Tasting Box", multiplier: 0.55 },
      { label: "500g Assorted", multiplier: 1 },
      { label: "1 kg Heritage Platter", multiplier: 1.95 }
    ]
  },
  {
    id: "a2-ghee-mysore-pak",
    name: "Melt-in-Mouth A2 Ghee Mysore Pak",
    category: "Heritage Mithai",
    craftTag: "South Indian Royal Heirloom",
    basePrice: 780,
    defaultPack: "500g (10 cubes)",
    image: "./src/assets/images/sweet_ghee_mysore_pak_1795513949992.jpg",
    shortDesc:
      "Aromatic golden honeycomb squares poured hot into brass trays with generous A2 Bilona ghee for an airy, melt-on-the-palate finish.",
    ingredients: "Pure A2 Bilona Ghee, Sifted Gram Flour, Cane Sugar Syrup, Malabar Green Cardamom",
    shelfLife: "12 days at room temperature",
    packOptions: [
      { label: "250g (5 cubes)", multiplier: 0.54 },
      { label: "500g (10 cubes)", multiplier: 1 },
      { label: "1 kg Royal Box", multiplier: 1.9 }
    ]
  },
  {
    id: "rasmalai-pistachio-gateau",
    name: "Saffron Rasmalai Pistachio Gateau",
    category: "Artisan Bakery & Cakes",
    craftTag: "Handcrafted Fusion Patisserie",
    basePrice: 1950,
    defaultPack: "1 kg (Serves 10–12)",
    image: "./src/assets/images/bakery_rasmalai_pistachio_cake_1795513950218.jpg",
    shortDesc:
      "Featherlight cardamom sponge steeped in saffron-infused rabri milk, layered with whipped mascarpone cream, fresh rasmalai medallions, and pistachios.",
    ingredients: "A2 Dairy Cream, Kashmiri Saffron Reduction, Hand-Churned Rasmalai, Cardamom Sponge, Pistachios, Gold Leaf",
    shelfLife: "48 hours chilled · Baked fresh to order",
    packOptions: [
      { label: "500g Petite Cake", multiplier: 0.58 },
      { label: "1 kg (Serves 10–12)", multiplier: 1 },
      { label: "2 kg Celebration Tier", multiplier: 1.92 }
    ]
  },
  {
    id: "persian-rose-almond-cake",
    name: "Persian Rose & Almond Tea Cake",
    category: "Artisan Bakery & Cakes",
    craftTag: "Eggless Artisan Bake · Cultured Butter",
    basePrice: 1100,
    defaultPack: "750g Bundt Ring",
    image: "./src/assets/images/bakery_rose_almond_tea_cake_1795513951840.jpg",
    shortDesc:
      "Golden-crusted almond and saffron tea cake scented with Kannauj rosewater and whole green cardamom pods, finished with roasted almond crunch.",
    ingredients: "Cultured Butter, Blanched Almond Meal, Kannauj Rosewater, Kashmiri Saffron, Whole Cardamom, Toasted Almonds",
    shelfLife: "5 days at cool room temperature",
    packOptions: [
      { label: "400g Tea Loaf", multiplier: 0.6 },
      { label: "750g Bundt Ring", multiplier: 1 },
      { label: "1.2 kg Festive Duo", multiplier: 1.55 }
    ]
  },
  {
    id: "maharani-velvet-hamper",
    name: "Maharani Velvet Festive Hamper",
    category: "Luxury Gift Hampers",
    craftTag: "Bespoke Keepsake · Brass Diya",
    basePrice: 3400,
    defaultPack: "1.2 kg Keepsake Box",
    image: "./src/assets/images/hamper_royal_festive_box_1795513953015.jpg",
    shortDesc:
      "Deep imperial plum velvet chest lined with gold filigree, uniting Royal Motichoor Laddus, Kaju Katli, spiced roasted nuts, and an artisan brass diya.",
    ingredients: "Royal Motichoor Laddus, Imperial Kaju Katli, Saffron Spiced Almonds & Cashews, Hand-Cast Brass Diya",
    shelfLife: "10 days · Custom monogramming available for 15+ boxes",
    packOptions: [
      { label: "1.2 kg Keepsake Box", multiplier: 1 },
      { label: "2 kg Grand Family Chest", multiplier: 1.65 },
      { label: "Corporate Bulk (10+ Boxes)", multiplier: 0.92 }
    ]
  },
  {
    id: "royal-tambulam-wedding-suite",
    name: "Royal Tambulam Wedding Suite",
    category: "Luxury Gift Hampers",
    craftTag: "Wedding Trousseau · Custom Monogram",
    basePrice: 2650,
    defaultPack: "900g Heritage Box",
    image: "./src/assets/images/sweet_besan_pistachio_laddu_1795513947512.jpg",
    shortDesc:
      "Curated South Indian wedding favour hamper blending Besan Pistachio Laddus, A2 Ghee Mysore Pak, and embossed silk-finish keepsake packaging.",
    ingredients: "Besan Pistachio Laddus, A2 Ghee Mysore Pak, Kesar Cashew Brittle, Gold-Foil Wedding Note",
    shelfLife: "12 days · Made fresh on wedding morning",
    packOptions: [
      { label: "900g Heritage Box", multiplier: 1 },
      { label: "1.5 kg Muhurtham Box", multiplier: 1.55 },
      { label: "50+ Wedding Guest Pack", multiplier: 0.9 }
    ]
  }
];

/* ==========================================================================
   Pure Core Logic (Exported to globalThis.SuvaikooduCore for Unit Tests)
   ========================================================================== */
function filterProductsByCategory(products, category) {
  if (!Array.isArray(products)) return [];
  if (!category || category === "All") return products.slice();
  return products.filter(function (item) {
    return item.category === category;
  });
}

function calculateVariantPrice(basePrice, multiplier) {
  var raw = Number(basePrice) * Number(multiplier || 1);
  if (!Number.isFinite(raw) || raw <= 0) return 0;
  return Math.round(raw / 10) * 10;
}

function formatInr(amount) {
  return "₹" + Number(amount || 0).toLocaleString("en-IN");
}

function validateEnquiryPayload(data) {
  var errors = {};
  var name = (data.fullName || "").trim();
  var phone = (data.phone || "").trim();
  var email = (data.email || "").trim();
  var enquiryType = (data.enquiryType || "").trim();

  if (name.length < 2) {
    errors.fullName = "Please enter your full name (at least 2 characters).";
  }

  var phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    errors.phone = "Please enter a valid 10-digit phone or WhatsApp number.";
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!enquiryType) {
    errors.enquiryType = "Please select an enquiry type.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors: errors
  };
}

function generateReferenceId(nowDate) {
  var d = nowDate instanceof Date ? nowDate : new Date();
  var yyyy = d.getFullYear();
  var mm = String(d.getMonth() + 1).padStart(2, "0");
  var dd = String(d.getDate()).padStart(2, "0");
  var rand = String(Math.floor(1000 + Math.random() * 9000));
  return "SUV-" + yyyy + mm + dd + "-" + rand;
}

function calculateHeroAudioGain(scrollY, heroHeight, isPlaying, maxGain) {
  var cap = typeof maxGain === "number" ? maxGain : 0.25;
  if (!isPlaying) return 0;
  var h = Math.max(Number(heroHeight) || 780, 1);
  var y = Math.max(Number(scrollY) || 0, 0);
  var ratio = Math.max(0, 1 - y / (h * 2.4));
  return Number((cap * Math.max(0.28, ratio)).toFixed(4));
}

function nextSoundscapeToggleState(currentPlaying) {
  var nextPlaying = !Boolean(currentPlaying);
  return {
    playing: nextPlaying,
    userMuted: !nextPlaying,
    label: nextPlaying ? "Temple Soundscape: Playing" : "Temple Soundscape: Off"
  };
}

function shouldRunHeroEffects(heroIntersecting, documentHidden, prefersReduced) {
  return Boolean(heroIntersecting) && !Boolean(documentHidden) && !Boolean(prefersReduced);
}

if (typeof globalThis !== "undefined") {
  globalThis.SuvaikooduCore = {
    PRODUCTS: PRODUCTS,
    filterProductsByCategory: filterProductsByCategory,
    calculateVariantPrice: calculateVariantPrice,
    formatInr: formatInr,
    validateEnquiryPayload: validateEnquiryPayload,
    generateReferenceId: generateReferenceId,
    calculateHeroAudioGain: calculateHeroAudioGain,
    nextSoundscapeToggleState: nextSoundscapeToggleState,
    shouldRunHeroEffects: shouldRunHeroEffects
  };
}

var globalLenisInstance = null;
var particleLoopControls = null;

function isCoarsePointerDevice() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) return true;
  return false;
}

function scrollToSection(targetEl) {
  if (!targetEl) return;
  if (globalLenisInstance) {
    globalLenisInstance.scrollTo(targetEl, { offset: -72 });
  } else {
    targetEl.scrollIntoView({ behavior: "auto" });
  }
}

/* ==========================================================================
   Browser Initialization
   ========================================================================== */
if (typeof window !== "undefined" && typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    initPreloader();
    initStickyNavbar();
    initSaffronParticles();
    initSmoothScrollAndGsap();
    initHeroLadduParallax();
    initMagneticButtons();
    initHeroTempleSoundscape();
    initViewportOptimizers();
    initCollectionSection();
    initQuickViewModal();
    initEnquiryForm();
    initFestivePreFills();
  });
}

/* 1. Preloader Curtain */
function initPreloader() {
  var preloader = document.getElementById("royalPreloader");
  if (!preloader) return;

  var params = new URLSearchParams(window.location.search);
  var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var skipImmediately = params.get("autostart") === "1" || prefersReduced;

  var dismiss = function () {
    preloader.classList.add("is-hidden");
    preloader.setAttribute("aria-hidden", "true");
    document.body.setAttribute("data-preloader", "done");
  };

  if (skipImmediately) {
    dismiss();
  } else {
    window.setTimeout(dismiss, 950);
  }
}

/* 2. Sticky Glassmorphic Navbar */
function initStickyNavbar() {
  var navbar = document.getElementById("royalNavbar");
  if (!navbar) return;

  var updateScrollState = function () {
    if (window.scrollY > 36) {
      navbar.classList.add("is-scrolled");
    } else {
      navbar.classList.remove("is-scrolled");
    }
  };

  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });

  // Close mobile collapse menu on link click
  var mobileNav = document.getElementById("mobileNavDrawer");
  if (mobileNav && typeof bootstrap !== "undefined") {
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        var collapseInstance = bootstrap.Collapse.getInstance(mobileNav);
        if (collapseInstance) collapseInstance.hide();
      });
    });
  }
}

/* 3. Hero HTML5 Canvas Golden Sparkle & Saffron-Dust Particle System (GPU-Light) */
function initSaffronParticles() {
  var canvas = document.getElementById("saffronCanvas");
  if (!canvas || !canvas.getContext) return;

  var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ctx = canvas.getContext("2d", { alpha: true });
  var particles = [];
  var width = 0;
  var height = 0;
  var rafId = 0;
  var isPaused = false;

  function resizeCanvas() {
    var rect = canvas.parentElement ? canvas.parentElement.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createParticles() {
    var count = width < 768 ? 22 : 44;
    particles = [];
    for (var i = 0; i < count; i++) {
      var isSaffron = i % 5 === 0;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: isSaffron ? 1.7 + Math.random() * 1.2 : 0.9 + Math.random() * 1.6,
        vx: (Math.random() - 0.5) * 0.28,
        vy: -0.18 - Math.random() * 0.34,
        alpha: 0.25 + Math.random() * 0.55,
        twinklePhase: Math.random() * Math.PI * 2,
        isSaffron: isSaffron
      });
    }
  }

  function drawSingleFrame() {
    ctx.clearRect(0, 0, width, height);
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.twinklePhase += 0.028;

      if (p.y < -12) p.y = height + 12;
      if (p.x < -12) p.x = width + 12;
      if (p.x > width + 12) p.x = -12;

      var glowAlpha = p.alpha * (0.65 + 0.35 * Math.sin(p.twinklePhase));
      if (p.isSaffron) {
        ctx.globalAlpha = glowAlpha;
        ctx.fillStyle = "#FF9E44";
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.r * 1.8, p.r * 0.65, p.twinklePhase * 0.4, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Fast two-pass alpha halo instead of expensive ctx.shadowBlur
        ctx.fillStyle = "#FFD700";
        ctx.globalAlpha = glowAlpha * 0.22;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = glowAlpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
  }

  function tick() {
    if (isPaused || prefersReduced) {
      rafId = 0;
      return;
    }
    drawSingleFrame();
    rafId = window.requestAnimationFrame(tick);
  }

  function pauseParticles() {
    isPaused = true;
    canvas.setAttribute("data-canvas-paused", "true");
    if (rafId) {
      window.cancelAnimationFrame(rafId);
      rafId = 0;
    }
  }

  function resumeParticles() {
    if (prefersReduced || document.hidden) return;
    isPaused = false;
    canvas.setAttribute("data-canvas-paused", "false");
    if (!rafId) {
      rafId = window.requestAnimationFrame(tick);
    }
  }

  particleLoopControls = {
    pause: pauseParticles,
    resume: resumeParticles
  };

  resizeCanvas();
  createParticles();
  drawSingleFrame();
  if (!prefersReduced) {
    canvas.setAttribute("data-canvas-paused", "false");
    rafId = window.requestAnimationFrame(tick);
  } else {
    canvas.setAttribute("data-canvas-paused", "true");
  }

  var resizeTimer = 0;
  window.addEventListener("resize", function () {
    if (resizeTimer) window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      resizeCanvas();
      createParticles();
      drawSingleFrame();
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
      }
    }, 140);
  }, { passive: true });

  document.addEventListener("visibilitychange", function () {
    var heroEl = document.getElementById("hero");
    var heroVisible = !heroEl || heroEl.getAttribute("data-hero-active") !== "false";
    if (shouldRunHeroEffects(heroVisible, document.hidden, prefersReduced)) {
      resumeParticles();
    } else {
      pauseParticles();
    }
  });
}

/* 4. Lenis Smooth Scroll & GSAP 3 + ScrollTrigger Sync */
function initSmoothScrollAndGsap() {
  var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lenisInstance = null;

  if (!prefersReduced && typeof Lenis !== "undefined") {
    try {
      lenisInstance = new Lenis({
        duration: 1.1,
        easing: function (t) {
          return Math.min(1, 1.001 - Math.pow(2, -10 * t));
        },
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1
      });
      globalLenisInstance = lenisInstance;

      if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        lenisInstance.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(function (time) {
          lenisInstance.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      } else {
        var raf = function (time) {
          lenisInstance.raf(time);
          window.requestAnimationFrame(raf);
        };
        window.requestAnimationFrame(raf);
      }
    } catch (_err) {
      lenisInstance = null;
      globalLenisInstance = null;
    }
  }

  // Smooth anchor navigation routed exclusively through Lenis
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      var targetEl = document.querySelector(targetId);
      if (!targetEl) return;
      e.preventDefault();
      scrollToSection(targetEl);
    });
  });

  if (prefersReduced || typeof gsap === "undefined") return;

  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Staggered Hero kinetic text reveal (GPU-composited transform + opacity)
  gsap.from(".hero-stagger", {
    y: 22,
    opacity: 0,
    duration: 0.8,
    stagger: 0.09,
    force3D: true,
    ease: "power3.out",
    clearProps: "transform,opacity"
  });

  // Hero Laddu scroll-driven scale & gentle parallax transition into collection
  if (typeof ScrollTrigger !== "undefined") {
    var ladduStage = document.getElementById("heroLadduStage");
    if (ladduStage) {
      gsap.to(ladduStage, {
        scale: 0.88,
        y: 36,
        rotation: 8,
        force3D: true,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.5
        }
      });
    }

    // Craftsmanship image subtle GPU parallax
    var craftImg = document.querySelector(".craft-parallax-img");
    if (craftImg) {
      gsap.fromTo(
        craftImg,
        { scale: 1.07, y: -12, force3D: true },
        {
          scale: 1.0,
          y: 12,
          force3D: true,
          ease: "none",
          scrollTrigger: {
            trigger: "#craftsmanship",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }

    // Milestone Animated Counters
    document.querySelectorAll("[data-counter-target]").forEach(function (el) {
      var targetVal = Number(el.getAttribute("data-counter-target") || 0);
      var suffix = el.getAttribute("data-counter-suffix") || "";
      var obj = { val: 0 };

      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: function () {
          gsap.to(obj, {
            val: targetVal,
            duration: 1.35,
            ease: "power2.out",
            onUpdate: function () {
              el.textContent = Math.round(obj.val).toLocaleString("en-IN") + suffix;
            }
          });
        }
      });
    });
  }
}

/* 5. Interactive 3D Mouse-Parallax Tilt on Hero Laddu Centerpiece (Desktop Pointer Only) */
function initHeroLadduParallax() {
  var stage = document.getElementById("heroLadduStage");
  var frame = document.getElementById("heroLadduTilt");
  if (!stage || !frame) return;

  var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced || isCoarsePointerDevice()) return;

  var rafPending = false;
  var latestX = 0;
  var latestY = 0;

  stage.addEventListener("mousemove", function (e) {
    var rect = stage.getBoundingClientRect();
    latestX = (e.clientX - rect.left) / rect.width - 0.5;
    latestY = (e.clientY - rect.top) / rect.height - 0.5;
    if (rafPending) return;
    rafPending = true;
    window.requestAnimationFrame(function () {
      frame.style.transform =
        "rotate3d(1, 0, 0, " + (-latestY * 14).toFixed(2) + "deg) rotate3d(0, 1, 0, " + (latestX * 14).toFixed(2) + "deg)";
      rafPending = false;
    });
  });

  stage.addEventListener("mouseleave", function () {
    frame.style.transform = "";
  });
}

/* 6. Magnetic Hover Micro-Interaction on Gold CTA Buttons (Desktop Pointer Only) */
function initMagneticButtons() {
  var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced || isCoarsePointerDevice()) return;

  document.querySelectorAll(".btn-magnetic").forEach(function (btn) {
    btn.addEventListener("mousemove", function (e) {
      var rect = btn.getBoundingClientRect();
      var dx = (e.clientX - rect.left - rect.width / 2) * 0.16;
      var dy = (e.clientY - rect.top - rect.height / 2) * 0.18;
      btn.style.transform = "translate3d(" + dx.toFixed(1) + "px, " + dy.toFixed(1) + "px, 0)";
    });
    btn.addEventListener("mouseleave", function () {
      btn.style.transform = "";
    });
  });
}

/* 6b. IntersectionObserver Off-Screen Loop Throttling */
function initViewportOptimizers() {
  if (typeof IntersectionObserver === "undefined") return;

  var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var heroEl = document.getElementById("hero");

  if (heroEl) {
    heroEl.setAttribute("data-hero-active", "true");
    var heroObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var active = shouldRunHeroEffects(entry.isIntersecting, document.hidden, prefersReduced);
          heroEl.classList.toggle("is-offscreen", !entry.isIntersecting);
          heroEl.setAttribute("data-hero-active", entry.isIntersecting ? "true" : "false");

          if (particleLoopControls) {
            if (active) {
              particleLoopControls.resume();
            } else {
              particleLoopControls.pause();
            }
          }

          window.dispatchEvent(
            new CustomEvent("suvaikoodu:hero-visibility", {
              detail: { visible: entry.isIntersecting }
            })
          );
        });
      },
      { threshold: 0.02 }
    );
    heroObserver.observe(heroEl);
  }

  var marquees = document.querySelectorAll(".royal-marquee-viewport, .testimonial-marquee-viewport");
  if (marquees.length) {
    var marqueeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          entry.target.classList.toggle("is-offscreen", !entry.isIntersecting);
        });
      },
      { threshold: 0.01 }
    );
    marquees.forEach(function (el) {
      marqueeObserver.observe(el);
    });
  }
}

/* 7. Signature Collection Grid & Interactive Category Tabs */
var activeCategory = "All";

function initCollectionSection() {
  var tabs = document.querySelectorAll(".category-tab-btn");
  renderProductGrid(activeCategory);

  tabs.forEach(function (tabBtn) {
    tabBtn.addEventListener("click", function () {
      var selected = tabBtn.getAttribute("data-category") || "All";
      if (selected === activeCategory) return;

      activeCategory = selected;
      tabs.forEach(function (b) {
        var isMatch = b === tabBtn;
        b.classList.toggle("is-active", isMatch);
        b.setAttribute("aria-selected", isMatch ? "true" : "false");
      });

      renderProductGrid(activeCategory);
    });
  });
}

function renderProductGrid(category) {
  var grid = document.getElementById("collectionGrid");
  var countEl = document.getElementById("collectionCountLabel");
  if (!grid) return;

  var filtered = filterProductsByCategory(PRODUCTS, category);
  if (countEl) {
    countEl.textContent = filtered.length + (filtered.length === 1 ? " Creation" : " Creations");
  }

  grid.innerHTML = "";

  filtered.forEach(function (item) {
    var col = document.createElement("div");
    col.className = "col";

    var card = document.createElement("article");
    card.className = "mithai-card";
    if (!isCoarsePointerDevice()) {
      card.setAttribute("data-tilt", "");
      card.setAttribute("data-tilt-max", "5");
      card.setAttribute("data-tilt-speed", "450");
    }

    card.innerHTML =
      '<div class="mithai-img-wrap">' +
        '<img src="' + escapeAttr(item.image) + '" alt="' + escapeAttr(item.name) + '" loading="lazy" decoding="async" referrerpolicy="no-referrer" />' +
      '</div>' +
      '<div class="p-4 d-flex flex-column flex-grow-1">' +
        '<div class="mithai-meta-line mb-1">' + escapeHtml(item.category) + ' · ' + escapeHtml(item.craftTag) + '</div>' +
        '<h3 class="mithai-card-title mb-2">' + escapeHtml(item.name) + '</h3>' +
        '<p class="mithai-card-desc mb-3 flex-grow-1">' + escapeHtml(item.shortDesc) + '</p>' +
        '<div class="d-flex align-items-baseline justify-content-between pt-3 border-top border-warning border-opacity-25 mb-3">' +
          '<span class="mithai-price tabular-nums">' + formatInr(item.basePrice) + '</span>' +
          '<span class="mithai-pack">' + escapeHtml(item.defaultPack) + '</span>' +
        '</div>' +
        '<div class="d-flex gap-2">' +
          '<button type="button" class="btn-royal-gold flex-grow-1 py-2 px-3 quick-view-trigger" data-product-id="' + escapeAttr(item.id) + '" aria-label="Quick view ' + escapeAttr(item.name) + '">' +
            'Quick View' +
          '</button>' +
          '<button type="button" class="btn-royal-outline py-2 px-3 direct-enquire-trigger" data-product-id="' + escapeAttr(item.id) + '" aria-label="Enquire about ' + escapeAttr(item.name) + '">' +
            'Enquire' +
          '</button>' +
        '</div>' +
      '</div>';

    // Attach resilient image fallback if image fails to load
    var img = card.querySelector("img");
    if (img) {
      img.addEventListener("error", function () {
        var wrap = img.parentElement;
        if (wrap) {
          wrap.innerHTML =
            '<div class="img-fallback-state">' +
              '<span class="fw-semibold">' + escapeHtml(item.name) + '</span>' +
              '<small class="opacity-75 mt-1">' + escapeHtml(item.category) + '</small>' +
            '</div>';
        }
      });
    }

    col.appendChild(card);
    grid.appendChild(col);
  });

  // Wire buttons inside cards
  grid.querySelectorAll(".quick-view-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-product-id");
      openQuickViewModal(id);
    });
  });

  grid.querySelectorAll(".direct-enquire-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-product-id");
      var product = PRODUCTS.find(function (p) { return p.id === id; });
      if (product) {
        preFillEnquiryForProduct(product, product.defaultPack);
      }
    });
  });

  // Initialize VanillaTilt strictly on non-touch desktop devices
  var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReduced && !isCoarsePointerDevice() && typeof VanillaTilt !== "undefined") {
    VanillaTilt.init(grid.querySelectorAll("[data-tilt]"));
  }

  // Smooth GSAP entrance on filter change
  if (!prefersReduced && typeof gsap !== "undefined") {
    gsap.from(grid.children, {
      y: 16,
      opacity: 0,
      duration: 0.4,
      stagger: 0.04,
      force3D: true,
      ease: "power2.out",
      clearProps: "transform,opacity"
    });
  }
}

/* 8. Bootstrap 5 Quick-View Modal */
var currentModalProduct = null;
var currentSelectedPack = "";
var quickViewModalInstance = null;

function initQuickViewModal() {
  var modalEl = document.getElementById("sweetQuickViewModal");
  if (!modalEl) return;

  if (typeof bootstrap !== "undefined") {
    quickViewModalInstance = new bootstrap.Modal(modalEl);
  }

  var enquireBtn = document.getElementById("modalEnquireItemBtn");
  if (enquireBtn) {
    enquireBtn.addEventListener("click", function () {
      if (!currentModalProduct) return;
      var chosenProduct = currentModalProduct;
      var chosenPack = currentSelectedPack || chosenProduct.defaultPack;
      if (quickViewModalInstance) {
        quickViewModalInstance.hide();
      }
      window.setTimeout(function () {
        preFillEnquiryForProduct(chosenProduct, chosenPack);
      }, 220);
    });
  }
}

function openQuickViewModal(productId) {
  var product = PRODUCTS.find(function (p) { return p.id === productId; });
  if (!product) return;

  currentModalProduct = product;
  currentSelectedPack = product.defaultPack;

  var imgEl = document.getElementById("modalProductImg");
  var metaEl = document.getElementById("modalProductMeta");
  var titleEl = document.getElementById("modalProductTitle");
  var descEl = document.getElementById("modalProductDesc");
  var ingEl = document.getElementById("modalProductIngredients");
  var shelfEl = document.getElementById("modalProductShelf");
  var priceEl = document.getElementById("modalProductPrice");
  var weightsWrap = document.getElementById("modalWeightOptions");

  if (imgEl) {
    imgEl.src = product.image;
    imgEl.alt = product.name;
  }
  if (metaEl) metaEl.textContent = product.category + " · " + product.craftTag;
  if (titleEl) titleEl.textContent = product.name;
  if (descEl) descEl.textContent = product.shortDesc;
  if (ingEl) ingEl.textContent = product.ingredients;
  if (shelfEl) shelfEl.textContent = product.shelfLife;
  if (priceEl) priceEl.textContent = formatInr(product.basePrice);

  if (weightsWrap) {
    weightsWrap.innerHTML = "";
    product.packOptions.forEach(function (opt) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "weight-option-btn" + (opt.label === product.defaultPack ? " is-active" : "");
      btn.textContent = opt.label;
      btn.addEventListener("click", function () {
        currentSelectedPack = opt.label;
        weightsWrap.querySelectorAll(".weight-option-btn").forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
        });
        if (priceEl) {
          priceEl.textContent = formatInr(calculateVariantPrice(product.basePrice, opt.multiplier));
        }
      });
      weightsWrap.appendChild(btn);
    });
  }

  if (quickViewModalInstance) {
    quickViewModalInstance.show();
  }
}

/* 9. Pre-fill Enquiry Form from Product or Festive Suite */
function preFillEnquiryForProduct(product, packLabel) {
  var enquiryTypeEl = document.getElementById("enquiryType");
  var preferredItemEl = document.getElementById("preferredItem");
  var quantityBudgetEl = document.getElementById("quantityBudget");
  var enquirySection = document.getElementById("enquiry");

  if (enquiryTypeEl) {
    if (product.category === "Luxury Gift Hampers") {
      enquiryTypeEl.value = "Festive Hamper";
    } else if (product.category === "Artisan Bakery & Cakes") {
      enquiryTypeEl.value = "Custom Cake";
    } else {
      enquiryTypeEl.value = "Regular Order";
    }
  }

  if (preferredItemEl) {
    preferredItemEl.value = product.name;
  }

  if (quantityBudgetEl && !quantityBudgetEl.value.trim()) {
    quantityBudgetEl.value = packLabel || product.defaultPack;
  }

  if (enquirySection) {
    scrollToSection(enquirySection);
    window.setTimeout(function () {
      var nameInput = document.getElementById("fullName");
      if (nameInput) nameInput.focus();
    }, 450);
  }
}

function initFestivePreFills() {
  document.querySelectorAll("[data-prefill-type]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var type = btn.getAttribute("data-prefill-type") || "Festive Hamper";
      var item = btn.getAttribute("data-prefill-item") || "Maharani Velvet Festive Hamper";
      var qty = btn.getAttribute("data-prefill-qty") || "25 Boxes";

      var typeEl = document.getElementById("enquiryType");
      var itemEl = document.getElementById("preferredItem");
      var qtyEl = document.getElementById("quantityBudget");
      var section = document.getElementById("enquiry");

      if (typeEl) typeEl.value = type;
      if (itemEl) itemEl.value = item;
      if (qtyEl) qtyEl.value = qty;
      if (section) {
        scrollToSection(section);
      }
    });
  });
}

/* 10. Grand Enquiry & Order Form (Google Apps Script Integrated) */
function initEnquiryForm() {
  var form = document.getElementById("suvaikooduEnquiryForm");
  if (!form) return;

  var submitBtn = document.getElementById("enquirySubmitBtn");
  var submitBtnText = document.getElementById("enquirySubmitText");
  var submitSpinner = document.getElementById("enquirySubmitSpinner");
  var recentNotice = document.getElementById("recentEnquiryBanner");

  // Restore last submitted enquiry confirmation summary from localStorage if present
  try {
    var saved = window.localStorage.getItem("suvaikoodu_last_enquiry");
    if (saved && recentNotice) {
      var parsed = JSON.parse(saved);
      if (parsed && parsed.referenceId) {
        recentNotice.textContent =
          "Latest enquiry on file: " + parsed.referenceId + " for " + parsed.preferredItem + " (" + parsed.fullName + ").";
        recentNotice.classList.remove("d-none");
      }
    }
  } catch (_e) {
    // Ignore storage access errors
  }

  // Clear field errors dynamically on input
  ["fullName", "phone", "email", "enquiryType"].forEach(function (fieldId) {
    var input = document.getElementById(fieldId);
    if (input) {
      input.addEventListener("input", function () {
        input.classList.remove("is-invalid");
        var errEl = document.getElementById(fieldId + "Error");
        if (errEl) errEl.textContent = "";
      });
    }
  });

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    var payload = {
      fullName: getVal("fullName"),
      phone: getVal("phone"),
      email: getVal("email"),
      enquiryType: getVal("enquiryType"),
      preferredItem: getVal("preferredItem") || "Chef's Royal Assortment",
      quantityBudget: getVal("quantityBudget") || "To be discussed",
      eventDate: getVal("eventDate") || "Flexible",
      message: getVal("message")
    };

    var validation = validateEnquiryPayload(payload);
    clearValidationErrors();

    if (!validation.valid) {
      Object.keys(validation.errors).forEach(function (field) {
        var inputEl = document.getElementById(field);
        var errEl = document.getElementById(field + "Error");
        if (inputEl) inputEl.classList.add("is-invalid");
        if (errEl) errEl.textContent = validation.errors[field];
      });
      var firstErrField = Object.keys(validation.errors)[0];
      var focusEl = document.getElementById(firstErrField);
      if (focusEl) focusEl.focus();
      return;
    }

    var referenceId = generateReferenceId();
    setFormLoadingState(true, submitBtn, submitBtnText, submitSpinner);

    try {
      var formData = new FormData();
      formData.append("referenceId", referenceId);
      formData.append("fullName", payload.fullName);
      formData.append("phone", payload.phone);
      formData.append("email", payload.email);
      formData.append("enquiryType", payload.enquiryType);
      formData.append("preferredItem", payload.preferredItem);
      formData.append("quantityBudget", payload.quantityBudget);
      formData.append("eventDate", payload.eventDate);
      formData.append("message", payload.message);

      if (SCRIPT_URL && SCRIPT_URL !== "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
        // Real Google Apps Script POST using FormData (no custom headers => avoids CORS preflight)
        var response = await fetch(SCRIPT_URL, {
          method: "POST",
          body: formData
        });
        if (!response.ok) {
          throw new Error("Server responded with status " + response.status);
        }
        var json = await response.json();
        if (json && json.status === "error") {
          throw new Error(json.message || "Unable to record enquiry.");
        }
        if (json && json.referenceId) {
          referenceId = json.referenceId;
        }
      } else {
        // Clean local preview transition when SCRIPT_URL placeholder is not yet configured
        await new Promise(function (resolve) {
          window.setTimeout(resolve, 600);
        });
      }

      // Persist receipt locally for reload continuity
      var record = Object.assign({ referenceId: referenceId }, payload);
      try {
        window.localStorage.setItem("suvaikoodu_last_enquiry", JSON.stringify(record));
      } catch (_storageErr) {
        // Ignore storage error
      }

      if (recentNotice) {
        recentNotice.textContent =
          "Latest enquiry on file: " + referenceId + " for " + payload.preferredItem + " (" + payload.fullName + ").";
        recentNotice.classList.remove("d-none");
      }

      form.reset();
      showConfirmationToastAndModal(record);
    } catch (err) {
      showSubmissionError(err && err.message ? err.message : "Could not send enquiry right now. Please try again.");
    } finally {
      setFormLoadingState(false, submitBtn, submitBtnText, submitSpinner);
    }
  });
}

function getVal(id) {
  var el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

function clearValidationErrors() {
  ["fullName", "phone", "email", "enquiryType"].forEach(function (field) {
    var inputEl = document.getElementById(field);
    var errEl = document.getElementById(field + "Error");
    if (inputEl) inputEl.classList.remove("is-invalid");
    if (errEl) errEl.textContent = "";
  });
  var alertBox = document.getElementById("enquiryServerError");
  if (alertBox) alertBox.classList.add("d-none");
}

function setFormLoadingState(isLoading, btn, textEl, spinnerEl) {
  if (btn) btn.disabled = isLoading;
  if (textEl) textEl.textContent = isLoading ? "Sending Royal Enquiry..." : "Submit Royal Enquiry";
  if (spinnerEl) spinnerEl.classList.toggle("d-none", !isLoading);
}

function showSubmissionError(msg) {
  var alertBox = document.getElementById("enquiryServerError");
  if (alertBox) {
    alertBox.textContent = msg;
    alertBox.classList.remove("d-none");
  }
}

function showConfirmationToastAndModal(record) {
  var refEl = document.getElementById("confirmRefCode");
  var summaryEl = document.getElementById("confirmSummaryText");

  if (refEl) refEl.textContent = record.referenceId;
  if (summaryEl) {
    summaryEl.textContent =
      "Thank you, " +
      record.fullName +
      ". Our concierge has received your " +
      record.enquiryType +
      " request for " +
      record.preferredItem +
      " and will reach out to " +
      record.phone +
      " within 2 business hours.";
  }

  var modalEl = document.getElementById("enquiryConfirmModal");
  if (modalEl && typeof bootstrap !== "undefined") {
    var modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }

  var toastEl = document.getElementById("royalToast");
  if (toastEl && typeof bootstrap !== "undefined") {
    var toast = bootstrap.Toast.getOrCreateInstance(toastEl);
    toast.show();
  }
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(str) {
  return escapeHtml(str);
}

/* 11. Audible Royal Ambient Temple Soundscape (Web Audio API) */
function initHeroTempleSoundscape() {
  var heroEl = document.getElementById("hero");
  var toggleBtn = document.getElementById("ambientAudioToggle");
  var labelEl = document.getElementById("ambientAudioLabel");
  if (!heroEl || !toggleBtn) return;

  var AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) {
    toggleBtn.disabled = true;
    if (labelEl) labelEl.textContent = "Temple Soundscape: Unavailable";
    return;
  }

  var state = {
    playing: false,
    userMuted: false,
    ctx: null,
    masterGain: null,
    scheduledGain: 0,
    chimeTimer: 0,
    suspendTimer: 0
  };

  var MAX_GAIN = 0.25;

  function syncUi() {
    toggleBtn.setAttribute("aria-pressed", state.playing ? "true" : "false");
    heroEl.setAttribute("data-audio-state", state.playing ? "playing" : "idle");
    heroEl.setAttribute("data-audio-ctx-state", state.ctx ? state.ctx.state : "uninitialized");
    heroEl.setAttribute("data-audio-gain", state.scheduledGain.toFixed(4));
    if (labelEl) {
      labelEl.textContent = state.playing ? "Temple Soundscape: Playing" : "Temple Soundscape: Off";
    }
  }

  function ensureAudioGraph() {
    if (state.ctx) return true;
    try {
      var ctx = new AudioCtx();
      var masterGain = ctx.createGain();
      masterGain.gain.value = 0;
      masterGain.gain.setValueAtTime(0, ctx.currentTime);

      var filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(950, ctx.currentTime);
      filter.Q.setValueAtTime(0.65, ctx.currentTime);

      // Slow breathing LFO modulating filter cutoff for warm temple tanpura motion
      var lfo = ctx.createOscillator();
      var lfoGain = ctx.createGain();
      lfo.type = "sine";
      lfo.frequency.setValueAtTime(0.08, ctx.currentTime);
      lfoGain.gain.setValueAtTime(160, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();

      // Warm speaker-friendly tanpura harmonics (D3 Sa, A3 Pa, D4 Upper Sa, F#4 Gandhara)
      var voices = [
        { freq: 146.83, type: "triangle", gain: 0.36 },
        { freq: 220.0, type: "sine", gain: 0.28 },
        { freq: 293.66, type: "sine", gain: 0.24 },
        { freq: 369.99, type: "sine", gain: 0.14 }
      ];

      voices.forEach(function (v) {
        var osc = ctx.createOscillator();
        var vGain = ctx.createGain();
        osc.type = v.type;
        osc.frequency.setValueAtTime(v.freq, ctx.currentTime);
        vGain.gain.setValueAtTime(v.gain, ctx.currentTime);
        osc.connect(vGain);
        vGain.connect(filter);
        osc.start();
      });

      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      state.ctx = ctx;
      state.masterGain = masterGain;
      state.scheduledGain = 0;
      return true;
    } catch (_err) {
      return false;
    }
  }

  function playDistantTempleBell() {
    if (!state.playing || !state.ctx || !state.masterGain) return;
    var ctx = state.ctx;
    var now = ctx.currentTime;
    var partials = [
      { freq: 880.0, amp: 0.45, dur: 2.8 },
      { freq: 1318.5, amp: 0.26, dur: 2.8 }
    ];
    partials.forEach(function (p) {
      var osc = ctx.createOscillator();
      var g = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(p.freq, now);
      g.gain.value = 0.0001;
      g.gain.setValueAtTime(0.0001, now);
      g.gain.linearRampToValueAtTime(p.amp, now + 0.08);
      g.gain.exponentialRampToValueAtTime(0.0001, now + p.dur);
      osc.connect(g);
      g.connect(state.masterGain);
      osc.start(now);
      osc.stop(now + p.dur + 0.08);
    });
  }

  function scheduleNextBellChime() {
    if (state.chimeTimer) {
      window.clearTimeout(state.chimeTimer);
      state.chimeTimer = 0;
    }
    if (!state.playing) return;
    var delayMs = Math.round(9000 + Math.random() * 5000);
    state.chimeTimer = window.setTimeout(function () {
      if (state.playing && !document.hidden) {
        playDistantTempleBell();
      }
      scheduleNextBellChime();
    }, delayMs);
  }

  function updateScrollGain(rampSeconds) {
    if (!state.ctx || !state.masterGain) return;
    if (state.suspendTimer) {
      window.clearTimeout(state.suspendTimer);
      state.suspendTimer = 0;
    }

    var shouldPlayNow = state.playing && !document.hidden;
    if (shouldPlayNow && state.ctx.state === "suspended") {
      state.ctx.resume().catch(function () {});
    }

    var targetGain = calculateHeroAudioGain(
      window.scrollY,
      heroEl.offsetHeight || 780,
      shouldPlayNow,
      MAX_GAIN
    );
    var rampDur = typeof rampSeconds === "number" ? rampSeconds : 0.35;
    var now = state.ctx.currentTime;
    var startGain = Number(state.masterGain.gain.value);
    if (!Number.isFinite(startGain) || startGain < 0 || startGain > MAX_GAIN) {
      startGain = state.scheduledGain;
    }

    state.masterGain.gain.cancelScheduledValues(now);
    state.masterGain.gain.setValueAtTime(startGain, now);
    state.masterGain.gain.linearRampToValueAtTime(targetGain, now + rampDur);
    state.scheduledGain = targetGain;

    heroEl.setAttribute("data-audio-ctx-state", state.ctx.state);
    heroEl.setAttribute("data-audio-gain", targetGain.toFixed(4));

    if (!shouldPlayNow && state.ctx.state === "running") {
      state.suspendTimer = window.setTimeout(function () {
        var stillInactive = !state.playing || document.hidden;
        if (stillInactive && state.ctx && state.ctx.state === "running") {
          state.ctx.suspend().then(function () {
            syncUi();
          }).catch(function () {});
        }
      }, Math.round(rampDur * 1000) + 60);
    }
  }

  async function startSoundscape() {
    if (state.playing) return;
    if (!ensureAudioGraph()) return;

    if (state.suspendTimer) {
      window.clearTimeout(state.suspendTimer);
      state.suspendTimer = 0;
    }

    state.playing = true;
    state.userMuted = false;

    try {
      if (state.ctx.state !== "running") {
        await state.ctx.resume();
      }
    } catch (_err) {
      // Ignore resume rejection if browser blocks background audio
    }

    if (!state.playing) return;

    updateScrollGain(0.6);
    playDistantTempleBell();
    scheduleNextBellChime();
    syncUi();
  }

  function stopSoundscape(explicitMute) {
    if (!state.playing) return;
    state.playing = false;
    if (explicitMute) state.userMuted = true;

    if (state.chimeTimer) {
      window.clearTimeout(state.chimeTimer);
      state.chimeTimer = 0;
    }

    updateScrollGain(0.35);
    syncUi();
  }

  // Explicit toggle button handler (user gesture unlocks & resumes AudioContext cleanly)
  toggleBtn.addEventListener("click", function () {
    var next = nextSoundscapeToggleState(state.playing);
    if (next.playing) {
      startSoundscape();
    } else {
      stopSoundscape(true);
    }
  });

  window.addEventListener("scroll", function () {
    if (state.playing) updateScrollGain(0.25);
  }, { passive: true });
  document.addEventListener("visibilitychange", function () {
    if (state.ctx) updateScrollGain(0.3);
  });
  syncUi();
}


