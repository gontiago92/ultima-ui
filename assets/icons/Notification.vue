<script lang="ts" setup>
defineProps<{
  width?: string;
  height?: string;
}>();
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_45_35)">
      <circle cx="16" cy="16" r="8" fill="currentColor" />
    </g>
    <circle cx="16" cy="16" r="6" fill="#FB3748" />
    <defs>
      <filter
        id="filter0_d_45_35"
        x="4"
        y="6"
        width="24"
        height="24"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_45_35"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_45_35"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>

<style scoped></style>
