"use client";
import { motion } from 'framer-motion';
import { Mail, Facebook, Twitter, MessageCircle } from 'lucide-react';

export default function Home() {
  const categories = [
    { 
      title: "Sunscreen", 
      desc: "Advanced protection for radiant skin.", 
      img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800" 
    },
    { 
      title: "Repair Cream", 
      desc: "Deeply nourishing botanical formula.", 
      img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800" 
    },
    { 
      title: "Whitening Lotion", 
      desc: "Natural glow and tone enhancement.", 
      img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800" 
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDF8F9] font-sans text-gray-800">
      {/* 顶部 Hero 区域 */}
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Natural Landscape" 
        />
        <div className="relative z-20 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Lin Ximian Biotechnology Co., Ltd.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl font-light opacity-90">
            Pioneering Nature-Inspired Skincare Solutions
          </motion.p>
        </div>
      </section>

      {/* 产品展示区 - 增强弹性弹出效果 */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Featured Products</h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              // 增强后的“弹出来”和“放大”特效
              whileHover={{ 
                scale: 1.08,
                y: -15,
                boxShadow: "0px 25px 50px rgba(255, 182, 193, 0.4)",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-pink-50 cursor-pointer group"
            >
              <div className="overflow-hidden bg-gray-50 aspect-[4/5]">
                <motion.img 
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  src={item.img} 
                  className="w-full h-full object-cover" 
                  alt={item.title} 
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/800x1000?text=Premium+Skincare'; }}
                />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                <div className="mt-6 inline-flex items-center text-pink-500 font-semibold text-sm tracking-wider uppercase">
                  Learn More 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 底部联系方式 */}
      <footer className="py-16 bg-white border-t border-pink-100 text-center">
        <div className="flex justify-center gap-10 mb-8 text-gray-400">
          <a href="https://www.facebook.com/profile.php?id=61567982517175" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:scale-110 transition-all"><Facebook size={28} /></a>
          <a href="https://x.com/cml1599897" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:scale-110 transition-all"><Twitter size={28} /></a>
          <a href="https://wa.me/8615075550800" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 hover:scale-110 transition-all"><MessageCircle size={28} /></a>
          <a href="mailto:contact@linximian.com" className="hover:text-red-500 hover:scale-110 transition-all"><Mail size={28} /></a>
        </div>
        <p className="text-gray-400 text-sm mb-2 uppercase tracking-widest font-medium">Global Headquarters</p>
        <p className="text-gray-500 text-lg">© 2026 Lin Ximian Biotechnology Co., Ltd. 🌸</p>
      </footer>
    </main>
  );
}
