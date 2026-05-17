<script setup lang="ts">
import { services } from "@/constants/landing";
import { toFarsiIndex } from "@/utils/farsi";
</script>

<template>
  <section id="services" class="relative py-28 sm:py-36">
    <div
      aria-hidden="true"
      class="absolute inset-x-0 top-0 -z-10 h-full stroke-grid opacity-[0.15]"
      style="mask-image: linear-gradient(180deg, black, transparent 80%)"
    />

    <div class="container-page">
      <div class="mx-auto max-w-3xl text-center">
        <UiEyebrow>کارنامه‌ی شیطنت</UiEyebrow>
        <UiTitle class="mt-5">
          سه دسته،
          <span class="text-brand">بقیه‌اش زیر فرش</span>
        </UiTitle>
        <p class="mt-5 text-lg text-ink-300">
          نگفتیم فقط سه‌تاست. ولی برای اینکه شما گیج نشوید (و ما عاقل به‌نظر
          بیاییم)، تظاهر می‌کنیم که الان سه دسته داریم.
        </p>
      </div>

      <div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UiCard
          v-for="(s, i) in services"
          :key="s.title"
          tag="article"
          class="group flex flex-col"
          :class="s.featured ? 'lg:row-span-1 lg:col-span-1' : ''"
        >
          <div
            aria-hidden="true"
            class="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          >
            <div
              class="absolute -top-20 right-1/2 h-40 w-72 translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
            />
          </div>

          <div class="flex items-center justify-between">
            <div
              class="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand ring-1 ring-inset ring-brand/30"
            >
              <Icon
                v-if="s.icon === 'apps'"
                name="lucide:layout-grid"
                class="size-[22px]"
              />
              <Icon
                v-else-if="s.icon === 'hardware'"
                name="lucide:cpu"
                class="size-[22px]"
              />
              <Icon v-else name="lucide:sparkles" class="size-[22px]" />
            </div>
            <span
              class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-ink-300"
            >
              {{ s.tag }}
            </span>
          </div>

          <h3 class="mt-7 text-2xl font-black text-white sm:text-3xl">
            {{ s.title }}
          </h3>
          <p class="mt-4 text-sm leading-8 text-ink-300">
            {{ s.desc }}
          </p>

          <ul class="mt-6 space-y-2.5">
            <li
              v-for="h in s.highlights"
              :key="h"
              class="flex items-center gap-3 text-sm text-ink-200"
            >
              <span
                class="grid h-5 w-5 place-items-center rounded-full bg-brand/15 text-brand"
              >
                <Icon name="lucide:check" class="size-3 stroke-3" />
              </span>
              {{ h }}
            </li>
          </ul>

          <div
            class="flex items-center justify-between border-t border-white/5 mt-6 pt-5"
          >
            <span class="text-[11px] text-ink-400">
              {{ toFarsiIndex(services.length) }} / {{ toFarsiIndex(i + 1) }}
            </span>
            <NuxtLink
              to="/#contact"
              title="رفتن به بخش تماس"
              class="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-white"
            >
              بیشتر بپرس
              <Icon
                name="lucide:chevron-right"
                class="size-3.5 shrink-0 rotate-180"
              />
            </NuxtLink>
          </div>
        </UiCard>
      </div>
    </div>
  </section>
</template>
