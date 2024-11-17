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
    <g clip-path="url(#clip0_45_6)">
      <g filter="url(#filter0_d_45_6)">
        <circle cx="16" cy="16" r="14" fill="currentColor" />
      </g>
      <circle cx="16" cy="16" r="12" fill="#7D52F4" />
      <path
        d="M17.6066 18.6066L21.8493 14.364L22.3796 14.8943L23.4403 13.8336L18.137 8.53033L17.0763 9.59099L17.6066 10.1213L13.364 14.364L11.2427 14.364L10.182 15.4246L12.9397 18.1823L9.75774 21.3643L10.6063 22.2128L13.7883 19.0309L16.546 21.7886L17.6066 20.7279L17.6066 18.6066Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_45_6"
        x="-2"
        y="0"
        width="36"
        height="36"
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
          result="effect1_dropShadow_45_6"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_45_6"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_45_6">
        <rect width="32" height="32" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
</template>

<style scoped></style>
