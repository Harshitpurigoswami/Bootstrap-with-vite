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

import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist'); 

export default defineConfig({
  root,
  build: {
    outDir,
    rollupOptions: {
      main : 'index.html',
      about : 'about.html' 
    },
      server: {
    port: 8080
  }
  },
})

