// === БАЗОВЫЕ ДАННЫЕ И КОНФИГ ===

const STORAGE_KEYS = {
  CART: "gadgetStoreCart",
  THEME: "gadgetStoreTheme",
  FAVORITES: "gadgetStoreFavorites",
  LANGUAGE: "gadgetStoreLanguage",
  ORDERS: "gadgetStoreOrders",
  CLIENT_AUTH: "gadgetStoreClientAuth",
  CLIENT_USER: "gadgetStoreClientUser"
};

const ROLE_KEY = "gadgetStoreRole";
const CLIENT_PROFILE_KEY = "gadgetStoreClientProfile";
const ADMIN_AUTH_KEY = "gadgetStoreAdminAuth";

const I18N = {
  ru: {
    nav_catalog: "Каталог",
    search_placeholder: "Поиск по товарам...",
    hero_title: "Гаджеты уровня флагманов для вашей ежедневной магии",
    hero_subtitle:
      "Подберите технику, которая органично впишется в ваш ритм жизни: от смартфона и ноутбука до смарт‑часов и продвинутых аксессуаров.",
    hero_cta_catalog: "Перейти в каталог",
    hero_cta_hits: "Хиты продаж",
    section_categories_title: "Категории",
    section_categories_subtitle: "Выберите свою категорию и найдите идеальный гаджет.",
    cat_phones: "Смартфоны",
    cat_laptops: "Ноутбуки",
    cat_headphones: "Наушники",
    cat_tablets: "Планшеты",
    cat_watches: "Смарт‑часы",
    cat_accessories: "Аксессуары",
    section_hits_title: "Хиты продаж",
    section_hits_subtitle:
      "Выбор наших клиентов — лучшие устройства по соотношению цена/качество.",
    section_new_title: "Новинки",
    section_new_subtitle: "Самые свежие релизы топ‑брендов.",
    section_reviews_title: "Отзывы клиентов",
    section_reviews_subtitle: "Нам доверяют тысячи пользователей по всей стране.",
    section_newsletter_title: "Подпишитесь на новые релизы и спецпредложения",
    section_newsletter_subtitle:
      "Мы не спамим — только самые важные новости и лучшие скидки.",
    newsletter_email: "Ваш e‑mail",
    btn_subscribe: "Подписаться",
    footer_shop: "Магазин",
    footer_info: "Информация",
    footer_privacy: "Политика конфиденциальности",
    footer_terms: "Условия использования",
    settings_title: "Настройки",
    settings_language: "Язык интерфейса",
    settings_theme: "Тема",
    settings_theme_hint:
      "Переключать светлую и тёмную тему можно также через иконку луны в шапке."
  },
  en: {
    nav_catalog: "Catalog",
    search_placeholder: "Search products...",
    hero_title: "Flagship‑level gadgets for your everyday magic",
    hero_subtitle:
      "Pick devices that fit your lifestyle: from smartphones and laptops to smartwatches and pro accessories.",
    hero_cta_catalog: "Open catalog",
    hero_cta_hits: "Best sellers",
    section_categories_title: "Categories",
    section_categories_subtitle: "Choose a category and find your perfect gadget.",
    cat_phones: "Smartphones",
    cat_laptops: "Laptops",
    cat_headphones: "Headphones",
    cat_tablets: "Tablets",
    cat_watches: "Smartwatches",
    cat_accessories: "Accessories",
    section_hits_title: "Best sellers",
    section_hits_subtitle:
      "Customer favorites — the best balance between price and quality.",
    section_new_title: "New arrivals",
    section_new_subtitle: "The latest releases from top brands.",
    section_reviews_title: "Customer reviews",
    section_reviews_subtitle: "Thousands of customers trust us across the country.",
    section_newsletter_title: "Stay tuned for new releases and offers",
    section_newsletter_subtitle:
      "No spam — only important news and the best deals.",
    newsletter_email: "Your e‑mail",
    btn_subscribe: "Subscribe",
    footer_shop: "Shop",
    footer_info: "Information",
    footer_privacy: "Privacy policy",
    footer_terms: "Terms of use",
    settings_title: "Settings",
    settings_language: "Interface language",
    settings_theme: "Theme",
    settings_theme_hint:
      "You can also toggle light and dark theme using the moon icon in the header."
  },
  kk: {
    nav_catalog: "Каталог",
    search_placeholder: "Тауарларды іздеу...",
    hero_title: "Күнделікті өміріңізге арналған премиум гаджеттер",
    hero_subtitle:
      "Смартфоннан бастап ноутбук пен смарт‑сағатқа дейін — өмір салтыңызға сай құрылғыны таңдаңыз.",
    hero_cta_catalog: "Каталогқа өту",
    hero_cta_hits: "Көп сатылатындар",
    section_categories_title: "Санаттар",
    section_categories_subtitle: "Санатты таңдап, өзіңізге лайық гаджетті табыңыз.",
    cat_phones: "Смартфондар",
    cat_laptops: "Ноутбуктер",
    cat_headphones: "Құлаққаптар",
    cat_tablets: "Планшеттер",
    cat_watches: "Смарт‑сағаттар",
    cat_accessories: "Аксессуарлар",
    section_hits_title: "Көп сатылатындар",
    section_hits_subtitle:
      "Клиенттер таңдауы — баға мен сапаның ең жақсы балансы.",
    section_new_title: "Жаңалықтар",
    section_new_subtitle: "Үздік брендтердің ең жаңа құрылғылары.",
    section_reviews_title: "Пікірлер",
    section_reviews_subtitle: "Елдің түкпір‑түкпіріндегі мыңдаған клиент бізге сенеді.",
    section_newsletter_title: "Жаңа релиздер мен ұсыныстарға жазылыңыз",
    section_newsletter_subtitle:
      "Спамсыз — тек маңызды жаңалықтар мен тиімді ұсыныстар.",
    newsletter_email: "Сіздің e‑mail",
    btn_subscribe: "Жазылу",
    footer_shop: "Дүкен",
    footer_info: "Ақпарат",
    footer_privacy: "Құпиялылық саясаты",
    footer_terms: "Пайдалану шарттары",
    settings_title: "Баптаулар",
    settings_language: "Интерфейс тілі",
    settings_theme: "Тақырып",
    settings_theme_hint:
      "Жарық және қараңғы тақырыпты жоғарғы панельдегі ай иконкасымен де ауыстыруға болады."
  }
};

