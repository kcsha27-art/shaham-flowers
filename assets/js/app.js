/**
 * Shaham Flowers (@shaham_flowers) - Application Controller
 * Handles GSAP ScrollTrigger animations, interactive catalog filtering,
 * WhatsApp conversion engine routing, modal drawers, and bilingual toggling.
 */

let currentLang = 'ar'; // Default to Arabic (local standard in Oman, Oman) with instant EN toggle
let currentCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  renderCategories();
  renderCatalog();
  initCustomOrderForm();
  initFab();
  initModal();
  initAnimations();
  initLangToggle();
  initNavScroll();
});

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render Category Filter Buttons
function renderCategories() {
  const container = document.getElementById('category-filter-bar');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => {
    const isActive = cat.id === currentCategory;
    const name = currentLang === 'ar' ? cat.nameAr : cat.nameEn;
    const activeClass = isActive 
      ? 'bg-amber-400 text-stone-950 font-bold shadow-lg shadow-amber-400/20 border-amber-400'
      : 'bg-stone-900/80 text-stone-300 hover:text-amber-300 hover:border-amber-400/40 border-stone-800';

    return `
      <button 
        onclick="filterCategory('${cat.id}')"
        class="category-btn whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 flex items-center gap-2 cursor-pointer ${activeClass}"
        data-category="${cat.id}">
        <i data-lucide="${cat.icon}" class="w-4 h-4"></i>
        <span>${name}</span>
      </button>
    `;
  }).join('');

  initIcons();
}

