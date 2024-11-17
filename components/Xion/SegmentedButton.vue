<script lang="ts" setup>
const props = defineProps<{
  label?: string;
  subLabel?: string;
  icon?: string;
  disabled?: boolean;
  value: string;
}>();

const modelValue = inject<Ref<string>>("modelValue");
const variant = inject<string>("variant");

const select = () => {
  if(!modelValue) return
  modelValue.value = props.value;
};
</script>

<template>
  <button
    class="hover:bg-sub-300 hover:text-strong-950 hover:border-sub-300 border border-transparent px-4 py-1 flex items-center gap-1 group text-label-small"
    :class="{ 
      active: modelValue === props.value, 
      'rounded-full': variant === 'pill',
      'rounded-6': variant === 'rounded' 
    }"
    :disabled="disabled"
    @click="select"
  >
    <Icon
      v-if="icon"
      :name="icon"
      class="w-5 h-5"
    />
    <slot>
      <span v-if="label">{{ props.label }}</span>
      <span
        v-if="subLabel"
        class="text-paragraph-xsmall text-soft-400"
      >
        {{ subLabel }}
      </span>
    </slot>
  </button>
</template>

<style scoped>
.active {
  @apply bg-static-white text-static-black border-soft-200 hover:bg-static-white hover:text-static-black hover:shadow-none shadow;
}

.active .icon {
  @apply text-icon-sub-600;
}
</style>