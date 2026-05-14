<template>
  <div class="relative min-h-screen overflow-x-clip">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-radial-brand"
    />
    <LayoutNavbar />
    <main>
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
