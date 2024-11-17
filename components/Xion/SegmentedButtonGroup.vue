<script lang="ts" setup>
const props = withDefaults(defineProps<{
  variant: "rounded" | "pill";
}>(), {
  variant: "pill",
});

const modelValue = defineModel<string>();

provide("modelValue", modelValue);
provide("variant", props.variant);
</script>

<template>
  <div
    class="flex items-center gap-1 bg-soft-200 w-fit p-0.5"
    :class="{
      'rounded-full': variant === 'pill',
      'rounded-8': variant === 'rounded'
    }"
  >
    <slot />
  </div>
</template>

<style scoped>

</style>