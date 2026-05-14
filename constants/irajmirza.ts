/**
 * لینک «ورود به بازی» (استور، وب، یا هر جایی که بازی منتشر می‌شود).
 * وقتی آدرس نهایی را داشتی همین‌جا را عوض کن.
 */
export const irajmirzaGameUrl = "https://pwa.irajmirza.nov31st.online";

/** کارت شناور کنار ماکت موبایل (مثل اعلان فیک). */
export type IrajmirzaPhoneBubble = {
  title: string;
  body: string;
  /** نام آیکن برای `@nuxt/icon` (پیش‌فرض در کامپوننت: `lucide:bell`). */
  icon?: string;
  /** کلاس‌های اضافه برای موقعیت/عرض (به کلاس‌های پایه‌ی کارت اضافه می‌شود). */
  positionClass?: string;
};

export type IrajmirzaAlternatingBlock = {
  id: string;
  tag: string;
  titleBefore: string;
  /** بخشی که با `text-brand` برجسته می‌شود؛ خالی یعنی بدون هایلایت. */
  titleHighlight: string;
  titleAfter: string;
  body: string;
  flexRowClass: string;
  bubble: IrajmirzaPhoneBubble | null;
  phoneInnerSrc: string;
  phoneInnerAlt: string;
  moreHref: string;
  moreLabel: string;
};

export const irajmirzaAlternatingBlocks = [
  {
    id: "feature-a",
    tag: "بدون ضمانت",
    titleBefore: "یک «تجربه» ساختیم که ",
    titleHighlight: "معلوم نیست چیه",
    titleAfter: "",
    body: "قرار بود حس نوستالژی بدهد؛ فعلاً فقط حس می‌دهد وقتت را دادی به چیزی که هنوز در بازی است. اگر دوست داری با خیال راحت مقصر را اینترنت بدانی، این بخش برای توست.",
    /** ردیف دسکتاپ: ترتیب DOM همیشه متن → موبایل؛ این کلاس جهت flex را عوض می‌کند. */
    flexRowClass: "flex-row",
    bubble: null,
    phoneInnerSrc: "/images/texture/carpet.png",
    phoneInnerAlt: "تصویر نمونه در قاب موبایل",
    moreHref: "#faq",
    moreLabel: "بیشتر بدان که هنوز چیزی نمی‌دانی",
  },
  {
    id: "feature-b",
    tag: "هشدار مسخره",
    titleBefore: "اعلان‌ها و ",
    titleHighlight: "وسوسه‌های",
    titleAfter: " وسط شب",
    body: "یادآوری می‌فرستیم که «برگرد»، بعد خودمان هم نمی‌دانیم برای چه. اگر صدای اعلان اعصابت را خورد، تبریک؛ یعنی دقیقاً همان چیزی است که برنامه‌ریزی کرده بودیم. نه واقعاً، ولی خوب به نظر می‌رسد.",
    flexRowClass: "flex-row-reverse",
    bubble: {
      title: "یادآوری بی‌ربط",
      body: "برگرد و وقتت را تلف کن. ما اینجاییم تا تشویق کنیم، نه نجات.",
      icon: "lucide:bell",
      positionClass: "",
    },
    phoneInnerSrc: "/images/texture/carpet.png",
    phoneInnerAlt: "تصویر نمونه در قاب موبایل",
    moreHref: "#stories",
    moreLabel: "نظرهای مضحک را ببین",
  },
] as const satisfies readonly IrajmirzaAlternatingBlock[];

export type IrajmirzaTestimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  /** تعداد ستاره‌ی نمایشی (۱ تا ۵). */
  stars: number;
};

export const irajmirzaTestimonials = [
  {
    name: "کاربر ناشناس ۷۳",
    role: "قربانی دمو",
    quote:
      "فکر کردم ده دقیقه می‌مانم؛ سه ساعت بعد هنوز دارم به دیوار نگاه می‌کنم. پیشنهاد نمی‌کنم، ولی خودم دوباره نصب کردم.",
    avatar: "/images/texture/ashtray.png",
    stars: 5,
  },
  {
    name: "م. ر.",
    role: "منتقد دلسوز",
    quote:
      "به دوستم گفتم هنر است. او خندید. الان رابطه‌مان سرد شده. حداقل بازی جالب بود.",
    avatar: "/images/texture/steel_plate.png",
    stars: 4,
  },
  {
    name: "یکی از تیم",
    role: "بدون اختیار امضا",
    quote:
      "اگر باگی دیدید، ما هم دیدیم؛ فقط اولویت‌مان رفعِ باگ‌هایی است که جلوی قهوه‌مان را بگیرد.",
    avatar: "/images/texture/copper_plate.png",
    stars: 5,
  },
] as const satisfies readonly IrajmirzaTestimonial[];

