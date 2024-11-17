<script lang="ts" setup>
const { anchor = "right" } = defineProps<{
  anchor?: "left" | "right";
}>();

const isDropdownVisible = inject("isDropdownVisible");
</script>

<template>
  <ul
    v-if="isDropdownVisible"
    class="absolute top-full mt-4 w-[300px] rounded-16 shadow-medium p-2 bg-white-0 text-strong-950 border border-soft-200 flex flex-col gap-1"
    :class="{
      'left-0': anchor === 'left',
      '-right-2': anchor === 'right',
    }"
  >
    <slot />
  </ul>
</template>

<style scoped></style>
