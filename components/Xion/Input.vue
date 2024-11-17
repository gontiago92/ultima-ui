<script lang="ts" setup>
withDefaults(defineProps<{
  type?: string;
  placeholder?: string;
  searchable?: boolean;
  hint?: string;
  label: string;
  subLabel?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}>(), {
  type: "basic",
  placeholder: "Enter text",
  hint: "",
  subLabel: "",
});

const modelValue = defineModel<string>();
</script>

<template>
  <div
    v-if="!type || type === 'basic'"
    class="flex flex-col gap-1 max-w-sm"
  >
    <XionLabel
      :label="label"
      :sub-label="subLabel"
      required
    />
    <input
      v-model="modelValue"
      type="text"
      class="rounded-lg bg-transparent border border-soft-200 py-2 px-4"
      :placeholder="placeholder"
    >
    <XionHintText v-if="hint">
      {{ hint }}
    </XionHintText>
  </div>
</template>

<style scoped>

</style>