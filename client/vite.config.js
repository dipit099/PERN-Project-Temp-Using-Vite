import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or any other framework/plugin you are using

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set the default port to 3000
  },
})
