/**
 * Shaham Flowers (زهور الشهم - @shaham_flowers)
 * Core Application Controller (Light Theme): Catalog rendering, Category Filters,
 * Bilingual switcher, Modal Drawer, and Structured WhatsApp URL Engine.
 */

window.currentLang = (function() {
  try {
    return localStorage.getItem('shaham_lang') || 'ar';
  } catch (e) {
    return 'ar';
  }
})();
let currentCategory = 'all';
let activeModalProduct = null;

document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  initLangToggle();
  applyLanguage(window.currentLang);
  initModal();
  initFab();
  initMobileNav();
  initCustomOrderForm();
});

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 1. Render Category Filter Tabs
function renderCategories() {
  const container = document.getElementById('category-filter-bar');
  if (!container || !window.CATEGORIES) return;

  const isAr = window.currentLang === 'ar';

  container.innerHTML = CATEGORIES.map((cat) => {
    const isActive = cat.id === currentCategory;
    const name = isAr ? cat.nameAr : cat.nameEn;
    const activeClass = isActive
      ? 'bg-[#1B4332] text-white font-bold shadow-sm border-[#1B4332]'
      : 'bg-white text-stone-700 hover:text-[#1B4332] hover:border-stone-400 border-stone-200 shadow-2xs';

    return `
      <button 
        type="button"
        onclick="filterCategory('${cat.id}')"
        class="category-btn whitespace-nowrap px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 flex items-center gap-2 cursor-pointer ${activeClass}"
        data-category="${cat.id}">
        <i data-lucide="${cat.icon}" class="w-3.5 h-3.5 sm:w-4 sm:h-4"></i>
        <span>${name}</span>
      </button>
    `;
  }).join('');

  initIcons();
}

