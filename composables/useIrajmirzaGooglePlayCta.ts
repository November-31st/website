/**
 * تشخیص اندروید برای لینک زندهٔ گوگل پلی؛ بقیهٔ پلتفرم‌ها دکمهٔ غیرفعال + متن شوخ.
 */
export function useIrajmirzaGooglePlayCta() {
  const headers = useRequestHeaders(["user-agent"]);

  const userAgent = computed(() => {
    if (import.meta.client) return navigator.userAgent;
    const h = headers["user-agent"];
    return typeof h === "string" ? h : "";
  });

  const isAndroidPlayCapable = computed(() => /Android/i.test(userAgent.value));

  const playStoreDisabledBanter = computed(() => {
    const ua = userAgent.value;
    if (!ua) {
      return "اندرویدی؟ رفرش؛ نیستی؟ دکمه‌ی بدون باطری است.";
    }
    if (/iPhone|iPad|iPod/i.test(ua)) {
      return "فقط اندروید این دکمه را باز می‌کند؛ روی آیفون و آیپد همان «ورود به بازی» را بزن.";
    }
    return "موس موبایل نیست؛ یا اندروید بخر، یا «ورود به بازی» را بزن.";
  });

  return { isAndroidPlayCapable, playStoreDisabledBanter };
}
