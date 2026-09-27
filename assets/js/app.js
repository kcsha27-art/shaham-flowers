/**
 * Shaham Flowers (زهور الشهم - @shaham_flowers)
 * Core Application Controller: Catalog rendering, Category Filters,
 * Bilingual switcher, Modal Drawer, and Structured WhatsApp URL Engine.
 */

window.currentLang = 'ar'; // Default Arabic for Oman
let currentCategory = 'all';
let activeModalProduct = null;

document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  renderCategories();
  renderCatalog();
  initModal();
  initFab();
  initLangToggle();
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
      ? 'bg-amber-400 text-stone-950 font-bold shadow-lg shadow-amber-400/20 border-amber-400'
      : 'bg-stone-900/80 text-stone-300 hover:text-amber-300 hover:border-amber-400/40 border-stone-800';

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
      <div class="product-card spotlight-card rounded-2xl overflow-hidden flex flex-col group will-change-transform" data-id="${product.id}">
        <!-- Image Container -->
        <div class="relative overflow-hidden aspect-[4/3] bg-stone-950">
          <img 
            src="${product.imageUrl}" 
            alt="${title}"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-75"></div>

          <!-- Official/Tag Badge -->
          <span class="absolute top-3 ${isAr ? 'right-3' : 'left-3'} px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase ${product.isOfficial ? 'bg-amber-400 text-stone-950 shadow-md' : 'bg-emerald-950/90 text-emerald-300 border border-emerald-500/30'} backdrop-blur-md">
            ${tag}
          </span>

          <!-- Item Code Pill -->
          <span class="absolute top-3 ${isAr ? 'left-3' : 'right-3'} px-2.5 py-1 rounded-md text-[11px] font-mono text-stone-300 bg-stone-900/85 border border-stone-700/60 backdrop-blur-md">
            ${product.code}
          </span>

          <!-- Price Badge -->
          <div class="absolute bottom-3 ${isAr ? 'right-3' : 'left-3'} flex items-baseline gap-1 bg-stone-900/90 border border-amber-400/40 px-3 py-1 rounded-lg backdrop-blur-md shadow-lg">
            <span class="text-amber-400 font-bold text-sm sm:text-base">${priceDisplay}</span>
          </div>
        </div>

        <!-- Content Area -->
        <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-bold text-base sm:text-lg text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-1">
              ${title}
            </h3>
            <p class="text-stone-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
              ${desc}
            </p>
          </div>

          <!-- CTAs -->
          <div class="mt-4 pt-3.5 border-t border-stone-800/80 flex flex-col gap-2">
            <a 
              href="${waUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-whatsapp w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm text-center shadow-md">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
              <span>${orderBtnText}</span>
            </a>

            <button 
              type="button"
              onclick="openProductModal('${product.id}')"
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
      scale: 0.95,
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

