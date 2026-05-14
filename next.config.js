/** @type {import('next').NextConfig} */
const nextConfig = {
  // 帮助搜索引擎识别你的新公司名
  env: {
    COMPANY_NAME: 'Lin Ximian Biotechnology Co., Ltd.',
  },
  images: {
    domains: ['images.unsplash.com'], // 确保图片能正常显示
  },
}

module.exports = nextConfig
