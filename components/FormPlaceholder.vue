<script lang="ts" setup>
withDefaults(defineProps<{
  pending: boolean;
  size?: "small" | "medium" | "large";
}>(), {
  size: "small",
});
</script>

<template>
  <div v-if="pending">
    <div 
      class="animate-pulse rounded-12 w-56 bg-sub-600"
      :class="{
        'h-4': size === 'small',
        'h-6': size === 'medium',
        'h-8': size === 'large'
      }"
    />
  </div>

  <div v-else>
    <slot />
  </div>
</template>

<style scoped>

</style>