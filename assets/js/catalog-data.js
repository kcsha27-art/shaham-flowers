/**
 * Shaham Flowers (زهور الشهم - @shaham_flowers) - Official Digital Catalog Data
 * Location: Alaya, Wilayat Ibra, Ash Sharqiyah North Governorate, Oman
 * Google Maps: https://share.google/tIfg9DtMQ6ufnoszy
 * WhatsApp Order Line: +968 9979 1925
 */

const APP_CONFIG = {
  storeName: "Shaham Flowers",
  storeNameAr: "زهور الشهم",
  taglineEn: "Bespoke Floral Atelier & Luxury Chocolate Combos",
  taglineAr: "أتيليه الزهور الطبيعية وبوكسات الشوكولاتة الفاخرة",
  email: "info@shahamflowers.com",
  whatsappNumber: "+96899791925", // Official line: 9979 1925
  phone: "9979 1925",
  phoneFormatted: "+968 9979 1925",
  instagramHandle: "shaham_flowers",
  instagramUrl: "https://www.instagram.com/shaham_flowers/",
  googleMapsUrl: "https://share.google/tIfg9DtMQ6ufnoszy",
  branchLocation: "Alaya, Ibra, Ash Sharqiyah North Governorate, Sultanate of Oman",
  branchLocationAr: "العلاية، ولاية إبراء - محافظة شمال الشرقية، سلطنة عُمان",
  coverage: "Express delivery across all Wilayats of Ash Sharqiyah North (Ibra, Bidiyah, Al Mudhaibi, Al Qabil, Wadi Bani Khalid, Dema Wa Thaieen)",
  coverageAr: "توصيل سريع لكافة ولايات محافظة شمال الشرقية (إبراء، بدية، المضيبي، القابل، وادي بني خالد، دماء والطائيين)",
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
  { id: "all", nameEn: "All Arrangements", nameAr: "جميع التنسيقات", icon: "sparkles" },
  { id: "official", nameEn: "Official Classics", nameAr: "التشكيلة الرسمية", icon: "award" },
  { id: "bouquets", nameEn: "Hand Bouquets", nameAr: "باقات اليد الفاخرة", icon: "flower-2" },
  { id: "combos", nameEn: "Flower & Chocolate Combos", nameAr: "كومبو الورد والشوكولاتة", icon: "gift" },
  { id: "tables", nameEn: "Table & Event Displays", nameAr: "تنسيقات الطاولات والمجالس", icon: "gem" },
  { id: "bridal", nameEn: "Bridal Posies", nameAr: "مسكات العرائس الملكية", icon: "heart" }
];

