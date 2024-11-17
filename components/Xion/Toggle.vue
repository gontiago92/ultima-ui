<script setup lang="ts">
interface Props {
  disabled?: boolean;
  name: string;
}

const { disabled } = defineProps<Props>();
const model = defineModel();

const toggleCheckbox = () => {
  if (!disabled) {
    model.value = !model.value;
  }
};
</script>

<template>
  <div
    class="light group/item transition-all duration-150 ease-in-out w-[28px] h-[16px] flex items-center justify-center rounded-full"
    :class="{
      'bg-white border border-stroke-soft-200 box-content': disabled,
      'bg-primary-base': model && !disabled,
      'bg-soft-200': !model && !disabled,
    }"
  >
    <label
      class="group/content w-[28px] h-full transition-all duration-150 ease-in-out relative rounded-full overflow-hidden p-[2px] focus:outline-none focus:ring-1 ring-offset-1"
      :class="{
        'group-hover/item:bg-primary-darker  hover:cursor-pointer focus:ring-primary-darker active:shadow-md':
          model && !disabled,
        'group-hover/item:bg-sub-300  hover:cursor-pointer focus:ring-soft-200 ':
          !model && !disabled,
        'border-soft-200 ': disabled,
      }"
      :tabindex="disabled ? '-1' : '0'"
      @keydown.enter.prevent="toggleCheckbox"
    >
      <input
        hidden
        type="checkbox"
        v-model="model"
        :disabled="disabled"
        tabindex="-1"
        :name="name"
        :id="name"
      />

      <div
        class="h-full transition-all duration-150 ease-in-out aspect-square rounded-full flex items-center justify-center p-1"
        :class="{
          'translate-x-full bg-white': model,
          'translate-x-0 bg-white shadow-xl': !model,
          '!bg-soft-200': disabled,
        }"
      >
        <div
          class="w-full h-full rounded-full z-10 transition-all duration-150 ease-in-out"
          :class="{
            'bg-primary-base': model,
            'bg-gray-200': !model,
            '!bg-soft-200': disabled,
          }"
        ></div>
      </div>
    </label>
  </div>
</template>

<style scoped>
.hidden {
  opacity: 0;
  width: 0;
  height: 0;
}
</style>
