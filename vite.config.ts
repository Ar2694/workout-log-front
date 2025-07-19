import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
  const isDev = mode === "development"
  console.log(mode, env.VITE_API_URL, env.VITE_API_URL_DEV,"<<<<++++======/////")
  return {
    plugins: [react(), tsconfigPaths()],
    css: {
      modules: {
        generateScopedName: function (name, filename) {
          const basename = path.basename(filename, ".css")
          const [component] = basename.split(".");
          return component + "-" + name;
        },
      }
    },
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: !isDev,
          secure: !isDev,

        }
      },

    },
  }

})
