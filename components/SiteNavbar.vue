<script setup lang="ts">
const isOpen = ref(false);
const scrolled = ref(false);

const links = [
  { href: "#about", label: "درباره ما" },
  { href: "#services", label: "خدمات" },
  { href: "#numbers", label: "اعداد" },
  { href: "#contact", label: "تماس" },
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
      <a href="#" class="flex items-center gap-3">
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
      </a>

      <nav class="hidden items-center gap-1 md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="rounded-full px-4 py-2 text-sm text-ink-200 transition-colors hover:bg-white/5 hover:text-white"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="hidden items-center gap-3 md:flex">
        <a href="#contact" class="btn-primary !py-2.5 !px-5 !text-sm">
          بزن بریم
        </a>
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
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="rounded-lg px-4 py-3 text-sm text-ink-200 hover:bg-white/5 hover:text-white"
            @click="isOpen = false"
          >
            {{ link.label }}
          </a>
          <a href="#contact" class="btn-primary mt-2" @click="isOpen = false">
            بزن بریم
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>
