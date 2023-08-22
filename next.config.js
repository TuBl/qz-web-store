const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
	openAnalyzer: true,
});
const bundleAnalyzer = withBundleAnalyzer();

/** @type {import('next').NextConfig} */
const nextConfig = {
	productionBrowserSourceMaps: process.env.APP_ENV === "ANALYZE",
	reactStrictMode: true,
	swcMinify: true,
	trailingSlash: false,
	eslint: {
		// Disabling on production builds because we're running checks on PRs via GitHub Actions.
		ignoreDuringBuilds: true,
	},
	experimental: {
		serverActions: true,
	},
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "medusa-server-testing.s3.amazonaws.com",
				pathname: "/**",
			},
		],
	},
};

module.exports = async (phase) =>
	withPlugins([bundleAnalyzer], nextConfig)(phase, {
		undefined,
	});
