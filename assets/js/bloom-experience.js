/**
 * Shaham Flowers (زهور الشهم - @shaham_flowers)
 * Luxury Motion Engine: Lenis Smooth Scrolling, GSAP ScrollTrigger,
 * Aceternity Mouse Spotlight, and the Signature Rose-to-Bouquet Assembly Story.
 */

let lenisInstance = null;
let assemblyTimeline = null;

document.addEventListener('DOMContentLoaded', () => {
  initLenis();
  initSpotlights();
  initBloomAssemblyStory();
  initHeaderMotion();
});

// 1. Lenis Smooth Scrolling Integration with GSAP ScrollTrigger
function initLenis() {
  if (typeof Lenis === 'undefined') return;

  lenisInstance = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.5,
    infinite: false,
  });

  // Expose to window for global access
  window.lenis = lenisInstance;

  // Bind Lenis scroll events to GSAP ScrollTrigger
  if (window.gsap && window.ScrollTrigger) {
    lenisInstance.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  // Smooth anchor link scrolling via Lenis
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          lenisInstance.scrollTo(targetEl, { offset: -60, duration: 1.4 });
        }
      }
    });
  });
}

// 2. Aceternity Mouse-Tracking Spotlight Effect
function initSpotlights() {
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// 3. Header & Hero subtle entrance animations
function initHeaderMotion() {
  if (!window.gsap) return;

  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shadow-xl', 'bg-stone-950/95');
    } else {
      header.classList.remove('shadow-xl', 'bg-stone-950/95');
    }
  });

  gsap.from('.hero-badge', {
    y: -25,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.2,
  });

  gsap.from('.hero-headline', {
    y: 40,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out',
    delay: 0.4,
  });

  gsap.from('.hero-sub', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.6,
  });

  gsap.from('.hero-cta-group', {
    y: 25,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.8,
  });
}

// 4. The Show-Stopping Rose-to-Bouquet ("Boke") & Chocolate Combo Assembly
function initBloomAssemblyStory() {
  if (!window.gsap || !window.ScrollTrigger) return;

  const section = document.querySelector('#bloom-assembly-story');
  if (!section) return;

  // Master scrubbed timeline
  assemblyTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#bloom-assembly-story',
      start: 'top top',
      end: '+=2800',
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      onUpdate: (self) => {
        updateAssemblyIndicators(self.progress);
      },
    },
  });

  // Timeline Step Breakdown:
  // Progress 0.00 - 0.25: Stage 1 (Single Rose S201)
  // Progress 0.25 - 0.55: Stage 2 (5 Roses Assemble S203)
  // Progress 0.55 - 0.80: Stage 3 (Ruffle Net Wrap & Ribbon S204)
  // Progress 0.80 - 1.00: Stage 4 (Bouquet + Chocolate Combo Box S202 & Sweets)

  // Floating petals drifting throughout
  assemblyTimeline.to('.assembly-petal', {
    y: 200,
    x: 'random(-60, 60)',
    rotation: 'random(-180, 180)',
    stagger: 0.1,
    ease: 'none',
    duration: 4,
  }, 0);

  // Transition from Stage 1 to Stage 2:
  // Surrounding 4 companion roses fly in, gypsophila blooms cluster in
  assemblyTimeline.to('#stage1-card', { opacity: 0, y: -20, duration: 0.5 }, 0.6)
    .fromTo('#stage2-card', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6 }, 0.8)
    .to('#rose-companion-1', { x: 0, y: 0, scale: 1, opacity: 1, rotation: -12, ease: 'power2.out', duration: 1 }, 0.5)
    .to('#rose-companion-2', { x: 0, y: 0, scale: 1, opacity: 1, rotation: 14, ease: 'power2.out', duration: 1 }, 0.6)
    .to('#rose-companion-3', { x: 0, y: 0, scale: 1, opacity: 1, rotation: -22, ease: 'power2.out', duration: 1 }, 0.7)
    .to('#rose-companion-4', { x: 0, y: 0, scale: 1, opacity: 1, rotation: 18, ease: 'power2.out', duration: 1 }, 0.8)
    .to('#gypso-cluster', { opacity: 1, scale: 1, duration: 1 }, 0.8)
    .to('#center-rose-stem', { scale: 0.95, duration: 1 }, 0.8);

  // Transition from Stage 2 to Stage 3:
  // Grand Pleated Couture Net Wrap wraps around stems, satin ribbon animates in
  assemblyTimeline.to('#stage2-card', { opacity: 0, y: -20, duration: 0.5 }, 1.6)
    .fromTo('#stage3-card', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6 }, 1.8)
    .to('#net-wrap-pleats', { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: 'back.out(1.2)' }, 1.6)
    .to('#satin-ribbon-bow', { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)' }, 2.0)
    .to('#mixed-petals-accent', { opacity: 1, scale: 1, duration: 0.8 }, 2.0);

  // Transition from Stage 3 to Stage 4:
  // Bouquet nests into gift box + Gourmet Chocolates & Acrylic tag slide in
  assemblyTimeline.to('#stage3-card', { opacity: 0, y: -20, duration: 0.5 }, 2.6)
    .fromTo('#stage4-card', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6 }, 2.8)
    .to('#assembled-bouquet-group', { y: -30, scale: 0.85, duration: 1, ease: 'power2.inOut' }, 2.6)
    .to('#luxury-gift-box', { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }, 2.7)
    .to('#chocolate-drawer', { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }, 3.0)
    .to('#acrylic-calligraphy-tag', { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }, 3.2)
    .to('#sparkle-particles', { opacity: 1, duration: 0.6 }, 3.2);

  // Interactive Stage Clickers
  document.querySelectorAll('.stage-pill').forEach((pill) => {
    pill.addEventListener('click', function () {
      const targetProgress = parseFloat(this.getAttribute('data-target-progress') || '0');
      if (assemblyTimeline && assemblyTimeline.scrollTrigger) {
        const st = assemblyTimeline.scrollTrigger;
        const targetScroll = st.start + targetProgress * (st.end - st.start);
        if (window.lenis) {
          window.lenis.scrollTo(targetScroll, { duration: 1.2 });
        } else {
          window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        }
      }
    });
  });
}

// Update Active Stage Pills & Progress Bar during scroll scrub
function updateAssemblyIndicators(progress) {
  const progressBar = document.getElementById('assembly-progress-bar');
  if (progressBar) {
    progressBar.style.width = `${Math.min(100, Math.max(0, progress * 100))}%`;
  }

  const pills = document.querySelectorAll('.stage-pill');
  let activeIndex = 0;

  if (progress < 0.28) {
    activeIndex = 0; // Stage 1: Single Rose (.700Bz)
  } else if (progress < 0.58) {
    activeIndex = 1; // Stage 2: 5 Roses Hand Bouquet (2.500 OMR)
  } else if (progress < 0.82) {
    activeIndex = 2; // Stage 3: Ruffle Net Grand Bouquet (10.000 OMR)
  } else {
    activeIndex = 3; // Stage 4: Flower + Chocolate Combo (Bespoke Box)
  }

  pills.forEach((pill, idx) => {
    if (idx === activeIndex) {
      pill.classList.add('active', 'border-amber-400', 'text-amber-300', 'bg-amber-400/10');
      pill.classList.remove('border-stone-800', 'text-stone-400');
    } else {
      pill.classList.remove('active', 'border-amber-400', 'text-amber-300', 'bg-amber-400/10');
      pill.classList.add('border-stone-800', 'text-stone-400');
    }
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initLenis, initSpotlights, initBloomAssemblyStory };
}
