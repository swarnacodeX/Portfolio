export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000 // increases limit from default 500kB
  }
})
