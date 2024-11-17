<!-- eslint-disable vue/require-default-prop -->
<script lang="ts" setup>
type ButtonType = "primary" | "neutral" | "error";
type ButtonVariant = "filled" | "stroke" | "lighter";
type ButtonBackgroundColor = Record<ButtonType, Record<ButtonVariant, string>>;

withDefaults(defineProps<{
  leadingIcon?: string;
  trailingIcon?: string;
  size?: "medium" | "small" | "x-small" | "2x-small";
  variant?: ButtonVariant;
  type?: ButtonType;
  disabled?: boolean;
  rounded?: boolean;
}>(), {
  size: "medium",
  variant: "filled",
  type: "neutral",
  disabled: false,
  rounded: false,
});

const variantClasses = {
  stroke: "bg-white-0 text-sub-600 border border-soft-200 shadow-xsmall",
  ghost: "bg-transparent text-sub-600 border-none",
  white: "bg-white-0 text-sub-600 border-none shadow-xsmall",
};

const typeClasses = {
  primary: "bg-strong-950 text-white-0 border-none shadow-xsmall",
  neutral: "bg-white-0 text-sub-600 border border-soft-200 shadow-xsmall",
  error: "bg-error-500 text-white-0 border-none shadow-xsmall",
};

const backgroundColorClasses: ButtonBackgroundColor = {
  neutral: {
    filled: "bg-strong-950 text-white-0 hover:bg-surface-800 focus:bg-strong-950 focus:shadow-xsmall active:bg-surface-800 transform active:scale-95",
    stroke: "bg-transparent",
    lighter: "bg-soft-200",
  },
  primary: {
    filled: "bg-primary-base text-static-white hover:bg-primary-darker focus:bg-primary-base focus:shadow-xsmall active:bg-primary-darker transform active:scale-95",
    stroke: "bg-transparent",
    lighter: "bg-primary-alpha10 text-primary-base border border-transparent hover:bg-transparent hover:border-primary-base focus:bg-white-0 focus:shadow-xsmall active:bg-primary-darker transform active:scale-95",
  },
  error: {
    filled: "bg-error-500 text-white-0",
    stroke: "bg-transparent",
    lighter: "bg-soft-200",
  },
};

const sizeClasses = {
  "medium": "h-10",
  "small": "h-9",
  "x-small": "h-8",
  "2x-small": "h-7"
};
</script>

<template>
  <button
    class="rounded-10 pl-2.5 pr-4 flex gap-1 items-center justify-center disabled:bg-weak-50 disabled:border-none disabled:shadow-none disabled:text-disabled-300 transition-all duration-normal ease-out"
    :class="[
      backgroundColorClasses[type][variant],
      sizeClasses[size],
      { '!rounded-full': rounded },
    ]"
    :disabled="disabled"
  >
    <slot name="leading">
      <Icon
        v-if="leadingIcon"
        :name="leadingIcon"
        :size="size === 'medium' ? '20' : '18'"
      />
    </slot>
    <span class="text-label-small">
      <slot />
    </span>
    <Icon
      v-if="trailingIcon"
      :name="trailingIcon"
      :size="size === 'medium' ? '20' : '18'"
    />
  </button>
</template>

<style scoped></style>
