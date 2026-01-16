import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  output: 'static',
  site: 'https://hal149.com', // HAL149 domain
  build: {
    // Aggressive CSS bundling to eliminate render-blocking
    cssCodeSplit: false, // Bundle all CSS into single file to reduce requests
    inlineStylesheets: 'auto', // Inline critical CSS automatically
    assets: '_astro', // Use consistent asset naming
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      // Optimize CSS processing
      devSourcemap: false, // Disable sourcemaps in production
    },
    build: {
      // Optimize build output
      cssMinify: true, // Minify CSS
      rollupOptions: {
        output: {
          // Force single CSS bundle - eliminate code splitting
          manualChunks: undefined, // Disable manual chunking
          assetFileNames: (assetInfo) => {
            // Force all CSS into single file
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'assets/styles.[hash].css';
            }
            return 'assets/[name].[hash].[ext]';
          },
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js'
        }
      }
    }
  },
  content: {
    collections: {
      posts: {
        schema: {
          type: 'content',
          fields: {
            title: { type: 'string', required: true },
            description: { type: 'string', required: true },
            date: { type: 'date', required: true },
            author: { type: 'string', required: true },
            tags: { type: 'array', of: { type: 'string' }, required: false },
            image: { type: 'string', required: false },
            lang: { type: 'string', required: true },
            enSlug: { type: 'string', required: false },
            esSlug: { type: 'string', required: false }
          }
        }
      }
    }
  },
  experimental: {
    fonts: [{
      provider: "local",
      name: "InterLocal",
      cssVariable: "--font-inter",
      variants: [
        {
          weight: 400,
          style: "normal",
          src: ["./src/assets/fonts/Inter-Regular.woff2"]
        },
        {
          weight: 600,
          style: "normal",
          src: ["./src/assets/fonts/Inter-SemiBold.woff2"]
        },
        {
          weight: 700,
          style: "normal",
          src: ["./src/assets/fonts/Inter-Bold.woff2"]
        }
      ]
    },
    {
      provider: "local",
      name: "InterLocalDisplay",
      cssVariable: "--font-inter-display",
      variants: [
        {
          weight: 400,
          style: "normal",
          src: ["./src/assets/fonts/InterDisplay-Regular.woff2"]
        },
        {
          weight: 500,
          style: "normal",
          src: ["./src/assets/fonts/InterDisplay-Medium.woff2"]
        },
        {
          weight: 600,
          style: "normal",
          src: ["./src/assets/fonts/InterDisplay-SemiBold.woff2"]
        }
      ]
    }]
  }
})