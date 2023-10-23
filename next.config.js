const { get } = require("@vercel/edge-config");
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	serverRuntimeConfig: {
		PROJECT_ROOT: __dirname,
	},
	redirects() {
		try {
			return get("redirects");
		} catch {
			return [];
		}
	},
};

// https://nextjs.org/docs/advanced-features/security-headers
const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self' data:;
`;

module.exports = nextConfig;
