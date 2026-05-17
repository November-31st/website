<script setup lang="ts">
import {
  irajmirzaGamePlayUrl,
  irajmirzaGooglePlayUrl,
} from "@/constants/irajmirza";

const { isAndroid, isAndroidPlayCapable, playStoreDisabledBanter } =
  useIrajmirzaGooglePlayCta();

const quickFacts = [
  {
    icon: "lucide:globe",
    label: "مرورگر کافی است",
    value: "نسخهٔ وب؛ اگر وسط بازی عاشق شدی، بعداً نصبش کن.",
  },
  {
    icon: "lucide:smartphone",
    label: "اندروید؟ فعلاً وب",
    value:
      "گوگل پلی هنوز اپ را قبول نکرده؛ روی اندروید همان «ورود به بازی» را بزن. آیفون و دسکتاپ هم فقط وب؛ اپ‌استور اگر بیاید بعداً خبرش را می‌دهیم.",
  },
  {
    icon: "lucide:shield-alert",
    label: "تضمین نمی‌دهیم",
    value:
      "نه لذت، نه سکته؛ فقط یک تجربه‌ی موبایلی که خودت باید حدس بزنی چیست.",
  },
] as const;
</script>

<template>
  <section
    id="download"
    aria-label="ورود به بازی ایرج‌میرزا"
    class="scroll-mt-24 px-4 py-18 sm:px-6 sm:py-32"
  >
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-[32px] border border-brand/30 bg-linear-to-br from-brand/20 via-ink-900 to-ink-950 p-10 shadow-glow sm:p-16"
      >
        <div
          aria-hidden="true"
          class="absolute inset-0 -z-10 opacity-30 stroke-grid"
        />
        <div
          aria-hidden="true"
          class="pointer-events-none absolute -top-32 right-0 h-64 w-64 rounded-full bg-brand/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          class="pointer-events-none absolute -bottom-32 left-0 h-64 w-64 rounded-full bg-brand/20 blur-3xl"
        />

        <div
          class="relative grid items-center gap-10 lg:grid-cols-[1.35fr_1fr]"
        >
          <div class="text-center lg:text-right">
            <UiEyebrow pulse>آخر خط تبلیغات؛ نوبت کلیک است</UiEyebrow>
            <UiTitle variant="promo" class="mt-5">
              برو توش؛ اگر پشیمان شدی،
              <span class="text-brand">حداقل حرف برای گفتن داری</span>
            </UiTitle>
            <p
              class="mx-auto mt-5 max-w-xl text-base leading-8 text-ink-200 sm:text-lg lg:mx-0"
            >
              همین‌جا مسیر بازی است؛ اندروید و بقیه فعلاً از وب؛ پلی وقتی قبول
              کرد خبر می‌دهیم؛ بدون فیلم سینمایی، بدون قول «فردا جهان عوض
              می‌شود». فقط یک تب جدید که شاید ببندی قبل از این‌که بفهمی چرا.
            </p>

            <div
              class="mt-8 flex flex-col flex-wrap items-stretch justify-center gap-3 sm:flex-row sm:items-start lg:justify-start"
            >
              <div class="flex min-w-0 flex-1 flex-col gap-2 sm:max-w-sm">
                <UiButton
                  :to="irajmirzaGooglePlayUrl"
                  :disabled="!isAndroidPlayCapable"
                  v-bind="
                    isAndroidPlayCapable
                      ? {
                          external: true,
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        }
                      : {}
                  "
                  :title="
                    isAndroidPlayCapable
                      ? 'دانلود از گوگل پلی'
                      : isAndroid
                      ? 'گوگل پلی هنوز اپ را قبول نکرده'
                      : 'گوگل پلی فقط روی اندروید'
                  "
                >
                  دانلود از گوگل پلی
                  <Icon
                    v-if="isAndroidPlayCapable"
                    name="lucide:external-link"
                    class="size-4 shrink-0 stroke-[2.5]"
                  />
                  <Icon
                    v-else
                    name="lucide:ban"
                    class="size-4 shrink-0 stroke-[2.5]"
                    aria-hidden="true"
                  />
                </UiButton>
                <p
                  class="text-right text-xs leading-relaxed text-ink-400 sm:text-sm"
                >
                  {{ playStoreDisabledBanter }}
                </p>
              </div>
              <UiButton
                :to="irajmirzaGamePlayUrl('download')"
                external
                target="_blank"
                rel="noopener noreferrer"
                title="ورود به بازی ایرج‌میرزا (وب)"
              >
                ورود به بازی
                <Icon
                  name="lucide:external-link"
                  class="size-4 shrink-0 stroke-[2.5]"
                />
              </UiButton>
              <UiButton to="#faq" variant="ghost" title="رفتن به سوالات متداول">
                اول سوال‌ها را بخوان
                <Icon
                  name="lucide:help-circle"
                  class="size-4 shrink-0 stroke-[2.5]"
                />
              </UiButton>
            </div>
          </div>

          <div class="relative">
            <div
              class="rounded-2xl border border-white/10 bg-ink-950/70 p-6 backdrop-blur-sm"
            >
              <p class="text-xs font-medium text-ink-400">قبل از کلیک</p>
              <div class="mt-5 space-y-4">
                <div
                  v-for="(row, i) in quickFacts"
                  :key="i"
                  class="flex gap-3 rounded-xl border border-white/5 bg-white/2 p-4 text-right transition hover:border-brand/40"
                >
                  <div
                    class="grid size-10 shrink-0 place-items-center rounded-lg bg-brand/15 text-brand ring-1 ring-inset ring-brand/25"
                  >
                    <Icon :name="row.icon" class="size-4 stroke-2" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-[11px] text-ink-400">{{ row.label }}</p>
                    <p
                      class="mt-1 text-sm font-medium leading-relaxed text-white"
                    >
                      {{ row.value }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
