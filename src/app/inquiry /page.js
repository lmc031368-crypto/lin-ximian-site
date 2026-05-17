"use client"; // 声明这是客户端互动组件

export default function InquiryPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your inquiry has been submitted successfully. We will contact you soon! \n提交成功！我们会尽快与您联系。");
    e.target.reset(); // 自动清空已填写的表单内容
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '60px 20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      
      {/* 🔮 注入表单元素的聚焦和提交按钮动效 */}
      <style dangerouslySetInnerHTML={{__html: `
        .input-field {
          width: 100%;
          padding: 12px 16px;
          margin-top: 8px;
          margin-bottom: 20px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s;
          box-sizing: border-box;
        }
        .input-field:focus {
          border-color: #db2777; /* 聚焦时变成高级的玫红色 */
        }
        .submit-btn {
          width: 100%;
          padding: 14px;
          background-color: #0f172a;
          color: #ffffff;
          border: none;
          border-radius: 10px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .submit-btn:hover {
          background-color: #1e293b;
        }
      `}} />

      {/* 返回首页的小链接 */}
      <a href="/" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.95rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        ← Back to Home / 返回首页
      </a>

      {/* 询盘卡片白底容器 */}
      <div style={{
        maxWidth: '550px',
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '24px',
        boxShadow: '0 20px 40px -15px rgba(0,0,0,0.08)',
        boxSizing: 'border-box'
      }}>
        
        <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0', textAlign: 'center' }}>
          Product Inquiry
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.95rem', margin: '0 0 35px 0', textAlign: 'center' }}>
          Please leave your requirements, we will reply within 24 hours.
        </p>

        {/* 表单主体 */}
        <form onSubmit={handleSubmit}>
          
          <label style={{ fontWeight: '600', color: '#334155' }}>Your Name / 您的姓名 *</label>
          <input type="text" required className="input-field" placeholder="e.g. John Doe" />

          <label style={{ fontWeight: '600', color: '#334155' }}>Email Address / 电子邮箱 *</label>
          <input type="email" required className="input-field" placeholder="name@example.com" />

          <label style={{ fontWeight: '600', color: '#334155' }}>WhatsApp / Phone Number</label>
          <input type="text" className="input-field" placeholder="e.g. +86 150..." />

          <label style={{ fontWeight: '600', color: '#334155' }}>Inquiry Message / 询盘详情描述 *</label>
          <textarea required className="input-field" rows="4" placeholder="Please describe the products or tech solutions you are looking for..." style={{ resize: 'vertical' }}></textarea>

          <button type="submit" className="submit-btn">
            Submit Inquiry / 提交询盘
          </button>

        </form>

      </div>

    </div>
  );
}
