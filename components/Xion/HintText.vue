<script lang="ts" setup>
defineProps<{
  error?: boolean;
  disabled?: boolean;
}>();
</script>

<template>
  <div class="flex items-center gap-1">
    <Icon
      name="mdi:information"
      size="16"
      class="text-sub-600"
      :class="{ '!text-[#FB3748]': error, '!text-disabled-300': disabled }"
    />
    <span
      class="text-paragraph-xsmall text-sub-600"
      :class="{ '!text-[#FB3748]': error, '!text-disabled-300': disabled }"
    >
      <slot />
    </span>
  </div>
</template>

<style scoped></style>