// 2. Filter Category
function filterCategory(catId) {
  currentCategory = catId;
  renderCategories();
  renderCatalog();

  if (window.gsap) {
    gsap.fromTo('.product-card',
      { opacity: 0, y: 15, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
    );
  }
}

// 3. Render Catalog Grid
function renderCatalog() {
  const grid = document.getElementById('catalog-grid');
  if (!grid || !window.PRODUCTS) return;

  const filtered = currentCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === currentCategory);

  const isAr = window.currentLang === 'ar';

  grid.innerHTML = filtered.map((product) => {
    const title = isAr ? product.titleAr : product.titleEn;
    const desc = isAr ? product.descriptionAr : product.descriptionEn;
    const tag = isAr ? product.tagAr : product.tagEn;
    const waUrl = getWhatsAppOrderUrl(product, isAr);
    const orderBtnText = isAr ? 'اطلب عبر الواتساب' : 'Order via WhatsApp';
    const detailsBtnText = isAr ? 'تفاصيل التنسيق' : 'Quick Details';
    const priceDisplay = isAr ? (product.priceDisplayAr || `${product.priceOmr} ر.ع`) : (product.priceDisplayEn || `${product.priceOmr} OMR`);

    return `
      <div class="product-card spotlight-card rounded-2xl overflow-hidden flex flex-col group will-change-transform bg-white border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300" data-id="${product.id}">
        <!-- Image Container -->
        <div class="relative overflow-hidden aspect-[4/3] bg-stone-100">
          <img 
            src="${product.imageUrl}" 
            alt="${title}"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-60"></div>

          <!-- Official/Tag Badge -->
          <span class="absolute top-3 ${isAr ? 'right-3' : 'left-3'} px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase ${product.isOfficial ? 'bg-[#1B4332] text-white shadow-sm' : 'bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-2xs'}">
            ${tag}
          </span>

          <!-- Item Code Pill -->
          <span class="absolute top-3 ${isAr ? 'left-3' : 'right-3'} px-2.5 py-1 rounded-md text-[11px] font-mono text-stone-700 bg-white/95 border border-stone-200 shadow-sm">
            ${product.code}
          </span>

          <!-- Price Badge -->
          <div class="absolute bottom-3 ${isAr ? 'right-3' : 'left-3'} flex items-baseline gap-1 bg-white/95 border border-stone-200 px-3 py-1 rounded-lg shadow-sm">
            <span class="text-[#1B4332] font-bold text-sm sm:text-base font-mono">${priceDisplay}</span>
          </div>
        </div>

        <!-- Content Area -->
        <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-bold text-base sm:text-lg text-stone-900 group-hover:text-[#1B4332] transition-colors line-clamp-1">
              ${title}
            </h3>
            <p class="text-stone-600 text-xs mt-1.5 line-clamp-2 leading-relaxed">
              ${desc}
            </p>
          </div>

          <!-- CTAs -->
          <div class="mt-4 pt-3.5 border-t border-stone-100 flex flex-col gap-2">
            <a 
              href="${waUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-whatsapp w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm text-center shadow-sm">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
              <span>${orderBtnText}</span>
            </a>

            <button 
              type="button"
              onclick="openProductModal('${product.id}')"
              class="w-full py-2 px-4 rounded-xl border border-stone-300 bg-stone-50 hover:bg-stone-100 text-stone-800 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer">
              <i data-lucide="eye" class="w-3.5 h-3.5 text-stone-600"></i>
              <span>${detailsBtnText}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  initIcons();
}

// 4. Quick View Modal
function initModal() {
  const modal = document.getElementById('product-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const backdrop = document.getElementById('modal-backdrop');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openProductModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  activeModalProduct = product;
  const isAr = window.currentLang === 'ar';

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
  if (codeEl) codeEl.textContent = `Item Code: ${product.code}`;
  if (priceEl) priceEl.textContent = isAr ? (product.priceDisplayAr || `${product.priceOmr} ر.ع`) : (product.priceDisplayEn || `${product.priceOmr} OMR`);
  if (descEl) descEl.textContent = isAr ? product.descriptionAr : product.descriptionEn;
  if (stemsEl) stemsEl.textContent = isAr ? product.stemsAr : product.stemsEn;
  if (careEl) careEl.textContent = isAr ? product.careAr : product.careEn;

  if (waBtn) {
    waBtn.href = getWhatsAppOrderUrl(product, isAr);
    waBtn.innerHTML = `
      <i data-lucide="message-circle" class="w-4 h-4 sm:w-5 sm:h-5"></i>
      <span>${isAr ? 'طلب هذا التنسيق عبر الواتساب' : 'Order This Arrangement via WhatsApp'}</span>
    `;
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';

  initIcons();

  if (window.gsap) {
    gsap.fromTo('#modal-content',
      { opacity: 0, scale: 0.94, y: 15 },
      { opacity: 1, scale: 1, y: 0, duration: 0.25, ease: 'power2.out' }
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
      y: 15,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  } else {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// 5. FAB WhatsApp Concierge Drawer
function initFab() {
  const toggleBtn = document.getElementById('fab-toggle-btn');
  const drawer = document.getElementById('fab-drawer');
  const closeBtn = document.getElementById('fab-close-btn');
  const presetBtns = document.querySelectorAll('.fab-preset-btn');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('hidden');
    if (!drawer.classList.contains('hidden') && window.gsap) {
      gsap.fromTo(drawer,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.add('hidden');
    });
  }

  presetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const preset = btn.getAttribute('data-preset');
      const isAr = window.currentLang === 'ar';
      let text = '';

      if (preset === 'custom') {
        text = isAr
          ? "مرحباً زهور الشهم، أود الاستفسار عن تفصيل باقة خاصة مع الشوكولاتة."
          : "Hello Shaham Flowers, I would like to inquire about a custom bouquet and chocolate combo.";
      } else if (preset === 'express_delivery') {
        text = isAr
          ? "مرحباً، أود معرفة تفاصيل التوصيل السريع إلى ولايات شمال الشرقية اليوم."
          : "Hello, I would like same-day express delivery details for North Sharqiyah.";
      } else if (preset === 'wedding') {
        text = isAr
          ? "السلام عليكم، أود حجز موعد استشارة لتصميم مسكة عروس ملكية في فرعكم بإبراء."
          : "Hello, I would like a bridal bouquet consultation appointment at your Ibra boutique.";
      }

      const encoded = encodeURIComponent(text);
      window.open(`https://wa.me/96899791925?text=${encoded}`, '_blank', 'noopener,noreferrer');
      drawer.classList.add('hidden');
    });
  });
}

