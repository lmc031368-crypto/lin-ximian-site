// 强行刷新缓存，让每一次在 GitHub 的修改都即时全网同步
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
      
      {/* 1. 顶部高级通栏背景（带朦胧滤镜遮罩，确保白色公司名字清晰可见） */}
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

      {/* 2. 中部核心区：全部换上最顶级、干净的【纯正化妆品】配图，严格锁死横向三栏并排 */}
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '35px',
          width: '100%'
        }}>
          
          {/* 产品 1: Sunscreen（极简大牌感防晒配图） */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '24px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '14px', backgroundColor: '#f3f4f6' }}>
              <img 
                src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=500" 
                alt="Sunscreen" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: '600', color: '#db2777', marginTop: '24px', letterSpacing: '0.5px' }}>
              Sunscreen
            </span>
          </div>

          {/* 产品 2: Repair Cream */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '24px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '14px', backgroundColor: '#f3f4f6' }}>
              <img 
                src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=500" 
                alt="Repair Cream" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: '600', color: '#db2777', marginTop: '24px', letterSpacing: '0.5px' }}>
              Repair Cream
            </span>
          </div>

          {/* 产品 3: Whitening lotion */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '24px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '14px', backgroundColor: '#f3f4f6' }}>
              <img 
                src="https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=500" 
                alt="Whitening lotion" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: '600', color: '#db2777', marginTop: '24px', letterSpacing: '0.5px' }}>
              Whitening lotion
            </span>
          </div>

        </div>
      </main>

      {/* 3. 底部高级黑页脚：新增完美融合的社交媒体联系方式区域 */}
      <footer style={{ backgroundColor: '#0f172a', color: '#9ca3af', padding: '45px 30px', borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          
          {/* 左侧全新版权区 */}
          <div>
            <p style={{ color: '#ffffff', fontWeight: '600', margin: '0', fontSize: '1.1rem', letterSpacing: '0.5px' }}>Lin Ximian Biotechnology Co., Ltd.</p>
            <p style={{ margin: '6px 0 0 0', fontSize: '0.85rem', color: '#6b7280' }}>© 2026 All rights reserved.</p>
          </div>

          {/* 右侧高质感圆形社交联系按钮 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
            <p style={{ margin: 0, fontSize: '0.75rem', fontWeight: '700', color: '#9ca3af', letterSpacing: '2px' }}>CONNECT WITH US</p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#1e293b', color: '#ffffff', display: 'flex', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center' }} title="Instagram">IG</a>
              <a href="#" style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#1e293b', color: '#ffffff', display: 'flex', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center' }} title="TikTok">TK</a>
              <a href="#" style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#1e293b', color: '#ffffff', display: 'flex', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center' }} title="WhatsApp">WA</a>
              <a href="mailto:info@linximian.com" style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#1e293b', color: '#ffffff', display: 'flex', textDecoration: 'none', fontSize: '1rem', justifyContent: 'center', alignItems: 'center' }} title="Email">✉</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
