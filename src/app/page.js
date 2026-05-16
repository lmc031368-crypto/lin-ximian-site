// 1. 强行关闭 Vercel 的静态缓存，确保你的每次修改都实时全网同步
export const revalidate = 0;

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fbfbfc', // 极简的高级微灰底色
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      margin: 0,
      padding: 0
    }}>
      
      {/* 🔮 注入最安全的纯原生 CSS 动画样式：完美解决鼠标悬停“弹出来/放大”的动效，且绝对不崩 */}
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
          transform: translateY(-8px) scale(1.02); /* 鼠标放上去，卡片整体往上弹起并微微放大 */
          box-shadow: 0 20px 35px rgba(0,0,0,0.1);  /* 阴影加深，营造高光悬浮感 */
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .product-card:hover .product-img {
          transform: scale(1.08); /* 鼠标放上去时，里面的化妆品图片内部丝滑放大 */
        }
      `}} />

      {/* 2. 顶部高级大图通栏（带暗色自然滤镜遮罩，确保白色公司名字清晰可见） */}
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
        </div>
      </div>

      {/* 3. 中部核心区：严格锁死、横向并排的纯净化妆品高级画廊 */}
      <main style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '80px 20px',
        boxSizing: 'border-box',
        flexGrow: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // 强制完美横向并排
          gap: '35px',
          width: '100%'
        }}>
          
          {/* 产品 1: Sunscreen（大牌感极简防晒） */}
          <div className="product-card">
            <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '14px', backgroundColor: '#f3f4f6' }}>
              <img 
                src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=500" 
                alt="Sunscreen" 
                className="product-img"
              />
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: '600', color: '#db2777', marginTop: '24px', letterSpacing: '0.5px' }}>
              Sunscreen
            </span>
          </div>

          {/* 产品 2: Repair Cream（修护面霜配图） */}
          <div className="product-card">
            <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '14px', backgroundColor: '#f3f4f6' }}>
              <img 
                src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=500" 
                alt="Repair Cream" 
                className="product-img"
              />
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: '600', color: '#db2777', marginTop: '24px', letterSpacing: '0.5px' }}>
              Repair Cream
            </span>
          </div>

          {/* 产品 3: Whitening lotion（使用最稳健链接的高清化妆品配图，彻底终结不显示问题） */}
          <div className="product-card">
            <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '14px', backgroundColor: '#f3f4f6' }}>
              <img 
                src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=500" 
                alt="Whitening lotion" 
                className="product-img"
              />
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: '600', color: '#db2777', marginTop: '24px', letterSpacing: '0.5px' }}>
              Whitening lotion
            </span>
          </div>

        </div>
      </main>

      {/* 4. 底部高级黑页脚：新增完美融合的社交媒体联系方式区域 */}
      <footer style={{ backgroundColor: '#0f172a', color: '#9ca3af', padding: '45px 30px', borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          
          {/* 左侧页脚版权区 */}
          <div>
            <p style={{ color: '#ffffff', fontWeight: '600', margin: 0, fontSize: '1.1rem', letterSpacing: '0.5px' }}>Lin Ximian Biotechnology Co., Ltd.</p>
            <p style={{ margin: '6px 0 0 0', fontSize: '0.85rem', color: '#6b7280' }}>© 2026 All rights reserved.</p>
          </div>

          {/* 右侧圆形高级社交媒体按钮 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
            <p style={{ margin: 0, fontSize: '0.75rem', fontWeight: '700', color: '#9ca3af', letterSpacing: '2px' }}>CONNECT WITH US</p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#1e293b', color: '#ffffff', display: 'flex', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center' }}>IG</a>
              <a href="#" style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#1e293b', color: '#ffffff', display: 'flex', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center' }}>TK</a>
              <a href="#" style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#1e293b', color: '#ffffff', display: 'flex', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center' }}>WA</a>
              <a href="mailto:info@linximian.com" style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#1e293b', color: '#ffffff', display: 'flex', textDecoration: 'none', fontSize: '1rem', justifyContent: 'center', alignItems: 'center' }}>✉</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