// 6. Structured WhatsApp Order URL Generator
function getWhatsAppOrderUrl(product, isAr) {
  const phone = '96899791925';
  let message = '';

  if (isAr) {
    message = `🌸 *طلب جديد من موقع زهور الشهم* 🌸\n`
      + `📦 *التنسيق:* ${product.titleAr} (${product.code})\n`
      + `💰 *السعر المعتمد:* ${product.priceDisplayAr || product.priceOmr + ' ر.ع'}\n`
      + `🌿 *المحتويات:* ${product.stemsAr}\n`
      + `📍 *المتجر:* العلاية، ولاية إبراء (شمال الشرقية)\n`
      + `-----------------------------------\n`
      + `يرجى تأكيد توفر التنسيق وموعد التوصيل أو الاستلام. شكراً لكم!`;
  } else {
    message = `🌸 *New Order from Shaham Flowers Website* 🌸\n`
      + `📦 *Item:* ${product.titleEn} (${product.code})\n`
      + `💰 *Price:* ${product.priceDisplayEn || product.priceOmr + ' OMR'}\n`
      + `🌿 *Stems:* ${product.stemsEn}\n`
      + `📍 *Boutique:* Alaya, Ibra (North Sharqiyah)\n`
      + `-----------------------------------\n`
      + `Please confirm availability and delivery schedule. Thank you!`;
  }

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

// 7. Bilingual Language Switcher (AR/EN)
function initLangToggle() {
  const buttons = document.querySelectorAll('.lang-toggle-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', toggleLanguage);
  });
}

function applyLanguage(lang) {
  window.currentLang = lang;
  try {
    localStorage.setItem('shaham_lang', lang);
  } catch (e) {}

  const isAr = lang === 'ar';

  // Update HTML attributes
  document.documentElement.lang = isAr ? 'ar' : 'en';
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', isAr);
  document.body.classList.toggle('ltr', !isAr);

  // Update text elements with data-ar and data-en
  document.querySelectorAll('[data-ar][data-en]').forEach((el) => {
    const text = isAr ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    if (text) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Update document title if present
  const titleEl = document.querySelector('title[data-ar][data-en]');
  if (titleEl) {
    document.title = isAr ? titleEl.getAttribute('data-ar') : titleEl.getAttribute('data-en');
  }

  // Re-render categories & catalog
  renderCategories();
  renderCatalog();

  // Re-render customizer
  if (window.refreshCustomizerLanguage) {
    window.refreshCustomizerLanguage();
  }

  // If product modal is open, refresh its content in the active language
  if (activeModalProduct) {
    const modal = document.getElementById('product-modal');
    if (modal && !modal.classList.contains('hidden')) {
      openProductModal(activeModalProduct.id);
    }
  }

  initIcons();
}

function toggleLanguage() {
  const nextLang = window.currentLang === 'ar' ? 'en' : 'ar';
  applyLanguage(nextLang);
}

function initCustomOrderForm() {
  // Reserved for additional form validation if needed
}

// 8. Mobile Navigation Drawer Controller
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-nav-toggle-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('hidden');
    if (!drawer.classList.contains('hidden') && window.gsap) {
      gsap.fromTo(drawer,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }
      );
    }
  });

  drawer.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.add('hidden');
    });
  });
}

