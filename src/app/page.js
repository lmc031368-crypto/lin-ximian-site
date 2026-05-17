"use client";

import React, { useRef } from 'react';

export default function Home() {
  // 创建一个指向表单位置的锚点导航
  const inquirySection = useRef(null);

  const scrollToInquiry = () => {
    inquirySection.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🌲 Thank you! Your inquiry has been submitted successfully.\n提交成功！我们会尽快与您联系 🍃");
    e.target.reset();
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f4f7f5', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      margin: 0,
      padding: 0
    }}>
      
      <style dangerouslySetInnerHTML={{__html: `
        .inquiry-btn {
          display: inline-block;
          padding: 16px 45px;
          background-color: #1b4332; 
          color: #ffffff;
          font-weight: 700;
          font-size: 1.15rem;
          border-radius: 50px;
          border: none;
          box-shadow: 0 10px 25px rgba(27, 67, 50, 0.3);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .inquiry-btn:hover {
          background-color: #2d6a4f; 
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 15px 30px rgba(27, 67, 50, 0.5);
        }

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
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 20px 40px rgba(27, 67, 50, 0.12);
          border-color: #b7e4c7;
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .product-card:hover .product-img {
          transform: scale(1.08);
        }

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
          
          {/* 点击按钮直接丝滑滚动到下方表单，绝不触发跳转，彻底拉黑 404 */}
          <button onClick={scrollToInquiry} className="inquiry-btn">
            Inquire Now / 在线询盘 ✉ 🌲
          </button>
        </div>
      </div>

      {/* 🌿 三栏产品展示 */}
      <main style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '70px 20px', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '35px', width: '100%' }}>
