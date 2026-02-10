import { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "artaspractice.onrender.com",
        pathname: "/**",
      },
    ],
  },
  webpack(config) {
    // 1. Find the existing rule that handles SVGs
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg")
    )

    config.module.rules.push(
      // 2. Re-apply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // 3. Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: {
          not: [...(fileLoaderRule.resourceQuery?.not || []), /url/],
        },
        use: ["@svgr/webpack"],
      }
    )

    // 4. Modify the file loader rule to ignore *.svg, since we have our own rules now
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

const withNextIntl = createNextIntlPlugin({
  requestConfig: "./feature/i18n/request.ts",
})

export default withNextIntl(nextConfig)
