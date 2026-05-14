<script setup lang="ts">
import PhoneMockup from "./PhoneMockup.vue";
import { irajmirzaAlternatingBlocks } from "@/constants/irajmirza";
</script>

<template>
  <template v-for="block in irajmirzaAlternatingBlocks" :key="block.id">
    <section
      :id="block.id"
      class="relative scroll-mt-24 bg-ink-900/40 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div
        class="relative mx-auto flex max-w-6xl items-center gap-12 lg:gap-16"
        :class="block.flexRowClass"
      >
        <div class="md:basis-2/3 text-center lg:text-right">
          <div class="flex justify-center lg:justify-start">
            <UiEyebrow>{{ block.tag }}</UiEyebrow>
          </div>
          <UiTitle class="mt-4">
            {{ block.titleBefore
            }}<span v-if="block.titleHighlight" class="text-brand">{{
              block.titleHighlight
            }}</span
            >{{ block.titleAfter }}
          </UiTitle>
          <p class="mt-4 leading-8 text-ink-400">
            {{ block.body }}
          </p>
          <a
            :href="block.moreHref"
            class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-300"
          >
            {{ block.moreLabel }}
            <Icon
              name="lucide:chevron-left"
              class="size-4 shrink-0 stroke-2"
              aria-hidden="true"
            />
          </a>
        </div>

        <div class="hidden md:block md:px-12 md:basis-1/3 relative">
          <PhoneMockup
            :inner-src="block.phoneInnerSrc"
            :inner-alt="block.phoneInnerAlt"
          />
          <div
            v-if="block.bubble"
            class="absolute -inset-s-4 top-12 z-10 max-w-44 rounded-xl border border-white/15 bg-ink-900/95 p-3 text-xs text-ink-300 shadow-xl backdrop-blur-sm sm:-inset-s-8"
            :class="block.bubble.positionClass"
          >
            <div class="flex items-center gap-2 font-semibold text-brand-200">
              <Icon
                :name="block.bubble.icon ?? 'lucide:bell'"
                class="size-4 shrink-0 stroke-2"
                aria-hidden="true"
              />
              {{ block.bubble.title }}
            </div>
            <p class="mt-1 text-[0.7rem] leading-relaxed text-ink-500">
              {{ block.bubble.body }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
</template>
