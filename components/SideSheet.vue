<script lang="ts" setup>
const modelValue = defineModel<boolean>({
  default: false,
});
</script>

<template>
  <div>
    <div
      v-if="modelValue"
      class="bg-black/70 w-full h-full fixed top-0 left-0 z-50"
      @click="modelValue = false"
    >
      <Transition name="slide-right">
        <div
          v-if="modelValue"
          class="bg-white max-w-[480px] min-w-96 fixed top-2 right-2 rounded-xl"
          :style="`height: calc(100% - 16px)`"
          @click.stop
        >
          <div class="p-4 flex items-center justify-between">
            <h2 class="text-lg font-semibold">
              Settings
            </h2>
            <button
              class="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-black/5 hover:text-black transition-colors"
              @click="modelValue = false"
            >
              <Icon
                name="mdi:close"
                size="18"
              />
            </button>
          </div>
          <slot />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 3s;
}
.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-100px)
}
</style>
