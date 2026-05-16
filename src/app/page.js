// 1. 关闭 Vercel 静态缓存，确保每次在 GitHub 修改后，网页都能即时更新
export const revalidate = 0;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col justify-between">
      
      {/* 顶部通栏背景与站名区域 */}
      <div 
        className="w-full bg-cover bg-center py-24 px-6 text-center relative shadow-2xl"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200')` 
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* 这里已经是你修改后的最新站名 */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-md">
            lin-ximian-site
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 tracking-wider">
            专业护肤与技术解决方案 / Professional Skincare & Technology Solutions
          </p>
        </div>
      </div>

      {/* 中部核心内容：关于我们 + 三大核心产品（带放大弹出特效） */}
      <main className="max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-start flex-grow">
        
        {/* 左侧：关于我们介绍 */}
        <div className="lg:col-span-1 space-y-6 pt-4">
          <h2 className="text-3xl font-bold border-b-2 border-blue-500 pb-2 inline-block">
            关于我们
          </h2>
          <p className="text-gray-300 leading-relaxed text-base">
            我们致力于提供最优质的产品与技术解决方案。通过不断创新与品质追求，为客户创造真正的价值。
          </p>
        </div>

        {/* 右侧：原本的产品卡片列表（加入了悬停放大弹出特效） */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          {/* 产品 1: Sunscreen */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 p-3 flex flex-col items-center group">
            <div className="w-full h-48 overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1556229174-5e42a09e45af?q=80&w=400" 
                alt="Sunscreen" 
                className="w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-1 cursor-pointer"
              />
            </div>
            <span className="mt-4 text-sm font-semibold text-pink-400 tracking-wider group-hover:text-pink-300 transition-colors">
              Sunscreen
            </span>
          </div>

          {/* 产品 2: Repair Cream */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 p-3 flex flex-col items-center group">
            <div className="w-full h-48 overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=400" 
                alt="Repair Cream" 
                className="w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-1 cursor-pointer"
              />
            </div>
            <span className="mt-4 text-sm font-semibold text-pink-400 tracking-wider group-hover:text-pink-300 transition-colors">
              Repair Cream
            </span>
          </div>

          {/* 产品 3: Whitening Lotion */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 p-3 flex flex-col items-center group">
            <div className="w-full h-48 overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=400" 
                alt="Whitening lotion" 
                className="w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-110 group-hover:scale-110 cursor-pointer"
              />
            </div>
            <span className="mt-4 text-sm font-semibold text-pink-400 tracking-wider group-hover:text-pink-300 transition-colors">
              Whitening lotion
            </span>
          </div>

        </div>
      </main>

      {/* 页脚 */}
      <footer className="w-full text-center py-6 border-t border-gray-800 text-sm text-gray-500 bg-gray-950">
        © 2026 悦然科技. All rights reserved.
      </footer>

    </div>
  );
}
