<script setup lang="ts">
import PhoneMockup from "./PhoneMockup.vue";
import {
  irajmirzaFeatureCards,
  irajmirzaFeatureShowcasePhone,
} from "@/constants/irajmirza";
</script>

<template>
  <section aria-label="ویترین ویژگی‌ها" class="py-18 lg:py-32">
    <div class="container-page">
      <div
        class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start"
      >
        <div class="text-center lg:text-right">
          <UiTitle>
            یک قاب، <span class="text-brand">هزار بهانه</span>
          </UiTitle>
          <p class="mt-4 leading-8 text-ink-400">
            اینجا جایی است که می‌گوییم «همه‌چیز تحت کنترل است» و در همان حال سه
            باگ پشت صحنه رقص می‌کنند. اگر این بخش را باور کردی، بقیه‌ی سایت را
            هم باور کن؛ حداقل یکدست است.
          </p>
          <div class="mt-8 grid grid-cols-2 gap-3">
            <UiCard
              v-for="card in irajmirzaFeatureCards"
              :key="card.title"
              variant="stat"
              tag="div"
              class="group text-right"
            >
              <div
                aria-hidden="true"
                class="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-brand/10 blur-2xl transition-opacity group-hover:opacity-100"
              />
              <div
                class="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand ring-1 ring-inset ring-brand/30"
              >
                <Icon :name="card.icon" class="size-[22px] stroke-2" />
              </div>
              <p class="mt-6 text-sm font-medium text-white">
                {{ card.title }}
              </p>
              <p class="mt-1 text-xs leading-relaxed text-ink-300">
                {{ card.body }}
              </p>
            </UiCard>
          </div>
        </div>
        <div class="flex justify-center lg:justify-end">
          <PhoneMockup
            :inner-src="irajmirzaFeatureShowcasePhone.innerSrc"
            :inner-alt="irajmirzaFeatureShowcasePhone.innerAlt"
          />
        </div>
      </div>
    </div>
  </section>
</template>
