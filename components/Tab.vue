<script lang="ts" setup>
defineProps<{
  name: string
  icon: string
}>()
const activeTab = inject('activeTab')
</script>

<template>
  <div v-if="activeTab === name">
    <slot />
  </div>
</template>

<style scoped>

</style>