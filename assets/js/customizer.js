/**
 * Shaham Flowers (زهور الشهم - @shaham_flowers)
 * Interactive Customizer: Bouquet & Flower with Chocolates Combo Atelier (Light Theme)
 * Calculates live prices in OMR and generates structured WhatsApp orders.
 */

let customizerState = {
  baseId: "hand_bouquet",
  flowerTierId: "five_roses",
  chocolateId: "belgian_truffles",
  addons: ["luxury_card"],
  recipientName: "",
  greetingText: "",
  wilayat: "ibra"
};

document.addEventListener('DOMContentLoaded', () => {
  initCustomizer();
});

function initCustomizer() {
  renderCustomizerBases();
  renderCustomizerFlowerTiers();
  renderCustomizerChocolates();
  renderCustomizerAddons();
  renderCustomizerWilayats();
  bindCustomizerEvents();
  updateCustomizerPreview();
}

function renderCustomizerBases() {
  const container = document.getElementById('custom-base-options');
  if (!container || !window.CUSTOMIZER_DATA) return;

  const isAr = (window.currentLang || 'ar') === 'ar';

  container.innerHTML = CUSTOMIZER_DATA.bases.map((base) => {
    const isSelected = base.id === customizerState.baseId;
    const name = isAr ? base.nameAr : base.nameEn;
    const activeClass = isSelected
      ? 'border-2 border-[#1B4332] bg-emerald-50/80 text-[#13251B] font-bold shadow-sm'
      : 'border border-stone-200 bg-white text-stone-700 hover:border-stone-400 hover:bg-stone-50';

    return `
      <button 
        type="button" 
        data-base-id="${base.id}"
        class="custom-base-btn p-3 sm:p-3.5 rounded-xl text-right rtl:text-right ltr:text-left flex items-center justify-between transition-all cursor-pointer ${activeClass}">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-emerald-50 text-[#1B4332] border border-emerald-200/80 flex items-center justify-center shrink-0">
            <i data-lucide="${base.icon || 'flower-2'}" class="w-4 h-4"></i>
          </div>
          <div>
            <h4 class="text-xs sm:text-sm font-bold text-[#13251B]">${name}</h4>
            <span class="text-[10px] text-[#55645A]">${base.basePrice > 0 ? `+${base.basePrice.toFixed(3)} ${isAr ? 'ر.ع' : 'OMR'}` : (isAr ? 'مشمول' : 'Included')}</span>
          </div>
        </div>
        <div class="w-4 h-4 rounded-full border ${isSelected ? 'border-[#1B4332] bg-[#1B4332] flex items-center justify-center' : 'border-stone-300'}">
          ${isSelected ? '<span class="w-1.5 h-1.5 rounded-full bg-white"></span>' : ''}
        </div>
      </button>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function renderCustomizerFlowerTiers() {
  const container = document.getElementById('custom-flower-options');
  if (!container || !window.CUSTOMIZER_DATA) return;

  const isAr = (window.currentLang || 'ar') === 'ar';

  container.innerHTML = CUSTOMIZER_DATA.flowerTiers.map((tier) => {
    const isSelected = tier.id === customizerState.flowerTierId;
    const name = isAr ? tier.nameAr : tier.nameEn;
    const activeClass = isSelected
      ? 'border-2 border-[#1B4332] bg-emerald-50/80 text-[#13251B] font-bold shadow-sm'
      : 'border border-stone-200 bg-white text-stone-700 hover:border-stone-400 hover:bg-stone-50';

    return `
      <div 
        data-tier-id="${tier.id}"
        class="custom-tier-card p-3 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${activeClass}">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
            <img src="${tier.previewImg}" alt="${name}" class="w-full h-full object-cover">
          </div>
          <div>
            <span class="text-xs font-bold text-[#13251B] block">${name}</span>
            <span class="text-[11px] font-mono text-[#1B4332] font-bold">${tier.price.toFixed(3)} ${isAr ? 'ر.ع' : 'OMR'}</span>
          </div>
        </div>
        <div class="w-4 h-4 rounded-full border ${isSelected ? 'border-[#1B4332] bg-[#1B4332] flex items-center justify-center' : 'border-stone-300'}">
          ${isSelected ? '<span class="w-1.5 h-1.5 rounded-full bg-white"></span>' : ''}
        </div>
      </div>
    `;
  }).join('');
}

function renderCustomizerChocolates() {
  const container = document.getElementById('custom-chocolate-options');
  if (!container || !window.CUSTOMIZER_DATA) return;

  const isAr = (window.currentLang || 'ar') === 'ar';

  container.innerHTML = CUSTOMIZER_DATA.chocolateCombos.map((choc) => {
    const isSelected = choc.id === customizerState.chocolateId;
    const name = isAr ? choc.nameAr : choc.nameEn;
    const activeClass = isSelected
      ? 'border-2 border-[#1B4332] bg-emerald-50/80 text-[#13251B] font-bold shadow-sm'
      : 'border border-stone-200 bg-white text-stone-700 hover:border-stone-400 hover:bg-stone-50';

    return `
      <button 
        type="button" 
        data-choc-id="${choc.id}"
        class="custom-choc-btn p-3 rounded-xl border text-right rtl:text-right ltr:text-left flex items-center justify-between transition-all cursor-pointer ${activeClass}">
        <div class="flex items-center gap-2.5">
          <i data-lucide="${choc.icon || 'gift'}" class="w-4 h-4 text-[#B89345] shrink-0"></i>
          <div>
            <span class="text-xs font-bold text-[#13251B] block">${name}</span>
            <span class="text-[10px] text-[#55645A]">${choc.price > 0 ? `+${choc.price.toFixed(3)} ${isAr ? 'ر.ع' : 'OMR'}` : (isAr ? 'بدون تكلفة إضافية' : 'No extra cost')}</span>
          </div>
        </div>
        <div class="w-4 h-4 rounded-full border ${isSelected ? 'border-[#1B4332] bg-[#1B4332] flex items-center justify-center' : 'border-stone-300'}">
          ${isSelected ? '<span class="w-1.5 h-1.5 rounded-full bg-white"></span>' : ''}
        </div>
      </button>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function renderCustomizerAddons() {
  const container = document.getElementById('custom-addons-options');
  if (!container || !window.CUSTOMIZER_DATA) return;

  const isAr = (window.currentLang || 'ar') === 'ar';

  container.innerHTML = CUSTOMIZER_DATA.addons.map((addon) => {
    const isChecked = customizerState.addons.includes(addon.id);
    const name = isAr ? addon.nameAr : addon.nameEn;

    return `
      <label class="p-3 rounded-xl border border-stone-200 bg-white flex items-center justify-between cursor-pointer hover:border-[#1B4332] transition-colors shadow-2xs">
        <span class="text-xs font-medium text-stone-800">${name}</span>
        <input 
          type="checkbox" 
          data-addon-id="${addon.id}" 
          class="custom-addon-checkbox w-4 h-4 rounded accent-[#1B4332]"
          ${isChecked ? 'checked' : ''}
        />
      </label>
    `;
  }).join('');
}

function renderCustomizerWilayats() {
  const select = document.getElementById('custom-delivery-wilayat');
  if (!select || !window.CUSTOMIZER_DATA) return;

  const isAr = (window.currentLang || 'ar') === 'ar';

  select.innerHTML = CUSTOMIZER_DATA.wilayats.map((w) => {
    return `<option value="${w.id}" ${w.id === customizerState.wilayat ? 'selected' : ''}>${isAr ? w.nameAr : w.nameEn}</option>`;
  }).join('');
}

function bindCustomizerEvents() {
  // Base Click
  document.addEventListener('click', (e) => {
    const baseBtn = e.target.closest('.custom-base-btn');
    if (baseBtn) {
      customizerState.baseId = baseBtn.getAttribute('data-base-id');
      renderCustomizerBases();
      updateCustomizerPreview();
    }

    const tierCard = e.target.closest('.custom-tier-card');
    if (tierCard) {
      customizerState.flowerTierId = tierCard.getAttribute('data-tier-id');
      renderCustomizerFlowerTiers();
      updateCustomizerPreview();
    }

    const chocBtn = e.target.closest('.custom-choc-btn');
    if (chocBtn) {
      customizerState.chocolateId = chocBtn.getAttribute('data-choc-id');
      renderCustomizerChocolates();
      updateCustomizerPreview();
    }
  });

  // Addons change
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('custom-addon-checkbox')) {
      const addonId = e.target.getAttribute('data-addon-id');
      if (e.target.checked) {
        if (!customizerState.addons.includes(addonId)) customizerState.addons.push(addonId);
      } else {
        customizerState.addons = customizerState.addons.filter((id) => id !== addonId);
      }
      updateCustomizerPreview();
    }

    if (e.target.id === 'custom-delivery-wilayat') {
      customizerState.wilayat = e.target.value;
      updateCustomizerPreview();
    }
  });

  // Inputs
  const nameInput = document.getElementById('custom-recipient-name');
  if (nameInput) {
    nameInput.addEventListener('input', (e) => {
      customizerState.recipientName = e.target.value.trim();
      updateCustomizerPreview();
    });
  }

  const greetingInput = document.getElementById('custom-greeting-text');
  if (greetingInput) {
    greetingInput.addEventListener('input', (e) => {
      customizerState.greetingText = e.target.value.trim();
    });
  }

  // Submit to WhatsApp
  const sendBtn = document.getElementById('send-custom-combo-btn');
  if (sendBtn) {
    sendBtn.addEventListener('click', sendCustomizerToWhatsApp);
  }
}

