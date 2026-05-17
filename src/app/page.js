"use client"; // 锁死客户端渲染，确保动画和交互完美生效

export const revalidate = 0; // 强行刷新缓存，让 GitHub 修改实时同步

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f4f7f5', // 森林风：极为护眼柔和的淡绿底色
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      margin: 0,
      padding: 0
    }}>
      
      {/* 🔮 注入森林风专用的 CSS 特效池（包含弹出放大特效和果冻抖动） */}
      <style dangerouslySetInnerHTML={{__html: `
        /* 1. 顶部的在线询盘大按钮样式：采用质感森林深绿 */
        .inquiry-btn {
          display: inline-block;
          padding: 16px 45px;
          background-color: #1b4332; /* 深邃森林绿 */
          color: #ffffff;
          font-weight: 700;
          font-size: 1.15rem;
          border-radius: 50px;
          border: none;
          box-shadow: 0 10px 25px rgba(27, 67, 50, 0.3);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          text-decoration: none;
        }
        .inquiry-btn:hover {
          background-color: #2d6a4f; /* 悬浮变成明亮一点的绿 */
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 15px 30px rgba(27, 67, 50, 0.5);
        }

        /* 2. 产品卡片悬浮“弹出来”放大特效 */
        .product-card {
          background-color: #ffffff;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 12px 30px rgba(27, 67, 50, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
          cursor: pointer;
          border: 2px solid transparent;
          box-sizing: border-box;
        }
        .product-card:hover {
          transform: translateY(-10px) scale(1.03); /* 弹出来放大效果 */
          box-shadow: 0 20px 40px rgba(27, 67, 50, 0.12);
          border-color: #b7e4c7; /* 悬浮时显现浅绿边框 */
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .product-card:hover .product-img {
          transform: scale(1.08); /* 图片内部二次温和放大 */
        }

        /* 3. 页脚社交媒体图标果冻Q弹抖动特效 */
        @keyframes jelly {
          0%, 100% { transform: scale(1, 1); }
          25% { transform: scale(0.85, 1.15); }
          50% { transform: scale(1.15, 0.85); }
          75% { transform: scale(0.95, 1.05); }
        }
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          animation: jelly 0.6s ease-out;
          filter: drop-shadow(0 6px 10px rgba(27, 67, 50, 0.3));
        }
      `}} />

      {/* 🌲 顶部梦幻森林大横幅 */}
      <div style={{
        width: '100%',
        backgroundImage: `linear-gradient(rgba(15, 32, 18, 0.45), rgba(15, 32, 18, 0.6)), url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200')`, // 极具生命力的清晨森林大图
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 20px',
        textAlign: 'center',
        boxSizing: 'border-box',
        borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        boxShadow: '0 10px 30px rgba(27, 67, 50, 0.1)'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', color: '#ffffff' }}>
          <h1 style={{ fontSize: '3.4rem', fontWeight: '900', margin: '0 0 18px 0', letterSpacing: '1px', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
            Lin Ximian Biotechnology Co., Ltd.
          </h1>
          <p style={{ fontSize: '1.3rem', color: '#e8f5e9', margin: '0 0 35px 0', letterSpacing: '1.5px', fontWeight: '300', textShadow: '0 2px 5px rgba(0,0,0,0.25)' }}>
            🍃 Natural Skincare & Advanced Technology Solutions 🍃
          </p>
          
          {/* 跳转按钮指向独立的 /inquiry 子网页页面 */}
          <a href="/inquiry" className="inquiry-btn">
            Inquire Now / 在线询盘 ✉ 🌲
          </a>
        </div>
      </div>

      {/* 🌿 中部三栏产品展示墙（全部更换为清新大气的护肤实物高清大图） */}
      <main style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '70px 20px', boxSizing: 'border-box', flexGrow: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '35px', width: '100%' }}>
          
          {/* 产品 1: Sunscreen */}
          <div className="product-card">
            <div style={{ width: '100%', height: '320px', overflow: 'hidden', borderRadius: '20px', backgroundColor: '#e8f5e9' }}>
              <img src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=500" alt="Sunscreen" className="product-img" />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1b4332', marginTop: '24px' }}>🌿 Sunscreen 🌿</span>
          </div>

          {/* 产品 2: Repair Cream */}
          <div className="product-card">
            <div style={{ width: '100%', height: '320px', overflow: 'hidden', borderRadius: '20px', backgroundColor: '#e8f5e9' }}>
              <img src="https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=500" alt="Repair Cream" className="product-img" />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1b4332', marginTop: '24px' }}>✨ Repair Cream ✨</span>
          </div>

          {/* 产品 3: Whitening lotion */}
          <div className="product-card">
            <div style={{ width: '100%', height: '320px', overflow: 'hidden', borderRadius: '20px', backgroundColor: '#e8f5e9' }}>
              <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=500" alt="Whitening lotion" className="product-img" />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1b4332', marginTop: '24px' }}>🍃 Whitening lotion 🍃</span>
          </div>

        </div>
      </main>

      {/* 📜 高级森林深绿页脚 */}
      <footer style={{ backgroundColor: '#1b4332', color: '#d8f3dc', padding: '45px 30px', borderTop: '3px solid #40916c' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div>
            <p style={{ fontWeight: '800', margin: 0, fontSize: '1.2rem', color: '#ffffff' }}>Lin Ximian Biotechnology Co., Ltd.</p>
            <p style={{ margin: '6px 0 0 0', fontSize: '0.85rem', color: '#b7e4c7', fontWeight: '400' }}>© 2026 All natural rights reserved.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
            <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: '800', color: '#b7e4c7', letterSpacing: '1.5px' }}>⚡ CONNECT WITH US ⚡</p>
            
            {/* 社交媒体入口大集合：带有Q弹抖动特效 */}
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <a href="https://www.instagram.com/babyfly336/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
                <img src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="IG" style={{ width: '34px', height: '34px' }} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61567982517175" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">
                <img src="https://img.icons8.com/color/48/facebook-new.png" alt="FB" style={{ width: '34px', height: '34px' }} />
              </a>
              <a href="https://www.tiktok.com/@cathyll3_" target="_blank" rel="noopener noreferrer" className="social-icon" title="TikTok">
                <img src="https://img.icons8.com/color/48/tiktok.png" alt="TK" style={{ width: '34px', height: '34px' }} />
              </a>
              <a href="https://wa.me/8615075550800" target="_blank" rel="noopener noreferrer" className="social-icon" title="WhatsApp">
                <img src="https://img.icons8.com/color/48/whatsapp.png" alt="WA" style={{ width: '34px', height: '34px' }} />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
