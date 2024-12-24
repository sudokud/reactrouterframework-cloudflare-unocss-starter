import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets:[
    presetUno(),
    presetWebFonts({
        provider: 'fontshare',
        fonts: {
          sans: 'Melodrama',
        },
      }),
  ],
    shortcuts:{
    "center":"flex justify-center items-center"
  }
})