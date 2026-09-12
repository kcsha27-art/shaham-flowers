/**
 * Shaham Flowers (@shaham_flowers) - Digital Catalog Data
 * Location: Sultanate of Oman
 * Google Maps: https://share.google/tIfg9DtMQ6ufnoszy
 */

const APP_CONFIG = {
  storeName: "Shaham Flowers",
  storeNameAr: "زهور شهم",
  email: "info@shahamflowers.com",
  whatsappNumber: "+96899791925", // Official verified order line (9979 1925)
  phone: "9979 1925",
  phoneFormatted: "+968 9979 1925",
  instagramHandle: "shaham_flowers",
  instagramUrl: "https://www.instagram.com/shaham_flowers/",
  googleMapsUrl: "https://share.google/tIfg9DtMQ6ufnoszy",
  branchLocation: "Alaya, Ibra, Ash Sharqiyah North Governorate, Oman",
  branchLocationAr: "العلاية، ولاية إبراء - محافظة شمال الشرقية، سلطنة عُمان",
  coverage: "Ready for service & delivery across the whole North Sharqiyah Governorate",
  coverageAr: "جاهزون لخدمتكم وتوصيل الطلبات لكافة ولايات محافظة شمال الشرقية",
  wilayat: "Alaya, Ibra",
  wilayatAr: "العلاية، ولاية إبراء",
  hours: "Sat: 8 AM–1 PM, 4–10:30 PM | Sun, Tue–Thu: 8 AM–12 AM | Mon: 7:30 AM–2 PM, 3–11 PM | Fri: 9–11:30 AM, 4–10:30 PM",
  hoursAr: "السبت: 8 ص – 1 م، 4 – 10:30 م | الأحد، الثلاثاء – الخميس: 8 ص – 12 منتصف الليل | الإثنين: 7:30 ص – 2 م، 3 – 11 م | الجمعة: 9 – 11:30 ص، 4 – 10:30 م",
  schedule: [
    { dayEn: "Saturday", dayAr: "السبت", timeEn: "8:00 AM – 1:00 PM, 4:00 – 10:30 PM", timeAr: "8:00 ص – 1:00 م ، 4:00 م – 10:30 م" },
    { dayEn: "Sunday", dayAr: "الأحد", timeEn: "8:00 AM – 12:00 AM", timeAr: "8:00 ص – 12:00 منتصف الليل" },
    { dayEn: "Monday", dayAr: "الإثنين", timeEn: "7:30 AM – 2:00 PM, 3:00 – 11:00 PM", timeAr: "7:30 ص – 2:00 م ، 3:00 م – 11:00 م" },
    { dayEn: "Tuesday", dayAr: "الثلاثاء", timeEn: "8:00 AM – 12:00 AM", timeAr: "8:00 ص – 12:00 منتصف الليل" },
    { dayEn: "Wednesday", dayAr: "الأربعاء", timeEn: "8:00 AM – 12:00 AM", timeAr: "8:00 ص – 12:00 منتصف الليل" },
    { dayEn: "Thursday", dayAr: "الخميس", timeEn: "8:00 AM – 12:00 AM", timeAr: "8:00 ص – 12:00 منتصف الليل" },
    { dayEn: "Friday", dayAr: "الجمعة", timeEn: "9:00 – 11:30 AM, 4:00 – 10:30 PM", timeAr: "9:00 – 11:30 ص ، 4:00 م – 10:30 م" }
  ]
};

const CATEGORIES = [
  { id: "all", nameEn: "All Collections", nameAr: "جميع التنسيقات", icon: "sparkles" },
  { id: "bouquets", nameEn: "Fresh Bouquets", nameAr: "باقات الورد الطبيعي", icon: "flower-2" },
  { id: "bridal", nameEn: "Bridal & Weddings", nameAr: "مسكات وتنسيق الأعراس", icon: "heart" },
  { id: "gifts", nameEn: "Gift & Chocolate Trays", nameAr: "صواني وبوكسات الهدايا", icon: "gift" },
  { id: "forever", nameEn: "Forever Preserved Roses", nameAr: "الورد الدائم والأكريليك", icon: "gem" },
  { id: "events", nameEn: "Occasions & Newborn", nameAr: "التخرج والمواليد", icon: "party-popper" }
];

