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
    <g clip-path="url(#clip0_45_12)">
      <g filter="url(#filter0_d_45_12)">
        <circle cx="16" cy="16" r="14" fill="currentColor" />
      </g>
      <circle cx="16" cy="16" r="12" fill="#1FC16B" />
      <path
        d="M16 8L17.7961 13.5279H23.6085L18.9062 16.9443L20.7023 22.4721L16 19.0557L11.2977 22.4721L13.0938 16.9443L8.39155 13.5279H14.2039L16 8Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_45_12"
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
          result="effect1_dropShadow_45_12"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_45_12"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_45_12">
        <rect width="32" height="32" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
</template>

<style scoped></style>
