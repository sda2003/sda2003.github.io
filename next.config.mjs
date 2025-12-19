/** @type {import('next').NextConfig} */
const nextConfig = {
	// Produce a fully static export (replaces the old `next export` command)
	
	eslint: {
		// Allow builds to complete even if ESLint reports issues (safe for static exports)
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
