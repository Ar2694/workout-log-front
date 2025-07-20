import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import path from "path";


const defaultConfig = {
  plugins: [react(), tsconfigPaths()],
  css: {
    modules: {
      generateScopedName: function (name: any, filename: any) {
        const basename = path.basename(filename, ".css")
        const [component] = basename.split(".");
        return component + "-" + name;
      },
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isDev = mode === "development"
  console.log(mode, isDev,env, command, "<<<<++++======/////")


  if (command === "serve") {
    return {
      ...defaultConfig,
      server: {
        proxy: {
          "/api": {
            target:env.VITE_API_URL_DEV,
            changeOrigin: false,
            secure: false,
          }
        }
      },
      preview: {
        proxy: {
          "/api": {
            target: env.VITE_API_URL,
            changeOrigin: true,
            secure: true
    }}}
  
  }
  } else {
    return defaultConfig;
  }

})