// Demo-данные товаров (минимум 12 штук)
const PRODUCTS = [
  {
    id: "p1",
    title: "Apple iPhone 15 Pro 256 ГБ",
    category: "phones",
    price: 119990,
    rating: 4.9,
    badge: "Хит",
    isNew: true,
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Флагманский смартфон с камерой профессионального уровня.",
    specs: [
      'Дисплей 6.1" OLED 120 Гц',
      "Тройная камера 48 Мп",
      "Процессор Apple A17 Pro",
      "Поддержка 5G, eSIM"
    ]
  },
  {
    id: "p2",
    title: "Samsung Galaxy S24 Ultra 512 ГБ",
    category: "phones",
    price: 129990,
    rating: 4.8,
    badge: "Хит",
    isNew: true,
    image: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Флагман с перьевым вводом и передовой камерой.",
    specs: [
      'Дисплей 6.8" Dynamic AMOLED 120 Гц',
      "Камера 200 Мп",
      "S Pen в комплекте",
      "Поддержка 5G"
    ]
  },
  {
    id: "p3",
    title: 'Apple MacBook Air 15" M2 16/512 ГБ',
    category: "laptops",
    price: 149990,
    rating: 4.9,
    badge: "Хит",
    isNew: false,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    short: "Лёгкий и мощный ноутбук для работы и творчества.",
    specs: [
      "Чип Apple M2",
      'Дисплей 15.3" Liquid Retina',
      "Вес 1.5 кг",
      "До 18 часов автономной работы"
    ]
  },
  {
    id: "p4",
    title: "Dell XPS 13 Plus OLED 16/1 ТБ",
    category: "laptops",
    price: 179990,
    rating: 4.7,
    badge: "Премиум",
    isNew: true,
    image: "https://images.pexels.com/photos/18104/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    short: "Компактный ультрабук с безрамочным OLED‑дисплеем.",
    specs: [
      "Intel Core i7 13‑го поколения",
      'Дисплей 13.4" OLED',
      "Сенсорная панель вместо клавиш F",
      "Корпус из алюминия и стекла"
    ]
  },
  {
    id: "p5",
    title: "Apple AirPods Pro 2",
    category: "headphones",
    price: 29990,
    rating: 4.8,
    badge: "Хит",
    isNew: false,
    image: "https://images.pexels.com/photos/7889469/pexels-photo-7889469.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Беспроводные наушники с активным шумоподавлением.",
    specs: [
      "Активное шумоподавление",
      "Прозрачный режим",
      "До 6 часов проигрывания",
      "Зарядка MagSafe"
    ]
  },
  {
    id: "p6",
    title: "Sony WH‑1000XM5",
    category: "headphones",
    price: 34990,
    rating: 4.9,
    badge: "Премиум",
    isNew: false,
    image: "https://images.pexels.com/photos/3739450/pexels-photo-3739450.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Оверхед‑наушники с лучшим шумоподавлением.",
    specs: [
      "До 30 часов работы",
      "Фирменное шумоподавление",
      "Поддержка LDAC, Hi‑Res Audio",
      "Быстрая зарядка"
    ]
  },
  {
    id: "p7",
    title: 'iPad Pro 12.9" M2 256 ГБ',
    category: "tablets",
    price: 139990,
    rating: 4.8,
    badge: "Новинка",
    isNew: true,
    image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Планшет профессионального уровня для работы и творчества.",
    specs: [
      "Чип Apple M2",
      'Дисплей 12.9" Liquid Retina XDR',
      "Поддержка Apple Pencil 2",
      "До 10 часов автономной работы"
    ]
  },
  {
    id: "p8",
    title: "Samsung Galaxy Tab S9 Ultra 256 ГБ",
    category: "tablets",
    price: 119990,
    rating: 4.7,
    badge: "Премиум",
    isNew: true,
    image: "https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Большой AMOLED‑планшет с S Pen в комплекте.",
    specs: [
      'Дисплей 14.6" Dynamic AMOLED 2X',
      "S Pen в комплекте",
      "Поддержка DeX",
      "Четыре динамика AKG"
    ]
  },
  {
    id: "p9",
    title: "Apple Watch Series 9 45 мм",
    category: "watches",
    price: 49990,
    rating: 4.8,
    badge: "Хит",
    isNew: false,
    image: "803909.jpg",
    short: "Смарт‑часы с продвинутыми функциями здоровья.",
    specs: [
      "Датчик ЭКГ и кислорода в крови",
      "Яркий OLED‑дисплей",
      "Apple Pay",
      "До 18 часов работы"
    ]
  },
  {
    id: "p10",
    title: "Samsung Galaxy Watch6 Classic 47 мм",
    category: "watches",
    price: 39990,
    rating: 4.6,
    badge: "Новинка",
    isNew: true,
    image: "umnye-chasy.jpg",
    short: "Смарт‑часы в классическом корпусе с физическим безелем.",
    specs: [
      "Вращающийся безель",
      "Отслеживание сна и тренировок",
      "NFC‑платежи",
      "До 40 часов работы"
    ]
  },
  {
    id: "p11",
    title: "MagSafe зарядное устройство 20 Вт",
    category: "accessories",
    price: 3990,
    rating: 4.7,
    badge: "Аксессуар",
    isNew: false,
    image: "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Компактный блок питания для быстрой зарядки устройств Apple.",
    specs: [
      "Выходная мощность 20 Вт",
      "Порт USB‑C",
      "Компактный размер",
      "Поддержка быстрой зарядки iPhone"
    ]
  },
  {
    id: "p12",
    title: "USB‑C хаб 7‑в‑1 для MacBook",
    category: "accessories",
    price: 7990,
    rating: 4.5,
    badge: "Аксессуар",
    isNew: true,
    image: "https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Многофункциональный хаб с HDMI, USB и картридером.",
    specs: [
      "HDMI 4K 60 Гц",
      "2× USB‑A, 1× USB‑C",
      "Слот для SD и microSD",
      "Корпус из алюминия"
    ]
  },
  {
    id: "p13",
    title: "Xiaomi 14 256 ГБ",
    category: "phones",
    price: 69990,
    rating: 4.6,
    badge: "Новинка",
    isNew: true,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Производительный смартфон с камерой Leica и быстрой зарядкой.",
    specs: [
      'Дисплей 6.36" AMOLED 120 Гц',
      "Камера Leica 50 Мп",
      "Быстрая зарядка 90 Вт",
      "Поддержка 5G, Wi‑Fi 7"
    ]
  },
  {
    id: "p14",
    title: "ASUS ROG Zephyrus G16 RTX 4070",
    category: "laptops",
    price: 189990,
    rating: 4.7,
    badge: "Гейминг",
    isNew: true,
    image: "https://images.pexels.com/photos/6432108/pexels-photo-6432108.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Игровой ноутбук с мощной графикой и быстрой матрицей.",
    specs: [
      "Intel Core i9",
      "GeForce RTX 4070",
      'Дисплей 16" 240 Гц',
      "Подсветка клавиатуры RGB"
    ]
  },
  {
    id: "p15",
    title: "Nothing Ear (2)",
    category: "headphones",
    price: 16990,
    rating: 4.4,
    badge: "Новинка",
    isNew: true,
    image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Прозрачные TWS‑наушники с ANC и стильным дизайном.",
    specs: [
      "Активное шумоподавление",
      "Прозрачный корпус",
      "До 6 часов работы",
      "Защита IP54"
    ]
  },
  {
    id: "p16",
    title: "Baseus GaN зарядное устройство 65 Вт",
    category: "accessories",
    price: 4990,
    rating: 4.8,
    badge: "Хит",
    isNew: false,
    image: "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Универсальный GaN‑адаптер для ноутбуков, смартфонов и планшетов.",
    specs: [
      "Мощность 65 Вт",
      "Три порта (2× USB‑C, 1× USB‑A)",
      "Технология GaN",
      "Компактный корпус"
    ]
  },
  {
    id: "p17",
    title: "Apple Magic Keyboard с Touch ID",
    category: "accessories",
    price: 19990,
    rating: 4.7,
    badge: "Премиум",
    isNew: false,
    image: "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Беспроводная клавиатура Apple с удобной разблокировкой по отпечатку.",
    specs: [
      "Клавиатура с низким ходом",
      "Встроенный Touch ID",
      "Поддержка Mac с чипом Apple",
      "Зарядка по USB‑C"
    ]
  },
  {
    id: "p18",
    title: "Samsung Odyssey 27\" 2K 165 Гц",
    category: "accessories",
    price: 32990,
    rating: 4.6,
    badge: "Гейминг",
    isNew: false,
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Игровой монитор с высокой частотой обновления и минимальными рамками.",
    specs: [
      'Диагональ 27" QHD',
      "Частота 165 Гц",
      "Поддержка G‑SYNC / FreeSync",
      "Регулировка по высоте"
    ]
  }
];