function calculateCustomizerTotal() {
  if (!window.CUSTOMIZER_DATA) return 0;

  let total = 0;

  const base = CUSTOMIZER_DATA.bases.find((b) => b.id === customizerState.baseId);
  if (base) total += base.basePrice;

  const flower = CUSTOMIZER_DATA.flowerTiers.find((f) => f.id === customizerState.flowerTierId);
  if (flower) total += flower.price;

  const choc = CUSTOMIZER_DATA.chocolateCombos.find((c) => c.id === customizerState.chocolateId);
  if (choc) total += choc.price;

  customizerState.addons.forEach((addonId) => {
    const addon = CUSTOMIZER_DATA.addons.find((a) => a.id === addonId);
    if (addon) total += addon.price;
  });

  return total;
}

function updateCustomizerPreview() {
  if (!window.CUSTOMIZER_DATA) return;

  const isAr = (window.currentLang || 'ar') === 'ar';
  const total = calculateCustomizerTotal();

  // Update total badge
  const totalEl = document.getElementById('customizer-total-price');
  if (totalEl) {
    totalEl.textContent = `${total.toFixed(3)} ${isAr ? 'ر.ع' : 'OMR'}`;
  }

  // Update preview image
  const flower = CUSTOMIZER_DATA.flowerTiers.find((f) => f.id === customizerState.flowerTierId);
  const previewImg = document.getElementById('customizer-preview-image');
  if (previewImg && flower) {
    previewImg.src = flower.previewImg;
  }

  // Update live breakdown summary
  const summaryEl = document.getElementById('customizer-summary-text');
  if (summaryEl && flower) {
    const base = CUSTOMIZER_DATA.bases.find((b) => b.id === customizerState.baseId);
    const choc = CUSTOMIZER_DATA.chocolateCombos.find((c) => c.id === customizerState.chocolateId);

    const baseName = base ? (isAr ? base.nameAr : base.nameEn) : '';
    const flowerName = isAr ? flower.nameAr : flower.nameEn;
    const chocName = choc && choc.id !== 'none' ? ` + ${isAr ? choc.nameAr : choc.nameEn}` : '';
    const nameplate = customizerState.recipientName ? ` | ${isAr ? 'باسم:' : 'For:'} ${customizerState.recipientName}` : '';

    summaryEl.textContent = `${baseName} • ${flowerName}${chocName}${nameplate}`;
  }
}

