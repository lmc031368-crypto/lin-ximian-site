// 1. 强制关闭 Vercel 静态缓存，确保每次在 GitHub 修改，新域名都能瞬间同步
export const revalidate = 0;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
      
      {/* 顶部通栏：完美还原你最初最喜欢的绿色森林/桥梁背景，更换新站名 */}
      <div 
        className="w-full bg-cover bg-center py-28 px-6 text-center relative shadow-md"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200')` 
        }}
      >
        <div className="max-w-5xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-xl">
            Lin Ximian Biotechnology Co., Ltd.
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-200 tracking-wider font-light opacity-90">
            Professional Skincare & Technology Solutions
          </p>
        </div>
      </div>

      {/* 中部核心：完美还原你最初的三大产品并排精致卡片排版，同时注入图片“弹出放大”特效 */}
      <main className="max-w-6xl mx-auto px-6 py-16 w-full flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          {/* 产品 1: Sunscreen */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center group">
            <div className="w-full h-64 overflow-hidden rounded-xl bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1556229174-5e42a09e45af?q=80&w=400" 
                alt="Sunscreen" 
                className="w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-105 cursor-pointer"
              />
            </div>
            <span className="mt-5 text-base font-semibold text-pink-600 tracking-wide transition-colors">
              Sunscreen
            </span>
          </div>

          {/* 产品 2: Repair Cream */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center group">
            <div className="w-full h-64 overflow-hidden rounded-xl bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=400" 
                alt="Repair Cream" 
                className="w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-105 cursor-pointer"
              />
            </div>
            <span className="mt-5 text-base font-semibold text-pink-600 tracking-wide transition-colors">
              Repair Cream
            </span>
          </div>

          {/* 产品 3: Whitening lotion */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center group">
            <div className="w-full h-64 overflow-hidden rounded-xl bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=400" 
                alt="Whitening lotion" 
                className="w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-105 cursor-pointer"
              />
            </div>
            <span className="mt-5 text-base font-semibold text-pink-600 tracking-wide transition-colors">
              Whitening lotion
            </span>
          </div>

        </div>
      </main>

      {/* 底部高级黑页脚：新增完美融合的社交媒体联系方式区域 */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* 左侧：精美版权声明 */}
          <div className="text-center md:text-left">
            <p className="text-white font-medium text-base tracking-wide">Lin Ximian Biotechnology Co., Ltd.</p>
            <p className="text-xs text-gray-500 mt-1">© 2026 All rights reserved.</p>
          </div>

          {/* 右侧：社交媒体圆形按钮区（带鼠标悬停放大、变色、上浮特效） */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-xs text-gray-500 font-bold tracking-widest">CONNECT WITH US</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-pink-600 text-white rounded-full transition-all duration-300 transform hover:scale-115 hover:-translate-y-1" title="Instagram">
                <span className="text-xs font-bold">IG</span>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-black text-white rounded-full transition-all duration-300 transform hover:scale-115 hover:-translate-y-1" title="TikTok">
                <span className="text-xs font-bold">TK</span>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-green-600 text-white rounded-full transition-all duration-300 transform hover:scale-115 hover:-translate-y-1" title="WhatsApp">
                <span className="text-xs font-bold">WA</span>
              </a>
              <a href="mailto:info@linximian.com" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 text-white rounded-full transition-all duration-300 transform hover:scale-115 hover:-translate-y-1" title="Email">
                <span className="text-xs font-bold">✉</span>
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