// === УТИЛИТЫ ===

function formatPrice(value) {
  return value.toLocaleString("ru-RU") + " ₸";
}

function getCurrentLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (stored && I18N[stored]) return stored;
  } catch {
    // ignore
  }
  return "ru";
}

function setCurrentLanguage(lang) {
  const normalized = I18N[lang] ? lang : "ru";
  try {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, normalized);
  } catch {
    // ignore
  }
  applyLanguage();
}

function applyLanguage() {
  const lang = getCurrentLanguage();
  const dict = I18N[lang] || I18N.ru;

  document.documentElement.lang = lang === "en" ? "en" : lang === "kk" ? "kk" : "ru";

  document.querySelectorAll("[data-i18n-key]").forEach((el) => {
    const key = el.getAttribute("data-i18n-key");
    if (key && dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key && dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  // Подсветка выбранного языка в модалке
  const langButtons = document.querySelectorAll("#languageButtons [data-lang]");
  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
}

function getOrders() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ORDERS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveOrders(orders) {
  try {
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  } catch {
    // ignore
  }
}

function isClientAuthenticated() {
  try {
    return localStorage.getItem(STORAGE_KEYS.CLIENT_AUTH) === "1";
  } catch {
    return false;
  }
}

function setClientAuthenticated(value) {
  try {
    localStorage.setItem(STORAGE_KEYS.CLIENT_AUTH, value ? "1" : "0");
  } catch {
    // ignore
  }
}

function getClientUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CLIENT_USER);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveClientUser(user) {
  try {
    localStorage.setItem(STORAGE_KEYS.CLIENT_USER, JSON.stringify(user));
  } catch {
    // ignore
  }
}

function getCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CART);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  updateCartBadge(cart);
}

function getFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveFavorites(favs) {
  localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favs));
}

function findProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

// Обновление бейджа корзины в шапке
function updateCartBadge(cartArg) {
  const cart = cartArg || getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const el = document.getElementById("cartCount");
  if (el) {
    el.textContent = String(count);
  }
}

// Добавление товара в корзину (с merge по количеству)
function addToCart(productId, qty = 1) {
  const product = findProductById(productId);
  if (!product) return;

  const cart = getCart();
  const exists = cart.find((item) => item.id === productId);
  if (exists) {
    exists.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  saveCart(cart);
  showToast("Добавлено в корзину");
}

// Toast‑уведомление при действиях
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i><span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(6px) scale(0.97)";
    setTimeout(() => toast.remove(), 180);
  }, 2500);
}

// === ТЕМА (LIGHT / DARK) ===

function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  const btn = document.getElementById("themeToggle");
  if (btn) {
    const icon = btn.querySelector("i");
    if (icon) {
      icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
  }
}

