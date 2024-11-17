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
    <g clip-path="url(#clip0_45_17)">
      <g filter="url(#filter0_d_45_17)">
        <circle cx="16" cy="16" r="14" fill="currentColor" />
      </g>
      <circle cx="16" cy="16" r="12" fill="#717784" />
      <g clip-path="url(#clip1_45_17)">
        <path
          d="M15.25 22C15.25 22.1989 15.329 22.3897 15.4697 22.5303C15.6103 22.671 15.8011 22.75 16 22.75C16.1989 22.75 16.3897 22.671 16.5303 22.5303C16.671 22.3897 16.75 22.1989 16.75 22V16.75H22C22.1989 16.75 22.3897 16.671 22.5303 16.5303C22.671 16.3897 22.75 16.1989 22.75 16C22.75 15.8011 22.671 15.6103 22.5303 15.4697C22.3897 15.329 22.1989 15.25 22 15.25H16.75V10C16.75 9.80109 16.671 9.61032 16.5303 9.46967C16.3897 9.32902 16.1989 9.25 16 9.25C15.8011 9.25 15.6103 9.32902 15.4697 9.46967C15.329 9.61032 15.25 9.80109 15.25 10V15.25H10C9.80109 15.25 9.61032 15.329 9.46967 15.4697C9.32902 15.6103 9.25 15.8011 9.25 16C9.25 16.1989 9.32902 16.3897 9.46967 16.5303C9.61032 16.671 9.80109 16.75 10 16.75H15.25V22Z"
          fill="currentColor"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_45_17"
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
          result="effect1_dropShadow_45_17"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_45_17"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_45_17">
        <rect width="32" height="32" fill="currentColor" />
      </clipPath>
      <clipPath id="clip1_45_17">
        <rect
          width="18"
          height="18"
          fill="currentColor"
          transform="translate(7 7)"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<style scoped></style>
