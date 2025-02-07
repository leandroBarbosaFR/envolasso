const envi = process.env.NODE_ENV;

const config = {
  NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY || '',
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || ''
};

export default config;
