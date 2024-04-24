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

// 
// const noAttr = () => {
//   return {
//     name: "no-attribute",
//     transformIndexHtml(html) {
//       return html.replace(`crossorigin`, "");
//     }
// }}
 
// 

export default defineConfig({
  // plugins: [noAttr()],
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



// new one build create 

// import { resolve } from 'path'
// export default {
//   root: resolve(__dirname, 'src'),
//   build: {
//     emptyOutDir: '../dist',
//     rollupOptions: {
//       input: { 
          //  main: resolve(resolve(__dirname, 'src'), 'index.html'),
          //  about: resolve(resolve(__dirname, 'src'), 'about.html'),
          //  contact: resolve(resolve(__dirname, 'src'), 'contact.html'),
//       },
//     },
//   },
//   server: {
//     port: 8080
//   }
// }