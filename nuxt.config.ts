// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [join(currentDir, "./assets/css/main.css")],
  modules: ["nuxt-icon", '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || '/tenant'
    }
  },
  vue: {
    propsDestructure: true,
  },
  typescript: {
    strict: true,
    typeCheck: false,
    tsConfig: {
      include: ["./repositories/**/*.ts", "./services/**/*.ts"],
    }
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontSize: {
            "title-h1": [
              "var(--title-h1-font-size)",
              {
                fontFamily: "var(--title-h1-font-family-name)",
                fontWeight: "var(--title-h1-font-weight)",
                lineHeight: "var(--title-h1-line-height)",
                letterSpacing: "var(--title-h1-letter-spacing)"
              }
            ],
            "title-h2": [
              "var(--title-h2-font-size)",
              {
                fontFamily: "var(--title-h2-font-family-name)",
                fontWeight: "var(--title-h2-font-weight)",
                lineHeight: "var(--title-h2-line-height)",
                letterSpacing: "var(--title-h2-letter-spacing)"
              }
            ],
            "title-h3": [
              "var(--title-h3-font-size)",
              {
                fontFamily: "var(--title-h3-font-family-name)",
                fontWeight: "var(--title-h3-font-weight)",
                lineHeight: "var(--title-h3-line-height)",
                letterSpacing: "var(--title-h3-letter-spacing)"
              }
            ],
            "title-h4": [
              "var(--title-h4-font-size)",
              {
                fontFamily: "var(--title-h4-font-family-name)",
                fontWeight: "var(--title-h4-font-weight)",
                lineHeight: "var(--title-h4-line-height)",
                letterSpacing: "var(--title-h4-letter-spacing)"
              }
            ],
            "title-h5": [
              "var(--title-h5-font-size)",
              {
                fontFamily: "var(--title-h5-font-family-name)",
                fontWeight: "var(--title-h5-font-weight)",
                lineHeight: "var(--title-h5-line-height)",
                letterSpacing: "var(--title-h5-letter-spacing)"
              }
            ],
            "title-h6": [
              "var(--title-h6-font-size)",
              {
                fontFamily: "var(--title-h6-font-family-name)",
                fontWeight: "var(--title-h6-font-weight)",
                lineHeight: "var(--title-h6-line-height)",
                letterSpacing: "var(--title-h6-letter-spacing)"
              }
            ],
            "label-xlarge": [
              "var(--label-xlarge-font-size)",
              {
                fontFamily: "var(--label-xlarge-font-family-name)",
                fontWeight: "var(--label-xlarge-font-weight)",
                lineHeight: "var(--label-xlarge-line-height)",
                letterSpacing: "var(--label-xlarge-letter-spacing)"
              }
            ],
            "label-large": [
              "var(--label-large-font-size)",
              {
                fontFamily: "var(--label-large-font-family-name)",
                fontWeight: "var(--label-large-font-weight)",
                lineHeight: "var(--label-large-line-height)",
                letterSpacing: "var(--label-large-letter-spacing)"
              }
            ],
            "label-medium": [
              "var(--label-medium-font-size)",
              {
                fontFamily: "var(--label-medium-font-family-name)",
                fontWeight: "var(--label-medium-font-weight)",
                lineHeight: "var(--label-medium-line-height)",
                letterSpacing: "var(--label-medium-letter-spacing)"
              }
            ],
            "label-small": [
              "var(--label-small-font-size)",
              {
                fontFamily: "var(--label-small-font-family-name)",
                fontWeight: "var(--label-small-font-weight)",
                lineHeight: "var(--label-small-line-height)",
                letterSpacing: "var(--label-small-letter-spacing)"
              }
            ],
            "paragraph-xlarge": [
              "var(--paragraph-xlarge-font-size)",
              {
                fontFamily: "var(--paragraph-xlarge-font-family-name)",
                fontWeight: "var(--paragraph-xlarge-font-weight)",
                lineHeight: "var(--paragraph-xlarge-line-height)",
                letterSpacing: "var(--paragraph-xlarge-letter-spacing)"
              }
            ],
            "paragraph-large": [
              "var(--paragraph-large-font-size)",
              {
                fontFamily: "var(--paragraph-large-font-family-name)",
                fontWeight: "var(--paragraph-large-font-weight)",
                lineHeight: "var(--paragraph-large-line-height)",
                letterSpacing: "var(--paragraph-large-letter-spacing)"
              }
            ],
            "paragraph-medium": [
              "var(--paragraph-medium-font-size)",
              {
                fontFamily: "var(--paragraph-medium-font-family-name)",
                fontWeight: "var(--paragraph-medium-font-weight)",
                lineHeight: "var(--paragraph-medium-line-height)",
                letterSpacing: "var(--paragraph-medium-letter-spacing)"
              }
            ],
            "paragraph-small": [
              "var(--paragraph-small-font-size)",
              {
                fontFamily: "var(--paragraph-small-font-family-name)",
                fontWeight: "var(--paragraph-small-font-weight)",
                lineHeight: "var(--paragraph-small-line-height)",
                letterSpacing: "var(--paragraph-small-letter-spacing)"
              }
            ],
            "paragraph-xsmall": [
              "var(--paragraph-xsmall-font-size)",
              {
                fontFamily: "var(--paragraph-xsmall-font-family-name)",
                fontWeight: "var(--paragraph-xsmall-font-weight)",
                lineHeight: "var(--paragraph-xsmall-line-height)",
                letterSpacing: "var(--paragraph-xsmall-letter-spacing)"
              }
            ],
            "subheading-medium": [
              "var(--subheading-medium-font-size)",
              {
                fontFamily: "var(--subheading-medium-font-family-name)",
                fontWeight: "var(--subheading-medium-font-weight)"
              }
            ],
            "subheading-small": [
              "var(--subheading-small-font-size)",
              {
                fontFamily: "var(--subheading-small-font-family-name)",
                fontWeight: "var(--subheading-small-font-weight)"
              }
            ],
            "subheading-xsmall": [
              "var(--subheading-xsmall-font-size)",
              {
                fontFamily: "var(--subheading-xsmall-font-family-name)",
                fontWeight: "var(--subheading-xsmall-font-weight)"
              }
            ],
            "subheading-2xsmall": [
              "var(--subheading-2xsmall-font-size)",
              {
                fontFamily: "var(--subheading-2xsmall-font-family-name)",
                fontWeight: "var(--subheading-2xsmall-font-weight)"
              }
            ],
            "docs-label": [
              "var(--docs-label-font-size)",
              {
                fontFamily: "var(--docs-label-font-family-name)",
                fontWeight: "var(--docs-label-font-weight)",
                lineHeight: "var(--docs-label-line-height)",
                letterSpacing: "var(--docs-label-letter-spacing)"
              }
            ],
            "docs-paragraph": [
              "var(--docs-paragraph-font-size)",
              {
                fontFamily: "var(--docs-paragraph-font-family-name)",
                fontWeight: "var(--docs-paragraph-font-weight)",
                lineHeight: "var(--docs-paragraph-line-height)",
                letterSpacing: "var(--docs-paragraph-letter-spacing)"
              }
            ]
          },
          borderRadius: {
            "4": "var(--radius-4)",
            "6": "var(--radius-6)",
            "8": "var(--radius-8)",
            "10": "var(--radius-10)",
            "12": "var(--radius-12)",
            "16": "var(--radius-16)",
            "20": "var(--radius-20)",
            "24": "var(--radius-24)",
            full: "var(--radius-full)"
          },
          boxShadow: {
            xsmall: "var(--shadow-xsmall)",
            medium: "var(--shadow-medium)"
          },
          transitionDuration: {
            "extra-fast": "var(--extra-fast)",
            fast: "var(--fast)",
            normal: "var(--normal)",
            slow: "var(--slow)",
            "extra-slow": "var(--extra-slow)"
          },
          transitionTimingFunction: {
            "ease-out": "ease-out"
          },
          colors: {
            "strong-950": "var(--bg-strong-950)",
            "surface-800": "var(--bg-surface-800)",
            "sub-300": "var(--bg-sub-300)",
            "soft-200": "var(--bg-soft-200)",
            "weak-50": "var(--bg-weak-50)",
            "white-0": "var(--bg-white-0)",

            "static-black": "var(--static-black)",
            "static-white": "var(--static-white)",

            // primary Color Tokens
            "primary-dark": "var(--primary-dark)",
            "primary-darker": "var(--primary-darker)",
            "primary-base": "var(--primary-base)",
            "primary-alpha16": "var(--primary-alpha-16)",
            "primary-alpha10": "var(--primary-alpha-10)",

            // Text Color Tokens
            "sub-600": "var(--text-sub-600)",
            "soft-400": "var(--text-soft-400)",
            "disabled-300": "var(--text-disabled-300)",
            // stroke Color Tokens
            "stroke-strong-950": "var(--stroke-strong-950)",
            "stroke-sub-300": "var(--stroke-sub-300)",
            "stroke-soft-200": "var(--stroke-soft-200)",
            "stroke-white-0": "var(--stroke-white-0)",

            // Icon Color Tokens
            "icon-strong-950": "var(--icon-strong-950)",
            "icon-sub-600": "var(--icon-sub-600)",
            "icon-soft-400": "var(--icon-soft-400)",
            "icon-disabled-300": "var(--icon-disabled-300)",
            "icon-white-0": "var(--icon-white-0)",

            // State Color Tokens - Faded
            "faded-dark": "var(--faded-dark)",
            "faded-base": "var(--faded-base)",
            "faded-light": "var(--faded-light)",
            "faded-lighter": "var(--faded-lighter)",

            // State Color Tokens - Information
            "information-dark": "var(--information-dark)",
            "information-base": "var(--information-base)",
            "information-light": "var(--information-light)",
            "information-lighter": "var(--information-lighter)",

            // State Color Tokens - Warning
            "warning-dark": "var(--warning-dark)",
            "warning-base": "var(--warning-base)",
            "warning-light": "var(--warning-light)",
            "warning-lighter": "var(--warning-lighter)",

            // State Color Tokens - Error
            "error-dark": "var(--error-dark)",
            "error-base": "var(--error-base)",
            "error-light": "var(--error-light)",
            "error-lighter": "var(--error-lighter)",

            // State Color Tokens - Success
            "success-dark": "var(--success-dark)",
            "success-base": "var(--success-base)",
            "success-light": "var(--success-light)",
            "success-lighter": "var(--success-lighter)",

            // State Color Tokens - Away
            "away-dark": "var(--away-dark)",
            "away-base": "var(--away-base)",
            "away-light": "var(--away-light)",
            "away-lighter": "var(--away-lighter)",

            // State Color Tokens - Feature
            "feature-dark": "var(--feature-dark)",
            "feature-base": "var(--feature-base)",
            "feature-light": "var(--feature-light)",
            "feature-lighter": "var(--feature-lighter)",

            // State Color Tokens - Verified
            "verified-dark": "var(--verified-dark)",
            "verified-base": "var(--verified-base)",
            "verified-light": "var(--verified-light)",
            "verified-lighter": "var(--verified-lighter)",

            // State Color Tokens - Highlighted
            "highlighted-dark": "var(--highlighted-dark)",
            "highlighted-base": "var(--highlighted-base)",
            "highlighted-light": "var(--highlighted-light)",
            "highlighted-lighter": "var(--highlighted-lighter)"
          }
        }
      }
    }
  }
})
