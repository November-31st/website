const IRAJMIRZA_PWA_ORIGIN = "https://pwa.irajmirza.nov31st.online";
const NOV31ST_WEBSITE_ORIGIN = "https://nov31st.online";

/** تصویر Open Graph / Twitter Card (`public/products/apps/irajmirza/og.webp`). */
export const irajmirzaOgImage = `${NOV31ST_WEBSITE_ORIGIN}/products/apps/irajmirza/og.webp`;

export type IrajmirzaGameUtmContent = "hero" | "download";

/**
 * لینک «ورود به بازی» (PWA) با UTM برای آنالیتیکس.
 * `utm_content` را برای هر دکمه جدا بگذار (مثلاً `hero`، `download`).
 */
export function irajmirzaGamePlayUrl(
  utmContent: IrajmirzaGameUtmContent = "hero"
) {
  const url = new URL(IRAJMIRZA_PWA_ORIGIN);
  url.searchParams.set("utm_source", "nov31st");
  url.searchParams.set("utm_medium", "website");
  url.searchParams.set("utm_campaign", "irajmirza");
  url.searchParams.set("utm_content", utmContent);
  return url.toString();
}

/** صفحهٔ فهرست گوگل پلی؛ `id` را با شناسهٔ واقعیٔ اپ عوض کن. */
export const irajmirzaGooglePlayUrl =
  "https://play.google.com/store/apps/details?id=online.nov31st.irajmirza";

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
    id: "feature-no-guarantee",
    tag: "بدون ضمانت",
    titleBefore: "یک «تجربه» ساختیم که ",
    titleHighlight: "معلوم نیست چیه",
    titleAfter: "",
    body: "قرار بود حس نوستالژی بدهد؛ فعلاً فقط حس می‌دهد وقتت را دادی به چیزی که هنوز در بازی است. اگر دوست داری با خیال راحت مقصر را اینترنت بدانی، این بخش برای توست.",
    /** ردیف دسکتاپ: ترتیب DOM همیشه متن → موبایل؛ این کلاس جهت flex را عوض می‌کند. */
    flexRowClass: "flex-row",
    bubble: null,
    phoneInnerSrc: "/products/apps/irajmirza/screenshots/fal.webp",
    phoneInnerAlt: "تصویر نمونه در قاب موبایل",
    moreHref: "#faq",
    moreLabel: "بیشتر بدان که هنوز چیزی نمی‌دانی",
  },
  {
    id: "feature-adults-only",
    tag: "نه برای بچه‌ها",
    titleBefore: "فقط برای ",
    titleHighlight: "بزرگسالان",
    titleAfter: "",
    body: "اینجا فحش جای شعر را گرفته و لحن تند است؛ برای مادر بزرگ، جلسهٔ خانوادگی و «بچه‌های بامزه» مناسب نیست. فکر می‌کنی با سن قانونی می‌توانی تحمل کنی؟ خوب، اولین کلمه سرت را گرم می‌کند.",
    flexRowClass: "flex-row-reverse",
    bubble: {
      title: "خلاصه برای عجول‌ها",
      body: "زبان صریح است؛ اگر هنوز والدینت اسم اپ را از روی گوشی‌ات می‌خوانند، برگرد به تکالیف.",
      icon: "lucide:shield-alert",
      positionClass: "",
    },
    phoneInnerSrc: "/products/apps/irajmirza/screenshots/adults-only.webp",
    phoneInnerAlt: "تصویر نمونه در قاب موبایل",
    moreHref: "#faq",
    moreLabel: "هنوز می‌خواهی؟ سوال‌ها را بخوان",
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
    avatar: "/products/apps/irajmirza/testimonials/t1.webp",
    stars: 5,
  },
  {
    name: "م. ر.",
    role: "منتقد دلسوز",
    quote:
      "به دوستم گفتم هنر است. او خندید. الان رابطه‌مان سرد شده. حداقل بازی جالب بود.",
    avatar: "/products/apps/irajmirza/testimonials/t2.webp",
    stars: 4,
  },
  {
    name: "یکی از تیم",
    role: "بدون اختیار امضا",
    quote:
      "اگر باگی دیدید، ما هم دیدیم؛ فقط اولویت‌مان رفعِ باگ‌هایی است که جلوی قهوه‌مان را بگیرد.",
    avatar: "/products/apps/irajmirza/testimonials/t3.webp",
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
    icon: "lucide:volume-x",
    title: "تصویر، بدون موسیقی",
    body: "ساندترک نداریم؛ سکوت هم بخشی از تجربه است—یا حداقل کم بودجه‌ای ما. اگر چیزی دیدی که گیجت کرد، مقصر چشم‌هایت است.",
  },
  {
    icon: "lucide:coins",
    title: "سکه‌ها",
    body: "مرحله را رد کن، سکه بگیر؛ بعضی قابلیت‌ها با همان سکه باز می‌شوند—نه با پول واقعی، با تلاش.",
  },
  {
    icon: "lucide:bug",
    title: "پشتیبانی",
    body: "اگر باگی دیدی، بنویس؛ شاید خواندیم، شاید هم نخندیدیم. تضمینی در کار نیست، مثلِ بقیه‌ی زندگی.",
  },
] as const satisfies readonly IrajmirzaFeatureCard[];

