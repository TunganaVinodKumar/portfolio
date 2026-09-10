import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig(async ({ command }) => {
  const plugins = [
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
      prerender: {
        enabled: true,
        crawlLinks: false,
      },
    }),
    react(),
  ];

  if (command === "build" && process.env.VERCEL) {
    const { nitro } = await import("nitro/vite");
    plugins.push(
      nitro({
        defaultPreset: "vercel",
      }),
    );
  }

  return {
    base: process.env.GITHUB_PAGES ? "/portfolio/" : "/",
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    plugins,
  };
});
