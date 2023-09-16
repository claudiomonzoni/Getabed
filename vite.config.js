
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        historia: resolve(__dirname, 'historia.html'),
        precios: resolve(__dirname, 'preciosyplanes.html')
      },
    },
  },
})


// import { resolve } from 'path'
// import { defineConfig } from 'vite'

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//         historia: resolve(__dirname, 'historia/index.html'),
//         preciosyplanes: resolve(__dirname, 'precios-planes/index.html'),
//         atencioysoporte: resolve(__dirname, 'atencion-soporte/index.html'),
//         blog: resolve(__dirname, 'blog/index.html'),
//         gestionpropiedades: resolve(__dirname, 'gestion-de-propiedades/index.html'),
//         relacioncliente: resolve(__dirname, 'relacion-con-cliente/index.html'),
//         motorreservas: resolve(__dirname, 'motor-de-reservas/index.html'),
//         channelmanager: resolve(__dirname, 'channel-manager/index.html'),
//         gestioncontenidos: resolve(__dirname, 'gestion-de-contenidos/index.html'),
//         hosting: resolve(__dirname, 'hosting/index.html'),
//         dominios: resolve(__dirname, 'dominios/index.html'),
//         terminos: resolve(__dirname, 'terminos-y-condiciones/index.html'),
//         avisoprivacidad: resolve(__dirname, 'aviso-de-privacidad/index.html'),
//         cuartrocerocuatro: resolve(__dirname, '404/index.html'),
//       },
//     },
//   },
// })