// Filter Catalog Items
function filterCategory(catId) {
  currentCategory = catId;
  renderCategories();
  renderCatalog();
  
  // Smooth GSAP reveal on filtered cards
  if (window.gsap) {
    gsap.fromTo('.product-card', 
      { opacity: 0, y: 20, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
    );
  }
}

// Render Catalog Grid
function renderCatalog() {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  const filtered = currentCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === currentCategory);

  const isAr = currentLang === 'ar';

  grid.innerHTML = filtered.map(product => {
    const title = isAr ? product.titleAr : product.titleEn;
    const desc = isAr ? product.descriptionAr : product.descriptionEn;
    const tag = isAr ? product.tagAr : product.tagEn;
    const waUrl = getWhatsAppOrderUrl(product, isAr);
    const orderBtnText = isAr ? 'اطلب عبر الواتساب' : 'Order via WhatsApp';
    const detailsBtnText = isAr ? 'تفاصيل سريعة' : 'Quick Specs';
    const currency = isAr ? 'ر.ع' : 'OMR';

    return `
      <div class="product-card glass-card rounded-2xl overflow-hidden flex flex-col group will-change-transform" data-id="${product.id}">
        <!-- Image Container with Aspect Ratio to Guarantee 0 CLS -->
        <div class="relative overflow-hidden aspect-card bg-stone-950">
          <img 
            src="${product.imageUrl}" 
            alt="${title}"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-70"></div>
          
          <!-- Tag Badge -->
          <span class="absolute top-3 ${isAr ? 'right-3' : 'left-3'} px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-950/85 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
            ${tag}
          </span>
          
          <!-- Code Pill -->
          <span class="absolute top-3 ${isAr ? 'left-3' : 'right-3'} px-2.5 py-1 rounded-md text-[11px] font-mono text-stone-300 bg-stone-900/80 border border-stone-700/60 backdrop-blur-md">
            ${product.code}
          </span>
          
          <!-- Price Badge -->
          <div class="absolute bottom-3 ${isAr ? 'right-3' : 'left-3'} flex items-baseline gap-1 bg-stone-900/90 border border-amber-400/40 px-3 py-1 rounded-lg backdrop-blur-md">
            <span class="text-amber-400 font-bold text-lg">${product.priceOmr}</span>
            <span class="text-stone-300 text-xs font-semibold">${currency}</span>
          </div>
        </div>

        <!-- Content Area -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-bold text-lg text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-1">
              ${title}
            </h3>
            <p class="text-stone-400 text-xs mt-2 line-clamp-2 leading-relaxed">
              ${desc}
            </p>
          </div>

          <!-- CTAs -->
          <div class="mt-5 pt-4 border-t border-stone-800/80 flex flex-col gap-2.5">
            <!-- Primary WhatsApp Order Button (Encodes WhatsApp URL) -->
            <a 
              href="${waUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-whatsapp w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm text-center shadow-md">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
              <span>${orderBtnText}</span>
            </a>

            <!-- Secondary Quick Specs Button -->
            <button 
              onclick="openProductModal(${product.id})"
              class="w-full py-2 px-4 rounded-xl border border-stone-800 bg-stone-900/50 hover:bg-stone-800/80 text-stone-300 hover:text-amber-300 text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i>
              <span>${detailsBtnText}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  initIcons();
}

// Quick View Modal Logic
let activeModalProduct = null;

function initModal() {
  const modal = document.getElementById('product-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const backdrop = document.getElementById('modal-backdrop');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  activeModalProduct = product;
  const isAr = currentLang === 'ar';

  const modal = document.getElementById('product-modal');
  const imgEl = document.getElementById('modal-img');
  const titleEl = document.getElementById('modal-title');
  const codeEl = document.getElementById('modal-code');
  const priceEl = document.getElementById('modal-price');
  const descEl = document.getElementById('modal-desc');
  const stemsEl = document.getElementById('modal-stems');
  const careEl = document.getElementById('modal-care');
  const waBtn = document.getElementById('modal-whatsapp-btn');

  if (imgEl) imgEl.src = product.imageUrl;
  if (titleEl) titleEl.textContent = isAr ? product.titleAr : product.titleEn;
  if (codeEl) codeEl.textContent = `Ref: ${product.code}`;
  if (priceEl) priceEl.textContent = `${product.priceOmr} ${isAr ? 'ر.ع' : 'OMR'}`;
  if (descEl) descEl.textContent = isAr ? product.descriptionAr : product.descriptionEn;
  if (stemsEl) stemsEl.textContent = isAr ? product.stemsAr : product.stemsEn;
  if (careEl) careEl.textContent = isAr ? product.careAr : product.careEn;

  if (waBtn) {
    waBtn.href = getWhatsAppOrderUrl(product, isAr);
    waBtn.innerHTML = `
      <i data-lucide="message-circle" class="w-5 h-5"></i>
      <span>${isAr ? 'طلب هذه الباقة عبر الواتساب' : 'Order This Bouquet via WhatsApp'}</span>
    `;
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';

  initIcons();

  if (window.gsap) {
    gsap.fromTo('#modal-content', 
      { opacity: 0, scale: 0.92, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: 'power2.out' }
    );
  }
}

function closeModal() {
  const modal = document.getElementById('product-modal');
  if (!modal) return;

  if (window.gsap) {
    gsap.to('#modal-content', {
      opacity: 0,
      scale: 0.94,
      duration: 0.2,
      onComplete: () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
      }
    });
  } else {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}

// Floating Action Button (FAB) Drawer Controller
function initFab() {
  const fabBtn = document.getElementById('fab-toggle-btn');
  const fabDrawer = document.getElementById('fab-drawer');
  const closeFab = document.getElementById('fab-close-btn');

  if (!fabBtn || !fabDrawer) return;

  fabBtn.addEventListener('click', () => {
    const isHidden = fabDrawer.classList.contains('hidden');
    if (isHidden) {
      fabDrawer.classList.remove('hidden');
      if (window.gsap) {
        gsap.fromTo(fabDrawer, 
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: 'power2.out' }
        );
      }
    } else {
      fabDrawer.classList.add('hidden');
    }
  });

  if (closeFab) {
    closeFab.addEventListener('click', () => {
      fabDrawer.classList.add('hidden');
    });
  }

  // Quick preset links inside FAB drawer
  const presetBtns = document.querySelectorAll('.fab-preset-btn');
  presetBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const type = btn.getAttribute('data-preset');
      const isAr = currentLang === 'ar';
      let text = '';

      if (type === 'custom') {
        text = isAr 
          ? "مرحباً زهور شهم، أود الاستفسار عن تفصيل باقة ورد خاصة وتغليف فاخر من فرعكم بالعلاية، إبراء (محافظة شمال الشرقية)."
          : "Hello Shaham Flowers, I would like to inquire about a bespoke custom flower arrangement from your Alaya, Ibra branch (North Sharqiyah).";
      } else if (type === 'express_delivery') {
        text = isAr
          ? "مرحباً زهور شهم، هل تتوفر خدمة التوصيل السريع اليوم في ولايات محافظة شمال الشرقية؟"
          : "Hello Shaham Flowers, is express same-day delivery available today across North Sharqiyah Governorate?";
      } else if (type === 'wedding') {
        text = isAr
          ? "مرحباً زهور شهم، أود حجز موعد استشارة وتنسيق مسكة وباقات زفاف في فرعكم بالعلاية، ولاية إبراء."
          : "Hello Shaham Flowers, I would like to inquire about bridal wedding bouquets at your Alaya, Ibra boutique.";
      }

      const phone = APP_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
      fabDrawer.classList.add('hidden');
    });
  });
}

// Custom Arrangement Request Generator Form
function initCustomOrderForm() {
  const sendBtn = document.getElementById('send-custom-order-btn');
  if (!sendBtn) return;

  sendBtn.addEventListener('click', () => {
    const occasionEl = document.getElementById('custom-occasion');
    const paletteEl = document.getElementById('custom-palette');
    const budgetEl = document.getElementById('custom-budget');
    const notesEl = document.getElementById('custom-notes');

    const details = {
      occasion: occasionEl ? occasionEl.value : '',
      palette: paletteEl ? paletteEl.value : '',
      budget: budgetEl ? budgetEl.value : '',
      addons: notesEl ? notesEl.value : ''
    };

    const isAr = currentLang === 'ar';
    const waUrl = getWhatsAppCustomUrl(details, isAr);
    window.open(waUrl, '_blank');
  });
}

// GSAP ScrollTrigger Animations
function initAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero Section Entrance
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl
    .from('.hero-badge', { opacity: 0, y: -20, duration: 0.6, delay: 0.1 })
    .from('.hero-headline', { opacity: 0, y: 30, duration: 0.8 }, '-=0.4')
    .from('.hero-sub', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
    .from('.hero-cta-group', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
    .from('.hero-perks', { opacity: 0, y: 25, duration: 0.7 }, '-=0.2');

  // Staggered reveal of catalog section
  gsap.from('#catalog-header', {
    scrollTrigger: {
      trigger: '#catalog',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: 'power2.out'
  });

  // Custom Atelier section reveal
  gsap.from('#custom-atelier-card', {
    scrollTrigger: {
      trigger: '#custom-order',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    scale: 0.96,
    duration: 0.8,
    ease: 'power2.out'
  });

  // Instagram section reveal
  gsap.from('#instagram-card', {
    scrollTrigger: {
      trigger: '#instagram-feed',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: 'power2.out'
  });

  // Google Maps location reveal
  gsap.from('#location-card', {
    scrollTrigger: {
      trigger: '#location',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: 'power2.out'
  });
}

// Language Switcher (EN / AR)
function initLangToggle() {
  const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      applyLanguage(currentLang);
    });
  });
}

function applyLanguage(lang) {
  const html = document.documentElement;
  const isAr = lang === 'ar';

  html.setAttribute('lang', lang);
  html.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  document.body.classList.toggle('rtl', isAr);

  // Update dynamic translatable text nodes with [data-en] and [data-ar]
  document.querySelectorAll('[data-en]').forEach(el => {
    const text = isAr ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    if (text) {
      el.textContent = text;
    }
  });

  // Re-render categories and products with new language
  renderCategories();
  renderCatalog();
}

// Smooth Navbar Scroll
function initNavScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
