"use client"; // 锁死客户端组件

export default function InquiryPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🌲 Thank you! Your inquiry has been submitted successfully.\n提交成功！我们会尽快与您联系 🍃");
    e.target.reset();
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f4f7f5',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      padding: '60px 20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      
      <style dangerouslySetInnerHTML={{__html: `
        .input-field {
          width: 100%;
          padding: 14px 16px;
          margin-top: 8px;
          margin-bottom: 20px;
          border: 2px solid #d8f3dc;
          border-radius: 14px;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
          box-sizing: border-box;
          background-color: #fafdfb;
        }
        .input-field:focus {
          border-color: #2d6a4f;
          background-color: #ffffff;
          box-shadow: 0 0 0 4px rgba(45, 106, 79, 0.1);
        }
        .submit-btn {
          width: 100%;
          padding: 16px;
          background-color: #1b4332;
          color: #ffffff;
          border: none;
          border-radius: 14px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(27, 67, 50, 0.2);
          transition: all 0.3s ease;
        }
        .submit-btn:hover {
          background-color: #2d6a4f;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(27, 67, 50, 0.35);
        }
      `}} />

      {/* 返回首页导航 */}
      <a href="/" style={{ 
        textDecoration: 'none', 
        color: '#52b788', 
        fontSize: '1rem', 
        fontWeight: '600',
        marginBottom: '28px', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '6px'
      }}>
        ← Back to Home / 返回首页
      </a>

      {/* 询盘白底容器 */}
      <div style={{
        maxWidth: '580px',
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '45px 40px',
        borderRadius: '32px',
        boxShadow: '0 20px 45px -10px rgba(27, 67, 50, 0.08)',
        boxSizing: 'border-box',
        border: '1px solid #e9f5ed'
      }}>
        
        <h2 style={{ fontSize: '2.1rem', fontWeight: '800', color: '#1b4332', margin: '0 0 8px 0', textAlign: 'center' }}>
          Product Inquiry
        </h2>
        <p style={{ color: '#52b788', fontSize: '0.95rem', margin: '0 0 35px 0', textAlign: 'center', fontWeight: '500' }}>
          Please fill out the form below, we will reply within 24 hours.
        </p>

        <form onSubmit={handleSubmit}>
          
          <label style={{ fontWeight: '700', color: '#1b4332', fontSize: '0.95rem' }}>Your Name / 您的姓名 *</label>
          <input type="text" required className="input-field" placeholder="e.g. John Doe" />

          <label style={{ fontWeight: '700', color: '#1b4332', fontSize: '0.95rem' }}>Email Address / 电子邮箱 *</label>
          <input type="email" required className="input-field" placeholder="name@example.com" />

          <label style={{ fontWeight: '700', color: '#1b4332', fontSize: '0.95rem' }}>WhatsApp / Phone Number</label>
          <input type="text" className="input-field" placeholder="e.g. +86 150..." />

          <label style={{ fontWeight: '700', color: '#1b4332', fontSize: '0.95rem' }}>Inquiry Message / 询盘详情描述 *</label>
          <textarea required className="input-field" rows="5" placeholder="Please describe the products or specific requirements you need..." style={{ resize: 'vertical' }}></textarea>

          <button type="submit" className="submit-btn">
            Submit Inquiry / 提交询盘 🍃
          </button>

        </form>

      </div>

    </div>
  );
}
