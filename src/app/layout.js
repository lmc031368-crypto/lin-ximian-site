export const metadata = {
  title: "Lin Ximian Biotechnology Co., Ltd.",
  description: "Professional Skincare & Technology Solutions",
  // 关键改动：在这里直接把网站的小图标（Favicon）指定为一个粉嫩的小樱花图标链接
  icons: {
    icon: "https://img.icons8.com/emoji/48/cherry-blossom.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 备用方案：双重保险，确保部分老版本浏览器也能强行显示樱花小图标 */}
        <link rel="icon" href="https://img.icons8.com/emoji/48/cherry-blossom.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