// 5. WhatsApp Formatter Helpers
function getWhatsAppOrderUrl(product, isAr) {
  const phone = (APP_CONFIG.whatsappNumber || "+96899791925").replace(/[^0-9]/g, "");
  const price = isAr ? (product.priceDisplayAr || `${product.priceOmr} ر.ع`) : (product.priceDisplayEn || `${product.priceOmr} OMR`);
  const title = isAr ? product.titleAr : product.titleEn;

  let msg = "";
  if (isAr) {
    msg = `🌸 *طلب باقة من زهور الشهم — سلطنة عُمان* 🌸\n`
      + `🌹 *اسم التنسيق:* ${title}\n`
      + `🏷️ *رمز المنتج:* ${product.code}\n`
      + `💰 *السعر:* ${price}\n`
      + `📍 *الموقع:* ${APP_CONFIG.branchLocationAr}\n`
      + `-----------------------------------\n`
      + `أرجو تأكيد توفر التنسيق وإمكانية التوصيل في محافظة شمال الشرقية. شكراً لكم!`;
  } else {
    msg = `🌸 *Order Request — Shaham Flowers (Oman)* 🌸\n`
      + `🌹 *Arrangement:* ${title}\n`
      + `🏷️ *Item Code:* ${product.code}\n`
      + `💰 *Price:* ${price}\n`
      + `📍 *Branch:* ${APP_CONFIG.branchLocation}\n`
      + `-----------------------------------\n`
      + `Please confirm availability and delivery within North Sharqiyah. Thank you!`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

function getWhatsAppCustomUrl(details, isAr) {
  const phone = (APP_CONFIG.whatsappNumber || "+96899791925").replace(/[^0-9]/g, "");
  let msg = "";

  if (isAr) {
    msg = `🌸 *طلب تصميم باقة خاصة — زهور الشهم* 🌸\n`
      + `🎉 *المناسبة:* ${details.occasion || 'غير محدد'}\n`
      + `🎨 *درجات الألوان المفضلة:* ${details.palette || 'على ذوق المنسق'}\n`
      + `💰 *الميزانية التقريبية:* ${details.budget || 'حسب التنسيق'}\n`
      + `✨ *الإضافات:* ${details.addons || 'لا يوجد'}\n`
      + `📍 *الفرع:* العلاية، ولاية إبراء (محافظة شمال الشرقية)\n`
      + `-----------------------------------\n`
      + `أرجو تزويدي بالخيارات المتاحة وتأكيد الطلب. شكراً لكم!`;
  } else {
    msg = `🌸 *Custom Floral Request — Shaham Flowers* 🌸\n`
      + `🎉 *Occasion:* ${details.occasion || 'General'}\n`
      + `🎨 *Color Palette:* ${details.palette || "Florist's Choice"}\n`
      + `💰 *Budget:* ${details.budget || 'Flexible'}\n`
      + `✨ *Special Requests:* ${details.addons || 'None'}\n`
      + `📍 *Boutique:* Alaya, Ibra (North Sharqiyah)\n`
      + `-----------------------------------\n`
      + `Please share options and let me know how to proceed. Thank you!`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

// 6. Floating Action Button (FAB) Drawer
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
          { opacity: 0, y: 15, scale: 0.95 },
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

  document.querySelectorAll('.fab-preset-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-preset');
      const isAr = window.currentLang === 'ar';
      let text = '';

      if (type === 'custom') {
        text = isAr
          ? "مرحباً زهور الشهم، أود الاستفسار عن تفصيل باقة ورد خاصة وتغليف فاخر مع شوكولاتة من فرعكم بالعلاية، إبراء."
          : "Hello Shaham Flowers, I would like to inquire about a custom bouquet and chocolate combo from your Alaya, Ibra branch.";
      } else if (type === 'express_delivery') {
        text = isAr
          ? "مرحباً زهور الشهم، هل تتوفر خدمة التوصيل السريع اليوم في ولايات محافظة شمال الشرقية؟"
          : "Hello Shaham Flowers, is express same-day delivery available today across North Sharqiyah?";
      } else if (type === 'wedding') {
        text = isAr
          ? "مرحباً زهور الشهم، أود استشارة وحجز مسكة عروس وتنسيق زهور زفاف لفرع إبراء."
          : "Hello Shaham Flowers, I would like to consult about bridal wedding bouquets at your Ibra branch.";
      }

      const phone = (APP_CONFIG.whatsappNumber || "+96899791925").replace(/[^0-9]/g, "");
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
      fabDrawer.classList.add('hidden');
    });
  });
}

// 7. General Custom Inquiry Form Handler
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

    const isAr = window.currentLang === 'ar';
    const waUrl = getWhatsAppCustomUrl(details, isAr);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });
}

// 8. Bilingual Language Switcher
function initLangToggle() {
  const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      window.currentLang = window.currentLang === 'ar' ? 'en' : 'ar';
      applyLanguage(window.currentLang);
    });
  });
}

function applyLanguage(lang) {
  const html = document.documentElement;
  const isAr = lang === 'ar';

  html.setAttribute('lang', lang);
  html.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  document.body.classList.toggle('rtl', isAr);

  document.querySelectorAll('[data-en]').forEach((el) => {
    const text = isAr ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    if (text) {
      el.textContent = text;
    }
  });

  renderCategories();
  renderCatalog();

  if (window.refreshCustomizerLanguage) {
    window.refreshCustomizerLanguage();
  }
}
