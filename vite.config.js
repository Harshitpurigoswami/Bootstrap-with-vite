// import { resolve } from 'path'
// import { defineConfig } from 'vite' 

// const root = resolve(__dirname, 'src')
// const outDir = resolve(__dirname, 'dist')

// // https://vitejs.dev/config/
// export default defineConfig({
//   root, 
//   build: {
//     outDir,
//     emptyOutDir: true,
//     rollupOptions: {
//       input: {
//         main: resolve(root, 'index.html'),
//         about: resolve(root, 'about.html'),
//       }
//     },
//     server: {
//      port: 8080
//     }
//   }
// })

// import { resolve } from 'path'
// import { defineConfig } from 'vite'

// const root = resolve(__dirname, 'src');
// const outDir = resolve(__dirname, 'dist'); 

// export default defineConfig({
//   // base: './',
//   root,
//   emptyOutDir: ture,
//   build: {
//     outDir,
//     rollupOptions: { 
//       main: resolve(__dirname, 'index.html'),
//       about: resolve(__dirname, 'about.html'),
//       contact: resolve(__dirname, 'contact.html'),
//     },
//       server: {
//     port: 8080
//   }
//   }
// })

import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  root,
  base: './',
  build: {
    outDir,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about.html'),
        contact: resolve(root, 'contact.html'),
      },
    },
  },
  server: {
    port: 8080
  }
})

