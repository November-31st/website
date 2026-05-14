export type ServiceIcon = "apps" | "hardware" | "spark";

export type LandingService = {
  title: string;
  desc: string;
  tag: string;
  icon: ServiceIcon;
  highlights: string[];
  featured?: boolean;
};

export const heroBadges = [
  "اپلیکیشن",
  "سخت‌افزار",
  "هوش مصنوعی (نه شعارش)",
  "IoT",
  "وب",
  "موبایل",
  "رباتیک",
  "و هرچیز دیگری که پولش جور شود",
] as const;

export const heroStats = [
  { label: "محصول روانه‌ی بازار", value: "۱۷+" },
  { label: "کشور درگیر", value: "۸+" },
  { label: "کاربر گرفتار", value: "۲۴۰+ هزار" },
  { label: "سال شب‌بیداری", value: "۱۲+" },
] as const;

export const aboutPoints = [
  {
    title: "ایده‌های قاطی",
    body: "هرچه آدم‌های عاقل به آن گفتند «نه»، ما لپ‌تاپ را باز کردیم و شروع کردیم.",
  },
  {
    title: "مهندسی، نه شعار",
    body: "پشت این مسخره‌بازی، یک‌مشت آدم هستند که واقعاً می‌نشینند و کد می‌زنند. عجیب است، ولی واقعی.",
  },
  {
    title: "بدون پاورپوینت",
    body: "نه اسلاید نشانت می‌دهیم، نه «رودمپ ۲۰۳۰». همان روزی که سفارش بدهی، یکی شروع می‌کند به دست‌مالی کیبورد.",
  },
] as const;

export const aboutStats = [
  { label: "پروژه‌ی زنده", value: "۱۷+" },
  { label: "مشتری راضی", value: "۱۸" },
  { label: "نفر بی‌خواب", value: "۹" },
] as const;

export const services: LandingService[] = [
  {
    title: "اپلیکیشن",
    tag: "موبایل و وب",
    desc: "از آن اپ‌هایی که آدم باز می‌کند و گم می‌شود؛ نه از آن‌هایی که دانلود می‌شود، یک هفته باز نمی‌شود و بعد پاک.",
    icon: "apps",
    highlights: [
      "iOS و Android",
      "وب اپلیکیشن، نه قرارداد شش‌ماهه",
      "طراحی محصول، نه فیگمای تزئینی",
    ],
    featured: true,
  },
  {
    title: "سخت‌افزار",
    tag: "دستگاه‌های هوشمند",
    desc: "برد، سنسور، فرمور و دستگاه‌هایی که هم کار می‌کنند، هم گاهی دود می‌کنند — ولی فقط چند نمونه‌ی اول، قول می‌دهیم.",
    icon: "hardware",
    highlights: [
      "IoT و سنسور",
      "برد سفارشی، چند نمونه‌ی اول",
      "فرمور و یکپارچگی نرم‌افزاری",
    ],
  },
  {
    title: "و خیلی چیزهای دیگر",
    tag: "هرچه فکرش را بکنی",
    desc: "هوش مصنوعی، ربات و تجربه‌هایی که هنوز اسم ندارند. اگر اسم دارد احتمالاً ساخته‌ایم، اگر ندارد خودمان اسمش را می‌گذاریم.",
    icon: "spark",
    highlights: [
      "هوش مصنوعی، نه شعار «بلاکچین»",
      "رباتیک و اتوماسیون فیزیکی",
      "تجربه‌های تعاملی-فیزیکی",
    ],
  },
];

export const numbers = [
  {
    value: "۱۷+",
    label: "محصول منتشر شده",
    note: "بعضی‌هایشان هنوز کار می‌کنند.",
  },
  {
    value: "۲۴۰+ هزار",
    label: "کاربر فعال",
    note: "که هنوز پول‌شان را پس نخواسته‌اند. عجیب است.",
  },
  {
    value: "۱۲+",
    label: "سال تجربه",
    note: "و چند هزار شب که ترجیح می‌دهیم یادشان نباشد.",
  },
  {
    value: "۹۹٪",
    label: "لبخند تیم",
    note: "آن یک درصد را هم با قهوه درست می‌کنیم.",
  },
] as const;

export const contactLinks = [
  {
    label: "ایمیل عمومی (اسپم نزن، خواهش)",
    value: "hi@nov31st.online",
    href: "mailto:hi@nov31st.online",
  },
  {
    label: "همکاری تجاری (با بودجه، نه ایده‌ی خالی)",
    value: "biz@nov31st.online",
    href: "mailto:biz@nov31st.online",
  },
  {
    label: "گیت‌هاب",
    value: "github.com/November-31st",
    href: "https://github.com/November-31st",
  },
] as const;

export const footerGroups = [
  {
    title: "بنیاد",
    items: [
      { label: "درباره ما", href: "/#about" },
      { label: "خدمات", href: "/#services" },
      { label: "تماس", href: "/#contact" },
    ],
  },
  {
    title: "محصولات",
    items: [
      { label: "اپلیکیشن‌ها", href: "/#services" },
      { label: "سخت‌افزار", href: "/#services" },
      { label: "پروژه‌های آزمایشی", href: "/#services" },
    ],
  },
  {
    title: "منابع",
    items: [
      { label: "وبلاگ (شاید روزی)", href: "/" },
      { label: "مستندات (همان شاید)", href: "/" },
      { label: "بزن بریم", href: "/#contact" },
    ],
  },
] as const;
