import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Web Work',
        short_name: 'WebWork',
        description: 'We Build Web Work and AI Solutions',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/favicon.ico',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}