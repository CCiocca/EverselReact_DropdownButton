import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
  registerType:'autoUpdate',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    version: "2.0.1", 
    short_name:"my app",
    description:"gestionale",
    icons:[{
      src: '/android-chrome-192x192.png?v=2',
      sizes:'192x192',
      type:'image/png',
    }, 
    {
      src:'/android-chrome-512x512.png?v=2',
      sizes:'512x512',
      type:'image/png',
    },
    {
      src: '/apple-touch-icon.png?v=2',
      sizes:'180x180',
      type:'image/png',
    },
    {
      src: '/maskable_icon_x512.png?v=2',
      sizes:'512x512',
      type:'image/png',
      purpose:'any', 
    },
    {
      src: '/maskable_icon_x512.png?v=2',
      sizes:'512x512',
      type:'image/png',
      purpose:'maskable', 
    }
  ],
  theme_color:'#F5F5F5', 
  background_color:'#F5F5F5', 
  display:"standalone",  
  scope:'/',
  start_url:"/",
  orientation:'portrait',
  },

  strategies: 'generateSW', 
  workbox: {
      maximumFileSizeToCacheInBytes: 8000000,
      cleanupOutdatedCaches: true,
      skipWaiting: true,
      runtimeCaching: [
      ],
  }
}

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
  build: {
    sourcemap: true,  
  },
})
