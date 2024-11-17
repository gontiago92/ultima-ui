<script lang="ts" setup>
import { NuxtLink } from "#components";
import type { Component } from "nuxt/schema";

const {
  size = "small",
  type = "icon",
  icon,
  supportingText,
  to,
  tag,
} = defineProps<{
  icon?: string;
  label: string;
  sublabel?: string;
  supportingText?: string;
  disabled?: boolean;
  to?: string;
  tag?: string | Component;
  size?: "small" | "large";
  type?: "icon" | "avatar";
}>();

// Validation function
const validateProps = () => {
  if (size === "large" && !supportingText) {
    throw new Error(
      'The "supportingText" prop is required when "size" is "large".'
    );
  }
};

// Watch for changes in type to revalidate when necessary
watch([() => supportingText], validateProps, { immediate: true });

validateProps();

const getTag = computed(() => {
  if (to) {
    return NuxtLink;
  } else if (tag) {
    return tag;
  } else {
    return "div";
  }
});
</script>

<template>
  <component
    :is="getTag"
    :to="to"
    class="p-2 rounded-8 flex items-center justify-between gap-2 text-strong-950 select-none hover:bg-weak-50 cursor-default transition-colors duration-200 ease-in-out"
    :class="{
      'h-9': size === 'small',
      'h-14': size === 'large',
      '!text-sub-300 hover:bg-transparent': disabled,
      'cursor-pointer': to,
    }"
  >
    <div class="flex items-center gap-2">
      <slot name="leading">
        <div
          :class="{
            'w-10 h-10 border border-sub-600 rounded-full justify-center':
              size === 'large',
            'border-none': type === 'avatar',
          }"
          class="flex items-center"
        >
          <Icon
            v-if="icon"
            :name="icon"
            class="w-5 h-5 text-sub-600"
            :class="{ 'text-sub-300': disabled }"
          />
        </div>
      </slot>
      <div>
        <span class="text-paragraph-small">{{ label }}</span>
        <span
          v-if="sublabel"
          class="text-sub-600 text-paragraph-xsmall ml-1"
        >
          {{ sublabel }}
        </span>
        <p
          v-if="size === 'large'"
          class="text-subheading-xsmall text-sub-600"
        >
          {{ supportingText }}
        </p>
      </div>
    </div>
    <slot name="trailing" />
  </component>
</template>

<style scoped></style>