function initTheme() {
  const stored = localStorage.getItem(STORAGE_KEYS.THEME);
  const prefersDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  applyTheme(theme);

  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = document.body.classList.contains("dark") ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEYS.THEME, next);
      applyTheme(next);
    });
  }
}

function initSettingsModal() {
  const btn = document.getElementById("settingsButton");
  const overlay = document.getElementById("settingsModalOverlay");
  if (!overlay) return;

  const open = () => {
    overlay.hidden = false;
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden";
    applyLanguage(); // чтобы в модалке язык тоже был актуальный
  };

  const close = () => {
    overlay.hidden = true;
    overlay.style.display = "none";
    document.body.style.overflow = "";
  };

  if (btn) {
    btn.addEventListener("click", open);
  }

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target.closest(".modal-close")) {
      close();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) {
      close();
    }
  });

  const langButtons = overlay.querySelectorAll("#languageButtons [data-lang]");
  langButtons.forEach((btnLang) => {
    btnLang.addEventListener("click", () => {
      const lang = btnLang.getAttribute("data-lang");
      setCurrentLanguage(lang);
      showToast("Язык изменён");
    });
  });
}

function renderClientSidebar() {
  const container = document.getElementById("clientSidebarContent");
  if (!container) return;
  const authed = isClientAuthenticated();

  if (!authed) {
    const existingUser = getClientUser() || { name: "", email: "" };
    container.innerHTML = `
      <section class="account-section">
        <h3>Вход клиента</h3>
        <p>Авторизуйтесь, чтобы просматривать заказы, избранное и данные карты.</p>
        <form id="clientLoginForm" class="account-form-grid">
          <input type="text" class="input" id="clientLoginName" placeholder="Имя" value="${existingUser.name || ""}" required />
          <input type="email" class="input" id="clientLoginEmail" placeholder="E‑mail" value="${existingUser.email || ""}" required />
          <input type="password" class="input" id="clientLoginPassword" placeholder="Пароль (демо)" required />
          <button type="submit" class="btn-primary">Войти</button>
        </form>
      </section>
    `;

    const loginForm = document.getElementById("clientLoginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("clientLoginName").value.trim();
        const email = document.getElementById("clientLoginEmail").value.trim();
        const password = document.getElementById("clientLoginPassword").value.trim();
        if (!name || !email || !password) return;

        saveClientUser({ name, email });
        setClientAuthenticated(true);
        showToast("Вы вошли как клиент (демо)");
        renderClientSidebar();
      });
    }
    return;
  }

  const profile = getClientProfile();
  const orders = getOrders();
  const favoritesIds = getFavorites();
  const favoriteProducts = favoritesIds.map((id) => findProductById(id)).filter(Boolean);

  const ordersHtml = orders.length
    ? orders
        .slice(-5)
        .reverse()
        .map(
          (o) => `
      <li>
        <span>Заказ #${o.id}</span>
        <span class="account-badge">${formatPrice(o.total)}</span>
      </li>`
        )
        .join("")
    : '<li><span>Заказов пока нет.</span></li>';

  const favoritesHtml = favoriteProducts.length
    ? favoriteProducts
        .map(
          (p) => `
      <li>
        <span>${p.title}</span>
        <a href="product.html?id=${p.id}">Открыть</a>
      </li>`
        )
        .join("")
    : '<li><span>Список избранного пока пуст.</span></li>';

  const user = getClientUser();

  container.innerHTML = `
    <section class="account-section">
      <h3>Профиль клиента</h3>
      <p>${user?.name ? `Вы вошли как ${user.name}` : "Данные профиля сохранены локально."}</p>
      <button type="button" id="clientLogoutBtn" class="btn-ghost">Выйти</button>
    </section>
    <section class="account-section">
      <h3>Платёжная карта (демо)</h3>
      <p>Данные используются только для ускорения оформления на этом устройстве.</p>
      <form id="clientCardForm" class="account-form-grid">
        <input type="text" class="input" id="clientCardName" placeholder="Имя на карте" value="${profile.name}" />
        <input type="text" class="input" id="clientCardNumber" placeholder="Номер карты" value="${profile.cardNumber}" />
        <input type="text" class="input" id="clientCardExpiry" placeholder="MM/YY" value="${profile.cardExpiry}" />
        <button type="submit" class="btn-primary">Сохранить карту</button>
      </form>
    </section>
    <section class="account-section">
      <h3>Мои заказы</h3>
      <ul class="account-favorites">
        ${ordersHtml}
      </ul>
    </section>
    <section class="account-section">
      <h3>Избранные товары</h3>
      <ul class="account-favorites">
        ${favoritesHtml}
      </ul>
    </section>
    <section class="account-section">
      <h3>Быстрые действия</h3>
      <div class="settings-row">
        <a href="products.html" class="btn-secondary">Перейти в каталог</a>
        <a href="cart.html" class="btn-primary">Открыть корзину</a>
      </div>
    </section>
  `;

  const form = document.getElementById("clientCardForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const updated = {
        ...profile,
        name: document.getElementById("clientCardName").value.trim(),
        cardNumber: document.getElementById("clientCardNumber").value.trim(),
        cardExpiry: document.getElementById("clientCardExpiry").value.trim()
      };
      saveClientProfile(updated);
      showToast("Данные карты сохранены (демо)");
    });
  }

  const logoutBtn = document.getElementById("clientLogoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      setClientAuthenticated(false);
      showToast("Вы вышли из профиля клиента");
      renderClientSidebar();
    });
  }
}

