import { defineConfig } from "vite";
import { babel } from "@rollup/plugin-babel";

export default defineConfig({
    root: "./src",
    base: "/",

    css: {
        devSourcemap: true,
    },

    build: {
        outDir: "../dist",
        assetsDir: "assets",
        minify: false,
        target: "esnext",
        sourcemap: true,
    },

    plugins: [
        babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**",
            extensions: [".js", ".ts"],
        }),
    ],

    server: {
        port: 3000,
    },

    preview: {
        port: 3001,
    },
});
