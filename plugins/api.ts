export default defineNuxtPlugin({
    setup() {
        const config = useRuntimeConfig()
        const headers = useRequestHeaders(['cookie'])

        const api = $fetch.create({
            baseURL: config.public.apiBase || 'http://localhost:3000/tenant',
            credentials: 'include',
            onRequest({ options }) {
                options.headers = headers
                options.credentials = 'include'
            },
        })

        return {
            provide: {
                api
            }
        }
    }
})


