import { defineConfig, transformWithOxc } from "vite";
import react from "@vitejs/plugin-react";

function jsxInJs() {
  let viteConfig;

  return {
    name: "jsx-in-js",
    enforce: "pre",
    configResolved(config) {
      viteConfig = config;
    },
    async transform(code, id) {
      const filePath = id.split("?")[0].replace(/\\/g, "/");

      if (!/\/src\/.*\.js$/.test(filePath)) {
        return null;
      }

      const result = await transformWithOxc(
        code,
        id,
        {
          lang: "jsx",
          jsx: {
            runtime: "automatic",
            importSource: "react",
            development: viteConfig.command === "serve",
            refresh: viteConfig.command === "serve",
          },
          sourcemap:
            viteConfig.command === "serve" || Boolean(viteConfig.build.sourcemap),
        },
        undefined,
        viteConfig
      );

      return {
        code: result.code,
        map: result.map,
      };
    },
  };
}

export default defineConfig({
  plugins: [
    jsxInJs(),
    react({
      include: /\.(js|jsx)$/,
    }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
  },
});
