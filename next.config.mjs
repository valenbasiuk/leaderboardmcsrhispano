/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  async headers() {
    const week = 'public, max-age=604800, stale-while-revalidate=86400'
    return [
      // js/html no llevan hash en el nombre: cache corto y revalida
      { source: '/leaderboard.js', headers: [{ key: 'Cache-Control', value: 'public, max-age=300, stale-while-revalidate=86400' }] },
      { source: '/index.html', headers: [{ key: 'Cache-Control', value: 'public, max-age=60, stale-while-revalidate=86400' }] },
      // imagenes estaticas
      { source: '/backgrounds/:path*', headers: [{ key: 'Cache-Control', value: week }] },
      { source: '/ranks/:path*', headers: [{ key: 'Cache-Control', value: week }] },
      { source: '/range/:path*', headers: [{ key: 'Cache-Control', value: week }] },
      { source: '/icons/:path*', headers: [{ key: 'Cache-Control', value: week }] },
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/index.html',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
