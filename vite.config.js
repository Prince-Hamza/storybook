import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

export default defineConfig({
 
  plugins: [viteCommonjs(), react()],
  esbuild: {
    loader: "jsx",
  },
  build: {
    outDir: 'build',
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(['react-s3'])],
      loader: {
        ".js": "jsx",
        ".ts": "tsx",
      },
    },
  }
})
