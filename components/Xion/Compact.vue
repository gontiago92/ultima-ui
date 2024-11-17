<script lang="ts" setup>
const { variant = "ghost", size = "large" } = defineProps<{
  icon: string;
  size?: "large" | "medium";
  variant?: "stroke" | "ghost" | "white";
  disabled?: boolean;
  rounded?: boolean;
}>();

const variantClasses = {
  stroke: "bg-white-0 text-sub-600 border border-soft-200 shadow-xsmall",
  ghost: "bg-transparent text-sub-600 border-none",
  white: "bg-white-0 text-sub-600 border-none shadow-xsmall",
};

const sizeClasses = {
  large: "w-6 h-6",
  medium: "w-5 h-5",
};
</script>

<template>
  <button
    class="rounded-6 flex items-center justify-center hover:bg-weak-50 hover:text-strong-950 hover:border-weak-50 active:bg-strong-950 active:text-white-0 active:border-strong-950 disabled:border-none disabled:shadow-none disabled:text-disabled-300 transition-colors duration-fast ease-out"
    :class="[
      variantClasses[variant],
      sizeClasses[size],
      { 'rounded-full': rounded },
    ]"
    :disabled="disabled"
  >
    <Icon :name="icon" :size="size === 'large' ? '20' : '18'" />
  </button>
</template>

<style scoped></style>
