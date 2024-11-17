<script lang="ts" setup>
defineProps<{
  label: string;
  subLabel?: string;
  required?: boolean;
  disabled?: boolean;
}>();
</script>

<template>
  <div class="flex gap-1 items-center w-fit">
    <span
      class="text-label-small text-strong-950"
      :class="{ '!text-disabled-300': disabled }"
    >
      {{ label }}
    </span>
    <span
      v-if="required"
      class="text-primary-base text-label-small"
      :class="{ '!text-disabled-300': disabled }"
      >*</span
    >
    <span
      class="text-sub-600 text-paragraph-small"
      :class="{ '!text-disabled-300': disabled }"
    >
      {{ subLabel }}
    </span>
    <div :class="{ '!text-disabled-300': disabled }">
      <slot name="extra" />
    </div>
  </div>
</template>

<style scoped></style>
