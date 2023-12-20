/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'laptop' ? '/laprent' : '',

}

module.exports = nextConfig