function renderAdminSidebar() {
  const container = document.getElementById("adminSidebarContent");
  if (!container) return;
  const total = PRODUCTS.length;
  const totalValue = PRODUCTS.reduce((sum, p) => sum + p.price, 0);
  const byCategory = {};
  PRODUCTS.forEach((p) => {
    const label = mapCategoryToLabel(p.category);
    byCategory[label] = (byCategory[label] || 0) + 1;
  });

  const categoriesHtml = Object.entries(byCategory)
    .map(([label, count]) => `<li>${label}: ${count} позиций</li>`)
    .join("");

  const orders = getOrders();
  const lastOrdersHtml = orders.length
    ? orders
        .slice(-5)
        .reverse()
        .map(
          (o) => `
      <li>
        <span>#${o.id}</span>
        <span class="account-badge">${formatPrice(o.total)}</span>
      </li>`
        )
        .join("")
    : '<li><span>Заказов пока нет.</span></li>';

  container.innerHTML = `
    <section class="account-section">
      <h3>Статистика каталога</h3>
      <p>Краткий обзор ассортимента магазина на этом демо‑сайте.</p>
      <ul class="account-favorites">
        <li>
          <span>Всего товаров</span>
          <span class="account-badge">${total}</span>
        </li>
        <li>
          <span>Суммарная витрина</span>
          <span class="account-badge">${formatPrice(totalValue)}</span>
        </li>
      </ul>
    </section>
    <section class="account-section">
      <h3>Товары по категориям</h3>
      <ul class="account-favorites">
        ${categoriesHtml}
      </ul>
    </section>
    <section class="account-section">
      <h3>Последние заказы</h3>
      <ul class="account-favorites">
        ${lastOrdersHtml}
      </ul>
    </section>
  `;
}

function initClientSidebar() {
  const btn = document.getElementById("clientMenuButton");
  const overlay = document.getElementById("clientSidebarOverlay");
  const closeBtn = document.getElementById("clientSidebarCloseBtn");
  if (!btn || !overlay || !closeBtn) return;

  const open = () => {
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    renderClientSidebar();
  };

  const close = () => {
    overlay.hidden = true;
    document.body.style.overflow = "";
  };

  btn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) {
      close();
    }
  });
}

function initAdminSidebar() {
  const btn = document.getElementById("adminMenuButton");
  const overlay = document.getElementById("adminSidebarOverlay");
  const closeBtn = document.getElementById("adminSidebarCloseBtn");
  if (!btn || !overlay || !closeBtn) return;

  const open = () => {
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    renderAdminSidebar();
  };

  const close = () => {
    overlay.hidden = true;
    document.body.style.overflow = "";
  };

  btn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) {
      close();
    }
  });
}

// === ОБЩИЙ ПОИСК В ХЕДЕРЕ ===

function initHeaderSearch() {
  const form = document.getElementById("headerSearchForm");
  const input = document.getElementById("headerSearchInput");
  if (!form || !input) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim();
    const url = new URL("products.html", window.location.href);
    if (query) url.searchParams.set("search", query);
    window.location.href = url.toString();
  });
}

// === АНИМАЦИЯ ПОЯВЛЕНИЯ СЕКЦИЙ ===

function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((el) => observer.observe(el));
}

// === РЕНДЕР КАРТОЧКИ ТОВАРА ДЛЯ СЕТКИ ===

function createProductCard(product, favorites) {
  const isFavorite = favorites.includes(product.id);
  const card = document.createElement("article");
  card.className = "product-card";
  card.innerHTML = `
    <div class="product-meta-top">
      <span class="product-badge">${product.badge || "Гаджет"}</span>
      <button type="button" class="product-favorite ${isFavorite ? "active" : ""}" aria-label="Избранное">
        <i class="fa-solid fa-heart"></i>
      </button>
    </div>
    <img src="${product.image}" alt="${product.title}" />
    <h3 class="product-title">${product.title}</h3>
    <div class="product-rating">
      ${renderStars(product.rating)}
      <span>${product.rating.toFixed(1)}</span>
    </div>
    <div class="product-footer">
      <div class="product-price">${formatPrice(product.price)}</div>
      <div class="product-actions">
        <button type="button" class="btn-secondary btn-sm add-to-cart">В корзину</button>
        <button type="button" class="btn-ghost btn-sm more-details">Подробнее</button>
      </div>
    </div>
  `;

  const img = card.querySelector("img");
  if (img) {
    img.addEventListener("error", () => {
      img.src =
        "https://via.placeholder.com/600x400/111827/9ca3af?text=Gadget+Store";
    });
  }

  // "В корзину"
  card.querySelector(".add-to-cart").addEventListener("click", () => {
    addToCart(product.id, 1);
  });

  // "Подробнее"
  card.querySelector(".more-details").addEventListener("click", () => {
    const url = new URL("product.html", window.location.href);
    url.searchParams.set("id", product.id);
    window.location.href = url.toString();
  });

  // Избранное
  card.querySelector(".product-favorite").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavorite(product.id, e.currentTarget);
  });

  return card;
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.25 && rating - full < 0.75;
  const total = 5;
  let html = "";
  for (let i = 0; i < full; i++) html += '<i class="fa-solid fa-star"></i>';
  if (hasHalf) html += '<i class="fa-solid fa-star-half-stroke"></i>';
  const remaining = total - full - (hasHalf ? 1 : 0);
  for (let i = 0; i < remaining; i++) html += '<i class="fa-regular fa-star"></i>';
  return html;
}

// === ИЗБРАННОЕ ===

function toggleFavorite(productId, buttonEl) {
  const favorites = getFavorites();
  const idx = favorites.indexOf(productId);
  if (idx >= 0) {
    favorites.splice(idx, 1);
  } else {
    favorites.push(productId);
  }
  saveFavorites(favorites);

  if (buttonEl) {
    buttonEl.classList.toggle("active", favorites.includes(productId));
  }
  showToast(idx >= 0 ? "Удалено из избранного" : "Добавлено в избранное");
}

// === ГЛАВНАЯ (index.html) ===

function initIndexPage() {
  // Хиты продаж
  const hitsGrid = document.getElementById("hitsGrid");
  const newGrid = document.getElementById("newGrid");
  const favorites = getFavorites();

  if (hitsGrid) {
    const hits = PRODUCTS.filter((p) => p.badge === "Хит").slice(0, 6);
    hits.forEach((p) => hitsGrid.appendChild(createProductCard(p, favorites)));
  }

  if (newGrid) {
    const newest = PRODUCTS.filter((p) => p.isNew).slice(0, 6);
    newest.forEach((p) => newGrid.appendChild(createProductCard(p, favorites)));
  }

  // Скролл к "Хитам"
  const btnScroll = document.querySelector(".scroll-to-hits");
  const hitsSection = document.getElementById("hitsSection");
  if (btnScroll && hitsSection) {
    btnScroll.addEventListener("click", () => {
      hitsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // Форма подписки
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Спасибо за подписку!");
      newsletterForm.reset();
    });
  }
}

