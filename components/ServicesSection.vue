<script setup lang="ts">
import { services } from "../constants/landing";
import { toFarsiIndex } from "../utils/farsi";
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
        <span class="eyebrow">کارنامه‌ی شیطنت</span>
        <h2 class="section-title mt-5 text-balance">
          سه دسته،
          <span class="text-brand">بقیه‌اش زیر فرش</span>
        </h2>
        <p class="mt-5 text-lg text-ink-300">
          نگفتیم فقط سه‌تاست. ولی برای اینکه شما گیج نشوید (و ما عاقل به‌نظر
          بیاییم)، تظاهر می‌کنیم که الان سه دسته داریم.
        </p>
      </div>

      <div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(s, i) in services"
          :key="s.title"
          class="card group flex flex-col"
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
              <svg
                v-if="s.icon === 'apps'"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
              <svg
                v-else-if="s.icon === 'hardware'"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="9" y="9" width="6" height="6" />
                <path
                  d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M12 3l1.9 4.6L18.5 9l-3.7 3 1.2 4.9L12 14.8 8 17l1.2-5L5.5 9l4.6-1.4L12 3z"
                />
              </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              {{ h }}
            </li>
          </ul>

          <div
            class="flex items-center justify-between border-t border-white/5 mt-6 pt-5"
          >
            <span class="text-[11px] text-ink-400">
              {{ toFarsiIndex(i + 1) }} / {{ toFarsiIndex(services.length) }}
            </span>
            <a
              href="#contact"
              class="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-white"
            >
              بیشتر بپرس
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="rotate-180"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