export type IrajmirzaFeatureCard = {
  icon: string;
  title: string;
  body: string;
};

export const irajmirzaFeatureCards = [
  {
    icon: "lucide:gamepad-2",
    title: "گیم‌پلی",
    body: "قرار بود «اعتیادآور» باشد. فعلاً فقط اعصاب‌ات را دوستانه امتحان می‌کند.",
  },
  {
    icon: "lucide:music-2",
    title: "صدا و تصویر",
    body: "اگر چیزی گوش‌ات را اذیت کرد، احتمالاً عمدی بوده؛ وگرنه که اشتباه مهندسی است و ما آن را انکار می‌کنیم.",
  },
  {
    icon: "lucide:gift",
    title: "رایگان بودن",
    body: "فعلاً بله؛ یعنی تا وقتی کسی پول ندهد و ما را از این نمایش عمومی خلاص نکند.",
  },
  {
    icon: "lucide:bug",
    title: "پشتیبانی",
    body: "اگر باگی دیدی، بنویس؛ شاید خواندیم، شاید هم نخندیدیم. تضمینی در کار نیست، مثلِ بقیه‌ی زندگی.",
  },
] as const satisfies readonly IrajmirzaFeatureCard[];

export const irajmirzaFeatureShowcasePhone = {
  innerSrc: "/images/texture/rug.png",
  innerAlt: "بافت نمونه در قاب موبایل",
} as const;

export type IrajmirzaScreenshot = {
  /** وقتی فایل را در `public` گذاشتی، مسیر را اینجا بنویس (مثلاً `/images/irajmirza/in-hand-cafe.png`). */
  src?: string;
  /** توضیح صحنه برای نابینایان: دست، محیط، و آن‌چه روی صفحه دیده می‌شود. */
  alt: string;
  /** عنوان کوتاه زیر عکس: کاربر کجا و در چه حالی گوشی را باز کرده. */
  situation: string;
};

/**
 * عکس‌های سبک زندگی: بازی روی صفحه، داخل دست و در موقعیت واقعی.
 * `src` را وقتی عکس‌ها را گرفتی پر کن.
 */
export const irajmirzaScreenshots: readonly IrajmirzaScreenshot[] = [
  {
    situation: "کافه، وسط حرفی که دیگران جدی گرفتند",
    alt: "دست روی میز کافه گوشی را نگه داشته؛ صفحهٔ بازی ایرج‌میرزا روشن است",
  },
  {
    situation: "اتوبوس شلوغ، وسط راه برگشت",
    alt: "مسافر در اتوبوس با یک دست گوشی را گرفته و بازی را روی صفحه می‌بیند",
  },
  {
    situation: "آشپزخانه، بین دو بار چای دم کشیدن",
    alt: "کنار گاز و کتری، کاربر گوشی را در دست دارد و بازی باز است",
  },
  {
    situation: "نیمه‌شب، زیر نور کم‌رمز خوابگاه",
    alt: "در تاریکی با نور ملایم صفحه، دست‌ها گوشی را نگه داشته‌اند و بازی دیده می‌شود",
  },
  {
    situation: "پارک نیمه‌خالی، روی نیمکت",
    alt: "روی نیمکت پارک نشسته و با هر دو دست گوشی را گرفته؛ صفحهٔ بازی در فضای باز",
  },
];

export type IrajmirzaFaqItem = {
  title: string;
  content: string;
};

export const irajmirzaFaqItems = [
  {
    title: "این بازی دقیقاً چیست؟",
    content:
      "یک چیز روی موبایل. بقیه‌اش را خودت کشف کن؛ ما هم اگر فهمیدیم بهت می‌گوییم.",
  },
  {
    title: "چرا اسم شاعر است؟",
    content:
      "چون کسی فکر کرده جذاب است. اگر ناراحتی، نامه بنویس به همان کسی؛ ما فقط اینجا ایستاده‌ایم و قهوه می‌خوریم.",
  },
  {
    title: "پولی می‌شود؟",
    content:
      "اگر بشود، اول خودمان می‌فهمیم. فعلاً بازی است؛ یعنی «رایگان تا وقتی که نشود».",
  },
  {
    title: "پشتیبانی دارید؟",
    content:
      "تعریفی که در دنیای واقعی از پشتیبانی دارید را اینجا فراموش کن. ما «بهترین تلاش» را می‌کنیم، آن هم بعضی وقت‌ها.",
  },
] as const satisfies readonly IrajmirzaFaqItem[];
