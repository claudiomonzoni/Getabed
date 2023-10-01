import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        historia: resolve(__dirname, 'historia.html'),
        precios: resolve(__dirname, 'preciosyplanes.html'),
        atencion: resolve(__dirname, 'atencionysoporte.html'),
        // blog: resolve(__dirname, 'blog.html'),
        gestionpropiedades: resolve(__dirname, 'gestion-propiedades.html'),
        relacionclientes: resolve(__dirname, 'relacion-clientes.html'),
        motor: resolve(__dirname, 'motor-reservas.html'),
        channel: resolve(__dirname, 'channel-manager.html'),
        gestioncontenidos: resolve(__dirname, 'gestion-contenidos.html'),
        dominios: resolve(__dirname, 'dominios.html'),
        hospedaje: resolve(__dirname, 'hospedaje.html'),
        plantillas: resolve(__dirname, 'plantillas.html'),
        aviso: resolve(__dirname, 'aviso.html'),
        terminos: resolve(__dirname, 'terminos.html'),
      },
    },
  },
})