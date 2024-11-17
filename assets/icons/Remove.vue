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
    <g clip-path="url(#clip0_45_28)">
      <g filter="url(#filter0_d_45_28)">
        <circle cx="16" cy="16" r="14" fill="currentColor" />
      </g>
      <circle cx="16" cy="16" r="12" fill="#FB3748" />
      <path
        d="M11.227 19.7124C11.0864 19.853 11.0074 20.0438 11.0074 20.2427C11.0074 20.4416 11.0864 20.6324 11.227 20.773C11.3677 20.9137 11.5584 20.9927 11.7574 20.9927C11.9563 20.9927 12.147 20.9137 12.2877 20.773L16 17.0607L19.7123 20.773C19.853 20.9137 20.0437 20.9927 20.2426 20.9927C20.4416 20.9927 20.6323 20.9137 20.773 20.773C20.9136 20.6324 20.9926 20.4416 20.9926 20.2427C20.9926 20.0438 20.9136 19.853 20.773 19.7124L17.0607 16L20.773 12.2877C20.9136 12.1471 20.9926 11.9563 20.9926 11.7574C20.9926 11.5585 20.9136 11.3677 20.773 11.2271C20.6323 11.0864 20.4416 11.0074 20.2426 11.0074C20.0437 11.0074 19.853 11.0864 19.7123 11.2271L16 14.9394L12.2877 11.2271C12.147 11.0864 11.9563 11.0074 11.7574 11.0074C11.5584 11.0074 11.3677 11.0864 11.227 11.2271C11.0864 11.3677 11.0074 11.5585 11.0074 11.7574C11.0074 11.9563 11.0864 12.1471 11.227 12.2877L14.9393 16L11.227 19.7124Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_45_28"
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
          result="effect1_dropShadow_45_28"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_45_28"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_45_28">
        <rect width="32" height="32" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
</template>

<style scoped></style>