const PRODUCTS = [
  {
    id: 1,
    code: "SH-BQ01",
    category: "bouquets",
    titleEn: "The Royal Velvet Bouquet",
    titleAr: "باقة الورد الملكي المخملي",
    tagEn: "Bestseller",
    tagAr: "الأكثر طلباً",
    priceOmr: "18.500",
    descriptionEn: "25 premium imported Dutch Red Naomi roses hand-tied in matte forest green wrap with silk champagne gold ribbon.",
    descriptionAr: "25 وردة حمراء هولندية فاخرة ملفوفة بتغليف زيتي مخملي أنيق مع شريطة ذهبية شفقية فاخرة.",
    stemsEn: "25 Red Naomi Dutch Roses, Ruscus Greenery, Gold Satin Ribbon",
    stemsAr: "25 وردة هولندية حمراء، أغصان الرسكوس الخضراء، شريطة حرير ذهبية",
    careEn: "Keep in cool air, trim stems diagonally every 2 days, replenish fresh water.",
    careAr: "احفظها في جو بارد، قص أطراف السيقان بشكل مائل كل يومين مع تجديد الماء.",
    imageUrl: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    code: "SH-BQ02",
    category: "bouquets",
    titleEn: "Blushing Peach Garden",
    titleAr: "باقة حديقة الخوخ الوردية",
    tagEn: "Trending",
    tagAr: "دارج ومميز",
    priceOmr: "22.000",
    descriptionEn: "Dreamy arrangement of garden peach roses, blush pink spray roses, white lisianthus, and aromatic eucalyptus.",
    descriptionAr: "تناغم ساحر بين ورود الخوخ الطبيعية، بيبي روز وردي، زهور الليسيانثوس البيضاء، وأوراق الكينا العطرة.",
    stemsEn: "30 Curated Pastel Blooms & Eucalyptus foliage",
    stemsAr: "30 غصن زهور باستيل طبيعية مع أوراق الكينا العطرية",
    careEn: "Mist petals gently, keep away from direct sunlight and AC drafts.",
    careAr: "رش البتلات برذاذ خفيف واحفظها بعيداً عن حرارة الشمس المباشرة.",
    imageUrl: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    code: "SH-BQ03",
    category: "bouquets",
    titleEn: "Pure Serenity White Lilies",
    titleAr: "باقة النقاء الملكية بالليليوم",
    tagEn: "Classic",
    tagAr: "فخامة كلاسيكية",
    priceOmr: "25.000",
    descriptionEn: "Fragrant Casablanca white lilies paired with pristine white roses, gypsophila baby breath, and emerald foliage.",
    descriptionAr: "زهور الليليوم البيضاء الفواحة ممزوجة مع الجوري الأبيض، ونسمات الجبسوفيليا الفاتنة بأناقة لا تضاهى.",
    stemsEn: "6 Casablanca Lily Stems, 15 White Avalanche Roses, Gypsophila",
    stemsAr: "6 أغصان ليليوم كازابلانكا، 15 وردة جوري بيضاء، جبسوفيليا",
    careEn: "Remove pollen dusters to prolong bloom life and preserve fragrance.",
    careAr: "أزل حبوب اللقاح بلطف للحفاظ على نقاء الزهور وعمرها الطويل.",
    imageUrl: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    code: "SH-BR01",
    category: "bridal",
    titleEn: "Bridal Grace Orchid Cascade",
    titleAr: "مسكة العروس الملكية بالأوركيد",
    tagEn: "Bridal VIP",
    tagAr: "خاص للعرائس",
    priceOmr: "45.000",
    descriptionEn: "Artisanal hand bouquet crafted with pure white Phalaenopsis orchids, mini calla lilies, and Italian silver foliage.",
    descriptionAr: "مسكة عروس مصممة بأعلى درجات الإتقان من زهور أوركيد الفالينوبسيس الطبيعية، الكالا الملكية، واللمسات الإيطالية.",
    stemsEn: "Cascading White Orchids, Calla Lilies, Pearl Satin Wrap",
    stemsAr: "أوركيد أبيض منسدل، كالا ليلى، مقبض حريري مطرز باللؤلؤ",
    careEn: "Store in floral hydration capsule until wedding photo shoot.",
    careAr: "تحفظ في كبسولة الترطيب الخاصة حتى موعد جلسة التصوير وزفة الحفل.",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    code: "SH-BR02",
    category: "bridal",
    titleEn: "Bohemian Sunset Bridal Posy",
    titleAr: "مسكة العروس البوهيمية الذهبية",
    tagEn: "Bridal Special",
    tagAr: "لمسة عصرية",
    priceOmr: "38.000",
    descriptionEn: "Modern Bohemian bridal bouquet with champagne roses, preserved bunny tails, dried pampas, and warm tones.",
    descriptionAr: "مسكة عروس عصرية بوهيمية بدرجات الشمبانيا الدافئة، ورود الأوف وايت، ونفحات البامباس الطبيعي المجفف.",
    stemsEn: "24 Champagne Roses, Ranunculus, Natural Dried Grasses",
    stemsAr: "24 وردة شمبانيا، رانونكلوس أبيض، أعشاب مجففة فاخرة",
    careEn: "Includes preservation keepsake packaging.",
    careAr: "تأتي مع حقيبة خاصة لحفظ الذكرى بعد مراسم الزفاف.",
    imageUrl: "https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    code: "SH-GF01",
    category: "gifts",
    titleEn: "Royal Bloom & Chocolate Luxury Tray",
    titleAr: "صينية الفخامة الملكية - ورد وشوكولاتة",
    tagEn: "VIP Gift",
    tagAr: "هدية فاخرة",
    priceOmr: "32.000",
    descriptionEn: "Mirrored golden tray filled with red spray roses, baby breath, and 500g of artisan Belgian chocolates with custom acrylic topper.",
    descriptionAr: "صينية مرايا ذهبية منسقة بالورد الطبيعي والبيبي روز الفاخر مع 500 جرام شوكولاتة بلجيكية وعبارة أكريليك مخصصة.",
    stemsEn: "20 Spray Roses, Fresh Greenery, 500g Premium Chocolates, Acrylic Topper",
    stemsAr: "20 غصن بيبي روز، خضار طبيعي، 500 غرام شوكولاتة بلجيكية، لوحة أكريليك",
    careEn: "Chocolates kept at climate-controlled conditions; flowers fully hydrated in oasis.",
    careAr: "الشوكولاتة محفوظة بدرجة برودة مثالية؛ والورد مثبت في إسفنجة مائية تحافظ على نضارته.",
    imageUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    code: "SH-GF02",
    category: "gifts",
    titleEn: "Prestige Perfume & Floral Cylinder",
    titleAr: "اسطوانة الورد المخملية مع حامل العطر",
    tagEn: "Gift Set",
    tagAr: "تنسيق إهداء",
    priceOmr: "28.000",
    descriptionEn: "Deep emerald velvet cylinder box featuring peach and ivory roses, customized with a secure velvet pedestal for your chosen perfume.",
    descriptionAr: "بوكس اسطواني من المخمل الزيتي الراقي يجمع بين ورود الخوخ والعاج الطبيعية، ومجهز بقاعدة مخملية لحمل زجاجة العطر.",
    stemsEn: "22 Fresh Bloom Stems, Velvet Cylinder Box, Custom Ribbon",
    stemsAr: "22 غصن ورد طبيعي، اسطوانة مخملية فاخرة، شريطة خاصة",
    careEn: "Water the floral oasis foam with 50ml cool water every 2 days.",
    careAr: "اسكب 50 مل ماء بارد في منتصف الإسفنجة كل يومين للحفاظ على نضارة الورد.",
    imageUrl: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    code: "SH-FR01",
    category: "forever",
    titleEn: "Enchanted Forever Rose Dome",
    titleAr: "قبة الورد الدائم الساحرة مع إضاءة LED",
    tagEn: "Lasts 3+ Years",
    tagAr: "تدوم لأكثر من 3 سنوات",
    priceOmr: "15.000",
    descriptionEn: "100% natural preserved Ecuadorian rose that never wilts, housed inside a crystal glass dome with micro-LED fairy lights and wooden base.",
    descriptionAr: "وردة طبيعية إكوادورية دائمة تدوم لعدة سنوات دون ماء، محفوظة داخل قبة زجاجية كريستالية مع إضاءة LED دافئة.",
    stemsEn: "1 Preserved Giant Ecuadorian Rose, Real Fallen Petals, LED Glass Dome",
    stemsAr: "وردة إكوادورية دائمة عملاقة، بتلات طبيعية، قبة زجاجية مع قاعدة خشبية",
    careEn: "Requires NO water. Keep away from humid bathrooms or direct sunlight.",
    careAr: "لا تحتاج إلى ماء إطلاقاً! احفظها بعيداً عن الرطوبة وأشعة الشمس المباشرة.",
    imageUrl: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    code: "SH-FR02",
    category: "forever",
    titleEn: "Sapphire Blue Preserved Rose Box",
    titleAr: "مكعب الورد الدائم الأزرق الملكي",
    tagEn: "Limited Edition",
    tagAr: "إصدار حصري",
    priceOmr: "16.500",
    descriptionEn: "Royal sapphire preserved Ecuadorian rose in a high-gloss acrylic cube with bottom slide drawer for personal jewelry or notes.",
    descriptionAr: "وردة إكوادورية زرقاء ملكية دائمة في مكعب أكريليك شفاف عالي النقاء مع درج سري سفلي لوضع المجوهرات أو كرت الإهداء.",
    stemsEn: "1 Preserved Sapphire Rose in Acrylic Keepsake Box",
    stemsAr: "وردة دائمة بلون أزرق ملكي، صندوق أكريليك شفاف مع درج",
    careEn: "Zero maintenance required. Keeps vibrant color for years.",
    careAr: "لا تحتاج لأي صيانة، تحتفظ برونقها ولونها المميز لسنوات عديدة.",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    code: "SH-EV01",
    category: "events",
    titleEn: "Graduation Honor Golden Bouquet",
    titleAr: "باقة وسام التخرج الملكية",
    tagEn: "Graduation",
    tagAr: "مناسبة تخرج",
    priceOmr: "20.000",
    descriptionEn: "Celebratory mix of bright Dutch sunflowers, yellow roses, and solidago, crowned with an acrylic graduation cap and custom name banner.",
    descriptionAr: "باقة احتفالية مبهجة تجمع زهور دوار الشمس الهولندية والورد الأصفر، متوجة بقبعة تخرج أكريليك وشريطة مخصصة بالاسم.",
    stemsEn: "Sunflowers, Yellow Roses, Solidago, Acrylic Cap Pick & Ribbon",
    stemsAr: "دوار شمس، جوري أصفر، سوليداجو، مجسم قبعة تخرج وشريطة بالاسم",
    careEn: "Keep in water, enjoy the bright celebration blooms.",
    careAr: "احفظها في ماء عذب واستمتع ببهجة التخرج والنجاح.",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    code: "SH-EV02",
    category: "events",
    titleEn: "Welcome Baby Cloud Arrangement",
    titleAr: "تنسيق غيمة استقبال المواليد",
    tagEn: "Newborn",
    tagAr: "استقبال مواليد",
    priceOmr: "26.000",
    descriptionEn: "Gentle cloud of baby-blue or soft-pink hydrangeas and white spray roses, accompanied by a plush keepsake teddy bear and acrylic welcome plaque.",
    descriptionAr: "تنسيق ناعم من هيدرانجيا البيبي بلو أو الوردي مع بيبي روز ناصع، ودب دمية تذكاري فاخر ولوحة أكريليك ترحيبية بالمولود.",
    stemsEn: "Hydrangeas, Spray Roses, Gypsophila, Keepsake Teddy, Acrylic Plaque",
    stemsAr: "هيدرانجيا، بيبي روز، جبسوفيليا، دمية ناعمة، لوحة ترحيب",
    careEn: "Hydrangeas love water! Spray petals once a day with fresh cool mist.",
    careAr: "زهور الهيدرانجيا تعشق الترطيب! رش البتلات برذاذ ماء خفيف يومياً.",
    imageUrl: "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    code: "SH-BR03",
    category: "bridal",
    titleEn: "VIP Wedding Car Fresh Floral Styling",
    titleAr: "تنسيق سيارة العروس والمناسبات بالورد الطبيعي",
    tagEn: "Event Service",
    tagAr: "خدمة حفلات",
    priceOmr: "35.000",
    descriptionEn: "Complete luxury floral decoration for the wedding car: bonnet V-arrangement, door handle clusters, and ribbon trims on-site in Oman.",
    descriptionAr: "تزيين متكامل لسيارة العروس بأجود أنواع الورد الطبيعي: مقدمة السيارة، مقابض الأبواب، والمرايا الجانبية بتركيب احترافي بخدمة احترافية.",
    stemsEn: "Full Car Floral Kit (Front V-Spray, 4 Door Accents, Ribbon Package)",
    stemsAr: "طقم ورد طبيعي للسيارة (مقدمة السيارة، 4 مقابض أبواب، أشرطة فاخرة)",
    careEn: "Installed with safe suction mounts that never scratch vehicle paint.",
    careAr: "يتم التثبيت بقواعد سيليكون ناعمة آمنة 100% على طلاء ولمعان السيارة.",
    imageUrl: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80"
  }
];

