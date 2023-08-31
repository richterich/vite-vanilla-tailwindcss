import {defineConfig} from 'vite';
import {fileURLToPath, URL} from 'node:url';

const config = defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'bundle.[hash].js',
        assetFileNames: '[name][extname]',
      },
    },
  },
  resolve: {
    alias: {
      '@ui': fileURLToPath(new URL('src/shared/ui', import.meta.url)),
      '@ui/*': fileURLToPath(new URL('src/shared/ui/*', import.meta.url)),
      '@utils': fileURLToPath(new URL('src/shared/utils', import.meta.url)),
      '@utils/*': fileURLToPath(new URL('src/shared/utils/*', import.meta.url)),
      '@widgets': fileURLToPath(new URL('src/widgets', import.meta.url)),
      '@widgets/*': fileURLToPath(new URL('src/widgets/*', import.meta.url)),
      '@entities': fileURLToPath(new URL('src/entities', import.meta.url)),
      '@entities/*': fileURLToPath(new URL('src/entities/*', import.meta.url)),
      '@features': fileURLToPath(new URL('src/features', import.meta.url)),
      '@features/*': fileURLToPath(new URL('src/features/*', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/*': fileURLToPath(new URL('src/*', import.meta.url)),
    },
  },
});

export default config;
