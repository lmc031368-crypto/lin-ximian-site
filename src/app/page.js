// 强行关闭 Vercel 静态缓存，确保你的每次代码修改都实时全网同步更新
export const revalidate = 0;

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fbfbfc', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      margin: 0,
      padding: 0
    }}>
      
      {/* 🔮 CSS 样式池 */}
      <style dangerouslySetInnerHTML={{__html: `
        .product-card {
          background-color: #ffffff;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease;
          cursor: pointer;
        }
        .product-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 35px rgba(0,0,0,0.1);
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .product-card:hover .product-img {
          transform: scale(1.08);
        }

        @keyframes jelly {
          0%, 100% { transform: scale(1, 1); }
          25% { transform: scale(0.9, 1.1); }
          50% { transform: scale(1.1, 0.9); }
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
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2));
        }

        .inquiry-btn {
          display: inline-block;
          margin-top: 28px;
          padding: 14px 40px;
          background-color: #db2777;
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          border-radius: 30px;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(219, 39, 119, 0.4);
          transition: all 0.3s ease;
        }
        .inquiry-btn:hover {
          background-color: #be185d;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(219, 39, 119, 0.6);
        }
      `}} />

      {/* 顶部通栏 */}
      <div style={{
        width: '100%',
        backgroundImage: `linear-gradient(rgba(15, 32, 18, 0.55), rgba(15, 32, 18, 0.55)), url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '110px 20px',
        textAlign: 'center',
        boxSizing: 'border-box'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', color: '#ffffff' }}>
          <h1 style={{ fontSize: '3.2rem', fontWeight: '800', margin: '0 0 18px 0', letterSpacing: '1.5px', textShadow: '0 3px 6px rgba(0,0,0,0.4)' }}>
            Lin Ximian Biotechnology Co., Ltd.
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#f3f4f6', margin: 0, letterSpacing: '2px', fontWeight: '300', opacity: 0.95 }}>
            Professional Skincare & Technology Solutions
          </p>
          
          {/* 🌟 这里的路径换成全新的小写 /contact */}
          <a href="/contact" className="inquiry-btn">
            Inquire Now / 在线询盘 ✉
          </a>
        </div>
      </div>

      {/* 中部核心区：护肤品卡画廊 */}
      <main style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '80px 20px', boxSizing: 'border-box', flexGrow: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '35px', width: '100%' }}>
          
          {/* 产品 1 */}
          <div className="product-card">
            <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '14px', backgroundColor: '#f3f4f6' }}>
              <img src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=500" alt="Sunscreen" className="product-img" />
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: '600', color: '#db2777', marginTop: '24px' }}>Sunscreen</span>
          </div>

          {/* 产品 2 */}
          <div className="product-card">
            <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '14px', backgroundColor: '#f3f4f6' }}>
              <img src="https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=500" alt="Repair Cream" className="product-img" />
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: '600', color: '#db2777', marginTop: '24px' }}>Repair Cream</span>
          </div>

          {/* 产品 3 */}
          <div className="product-card">
            <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '14px', backgroundColor: '#f3f4f6' }}>
              <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=500" alt="Whitening lotion" className="product-img" />
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: '600', color: '#db2777', marginTop: '24px' }}>Whitening lotion</span>
          </div>

        </div>
      </main>

      {/* 页脚 */}
      <footer style={{ backgroundColor: '#0f172a', color: '#9ca3af', padding: '45px 30px', borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div>
            <p style={{ color: '#ffffff', fontWeight: '600', margin: 0, fontSize: '1.1rem' }}>Lin Ximian Biotechnology Co., Ltd.</p>
            <p style={{ margin: '6px 0 0 0', fontSize: '0.85rem', color: '#6b7280' }}>© 2026 All rights reserved.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
            <p style={{ margin: 0, fontSize: '0.75rem', fontWeight: '700', color: '#9ca3af', letterSpacing: '2px' }}>CONNECT WITH US</p>
            <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
              <a href="https://www.instagram.com/babyfly336/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
                <img src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="IG" style={{ width: '30px', height: '30px' }} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61567982517175" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">
                <img src="https://img.icons8.com/color/48/facebook-new.png" alt="FB" style={{ width: '30px', height: '30px' }} />
              </a>
              <a href="https://www.tiktok.com/@cathyll3_" target="_blank" rel="noopener noreferrer" className="social-icon" title="TikTok">
                <img src="https://img.icons8.com/color/48/tiktok.png" alt="TK" style={{ width: '30px', height: '30px' }} />
              </a>
              <a href="https://wa.me/8615075550800" target="_blank" rel="noopener noreferrer" className="social-icon" title="WhatsApp">
                <img src="https://img.icons8.com/color/48/whatsapp.png" alt="WA" style={{ width: '30px', height: '30px' }} />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