// === КАТАЛОГ (products.html) ===

function initCatalogPage() {
  const productsContainer = document.getElementById("productsContainer");
  const skeleton = document.getElementById("catalogSkeleton");
  const noResults = document.getElementById("noResultsMessage");
  const totalSpan = document.getElementById("catalogTotalCount");
  const showMoreBtn = document.getElementById("showMoreBtn");
  const categoryFilters = document.getElementById("categoryFilters");
  const sortSelect = document.getElementById("sortSelect");
  const catalogSearchInput = document.getElementById("catalogSearchInput");
  const filterHitsCheckbox = document.getElementById("filterHits");
  const filterNewCheckbox = document.getElementById("filterNew");

  if (!productsContainer) return;

  const url = new URL(window.location.href);
  const urlCategory = url.searchParams.get("category");
  const urlSearch = url.searchParams.get("search") || "";

  let state = {
    category: urlCategory || "all",
    sort: "default",
    search: urlSearch,
    visibleCount: 6,
    showHitsOnly: false,
    showNewOnly: false
  };

  if (catalogSearchInput) catalogSearchInput.value = state.search;

  if (categoryFilters && state.category !== "all") {
    [...categoryFilters.querySelectorAll(".chip")].forEach((chip) => {
      chip.classList.toggle("active", chip.dataset.category === state.category);
    });
  }

  function applyFilters() {
    let filtered = PRODUCTS.slice();

    if (state.category !== "all") {
      filtered = filtered.filter((p) => p.category === state.category);
    }

    if (state.search.trim()) {
      const q = state.search.trim().toLowerCase();
      filtered = filtered.filter((p) => {
        const inTitle = p.title.toLowerCase().includes(q);
        const inShort = p.short.toLowerCase().includes(q);
        const inSpecs = (p.specs || []).some((s) => s.toLowerCase().includes(q));
        const inCategory = mapCategoryToLabel(p.category).toLowerCase().includes(q);
        return inTitle || inShort || inSpecs || inCategory;
      });
    }

    if (state.sort === "price_asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (state.sort === "price_desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (state.sort === "rating_desc") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    if (state.showHitsOnly) {
      filtered = filtered.filter((p) => p.badge === "Хит");
    }

    if (state.showNewOnly) {
      filtered = filtered.filter((p) => p.isNew);
    }

    return filtered;
  }

  function render() {
    const favorites = getFavorites();
    const filtered = applyFilters();
    const total = filtered.length;

    productsContainer.innerHTML = "";

    if (totalSpan) totalSpan.textContent = total ? `Найдено: ${total}` : "Нет товаров";

    if (total === 0) {
      if (noResults) noResults.hidden = false;
      if (showMoreBtn) showMoreBtn.style.display = "none";
      return;
    }

    if (noResults) noResults.hidden = true;

    const toShow = filtered.slice(0, state.visibleCount);
    toShow.forEach((p) => productsContainer.appendChild(createProductCard(p, favorites)));

    if (showMoreBtn) {
      showMoreBtn.style.display = state.visibleCount < total ? "inline-flex" : "none";
    }
  }

  // Имитируем skeleton‑загрузку
  setTimeout(() => {
    if (skeleton) skeleton.style.display = "none";
    productsContainer.style.display = "grid";
    render();
  }, 500);

  // Фильтрация по категориям
  if (categoryFilters) {
    categoryFilters.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      state.category = btn.dataset.category || "all";
      state.visibleCount = 6;
      [...categoryFilters.querySelectorAll(".chip")].forEach((chip) =>
        chip.classList.toggle("active", chip === btn)
      );
      render();
    });
  }

  // Сортировка
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      state.sort = sortSelect.value;
      state.visibleCount = 6;
      render();
    });
  }

  // Поиск в каталоге
  if (catalogSearchInput) {
    catalogSearchInput.addEventListener("input", () => {
      state.search = catalogSearchInput.value;
      state.visibleCount = 6;
      render();
    });
  }

  // Показать ещё
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      state.visibleCount += 6;
      render();
    });
  }

  // Дополнительные фильтры
  if (filterHitsCheckbox) {
    filterHitsCheckbox.addEventListener("change", () => {
      state.showHitsOnly = filterHitsCheckbox.checked;
      state.visibleCount = 6;
      render();
    });
  }

  if (filterNewCheckbox) {
    filterNewCheckbox.addEventListener("change", () => {
      state.showNewOnly = filterNewCheckbox.checked;
      state.visibleCount = 6;
      render();
    });
  }
}

// === СТРАНИЦА ТОВАРА (product.html) ===

