<script setup lang="ts">
import VerifiedIcon from "~/assets/icons/Verified.vue";
import FavoriteIcon from "~/assets/icons/Favorite.vue";
import PinIcon from "~/assets/icons/Pin.vue";
import NotificationIcon from "~/assets/icons/Notification.vue";
import AddIcon from "~/assets/icons/Add.vue";
import RemoveIcon from "~/assets/icons/Remove.vue";
import StatusIcon from "~/assets/icons/Status.vue";

type TopStatus =
  | "verified"
  | "pin"
  | "favorite"
  | "add"
  | "remove"
  | "notification";

type BottomStatus = "online" | "offline" | "busy" | "away" | "company";

const { size = "md" } = defineProps<{
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  src: string;
  topStatus?: TopStatus;
  bottomStatus?: BottomStatus;
}>();

const sizeClasses = {
  xs: "w-5 h-5",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10",
  xl: "w-12 h-12",
  "2xl": "w-14 h-14",
  "3xl": "w-16 h-16",
  "4xl": "w-20 h-20",
};

const topStatusSizeClasses = computed(() => ({
  xs: "w-2.5 h-2.5 top-0 -right-1",
  sm: "w-3 h-3 top-0 -right-1",
  md: "w-4 h-4 top-0 -right-1.5",
  lg: "w-5 h-5 top-0 -right-2",
  xl: "w-6 h-6 top-0 -right-2.5",
  "2xl": "w-7 h-7 top-0 -right-3",
  "3xl": "w-8 h-8 top-0 -right-3.5",
  "4xl": "w-10 h-10 top-0 -right-4",
}));

const bottomStatusSizeClasses = computed(() => ({
  xs: "w-2.5 h-2.5 -bottom-0.5 -right-0.5",
  sm: "w-3 h-3 -bottom-0.5 -right-0.5",
  md: "w-4 h-4 -bottom-0.5 -right-1",
  lg: "w-5 h-5 -bottom-0.5 -right-1",
  xl: "w-6 h-6 -bottom-0.5 -right-1.5",
  "2xl": "w-7 h-7 -bottom-0.5 -right-2",
  "3xl": "w-8 h-8 -bottom-0.5 -right-2.5",
  "4xl": "w-10 h-10 -bottom-0.5 -right-3",
}));
</script>

<template>
  <div
    class="rounded-full bg-gray-500 flex-none relative"
    :class="`${sizeClasses[size]}`"
  >
    <img :src="src" class="rounded-full" :alt="src" v-bind="$attrs" />

    <VerifiedIcon
      v-if="topStatus === 'verified'"
      :class="`${topStatusSizeClasses[size]} absolute text-white-0`"
    />

    <PinIcon
      v-if="topStatus === 'pin'"
      :class="`${topStatusSizeClasses[size]} absolute text-white-0`"
    />

    <FavoriteIcon
      v-if="topStatus === 'favorite'"
      :class="`${topStatusSizeClasses[size]} absolute text-white-0`"
    />

    <NotificationIcon
      v-if="topStatus === 'notification'"
      :class="`${topStatusSizeClasses[size]} absolute text-white-0`"
    />

    <AddIcon
      v-if="topStatus === 'add'"
      :class="`${topStatusSizeClasses[size]} absolute text-white-0`"
    />

    <RemoveIcon
      v-if="topStatus === 'remove'"
      :class="`${topStatusSizeClasses[size]} absolute text-white-0`"
    />

    <StatusIcon
      v-if="bottomStatus"
      :status="bottomStatus"
      :class="`${bottomStatusSizeClasses[size]} absolute text-white-0`"
    />
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.status-shadow {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);
}
</style>