const PRODUCTS = [
  // 1. Official Shaham Flowers Item S201
  {
    id: "S201",
    code: "S201",
    category: "official",
    isOfficial: true,
    titleEn: "Single Rose Wrapped Bouquet",
    titleAr: "باقة الوردة الفردية الأنيقة",
    tagEn: "Special Value",
    tagAr: "قيمة مميزة",
    priceOmr: "0.700",
    priceDisplayEn: ".700 Bz",
    priceDisplayAr: "700 بيسة",
    descriptionEn: "1 hand-selected premium imported Red Rose wrapped in sleek modern black paper with fresh Gypsophila baby's breath, eucalyptus greenery, and an iconic red satin ribbon.",
    descriptionAr: "وردة حمراء طبيعية مختارة بعناية فائقة مع لمسات ناعمة من الجبسوفيليا البيضاء وأغصان الكينا الخضراء وتغليف أسود ملكي وشريطة حمراء أنيقة.",
    stemsEn: "1 Dutch Grade A Red Rose, Gypsophila Baby's Breath, Eucalyptus Greenery, Luxury Sleeve",
    stemsAr: "وردة حمراء طبيعية هولندية، جبسوفيليا بيضاء، أغصان الكينا الخضراء، تغليف أسود شفاف",
    careEn: "Place in fresh water with flower food, keep away from direct sunlight.",
    careAr: "ضع الساق في ماء نقي بارد واحفظها في مكان لطيف بعيداً عن حرارة الشمس.",
    imageUrl: "assets/images/s201_single_rose.jpg"
  },

  // 2. Official Shaham Flowers Item S203
  {
    id: "S203",
    code: "S203",
    category: "official",
    isOfficial: true,
    titleEn: "Standard Hand Bouquet (5 Roses)",
    titleAr: "باقة اليد الكلاسيكية (5 ورود)",
    tagEn: "Bestseller",
    tagAr: "الأكثر طلباً",
    priceOmr: "2.500",
    priceDisplayEn: "2.500 OMR",
    priceDisplayAr: "2.500 ر.ع",
    descriptionEn: "5 pristine velvety red roses arranged with aromatic eucalyptus and delicate gypsophila in sculptural pleated white art wrap, tied with a vivid red silk ribbon.",
    descriptionAr: "5 ورود جوري حمراء مخملية متناسقة بأناقة متناهية مع الجبسوفيليا الخفيفة وأوراق الكينا العطرة وتغليف أبيض مطوي وشريطة حمراء ملكية.",
    stemsEn: "5 Dutch Red Naomi Roses, Gypsophila Baby's Breath, Italian Ruscus / Eucalyptus",
    stemsAr: "5 وردات جوري حمراء هولندية، جبسوفيليا، أوراق الكينا، تغليف أبيض فندقي فاخر",
    careEn: "Trim stems at a 45-degree angle every 2 days and refresh water.",
    careAr: "قص أطراف السيقان بشكل مائل كل يومين مع تبديل ماء الفازة.",
    imageUrl: "assets/images/s203_standard_hand_bouquet.jpg"
  },

  // 3. Official Shaham Flowers Item S204
  {
    id: "S204",
    code: "S204",
    category: "official",
    isOfficial: true,
    titleEn: "White Mix Hand Bouquet (Ruffle Net)",
    titleAr: "باقة المكس الأبيض الفاخرة (تور ناعم)",
    tagEn: "Signature Art",
    tagAr: "تحفة الأتيليه",
    priceOmr: "10.000",
    priceDisplayEn: "10.000 OMR",
    priceDisplayAr: "10.000 ر.ع",
    descriptionEn: "A magnificent full round bouquet blending pure white roses, ruffled carnations, purple limonium accents, and eucalyptus foliage, crowned by a couture pleated net cloth wrap with a white satin ribbon.",
    descriptionAr: "باقة مستديرة غنية بزهور الجوري الأبيض والقرنفل الملكي مع لمسات ساحرة من الستاتيس والليمونيوم البنفسجي، محاطة بتغليف كوتور فرنسي من التور الأبيض المكشكش وشريطة حرير ناصعة.",
    stemsEn: "White Avalanche Roses, White Carnations, Purple Statice/Limonium, Eucalyptus, Couture Ruffle Net Wrap",
    stemsAr: "جوري أبيض ملكي، قرنفل أبيض، ليمونيوم بنفسجي، أغصان الكينا، تغليف تور مكشكش فاخر",
    careEn: "Keep in a cool ambient temperature room. Mist petals lightly once daily.",
    careAr: "احفظها في غرفة باردة ورش أطراف البتلات برذاذ ماء خفيف يومياً.",
    imageUrl: "assets/images/s204_white_mix_hand_bouquet.jpg"
  },

  // 4. Official Shaham Flowers Item S202
  {
    id: "S202",
    code: "S202",
    category: "tables",
    isOfficial: true,
    titleEn: "VIP Table Bouquet (White Rose & Lily)",
    titleAr: "تنسيق طاولة ملكي (جوري أبيض وليليوم)",
    tagEn: "Luxury Centerpiece",
    tagAr: "فخامة المجالس والمناسبات",
    priceOmr: "16.000",
    priceDisplayEn: "16.000 OMR",
    priceDisplayAr: "16.000 ر.ع",
    descriptionEn: "Grand low-profile table arrangement featuring fragrant white Casablanca lilies, spray roses, avalanche white roses, and sculptural looped emerald palm leaves on a luxury marble base.",
    descriptionAr: "تنسيق طاولة ومجالس فاخر مستوحى من القصور العُمانية، يجمع بين زهور الليليوم البيضاء الفواحة والجوري الأبيض الملكي وطيّات سعف النخيل الخضراء المصقولة.",
    stemsEn: "Casablanca White Lilies, White Avalanche Roses, Baby Spray Roses, Glossy Palm Ribbon Foliage",
    stemsAr: "ليليوم كازابلانكا أبيض عطري، جوري أبيض، بيبي روز ناعم، أوراق نخيل مصقولة دائرية",
    careEn: "Add water to the floral oasis sponge every 24 hours to maintain lasting hydration.",
    careAr: "أضف نصف كوب ماء إلى إسفنجة التنسيق كل 24 ساعة لضمان نضارة الزهور لعدة أيام.",
    imageUrl: "assets/images/s202_table_bouquet_white_lily.jpg"
  },

  // 5. Flower & Chocolate Combo Flagship 1
  {
    id: "SH-CMB01",
    code: "SH-CMB01",
    category: "combos",
    isOfficial: false,
    titleEn: "Royal Rose & Belgian Truffle Gift Box",
    titleAr: "بوكس الورد الملكي والشوكولاتة البلجيكية",
    tagEn: "Custom Combo",
    tagAr: "كومبو قابل للتخصيص",
    priceOmr: "18.500",
    priceDisplayEn: "18.500 OMR",
    priceDisplayAr: "18.500 ر.ع",
    descriptionEn: "Customizable dual-layer luxury box combining 15 red Naomi roses with an acrylic drawer of 16 artisan Belgian dark & hazelnut truffles and gold dust accents.",
    descriptionAr: "بوكس إهداء مزدوج فاخر يجمع بين 15 وردة جوري حمراء مخملية مع درج أكريليك أنيق يحتوي على 16 حبة شوكولاتة بلجيكية فاخرة بالمكسرات والبرالين.",
    stemsEn: "15 Red Naomi Roses + 16 Belgian Luxury Truffles + Personalized Arabic Acrylic Plate",
    stemsAr: "15 وردة جوري حمراء + 16 حبة شوكولاتة بلجيكية فاخرة + لوح أكريليك باسم المهدى له",
    careEn: "Store chocolates in a cool room (18-20°C). Water floral sponge gently.",
    careAr: "احفظ الشوكولاتة في مكان معتدل البرودة (18-20 درجة) وأضف قليلاً من الماء للإسفنجة.",
    imageUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
  },

  // 6. Flower & Chocolate Combo Flagship 2
  {
    id: "SH-CMB02",
    code: "SH-CMB02",
    category: "combos",
    isOfficial: false,
    titleEn: "Blush Garden & Ferrero Golden Keepsake",
    titleAr: "صينية الباستيل مع شوكولاتة فيريرو روشيه",
    tagEn: "Trending Combo",
    tagAr: "كومبو مميز",
    priceOmr: "14.000",
    priceDisplayEn: "14.000 OMR",
    priceDisplayAr: "14.000 ر.ع",
    descriptionEn: "An ethereal presentation of blush spray roses, white lisianthus, and a pyramid of golden Ferrero Rocher chocolates presented in an acrylic keepsake tray.",
    descriptionAr: "تنسيق رقيق يجمع بيبي روز بلش خوخي وزهور الليسيانثوس البيضاء مع هرم شوكولاتة فيريرو روشيه الذهبية في صينية أكريليك شفافة.",
    stemsEn: "20 Pastel Blooms + 16 Ferrero Rocher Chocolates + Silk Ribbon",
    stemsAr: "20 غصن زهور باستيل طبيعية + 16 حبة فيريرو روشيه + شريطة حرير",
    careEn: "Keep in a cool dry space, replenish water for flowers.",
    careAr: "احفظها في جو معتدل ولطيف وجدد الماء للزهور كل يومين.",
    imageUrl: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80"
  },

  // 7. Hand Bouquet - Grand Velvet
  {
    id: "SH-BQ05",
    code: "SH-BQ05",
    category: "bouquets",
    isOfficial: false,
    titleEn: "Grand Velvet 25 Red Roses",
    titleAr: "باقة الورد الجوري المخملي (25 وردة)",
    tagEn: "Classic Love",
    tagAr: "رمز العشق الكلاسيكي",
    priceOmr: "15.000",
    priceDisplayEn: "15.000 OMR",
    priceDisplayAr: "15.000 ر.ع",
    descriptionEn: "25 long-stemmed Ecuadorian red roses hand-tied in matte dark emerald wrapping with gold foil edges and a trailing satin bow.",
    descriptionAr: "25 وردة إكوادورية حمراء طويلة الساق ملفوفة بتغليف زيتي غامق مع حواف ذهبية ناعمة وشريطة ساتان منسدلة.",
    stemsEn: "25 Ecuadorian Red Naomi Roses, Ruscus, Golden Edge Wrapping",
    stemsAr: "25 وردة جوري أحمر إكوادوري، أوراق الرسكوس، تغليف فاخر",
    careEn: "Trim stems every 2 days diagonally and keep in cool fresh water.",
    careAr: "قص أطراف السيقان بشكل مائل كل يومين وضعها في فازة ماء بارد نقي.",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80"
  },

  // 8. Bridal Posy Flagship
  {
    id: "SH-BR01",
    code: "SH-BR01",
    category: "bridal",
    isOfficial: false,
    titleEn: "The Royal Omani Bridal Posy",
    titleAr: "مسكة العروس الملكية العُمانية",
    tagEn: "VIP Bridal",
    tagAr: "خاص للعرائس",
    priceOmr: "28.000",
    priceDisplayEn: "28.000 OMR",
    priceDisplayAr: "28.000 ر.ع",
    descriptionEn: "Bespoke bridal bouquet crafted with white garden roses, calla lilies, delicate phalaenopsis orchids, pearl pin handles, and cascading Italian foliage.",
    descriptionAr: "مسكة عروس ملكية مصممة خصيصاً لأفراح سلطنة عُمان، تتألف من ورد الجوري الأبيض وزهور الكالا الأنيقة والأوركيد مع مقبض مطرز باللؤلؤ وشريطة حرير فرنسية.",
    stemsEn: "White Garden Roses, Mini Calla Lilies, Phalaenopsis Orchids, Pearl Handle Wrap",
    stemsAr: "ورد أبيض هولندي، زهور كالا، أوركيد فاخر، مقبض لؤلؤ وشريطة حرير",
    careEn: "Delivered in water vial; mist lightly before the bridal entrance.",
    careAr: "تسلم مع حاضنة ماء خاصة لتبقى بنضارتها حتى لحظة الزفة والتقاط الصور.",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
  }
];

