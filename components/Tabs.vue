<script lang="ts" setup>
const getSlots = () => {
  const slots = useSlots().default?.()
  if (!slots) {
    console.error('Tabs component must have at least one tab')
  }

  return slots || []
}
const tabs = getSlots().map((slot: any) => {
  return {
    name: slot.props.name,
    icon: slot.props.icon
  }
})

const activeTab = ref(tabs.length ? tabs[0].name : null)

provide('activeTab', activeTab)
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="border-b border-sub-300 flex items-center gap-4">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        class="flex items-center gap-1 py-1 -mb-[1px] text-sub-600"
        :class="{ 'border-primary-base font-semibold !text-strong-950 border-b-2': tab.name === activeTab }"
        type="button"
        @click="activeTab = tab.name"
      >
        <Icon
          v-if="tab.icon"
          :name="tab.icon"
          size="20"
        />
        <span>{{ tab.name }}</span>
      </button>
    </div>
    <slot />
  </div>
</template>

<style scoped>

</style>