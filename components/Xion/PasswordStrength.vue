<script lang="ts" setup>
const { password, min = 8 } = defineProps<{
  password: string;
  min?: number;
}>();

const strengthLevels = reactive(["#ddd", "#ddd", "#ddd"]); // Default color for bars

const hasUppercase = computed(() => /[A-Z]/.test(password));
const hasNumber = computed(() => /\d/.test(password));
const hasSpecial = computed(() =>
  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)
);
const hasLength = computed(() => password.length >= min);

const checkStrength = () => {
  let strengthCount = 0;

  if (hasLength.value) strengthCount++; // Checks length
  if (hasUppercase.value) strengthCount++; // Checks for uppercase
  if (hasNumber.value) strengthCount++; // Checks for number

  // Update bar colors based on strength count
  strengthLevels[0] = strengthCount >= 1 ? "w-full" : "w-0";
  strengthLevels[1] = strengthCount >= 2 ? "w-full" : "w-0";
  strengthLevels[2] = strengthCount >= 3 ? "w-full" : "w-0";
};

watch(
  () => password,
  () => {
    checkStrength();
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <slot />

    <div class="strength-bars mt-2">
      <div class="bar rounded-6 bg-sub-300 overflow-hidden">
        <div
          class="w-0 h-full bg-error-base transition-all duration-1000 ease-in-out"
          :class="strengthLevels[0]"
        ></div>
      </div>
      <div class="bar rounded-6 bg-sub-300 overflow-hidden">
        <div
          class="w-0 h-full bg-warning-base transition-all duration-1000"
          :class="strengthLevels[1]"
        ></div>
      </div>
      <div class="bar rounded-6 bg-sub-300 overflow-hidden">
        <div
          class="w-0 h-full bg-success-base transition-all duration-1000"
          :class="strengthLevels[2]"
        ></div>
      </div>
    </div>

    <div class="flex flex-col gap-2 mt-2">
      <p class="text-paragraph-xsmall text-sub-600">Must contain at least :</p>
      <ul class="flex flex-col gap-2">
        <li class="flex gap-1 items-center">
          <Icon
            v-if="hasUppercase"
            name="mdi:check-circle"
            size="16"
            class="text-success-base"
          />
          <Icon
            v-else
            name="mdi:close-circle"
            size="16"
            class="text-soft-400"
          />
          <span class="text-paragraph-xsmall text-sub-600">
            At least 1 uppercase
          </span>
        </li>
        <li class="flex gap-1 items-center">
          <Icon
            v-if="hasNumber"
            name="mdi:check-circle"
            size="16"
            class="text-success-base"
          />
          <Icon
            v-else
            name="mdi:close-circle"
            size="16"
            class="text-soft-400"
          />
          <span class="text-paragraph-xsmall text-sub-600">
            At least 1 number
          </span>
        </li>
        <li class="flex gap-1 items-center">
          <Icon
            v-if="hasLength"
            name="mdi:check-circle"
            size="16"
            class="text-success-base"
          />
          <Icon
            v-else
            name="mdi:close-circle"
            size="16"
            class="text-soft-400"
          />
          <span class="text-paragraph-xsmall text-sub-600">
            At least {{ min }} characters
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.strength-bars {
  display: flex;
  gap: 8px;
}

.bar {
  width: 100px;
  height: 4px;
}
</style>