function initProductPage() {
  const container = document.getElementById("productContainer");
  if (!container) return;

  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");
  const product = id ? findProductById(id) : null;

  if (!product) {
    container.innerHTML = `
      <div class="empty-state">
        <p>Товар не найден.</p>
        <a href="products.html" class="btn-primary">Вернуться в каталог</a>
      </div>
    `;
    return;
  }

  const favorites = getFavorites();
  const isFavorite = favorites.includes(product.id);

  container.innerHTML = `
    <div class="product-layout">
      <div class="product-images-card">
        <img src="${product.image}" alt="${product.title}" />
      </div>
      <div class="product-info-card">
        <div class="product-breadcrumbs">
          <a href="index.html">Главная</a> · <a href="products.html">Каталог</a> ·
          <span>${mapCategoryToLabel(product.category)}</span>
        </div>
        <div class="product-main-title">
          <h1>${product.title}</h1>
          <div class="product-price-large">${formatPrice(product.price)}</div>
        </div>
        <div class="product-rating">
          ${renderStars(product.rating)}
          <span>${product.rating.toFixed(1)} / 5</span>
        </div>
        <p class="product-short">${product.short}</p>
        <div class="product-attributes">
          <span>${product.badge}</span>
          <span>${mapCategoryToLabel(product.category)}</span>
        </div>
        <div class="product-buy-row">
          <div class="qty-control" aria-label="Количество">
            <button type="button" id="qtyMinus">−</button>
            <span id="qtyValue">1</span>
            <button type="button" id="qtyPlus">+</button>
          </div>
          <button type="button" id="productAddToCart" class="btn-primary">
            В корзину
          </button>
          <button type="button" id="productBuyNow" class="btn-secondary">
            Купить сейчас
          </button>
          <button type="button" id="productFavorite" class="icon-button ${isFavorite ? "active" : ""}" aria-label="Избранное">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
        <div class="product-specs">
          <h3>Характеристики</h3>
          <ul>
            ${product.specs.map((s) => `<li>${s}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;

  let qty = 1;
  const qtyValue = document.getElementById("qtyValue");
  const btnMinus = document.getElementById("qtyMinus");
  const btnPlus = document.getElementById("qtyPlus");
  const btnAdd = document.getElementById("productAddToCart");
  const btnBuyNow = document.getElementById("productBuyNow");
  const btnFav = document.getElementById("productFavorite");

  const mainImg = container.querySelector(".product-images-card img");
  if (mainImg) {
    mainImg.addEventListener("error", () => {
      mainImg.src =
        "https://via.placeholder.com/800x500/111827/9ca3af?text=Gadget+Store";
    });
  }

  btnMinus.addEventListener("click", () => {
    if (qty > 1) {
      qty -= 1;
      qtyValue.textContent = String(qty);
    }
  });

  btnPlus.addEventListener("click", () => {
    qty += 1;
    qtyValue.textContent = String(qty);
  });

  btnAdd.addEventListener("click", () => {
    addToCart(product.id, qty);
  });

  if (btnBuyNow) {
    btnBuyNow.addEventListener("click", () => {
      addToCart(product.id, qty);
      window.location.href = "cart.html";
    });
  }

  btnFav.addEventListener("click", () => {
    toggleFavorite(product.id, btnFav);
  });
}

function mapCategoryToLabel(cat) {
  switch (cat) {
    case "phones":
      return "Телефоны";
    case "laptops":
      return "Ноутбуки";
    case "headphones":
      return "Наушники";
    case "tablets":
      return "Планшеты";
    case "watches":
      return "Смарт‑часы";
    case "accessories":
      return "Аксессуары";
    default:
      return "Гаджеты";
  }
}

function getClientProfile() {
  try {
    const raw = localStorage.getItem(CLIENT_PROFILE_KEY);
    if (!raw) {
      return { name: "", email: "", cardNumber: "", cardExpiry: "" };
    }
    const parsed = JSON.parse(raw);
    return {
      name: parsed.name || "",
      email: parsed.email || "",
      cardNumber: parsed.cardNumber || "",
      cardExpiry: parsed.cardExpiry || ""
    };
  } catch {
    return { name: "", email: "", cardNumber: "", cardExpiry: "" };
  }
}

function saveClientProfile(profile) {
  try {
    localStorage.setItem(
      CLIENT_PROFILE_KEY,
      JSON.stringify({
        name: profile.name || "",
        email: profile.email || "",
        cardNumber: profile.cardNumber || "",
        cardExpiry: profile.cardExpiry || ""
      })
    );
  } catch {
    // если localStorage недоступен — просто не сохраняем
  }
}

function renderAccountContent(role) {
  const container = document.getElementById("accountContent");
  if (!container) return;

  if (role === "admin") {
    const total = PRODUCTS.length;
    const totalValue = PRODUCTS.reduce((sum, p) => sum + p.price, 0);
    const byCategory = {};
    PRODUCTS.forEach((p) => {
      const label = mapCategoryToLabel(p.category);
      byCategory[label] = (byCategory[label] || 0) + 1;
    });

    const categoriesHtml = Object.entries(byCategory)
      .map(([label, count]) => `<li>${label}: ${count} позиций</li>`)
      .join("");

    container.innerHTML = `
      <section class="account-section">
        <h3>Статистика каталога</h3>
        <p>Быстрый обзор ассортимента для администратора.</p>
        <ul class="account-favorites">
          <li>
            <span>Всего товаров</span>
            <span class="account-badge">${total}</span>
          </li>
          <li>
            <span>Суммарная витрина</span>
            <span class="account-badge">${formatPrice(totalValue)}</span>
          </li>
        </ul>
      </section>
      <section class="account-section">
        <h3>Товары по категориям</h3>
        <ul class="account-favorites">
          ${categoriesHtml}
        </ul>
      </section>
      <section class="account-section">
        <h3>Режимы просмотра</h3>
        <p>Для переключения между видом клиента и администратора используйте переключатель «Клиент / Админ» в шапке сайта.</p>
      </section>
    `;
  } else {
    const profile = getClientProfile();
    const favoritesIds = getFavorites();
    const favoriteProducts = favoritesIds
      .map((id) => findProductById(id))
      .filter(Boolean);

    const favoritesHtml = favoriteProducts.length
      ? favoriteProducts
          .map(
            (p) => `
        <li>
          <span>${p.title}</span>
          <a href="product.html?id=${p.id}">Открыть</a>
        </li>`
          )
          .join("")
      : '<li><span>Список избранного пока пуст.</span></li>';

    container.innerHTML = `
      <section class="account-section">
        <h3>Профиль клиента</h3>
        <p>Сохраните данные, чтобы оформлять заказы быстрее (демо-режим, без реальной оплаты).</p>
        <form id="clientProfileForm" class="account-form-grid">
          <input type="text" class="input" id="clientName" placeholder="Имя и фамилия" value="${profile.name}" />
          <input type="email" class="input" id="clientEmail" placeholder="E‑mail" value="${profile.email}" />
          <input type="text" class="input" id="clientCardNumber" placeholder="Номер карты (только демо)" value="${profile.cardNumber}" />
          <input type="text" class="input" id="clientCardExpiry" placeholder="Срок действия (MM/YY)" value="${profile.cardExpiry}" />
          <button type="submit" class="btn-primary">Сохранить профиль</button>
        </form>
      </section>
      <section class="account-section">
        <h3>Избранные товары</h3>
        <ul class="account-favorites">
          ${favoritesHtml}
        </ul>
      </section>
    `;

    const form = document.getElementById("clientProfileForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const updatedProfile = {
          name: document.getElementById("clientName").value.trim(),
          email: document.getElementById("clientEmail").value.trim(),
          cardNumber: document.getElementById("clientCardNumber").value.trim(),
          cardExpiry: document.getElementById("clientCardExpiry").value.trim()
        };
        saveClientProfile(updatedProfile);
        showToast("Профиль сохранён (демо)");
      });
    }
  }
}

