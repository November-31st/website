<script setup lang="ts">
export type UiAccordionItem = {
  title: string;
  content: string;
};

const props = defineProps<{
  items: readonly UiAccordionItem[];
  /** Which panel is expanded initially (`null` = all closed). */
  defaultOpenIndex?: number | null;
}>();

const uid = useId();

const openIndex = ref<number | null>(
  typeof props.defaultOpenIndex === "number" ? props.defaultOpenIndex : null
);

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>

<template>
  <div class="space-y-2">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="overflow-hidden rounded-xl border border-white/10 bg-ink-900/50"
    >
      <button
        type="button"
        class="flex w-full items-center justify-between gap-3 px-4 py-4 text-right text-sm font-semibold text-white transition hover:bg-white/5 sm:text-base"
        :aria-expanded="openIndex === index"
        :aria-controls="`${uid}-panel-${index}`"
        :id="`${uid}-trigger-${index}`"
        @click="toggle(index)"
      >
        <span>{{ item.title }}</span>
        <Icon
          :name="openIndex === index ? 'lucide:minus' : 'lucide:plus'"
          class="size-5 shrink-0 text-brand"
          aria-hidden="true"
        />
      </button>
      <div
        v-show="openIndex === index"
        :id="`${uid}-panel-${index}`"
        role="region"
        :aria-labelledby="`${uid}-trigger-${index}`"
        class="border-t border-white/10 px-4 py-3 text-sm leading-7 text-ink-400"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>
