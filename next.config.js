/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   const fn = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/auth-confirm`
  //   return [
  //     { source: '/auth/callback',  destination: fn },
  //     { source: '/reset/callback', destination: fn },
  //   ]
  // },
};

module.exports = nextConfig;
