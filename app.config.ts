export default defineAppConfig({
  darkMode: false
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    darkMode: false
  }
}