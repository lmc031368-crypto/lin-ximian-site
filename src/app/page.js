"use client";
import { motion } from 'framer-motion';
import { Mail, Facebook, Twitter, MessageCircle } from 'lucide-react';

export default function Home() {
  const categories = [
    { title: "Sunscreen", desc: "Advanced protection.", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800" },
    { title: "Repair Cream", desc: "Nourishing formula.", img: "https://images.unsplash.com/photo-1598440443997-3243c19fe382?w=800" },
    { title: "Whitening lotion", desc: "Glow enhancement.", img: "https://images.unsplash.com/photo-1617897903246-719242758050?w=800" }
  ];

  return (
    <main className="min-h-screen bg-[#FDF8F9] font-sans text-gray-800">
      <section className="relative h-[50vh] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600" className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
        <div className="relative z-20 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Handan Yueran Technology Company</h1>
          <p className="text-xl opacity-90">Professional Skincare & Technology Solutions</p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {categories.map((item, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} className="bg-white rounded-3xl overflow-hidden shadow-lg text-center border border-pink-50">
            <img src={item.img} className="w-full h-64 object-cover" alt={item.title} />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-pink-600 mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <footer className="py-12 bg-white border-t border-pink-100 text-center">
        <div className="flex justify-center gap-8 mb-6 text-gray-400">
          <a href="https://www.facebook.com/profile.php?id=61567982517175" target="_blank" className="hover:text-blue-600 transition"><Facebook /></a>
          <a href="https://x.com/cml1599897" target="_blank" className="hover:text-black transition"><Twitter /></a>
          <a href="https://wa.me/8615075550800" target="_blank" className="hover:text-green-500 transition"><MessageCircle /></a>
          <a href="mailto:Imc031368@gmail.com" className="hover:text-red-500 transition"><Mail /></a>
        </div>
        <p className="text-gray-400 text-sm">© 2026 Handan Yueran Technology Company 🌸</p>
      </footer>
    </main>
  );
}
