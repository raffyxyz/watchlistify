import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

const nextConfig = {};

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

export default withPWA(nextConfig);