function sendCustomizerToWhatsApp() {
  if (!window.CUSTOMIZER_DATA) return;

  const isAr = (window.currentLang || 'ar') === 'ar';
  const total = calculateCustomizerTotal();

  const base = CUSTOMIZER_DATA.bases.find((b) => b.id === customizerState.baseId);
  const flower = CUSTOMIZER_DATA.flowerTiers.find((f) => f.id === customizerState.flowerTierId);
  const choc = CUSTOMIZER_DATA.chocolateCombos.find((c) => c.id === customizerState.chocolateId);
  const wilayatObj = CUSTOMIZER_DATA.wilayats.find((w) => w.id === customizerState.wilayat);

  const addonNames = customizerState.addons.map((id) => {
    const a = CUSTOMIZER_DATA.addons.find((item) => item.id === id);
    return a ? (isAr ? a.nameAr : a.nameEn) : id;
  });

  let message = "";
  if (isAr) {
    message = `🌸 *طلب تصميم باقة وكومبو خاص — زهور الشهم* 🌸\n`
      + `📍 *الموقع:* ${APP_CONFIG.branchLocationAr}\n`
      + `-----------------------------------\n`
      + `📦 *نوع التنسيق والقاعدة:* ${base ? base.nameAr : '-'}\n`
      + `🌹 *اختيار الزهور:* ${flower ? flower.nameAr : '-'}\n`
      + `🍫 *خيار الشوكولاتة:* ${choc ? choc.nameAr : '-'}\n`
      + (addonNames.length ? `✨ *الإضافات:* ${addonNames.join(' + ')}\n` : '')
      + (customizerState.recipientName ? `🏷️ *اسم المهدى له:* ${customizerState.recipientName}\n` : '')
      + (customizerState.greetingText ? `💌 *نص كرت الإهداء:* "${customizerState.greetingText}"\n` : '')
      + `🚚 *وجهة التوصيل:* ${wilayatObj ? wilayatObj.nameAr : 'محافظة شمال الشرقية'}\n`
      + `💰 *الإجمالي التقريبي:* ${total.toFixed(3)} ر.ع\n`
      + `-----------------------------------\n`
      + `أرجو تأكيد الطلب وتزويدي بالموعد المتاح للتسليم. شكراً لكم!`;
  } else {
    message = `🌸 *Custom Floral & Chocolate Combo Order — Shaham Flowers* 🌸\n`
      + `📍 *Boutique:* ${APP_CONFIG.branchLocation}\n`
      + `-----------------------------------\n`
      + `📦 *Base Arrangement:* ${base ? base.nameEn : '-'}\n`
      + `🌹 *Floral Choice:* ${flower ? flower.nameEn : '-'}\n`
      + `🍫 *Chocolate Pairing:* ${choc ? choc.nameEn : '-'}\n`
      + (addonNames.length ? `✨ *Add-ons:* ${addonNames.join(' + ')}\n` : '')
      + (customizerState.recipientName ? `🏷️ *Recipient Name:* ${customizerState.recipientName}\n` : '')
      + (customizerState.greetingText ? `💌 *Greeting Card Note:* "${customizerState.greetingText}"\n` : '')
      + `🚚 *Delivery Wilayat:* ${wilayatObj ? wilayatObj.nameEn : 'North Sharqiyah'}\n`
      + `💰 *Estimated Total:* ${total.toFixed(3)} OMR\n`
      + `-----------------------------------\n`
      + `Please confirm order availability and dispatch time. Thank you!`;
  }

  const encoded = encodeURIComponent(message);
  const waUrl = `https://wa.me/96899791925?text=${encoded}`;
  window.open(waUrl, '_blank', 'noopener,noreferrer');
}

// Re-render when language toggles
window.refreshCustomizerLanguage = function () {
  renderCustomizerBases();
  renderCustomizerFlowerTiers();
  renderCustomizerChocolates();
  renderCustomizerAddons();
  renderCustomizerWilayats();
  updateCustomizerPreview();
};
