<script lang="ts" setup>
const toggleDropdown = inject<() => void>("toggleDropdown");
</script>

<template>
  <button
    type="button"
    class="dropdown-trigger flex w-full"
    @click="toggleDropdown"
  >
    <slot />
  </button>
</template>

<style scoped></style>