export const irajmirzaFeatureShowcasePhone = {
  innerSrc: "/products/apps/irajmirza/screenshots/seasons.webp",
  innerAlt: "نمونه در قاب موبایل",
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
    src: "/products/apps/irajmirza/in_the_wild/cafe.webp",
    situation: "کافه، وسط حرفی که دیگران جدی گرفتند",
    alt: "دست روی میز کافه گوشی را نگه داشته؛ صفحهٔ بازی ایرج‌میرزا روشن است",
  },
  {
    src: "/products/apps/irajmirza/in_the_wild/bus.webp",
    situation: "اتوبوس شلوغ، وسط راه برگشت",
    alt: "مسافر در اتوبوس با یک دست گوشی را گرفته و بازی را روی صفحه می‌بیند",
  },
  {
    src: "/products/apps/irajmirza/in_the_wild/kitchen.webp",
    situation: "آشپزخانه، حین انتظار آماده شدن غذا",
    alt: "کنار گاز، کاربر گوشی را در دست دارد و بازی باز است",
  },
  {
    src: "/products/apps/irajmirza/in_the_wild/park.webp",
    situation: "پارک نیمه‌خالی، روی نیمکت",
    alt: "روی نیمکت پارک نشسته و با هر دو دست گوشی را گرفته؛ صفحهٔ بازی در فضای باز",
  },
  {
    src: "/products/apps/irajmirza/in_the_wild/dorm.webp",
    situation: "نیمه‌شب، زیر نور چراغ خوابگاه",
    alt: "در تاریکی با نور ملایم صفحه، دست‌ها گوشی را نگه داشته‌اند و بازی دیده می‌شود",
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
      "ما کلمه می‌گذاریم، تو حروف را مثل نخ کاموا به هم می‌کشی تا بفهمی ما چه گفتیم. فکر می‌کنی ساده است؟ خوب، همان‌جا اشتباه می‌کنی.",
  },
  {
    title: "چرا اسم شاعر است؟",
    content:
      "چون ایرج‌میرزا خودش هم تند زبان بود. اگر حس کردی شبیه همان بازی معروف حدس‌کلمه‌ای است که ازش پارودی ساخته‌ایم، حس درستی داری—فقط این‌جا رکیک‌تر است.",
  },
  {
    title: "سکه‌ها چطور کار می‌کنند؟",
    content:
      "پول داخل بازی است: هر مرحله‌ای که رد کنی سکه می‌دهد؛ برای بعضی ویژگی‌ها همان سکه را خرج می‌کنی. از کیف پول واقعی چیزی کم نمی‌شود—فقط وقت و حوصله.",
  },
  {
    title: "پولی می‌شود؟",
    content:
      "نصب و بازی رایگان است؛ داخلش اقتصاد سکه داری. خرید با پول واقعی فعلاً بخشی از این داستان نیست—اگر روزی شد، خودمان هم تعجب می‌کنیم.",
  },
  {
    title: "پشتیبانی دارید؟",
    content:
      "تعریفی که در دنیای واقعی از پشتیبانی دارید را اینجا فراموش کن. ما «بهترین تلاش» را می‌کنیم، آن هم بعضی وقت‌ها.",
  },
] as const satisfies readonly IrajmirzaFaqItem[];
