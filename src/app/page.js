// 1. 强行关闭 Vercel 的静态缓存（彻底解决 Ready Stale 问题）
// 这能确保你以后在 GitHub 上改完字，网页立刻同步刷新
export const revalidate = 0;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-gray-800">
      
      {/* 头部区域：请把下面“这里改成你想要的新站名”换成你实际的公司或网站名字 */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl">
          lin-ximian-site
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          专业护肤与技术解决方案
        </p>
      </header>

      {/* 内容展示区 */}
      <main className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">关于我们</h2>
          <p className="text-gray-600 leading-relaxed">
            我们致力于提供最优质的产品与技术解决方案。通过不断创新与品质追求，为客户创造真正的价值。
          </p>
        </div>

        {/* 核心特效：带有“鼠标悬停图片放大弹出来”效果的图片容器 */}
        <div className="overflow-hidden rounded-2xl shadow-lg bg-white p-2">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600"
            alt="Company Office"
            className="w-full h-64 object-cover rounded-xl transform transition-transform duration-300 ease-out hover:scale-105 cursor-pointer"
          />
          <p className="text-center text-sm text-gray-400 mt-2">（鼠标放上去体验图片放大弹出效果）</p>
        </div>
      </main>

      {/* 页脚区域 */}
      <footer className="mt-24 text-sm text-gray-400 border-t pt-4 w-full text-center">
        © 2026 悦然科技. All rights reserved.
      </footer>
    </div>
  );
}
