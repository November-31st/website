<script setup lang="ts">
const isOpen = ref(false);
const scrolled = ref(false);

const links = [
  { to: "/#about", label: "درباره ما" },
  { to: "/#services", label: "خدمات" },
  { to: "/#numbers", label: "اعداد" },
  { to: "/#contact", label: "تماس" },
];

const onScroll = () => {
  scrolled.value = window.scrollY > 16;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'backdrop-blur-xl bg-ink-950/70' : 'bg-transparent'"
  >
    <div class="container-page flex h-16 items-center justify-between sm:h-20">
      <NuxtLink
        to="/"
        class="flex items-center gap-3"
        title="۳۱ نوامبر — بنیاد نه چندان خیریه، صفحهٔ اصلی"
      >
        <img
          src="/logo.png"
          alt="بنیاد ۳۱ نوامبر"
          width="582"
          height="293"
          class="h-9 w-auto sm:h-10"
        />
        <span class="hidden flex-col leading-tight sm:flex">
          <span class="text-sm font-bold text-white">۳۱ نوامبر</span>
          <span class="text-[11px] text-ink-300">بنیاد نه چندان خیریه</span>
        </span>
      </NuxtLink>

      <nav class="hidden items-center gap-1 md:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :title="link.label"
          class="rounded-full px-4 py-2 text-sm text-ink-200 transition-colors hover:bg-white/5 hover:text-white"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-3 md:flex">
        <NuxtLink
          to="/#contact"
          class="btn-primary !py-2.5 !px-5 !text-sm"
          title="رفتن به بخش تماس"
        >
          بزن بریم
        </NuxtLink>
      </div>

      <button
        type="button"
        class="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
        aria-label="باز کردن منو"
        @click="isOpen = !isOpen"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </svg>
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="border-t border-white/5 bg-ink-950/95 backdrop-blur-xl md:hidden"
      >
        <div class="container-page flex flex-col gap-1 py-4">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            :title="link.label"
            class="rounded-lg px-4 py-3 text-sm text-ink-200 hover:bg-white/5 hover:text-white"
            @click="isOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            to="/#contact"
            class="btn-primary mt-2"
            title="رفتن به بخش تماس"
            @click="isOpen = false"
          >
            بزن بریم
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
