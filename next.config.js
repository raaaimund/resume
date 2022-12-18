/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    headers: async () => [
        {
            source: '/:all*(svg|jpg|png)',
            locale: false,
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'public, max-age=604800, stale-while-revalidate',
                },
            ],
        },
    ],
}

module.exports = nextConfig
