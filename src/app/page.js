// 强行关闭 Vercel 静态缓存，确保每次在 GitHub 修改后，网页都能在几秒钟内即时更新
export const revalidate = 0;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
      
      {/* 1. 顶部通栏：还原你最初的绿色森林高级背景，并将站名改为 Lin Ximian Biotechnology Co., Ltd. */}
      <div 
        className="w-full bg-cover bg-center py-24 px-6 text-center relative shadow-md"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200')` 
        }}
      >
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-lg">
            Lin Ximian Biotechnology Co., Ltd.
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-200 tracking-wider opacity-90">
            Professional Skincare & Technology Solutions
          </p>
        </div>
      </div>

      {/* 2. 中部核心内容：还原产品卡片排版，并为图片注入“放大弹出来”特效 */}
      <main className="max-w-6xl mx-auto px-6 py-12 w-full flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          {/* 产品 1: Sunscreen */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center group">
            <div className="w-full h-64 overflow-hidden rounded-xl bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1556229174-5e42a09e45af?q=80&w=400" 
                alt="Sunscreen" 
                className="w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-105 cursor-pointer"
              />
            </div>
            <span className="mt-4 text-base font-semibold text-pink-600 tracking-wide group-hover:text-pink-500 transition-colors">
              Sunscreen
            </span>
          </div>

          {/* 产品 2: Repair Cream */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center group">
            <div className="w-full h-64 overflow-hidden rounded-xl bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=400" 
                alt="Repair Cream" 
                className="w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-105 cursor-pointer"
              />
            </div>
            <span className="mt-4 text-base font-semibold text-pink-600 tracking-wide group-hover:text-pink-500 transition-colors">
              Repair Cream
            </span>
          </div>

          {/* 产品 3: Whitening lotion */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center group">
            <div className="w-full h-64 overflow-hidden rounded-xl bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=400" 
                alt="Whitening lotion" 
                className="w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-105 cursor-pointer"
              />
            </div>
            <span className="mt-4 text-base font-semibold text-pink-600 tracking-wide group-hover:text-pink-500 transition-colors">
              Whitening lotion
            </span>
          </div>

        </div>
      </main>

      {/* 3. 底部区域：包含页脚版权与新增的社交媒体联系方式 */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* 左侧：全新版权信息 */}
          <div className="text-center md:text-left">
            <p className="text-white font-medium text-base">Lin Ximian Biotechnology Co., Ltd.</p>
            <p className="text-sm text-gray-500 mt-1">© 2026 All rights reserved.</p>
          </div>

          {/* 右侧：新增的社交媒体联系方式（带鼠标悬停放大弹出特效） */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-sm text-gray-400 font-semibold tracking-wider">CONNECT WITH US</p>
            <div className="flex gap-4">
              {/* 请在下面的 href='#' 里把 # 换成你真实的社交账号链接 */}
              <a href="#" className="p-2 bg-gray-800 hover:bg-pink-600 text-white rounded-full transition-all duration-300 transform hover:scale-115 hover:-translate-y-1 block" title="Instagram">
                <span className="text-sm font-bold px-1">IG</span>
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-black text-white rounded-full transition-all duration-300 transform hover:scale-115 hover:-translate-y-1 block" title="TikTok">
                <span className="text-sm font-bold px-1">TK</span>
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-green-600 text-white rounded-full transition-all duration-300 transform hover:scale-115 hover:-translate-y-1 block" title="WhatsApp">
                <span className="text-sm font-bold px-1">WA</span>
              </a>
              <a href="mailto:info@linximian.com" className="p-2 bg-gray-800 hover:bg-blue-600 text-white rounded-full transition-all duration-300 transform hover:scale-115 hover:-translate-y-1 block" title="Email">
                <span className="text-sm font-bold px-1">✉</span>
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
