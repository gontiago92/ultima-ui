<script setup lang="ts">
const isDropdownVisible = ref(false);

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

onMounted(() => {
  document.addEventListener("click", (event: MouseEvent) => {
    const targetElement = event.target as Element;
    if (!targetElement.closest(".dropdown-container")) {
      isDropdownVisible.value = false;
    }
  });
});

provide("isDropdownVisible", isDropdownVisible);
provide("toggleDropdown", toggleDropdown);
</script>

<template>
  <div class="relative z-50 dropdown-container">
    <slot />
  </div>
</template>

<style scoped></style>