/**
 * Generate formatted WhatsApp click-to-chat URL
 * Target pattern: https://wa.me/YOURNUMBER?text=Hello,%20I%20am%20interested%20in%20[Item%20Name]
 */
function getWhatsAppOrderUrl(product, isArabic = false) {
  const phone = APP_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
  let message = "";
  
  if (isArabic) {
    message = `مرحباً زهور شهم، أود الاستفسار والطلب من متجركم:

*المنتج:* ${product.titleAr} (${product.titleEn})
*الرمز:* [${product.code}]
*السعر:* ${product.priceOmr} ر.ع
*الفرع:* العلاية، ولاية إبراء
*نطاق التوصيل:* محافظة شمال الشرقية

أرجو إفادتي بإمكانية التوصيل والوقت المتاح. شكراً!`;
  } else {
    message = `Hello Shaham Flowers, I am interested in ordering:

*Item:* ${product.titleEn} (${product.titleAr})
*Code:* [${product.code}]
*Price:* ${product.priceOmr} OMR
*Store:* Alaya, Ibra
*Delivery:* North Sharqiyah Governorate

Please let me know availability and delivery options. Thank you!`;
  }
  
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate quick custom inquiry message URL
 */
function getWhatsAppCustomUrl(details, isArabic = false) {
  const phone = APP_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
  let message = "";
  
  if (isArabic) {
    message = `مرحباً زهور شهم، أود طلب تصميم خاص من متجركم:

*المناسبة:* ${details.occasion || 'عامة'}
*الألوان المفضلة:* ${details.palette || 'حسب التنسيق'}
*الإضافات:* ${details.addons || 'لا يوجد'}
*الميزانية التقريبية:* ${details.budget || 'غير محدد'}
*الموقع:* العلاية، إبراء (محافظة شمال الشرقية)

أرجو التواصل لتأكيد التفاصيل وتنسيق الطلب. شكراً!`;
  } else {
    message = `Hello Shaham Flowers, I would like to request a bespoke custom floral arrangement:

*Occasion:* ${details.occasion || 'General'}
*Color Palette:* ${details.palette || 'Florist Choice'}
*Add-ons:* ${details.addons || 'None'}
*Estimated Budget:* ${details.budget || 'Flexible'}
*Store & Area:* Alaya, Ibra (North Sharqiyah Governorate)

Please advise on customized designs and delivery options. Thank you!`;
  }
  
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
