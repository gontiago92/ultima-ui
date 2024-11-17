<script lang="ts" setup>
defineProps<{
  title: string;
}>();

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
    />
    <Transition name="slide-up">
      <!--max-w-[480px]-->
      <div
        v-if="modelValue"
        class="bg-white-0 min-w-96 fixed top-0 left-0 w-full h-full rounded-xl z-50 flex flex-col"
        @click.stop
      >
        <div class="px-4 py-2 flex items-center justify-between border-b border-soft-200">
          <div class="flex items-center gap-4">
            <IconsSaastify class="w-10 h-10" />
            <h1 class="text-xl font-medium">
              {{ title }}
            </h1>
          </div>
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
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 300ms;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
}
</style>