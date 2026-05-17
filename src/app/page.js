"use client";

import React, { useRef } from 'react';

export default function Home() {
  const inquirySection = useRef(null);

  const scrollToInquiry = () => {
    inquirySection.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🌲 Thank you! Your inquiry has been submitted successfully.\n提交成功！我们会尽快与您联系 🍃");
    e.target.reset();
  };

  // 动画效果的内联 CSS 类（注入到页面中，让 inline-style 也能完美支持 hover 缩放弹出特效）
  const hoverStyles = `
    .product-card {
      background-color: #ffffff;
      border-radius: 24px;
      padding: 24px;
      box-shadow: 0 12px 30px rgba(27, 67, 50, 0.05);
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      width: 320px;
      cursor: pointer;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, background-color 0.3s ease;
    }
    .product-card:hover {
      transform: translateY(-10px) scale(1.04);
      box-shadow: 0 25px 50px -12px rgba(27, 67, 50, 0.15);
    }
    .img-container img {
      transition: transform 0.5s ease;
    }
    .product-card:hover .img-container img {
      transform: scale(1.08);
    }
  `;

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f4f7f5', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      margin: 0,
      padding: 0
    }}>
      {/* 插入动态特效的样式标签 */}
      <style>{hoverStyles}</style>

      {/* 🌲 森林大横幅 */}
      <div style={{
        width: '100%',
        backgroundImage: `linear-gradient(rgba(15, 32, 18, 0.45), rgba(15, 32, 18, 0.6)), url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200')`, 
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
            Natural Skincare & Advanced Technology Solutions
          </p>
          
          <button 
            onClick={scrollToInquiry} 
            style={{
              display: 'inline-block',
              padding: '16px 45px',
              backgroundColor: '#1b4332', 
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '1.15rem',
              borderRadius: '50px',
              border: 'none',
              boxShadow: '0 10px 25px rgba(27, 67, 50, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Inquire Now / 在线询盘 ✉ 🌲
          </button>
        </div>
      </div>

      {/* 🌿 三栏产品展示（带平滑弹出、放大动效） */}
      <main style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '70px 20px', boxSizing: 'border-box' }}>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '35px', 
          width: '100%',
          justifyContent: 'center'
        }}>
          
          {/* 产品 1: Sunscreen */}
          <div className="product-card">
            <div className="img-container" style={{ width: '100%', height: '320px', overflow: 'hidden', borderRadius: '20px' }}>
              <img src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=500" alt="Sunscreen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1b4332', marginTop: '24px' }}>🌿 Sunscreen 🌿</span>
          </div>

          {/* 产品 2: Repair Cream (修正了不稳定的图片链接，并确保能完美加载) */}
          <div className="product-card">
            <div className="img-container" style={{ width: '100%', height: '320px', overflow: 'hidden', borderRadius: '20px' }}>
              <img src="https://images.unsplash.com/photo-1620917670397-dc71186a20e8?q=80&w=500" alt="Repair Cream" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1b4332', marginTop: '24px' }}>✨ Repair Cream ✨</span>
          </div>

          {/* 产品 3: Whitening lotion */}
          <div className="product-card">
            <div className="img-container" style={{ width: '100%', height: '320px', overflow: 'hidden', borderRadius: '20px' }}>
              <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=500" alt="Whitening lotion" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1b4332', marginTop: '24px' }}>🍃 Whitening lotion 🍃</span>
          </div>

        </div>
      </main>

      {/* ✉️ 独立询盘表单 */}
      <div ref={inquirySection} style={{
        width: '100%',
        padding: '60px 20px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#e9f5ed'
      }}>
        <div style={{
          maxWidth: '580px',
          width: '100%',
          backgroundColor: '#ffffff',
          padding: '45px 40px',
          borderRadius: '32px',
          boxShadow: '0 20px 45px -10px rgba(27, 67, 50, 0.08)',
          boxSizing: 'border-box'
        }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: '800', color: '#1b4332', margin: '0 0 8px 0', textAlign: 'center' }}>
            Product Inquiry
          </h2>
          <p style={{ color: '#52b788', fontSize: '0.95rem', margin: '0 0 35px 0', textAlign: 'center', fontWeight: '500' }}>
            Please fill out the form below, we will reply within 24 hours.
          </p>

          <form onSubmit={handleSubmit}>
            <label style={{ fontWeight: '700', color: '#1b4332', fontSize: '0.95rem' }}>Your Name / 您的姓名 *</label>
            <input type="text" required style={{ width: '100%', padding: '14px 16px', marginTop: '8px', marginBottom: '20px', border: '2px solid #d8f3dc', borderRadius: '14px', fontSize: '1rem', boxSizing: 'border-box', backgroundColor: '#fafdfb' }} placeholder="e.g. John Doe" />

            <label style={{ fontWeight: '700', color: '#1b4332', fontSize: '0.95rem' }}>Email Address / 电子邮箱 *</label>
            <input type="email" required style={{ width: '100%', padding: '14px 16px', marginTop: '8px', marginBottom: '20px', border: '2px solid #d8f3dc', borderRadius: '14px', fontSize: '1rem', boxSizing: 'border-box', backgroundColor: '#fafdfb' }} placeholder="name@example.com" />

            <label style={{ fontWeight: '700', color: '#1b4332', fontSize: '0.95rem' }}>WhatsApp / Phone Number</label>
            <input type="text" style={{ width: '100%', padding: '14px 16px', marginTop: '8px', marginBottom: '20px', border: '2px solid #d8f3dc', borderRadius: '14px', fontSize: '1rem', boxSizing: 'border-box', backgroundColor: '#fafdfb' }} placeholder="e.g. +86 150..." />

            <label style={{ fontWeight: '700', color: '#1b4332', fontSize: '0.95rem' }}>Inquiry Message / 询盘详情描述 *</label>
            <textarea required rows="5" style={{ width: '100%', padding: '14px 16px', marginTop: '8px', marginBottom: '20px', border: '2px solid #d8f3dc', borderRadius: '14px', fontSize: '1rem', boxSizing: 'border-box', backgroundColor: '#fafdfb', resize: 'vertical' }} placeholder="Please describe the products..."></textarea>

            <button type="submit" style={{ width: '100%', padding: '16px', backgroundColor: '#1b4332', color: '#ffffff', border: 'none', borderRadius: '14px', fontSize: '1.1rem', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 2
