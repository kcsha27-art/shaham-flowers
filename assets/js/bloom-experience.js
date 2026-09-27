/**
 * Shaham Flowers (زهور الشهم - @shaham_flowers)
 * Luxury Motion Engine: Lenis Smooth Scrolling, GSAP ScrollTrigger,
 * Tactile Mouse Spotlight, and the Seamless Floral Scroll Story (Light Palette).
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

  window.lenis = lenisInstance;

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

// 2. Tactile Mouse-Tracking Spotlight Effect for Light Palette
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
      header.classList.add('shadow-sm', 'bg-white/95');
    } else {
      header.classList.remove('shadow-sm', 'bg-white/95');
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
    y: 35,
    opacity: 0,
    duration: 1.1,
    ease: 'power4.out',
    delay: 0.4,
  });

  gsap.from('.hero-sub', {
    y: 25,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.6,
  });

  gsap.from('.hero-cta-group', {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.8,
  });
}

// 4. Clean, High-Fidelity Floral & Bouquet ("Boke") Scroll Story
function initBloomAssemblyStory() {
  if (!window.gsap || !window.ScrollTrigger) return;

  const section = document.querySelector('#bloom-assembly-story');
  if (!section) return;

  // Master scrubbed timeline for smooth stage transitions
  assemblyTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#bloom-assembly-story',
      start: 'top top',
      end: '+=2400',
      pin: true,
      scrub: 0.8,
      anticipatePin: 1,
      onUpdate: (self) => {
        updateAssemblyIndicators(self.progress);
      },
    },
  });

  // Stage 1 -> Stage 2 (Single Rose S201 to 5-Rose Hand Bouquet S203)
  assemblyTimeline
    .to('#story-visual-1', { opacity: 0, scale: 0.94, duration: 1, ease: 'power2.inOut' }, 1)
    .fromTo('#story-visual-2', { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 1, ease: 'power2.inOut' }, 1)
    .to('#story-card-1', { opacity: 0, y: -25, duration: 0.8, ease: 'power2.inOut' }, 1)
    .fromTo('#story-card-2', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.inOut' }, 1.2);

  // Stage 2 -> Stage 3 (5-Rose Hand Bouquet to White Mix Ruffle Net Bouquet S204)
  assemblyTimeline
    .to('#story-visual-2', { opacity: 0, scale: 0.94, duration: 1, ease: 'power2.inOut' }, 2.5)
    .fromTo('#story-visual-3', { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 1, ease: 'power2.inOut' }, 2.5)
    .to('#story-card-2', { opacity: 0, y: -25, duration: 0.8, ease: 'power2.inOut' }, 2.5)
    .fromTo('#story-card-3', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.inOut' }, 2.7);

  // Stage 3 -> Stage 4 (White Mix Bouquet to Flower & Belgian Chocolates Combo)
  assemblyTimeline
    .to('#story-visual-3', { opacity: 0, scale: 0.94, duration: 1, ease: 'power2.inOut' }, 4)
    .fromTo('#story-visual-4', { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 1, ease: 'power2.inOut' }, 4)
    .to('#story-card-3', { opacity: 0, y: -25, duration: 0.8, ease: 'power2.inOut' }, 4)
    .fromTo('#story-card-4', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.inOut' }, 4.2);

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
    enablePointerEvents(1);
  } else if (progress < 0.58) {
    activeIndex = 1; // Stage 2: 5 Roses Hand Bouquet (2.500 OMR)
    enablePointerEvents(2);
  } else if (progress < 0.82) {
    activeIndex = 2; // Stage 3: Ruffle Net Grand Bouquet (10.000 OMR)
    enablePointerEvents(3);
  } else {
    activeIndex = 3; // Stage 4: Flower & Chocolate Combo
    enablePointerEvents(4);
  }

  pills.forEach((pill, idx) => {
    if (idx === activeIndex) {
      pill.classList.add('active');
      pill.classList.remove('text-stone-700', 'bg-white', 'border-stone-300');
    } else {
      pill.classList.remove('active');
      pill.classList.add('text-stone-700', 'bg-white', 'border-stone-300');
    }
  });
}

function enablePointerEvents(stageNum) {
  for (let i = 1; i <= 4; i++) {
    const card = document.getElementById(`story-card-${i}`);
    const visual = document.getElementById(`story-visual-${i}`);
    if (card) {
      card.style.pointerEvents = (i === stageNum) ? 'auto' : 'none';
    }
    if (visual) {
      visual.style.pointerEvents = (i === stageNum) ? 'auto' : 'none';
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initLenis, initSpotlights, initBloomAssemblyStory };
}