function initAccountPanel() {
  // В текущей версии панели аккаунта нет
}

// === КОРЗИНА (cart.html) ===

function initCartPage() {
  const emptyState = document.getElementById("emptyCartState");
  const content = document.getElementById("cartContent");
  const tbody = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const countEl = document.getElementById("cartItemsCount");
  const clearBtn = document.getElementById("clearCartBtn");

  if (!tbody) return;

  let cart = getCart();

  function renderCart() {
    cart = getCart();
    if (!cart.length) {
      if (emptyState) emptyState.hidden = false;
      if (content) content.hidden = true;
      updateCartBadge(cart);
      return;
    }

    if (emptyState) emptyState.hidden = true;
    if (content) content.hidden = false;

    tbody.innerHTML = "";
    let total = 0;
    let itemsCount = 0;

    cart.forEach((item) => {
      const product = findProductById(item.id);
      if (!product) return;

      const rowTotal = product.price * item.qty;
      total += rowTotal;
      itemsCount += item.qty;

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>
          <div class="cart-item-main">
            <img src="${product.image}" alt="${product.title}" />
            <div>
              <div class="cart-item-title">${product.title}</div>
              <div class="cart-item-meta">${mapCategoryToLabel(product.category)}</div>
            </div>
          </div>
        </td>
        <td>${formatPrice(product.price)}</td>
        <td>
          <div class="qty-control">
            <button type="button" data-action="minus">−</button>
            <span>${item.qty}</span>
            <button type="button" data-action="plus">+</button>
          </div>
        </td>
        <td>${formatPrice(rowTotal)}</td>
        <td>
          <button type="button" class="icon-button" aria-label="Удалить" data-action="remove">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </td>
      `;

      // События управления количеством и удалением
      const qtyControl = tr.querySelector(".qty-control");
      const spanQty = qtyControl.querySelector("span");

      qtyControl.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        if (!btn) return;
        const action = btn.dataset.action;
        if (action === "minus" && item.qty > 1) {
          item.qty -= 1;
        } else if (action === "plus") {
          item.qty += 1;
        }
        spanQty.textContent = String(item.qty);
        saveCart(cart);
        renderCart();
      });

      tr.querySelector("[data-action='remove']").addEventListener("click", () => {
        cart = cart.filter((c) => c.id !== item.id);
        saveCart(cart);
        renderCart();
      });

      tbody.appendChild(tr);
    });

    if (totalEl) totalEl.textContent = formatPrice(total);
    if (countEl) countEl.textContent = `${itemsCount} шт.`;
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (!cart.length) return;
      if (confirm("Очистить корзину?")) {
        cart = [];
        saveCart(cart);
        renderCart();
        showToast("Корзина очищена");
      }
    });
  }
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (!cart.length) {
        showToast("Корзина пуста");
        return;
      }
      const name = window.prompt("Введите ваше имя для заказа:");
      if (!name) return;
      const phone = window.prompt("Телефон для связи:");

      let total = 0;
      cart.forEach((item) => {
        const product = findProductById(item.id);
        if (product) total += product.price * item.qty;
      });

      const orders = getOrders();
      orders.push({
        id: Date.now(),
        createdAt: new Date().toISOString(),
        name,
        phone,
        items: cart,
        total,
        status: "Новый"
      });
      saveOrders(orders);
      saveCart([]);
      showToast("Заказ оформлен. Спасибо!");
      renderCart();
    });
  }

  renderCart();
}

// === КОНТАКТЫ / О НАС / CHECKOUT (можно расширить позже) ===

function initContactsPage() {
  const form = document.getElementById("contactsForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Сообщение отправлено. Мы свяжемся с вами.");
    form.reset();
  });
}

function initAboutPage() {
  // Дополнительная логика при необходимости
}

function initCheckoutPage() {
  // Страница оформления заказа сейчас не используется в этом проекте
}

// === ИНИЦИАЛИЗАЦИЯ ===

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  initTheme();
  applyLanguage();
  initHeaderSearch();
  initScrollReveal();

  const page = document.body.dataset.page;

  switch (page) {
    case "index":
      initIndexPage();
      break;
    case "catalog":
      initCatalogPage();
      break;
    case "product":
      initProductPage();
      break;
    case "cart":
      initCartPage();
      break;
    case "checkout":
      initCheckoutPage();
      break;
    case "contacts":
      initContactsPage();
      break;
    case "about":
      initAboutPage();
      break;
    default:
      break;
  }

  initAccountPanel();
  initSettingsModal();
  initClientSidebar();
  initAdminSidebar();
});

fetch('/api/products')
  .then(res => res.json())
  .then(products => {
    const hitsGrid = document.getElementById('hitsGrid');

    if (hitsGrid) {
      hitsGrid.innerHTML = '';

      products.forEach(p => {
        hitsGrid.innerHTML += `
          <article class="product-card">
            <h3>${p.name}</h3>
            <p>${p.description}</p>
            <strong>${p.price} ₸</strong>
            <p>Қоймада: ${p.stock}</p>
          </article>
        `;
      });
    }
  })
  .catch(err => console.error('DB error:', err));
