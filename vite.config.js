import { defineConfig } from 'vite'
import dts from 'vite-dts'

export default defineConfig({
    build: {
        lib: {
            entry: 'src/main.ts',
            fileName: (format) => `tscaesar.${format}.js`,
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            output: {
                sourcemapExcludeSources: true,
            },
        },
        sourcemap: true,
        minify: 'esbuild',
        target: 'esnext',
    },
    plugins: [dts()],
})
