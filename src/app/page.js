"use client";
import { motion } from 'framer-motion';
import { Mail, Facebook, Twitter, MessageCircle } from 'lucide-react';

export default function Home() {
  const categories = [
    { 
      title: "Sunscreen", 
      desc: "Advanced protection.", 
      img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800" 
    },
    { 
      title: "Repair Cream", 
      desc: "Nourishing formula.", 
      img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800" 
    },
    { 
      title: "Whitening lotion", 
      desc: "Glow enhancement.", 
      img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800" 
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDF8F9] font-sans text-gray-800">
      {/* 顶部 Hero 区域 */}
      <section className="relative h-[50vh] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600" className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
        <div className="relative z-20 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4">
            Lin Ximian Biotechnology Co., Ltd.
          </motion.h1>
          <p className="text-xl opacity-90">Professional Skincare & Technology Solutions</p>
        </div>
      </section>

      {/* 产品展示区 */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {categories.map((item, i) => (
          <motion.div 
            key={i} 
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 }
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg text-center border border-pink-50 cursor-pointer"
          >
            <div className="overflow-hidden bg-gray-100">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                src={item.img} 
                className="w-full h-64 object-cover" 
                alt={item.title} 
                onError={(e) => { e.target.src = 'https://via.placeholder.com/800x600?text=Product+Image'; }}
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-pink-600 mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 底部联系方式 */}
      <footer className="py-12 bg-white border-t border-pink-100 text-center">
        <div className="flex justify-center gap-8 mb-6 text-gray-400">
          <a href="https://www.facebook.com/profile.php?id=61567982517175" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><Facebook /></a>
          <a href="https://x.com/cml1599897" target="_blank" rel="noopener noreferrer" className="hover:text-black transition"><Twitter /></a>
          <a href="https://wa.me/8615075550800" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition"><MessageCircle /></a>
          <a href="mailto:Imc031368@gmail.com" className="hover:text-red-500 transition"><Mail /></a>
        </div>
        <p className="text-gray-400 text-sm">© 2026 Lin Ximian Biotechnology Co., Ltd. 🌸</p>
      </footer>
    </main>
  );
}
