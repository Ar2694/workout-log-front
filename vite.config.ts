import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "development"

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
      cors: true,
      proxy: {
        "/api": {
          target: "https://main.workout-log-back-aws.com",

        }
      },

    },
  }

})