// Interactive Customizer Pricing & Elements Matrix
const CUSTOMIZER_DATA = {
  bases: [
    {
      id: "hand_bouquet",
      nameEn: "Hand-Tied Ruffle / Classic Wrap",
      nameAr: "باقة يد بتغليف كوتور أنيق",
      basePrice: 0.0,
      icon: "flower-2",
      image: "assets/images/s204_white_mix_hand_bouquet.jpg"
    },
    {
      id: "cylinder_box",
      nameEn: "Matte Black Royal Cylinder Box",
      nameAr: "بوكس أسطواني ملكي أسود فاخر",
      basePrice: 3.5,
      icon: "box",
      image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "acrylic_drawer_box",
      nameEn: "Dual Flower & Chocolate Acrylic Box",
      nameAr: "بوكس أكريليك مزدوج (ورد + شوكولاتة)",
      basePrice: 5.0,
      icon: "gift",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "table_centerpiece",
      nameEn: "VIP Table & Majlis Arrangement",
      nameAr: "تنسيق طاولة ومجالس كبار الشخصيات",
      basePrice: 6.0,
      icon: "gem",
      image: "assets/images/s202_table_bouquet_white_lily.jpg"
    }
  ],

  flowerTiers: [
    {
      id: "single_stem",
      nameEn: "Item S201: Single Rose (.700Bz)",
      nameAr: "كود S201: وردة مفردة (700 بيسة)",
      stems: 1,
      price: 0.700,
      previewImg: "assets/images/s201_single_rose.jpg"
    },
    {
      id: "five_roses",
      nameEn: "Item S203: 5 Roses Bouquet (2.500 OMR)",
      nameAr: "كود S203: باقة 5 وردات (2.500 ر.ع)",
      stems: 5,
      price: 2.500,
      previewImg: "assets/images/s203_standard_hand_bouquet.jpg"
    },
    {
      id: "white_mix_ruffle",
      nameEn: "Item S204: White Mix Ruffle Net (10.000 OMR)",
      nameAr: "كود S204: باقة مكس أبيض تور (10.000 ر.ع)",
      stems: 20,
      price: 10.000,
      previewImg: "assets/images/s204_white_mix_hand_bouquet.jpg"
    },
    {
      id: "twenty_five_naomi",
      nameEn: "25 Premium Red Naomi Roses (15.000 OMR)",
      nameAr: "25 وردة جوري أحمر ملكي (15.000 ر.ع)",
      stems: 25,
      price: 15.000,
      previewImg: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "table_lily_roses",
      nameEn: "Item S202: Table Lilies & Roses (16.000 OMR)",
      nameAr: "كود S202: تنسيق الليليوم والجوري (16.000 ر.ع)",
      stems: 30,
      price: 16.000,
      previewImg: "assets/images/s202_table_bouquet_white_lily.jpg"
    },
    {
      id: "vip_fifty_roses",
      nameEn: "VIP 50 Grand Royal Blooms (28.000 OMR)",
      nameAr: "50 وردة فاخرة ملكية كبرى (28.000 ر.ع)",
      stems: 50,
      price: 28.000,
      previewImg: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80"
    }
  ],

  chocolateCombos: [
    {
      id: "none",
      nameEn: "No Chocolates (Flowers Only)",
      nameAr: "زهور فقط بدون شوكولاتة",
      price: 0.0,
      icon: "x"
    },
    {
      id: "ferrero_box",
      nameEn: "Ferrero Rocher Golden Pyramid (+3.500 OMR)",
      nameAr: "هرم شوكولاتة فيريرو روشيه (+3.500 ر.ع)",
      price: 3.500,
      icon: "award"
    },
    {
      id: "belgian_truffles",
      nameEn: "Artisan Belgian Truffles Box (+6.000 OMR)",
      nameAr: "بوكس ترافل شوكولاتة بلجيكية فاخرة (+6.000 ر.ع)",
      price: 6.000,
      icon: "gift"
    },
    {
      id: "luxury_patchi_godiva",
      nameEn: "Luxury Patchi / Godiva Selection (+9.500 OMR)",
      nameAr: "تشكيلة شوكولاتة باتشي / جوديفا فاخرة (+9.500 ر.ع)",
      price: 9.500,
      icon: "sparkles"
    }
  ],

  addons: [
    {
      id: "acrylic_nameplate",
      nameEn: "Custom Acrylic Calligraphy Name Tag (+2.000 OMR)",
      nameAr: "لوح أكريليك ذهبي بالاسم والخط العربي (+2.000 ر.ع)",
      price: 2.000
    },
    {
      id: "helium_balloon",
      nameEn: "Celebration Helium Balloon (+1.500 OMR)",
      nameAr: "بالون هيليوم للمناسبة (+1.500 ر.ع)",
      price: 1.500
    },
    {
      id: "luxury_card",
      nameEn: "Gold Foil Handwritten Greeting Card (+0.800 OMR)",
      nameAr: "كرت إهداء بختم شمعي وخط يدوي فاخر (+0.800 ر.ع)",
      price: 0.800
    }
  ],

  wilayats: [
    { id: "ibra", nameEn: "Wilayat Ibra (Local Delivery)", nameAr: "ولاية إبراء (توصيل محلي مباشر)" },
    { id: "bidiyah", nameEn: "Wilayat Bidiyah", nameAr: "ولاية بدية" },
    { id: "al_mudhaibi", nameEn: "Wilayat Al Mudhaibi", nameAr: "ولاية المضيبي" },
    { id: "al_qabil", nameEn: "Wilayat Al Qabil", nameAr: "ولاية القابل" },
    { id: "wadi_bani_khalid", nameEn: "Wilayat Wadi Bani Khalid", nameAr: "ولاية وادي بني خالد" },
    { id: "dema_wa_thaieen", nameEn: "Wilayat Dema Wa Thaieen", nameAr: "ولاية دماء والطائيين" },
    { id: "other", nameEn: "Other Location in Oman", nameAr: "موقع آخر في سلطنة عُمان" }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { APP_CONFIG, CATEGORIES, PRODUCTS, CUSTOMIZER_DATA };
}
