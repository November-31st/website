/**
 * دکمهٔ گوگل پلی: فعلاً غیرفعال (پلی اپ را قبول نکرده).
 * روی اندروید پیام صریح؛ بقیهٔ پلتفرم‌ها متن شوخ «فقط اندروید».
 */
export function useIrajmirzaGooglePlayCta() {
  const headers = useRequestHeaders(["user-agent"]);

  const userAgent = computed(() => {
    if (import.meta.client) return navigator.userAgent;
    const h = headers["user-agent"];
    return typeof h === "string" ? h : "";
  });

  const isAndroid = computed(() => /Android/i.test(userAgent.value));

  /** وقتی true باشد لینک پلی فعال است؛ فعلاً همیشه false. */
  const isAndroidPlayCapable = computed(() => false);

  const playStoreDisabledBanter = computed(() => {
    const ua = userAgent.value;
    if (isAndroid.value) {
      return "گوگل پلی هنوز اپ ما را قبول نکرده؛ لطفاً از «ورود به بازی» (وب) استفاده کن.";
    }
    if (!ua) {
      return "اندرویدی؟ رفرش؛ نیستی؟ دکمه‌ی بدون باطری است.";
    }
    if (/iPhone|iPad|iPod/i.test(ua)) {
      return "فقط اندروید این دکمه را باز می‌کند؛ روی آیفون و آیپد همان «ورود به بازی» را بزن.";
    }
    return "موس موبایل نیست؛ یا اندروید بخر، یا «ورود به بازی» را بزن.";
  });

  return { isAndroid, isAndroidPlayCapable, playStoreDisabledBanter };
}
