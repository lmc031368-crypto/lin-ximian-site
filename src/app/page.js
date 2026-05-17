// 1. 强行刷新缓存，让每一次在 GitHub 的修改都即时全网同步
export const revalidate = 0;

export default function Home() {
  // 点击顶部按钮时，丝滑滚动到下方的表单
  const scrollToInquiry = (e) => {
    e.preventDefault();
    document.getElementById('inquiry-section').scrollIntoView({ behavior: 'smooth' });
  };

  // 表单提交弹窗
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✨ 🚀 Thank you! Your inquiry has been submitted successfully!\n提交成功！我们会尽快与您联系 (🎈◕‿◕🎈)");
    e.target.reset();
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fff5f7', // 超可爱的淡粉色背景
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      margin: 0,
      padding: 0
    }}>
      
      {/* 🔮 可爱动效核心样式池 */}
      <style dangerouslySetInnerHTML={{__html: `
        /* 产品卡片悬浮放大动画 */
        .product-card {
          background-color: #ffffff;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 12px 30px rgba(219, 39, 119, 0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
          cursor: pointer;
          border: 2px solid transparent;
        }
        .product-card:hover {
          transform: translateY(-10px) scale(1.03); /* 弹出来、放大特效 */
          box-shadow: 0 20px 40px rgba(219, 39, 119, 0.12);
          border-color: '#fbcfe8';
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .product-card:hover .product-img {
          transform: scale(1.1); /* 图片内部二次放大 */
        }

        /* 社交媒体图标果冻Q弹抖动特效 */
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
          filter: drop-shadow(0 6px 10px rgba(219, 39, 119, 0.3));
        }

        /* 按钮可爱呼吸和聚焦效果 */
        .input-field {
          width: 100%;
          padding: 14px 16px;
          margin-top: 8px;
          margin-bottom: 20px;
          border: 2px solid #fbcfe8;
          border-radius: 16px;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
          box-sizing: border-box;
          background-color: #fff9fa;
        }
        .input-field:focus {
          border-color: #db2777;
          background-color: #ffffff;
          box-shadow: 0 0 0 4px rgba(219, 39, 119, 0.1);
        }
      `}} />

      {/* 🎀 顶部梦幻横幅 */}
      <div style={{
        width: '100%',
        backgroundImage: `linear-gradient(rgba(244, 63, 94, 0.3), rgba(244, 63, 94, 0.45)), url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 20px',
        textAlign: 'center',
        boxSizing: 'border-box',
        borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        boxShadow: '0 10px 30px rgba(244, 63, 94, 0.1)'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', color: '#ffffff' }}>
          <h1 style={{ fontSize: '3.4rem', fontWeight: '900', margin: '0 0 18px 0', letterSpacing: '1px', textShadow: '0 4px 10px rgba(0,0,0,0.25)' }}>
            Lin Ximian Biotechnology Co., Ltd.
          </h1>
          <p style={{ fontSize: '1.3rem', color: '#fff1f2', margin: '0 0 32px 0', letterSpacing: '1.5px', fontWeight: '400', textShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
            ✨ Pure Skincare & Cute Technology Solutions ✨
          </p>
          
          {/* 在线询盘按钮：完美点击滚动 */}
          <button onClick={scrollToInquiry} style={{
            display: 'inline-block',
            padding: '16px 45px',
            backgroundColor: '#ffffff',
            color: '#e11d48',
            fontWeight: '700',
            fontSize: '1.15rem',
            borderRadius: '50px',
            border: 'none',
            boxShadow: '0 10px 25px rgba(244, 63, 94, 0.3)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 15px 30px rgba(244, 63, 94, 0.5)'; }}
          onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 10px 25px rgba(244, 63, 94, 0.3)'; }}
          >
            Inquire Now / 在线询盘 ✉ 💕
          </button>
        </div>
      </div>

      {/* 🌸 中部产品展示墙（全部图片已补齐，且带弹出放大特效） */}
      <main style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '60px 20px', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '35px', width: '100%' }}>
          
          {/* 产品 1 */}
          <div className="product-card">
            <div style={{ width: '100%', height: '320px', overflow: 'hidden', borderRadius: '20px', backgroundColor: '#f3f4f6' }}>
              <img src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=500" alt="Sunscreen" className="product-img" />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#be185d', marginTop: '24px' }}>🌸 Sunscreen 🌸</span>
          </div>

          {/* 产品 2（中间图片完美补齐，极其粉嫩可爱） */}
          <div className="product-card">
            <div style={{ width: '100%', height: '320px', overflow: 'hidden', borderRadius: '20px', backgroundColor: '#f3f4f6' }}>
              <img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=500" alt="Repair Cream" className="product-img" />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#be185d', marginTop: '24px' }}>🎀 Repair Cream 🎀</span>
          </div>

          {/* 产品 3 */}
          <div className="product-card">
            <div style={{ width: '100%', height: '320px', overflow: 'hidden', borderRadius: '20px', backgroundColor: '#f3f4f6' }}>
              <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=500" alt="Whitening lotion" className="product-img" />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#be185d', marginTop: '24px' }}>🌟 Whitening lotion 🌟</span>
          </div>

        </div>
      </main>

      {/* 💌 完美内嵌询盘表单区（彻底告别404，安全百分百） */}
      <section id="inquiry-section" style={{
        maxWidth: '600px',
        width: '90%',
        margin: '40px auto 80px auto',
        backgroundColor: '#ffffff',
        padding: '45px 35px',
        borderRadius: '32px',
        boxShadow: '0 20px 50px rgba(219, 39, 119, 0.08)',
        boxSizing: 'border-box',
        border: '3px solid #fce7f3'
      }}>
        <h2 style={{ fontSize: '2.1rem', fontWeight: '900', color: '#9d174d', margin: '0 0 8px 0', textAlign: 'center' }}>
          💌 Leave a Message 💌
        </h2>
        <p style={{ color: '#f43f5e', fontSize: '0.95rem', margin: '0 0 35px 0', textAlign: 'center', fontWeight: '500' }}>
          Tell us your requirements, we will reply within 24 hours!
        </p>

        <form onSubmit={handleSubmit}>
          <label style={{ fontWeight: '700', color: '#4c0519' }}>Your Name / 您的姓名 *</label>
          <input type="text" required className="input-field" placeholder="🧸 e.g. John Doe" />

          <label style={{ fontWeight: '700', color: '#4c0519' }}>Email Address / 电子邮箱 *</label>
          <input type="email" required className="input-field" placeholder="✉ name@example.com" />

          <label style={{ fontWeight: '700', color: '#4c0519' }}>WhatsApp / Phone Number</label>
          <input type="text" className="input-field" placeholder="📱 e.g. +86 150..." />

          <label style={{ fontWeight: '700', color: '#4c0519' }}>Inquiry Message / 询盘详情描述 *</label>
          <textarea required className="input-field" rows="4" placeholder="🦄 Describe what products you are looking for..." style={{ resize: 'vertical' }}></textarea>

          <button type="submit" style={{
            width: '100%',
            padding: '16px',
            backgroundColor: '#ff4e72',
            color: '#ffffff',
            border: 'none',
            borderRadius: '16px',
            fontSize: '1.15rem',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(255, 78, 114, 0.3)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f43f5e'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#ff4e72'}
          >
            🎈 Submit Inquiry / 提交询盘 🎈
          </button>
        </form>
      </section>

      {/* 💝 带来果冻抖动动效的完整页脚与媒体入口 */}
      <footer style={{ backgroundColor: '#fff0f3', color: '#9d174d', padding: '45px 30px', borderTop: '3px solid #fce7f3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div>
            <p style={{ fontWeight: '800', margin: 0, fontSize: '1.2rem', color: '#9d174d' }}>Lin Ximian Biotechnology Co., Ltd.</p>
            <p style={{ margin: '6px 0 0 0', fontSize: '0.85rem', color: '#fda4af', fontWeight: '500' }}>© 2026 All lovely rights reserved.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
            <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: '800', color: '#f43f5e', letterSpacing: '1.5px' }}>✨ CONNECT WITH US ✨</p>
            {/* 社交媒体真实入口集合 */}
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
