// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        preset: 'netlify'
    },
    ssr: true,
    css: ["@/assets/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/_colors.scss" as *;'
                }
            }
        }
    },
    pages: true
})
