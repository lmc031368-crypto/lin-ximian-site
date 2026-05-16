// 强制关闭 Vercel 静态缓存，确保修改瞬间全网同步
export const revalidate = 0;

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'between',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      margin: 0,
      padding: 0
    }}>
      
      {/* 1. 顶部高级大图横幅（带暗色半透明遮罩，确保白色公司名字清晰可见） */}
      <div style={{
        width: '100%',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 20px',
        textAlign: 'center',
        boxSizing: 'border-box'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', color: '#ffffff' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', margin: '0 0 15px 0', letterSpacing: '1px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            Lin Ximian Biotechnology Co., Ltd.
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#e5e7eb', margin: 0, letterSpacing: '1px', fontWeight: '300' }}>
            Professional Skincare & Technology Solutions
          </p>
        </div>
      </div>

      {/* 2. 中部核心区：强制固定为【横向三栏并排】的精致产品画廊，并带有鼠标悬停弹出来特效 */}
      <main style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '60px 20px',
        boxSizing: 'border-box',
        flexGrow: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          width: '100%'
        }}>
          
          {/* 产品 1: Sunscreen */}
          <div className="group" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '100%', height: '280px', overflow: 'hidden', borderRadius: '12px' }}>
              <img 
                src="https://images.unsplash.com/photo-1556229174-5e42a09e45af?q=80&w=400" 
                alt="Sunscreen" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                className="hover:scale-105 cursor-pointer transform"
              />
            </div>
            <span style={{ mt: '20px', fontSize: '1.15rem', fontWeight: '600', color: '#db2777', marginTop: '20px', letterSpacing: '0.5px' }}>
              Sunscreen
            </span>
          </div>

          {/* 产品 2: Repair Cream */}
          <div className="group" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '100%', height: '280px', overflow: 'hidden', borderRadius: '12px' }}>
              <img 
                src="https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=400" 
                alt="Repair Cream" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                className="hover:scale-105 cursor-pointer transform"
              />
            </div>
            <span style={{ mt: '20px', fontSize: '1.15rem', fontWeight: '600', color: '#db2777', marginTop: '20px', letterSpacing: '0.5px' }}>
              Repair Cream
            </span>
          </div>

          {/* 产品 3: Whitening lotion */}
          <div className="group" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '100%', height: '280px', overflow: 'hidden', borderRadius: '12px' }}>
              <img 
                src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=400" 
                alt="Whitening lotion" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                className="hover:scale-105 cursor-pointer transform"
              />
            </div>
            <span style={{ mt: '20px', fontSize: '1.15rem', fontWeight: '600', color: '#db2777', marginTop: '20px', letterSpacing: '0.5px' }}>
              Whitening lotion
            </span>
          </div>

        </div>
      </main>

      {/* 3. 底部高级黑页脚：新增完美融合的社交媒体联系方式区域 */}
      <footer style={{ backgroundColor: '#111827', color: '#9ca3af', padding: '40px 20px', borderTop: '1px solid #1f2937' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          
          {/* 左侧版权 */}
          <div>
            <p style={{ color: '#ffffff', fontWeight: '500', margin: '0 0 5px 0', fontSize: '1.05rem' }}>Lin Ximian Biotechnology Co., Ltd.</p>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#6b7280' }}>© 2026 All rights reserved.</p>
          </div>

          {/* 右侧社交联系（鼠标悬停会有圆形变色和浮动特效） */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
            <p style={{ margin: 0, fontSize: '0.75rem', fontWeight: '700', color: '#9ca3af', letterSpacing: '1.5px' }}>CONNECT WITH US</p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1f2937', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold', transition: 'all 0.3s' }} title="Instagram">IG</a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1f2937', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold', transition: 'all 0.3s' }} title="TikTok">TK</a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1f2937', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold', transition: 'all 0.3s' }} title="WhatsApp">WA</a>
              <a href="mailto:info@linximian.com" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1f2937', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.3s' }} title="Email">✉</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
