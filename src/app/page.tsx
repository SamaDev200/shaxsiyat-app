"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiClock, FiList, FiCheckCircle } from "react-icons/fi";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none" />

      <main className="z-10 flex flex-col items-center max-w-5xl px-6 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6 max-w-3xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-sm mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-medium text-sm tracking-wide uppercase">
              16Personalities O'zbek tilida
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Siz uchun yaratilgan <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              mukammal kasbni
            </span> toping
          </h1>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Hayotda o'z o'rningizni topishda qiynalyapsizmi? 
            Psixologik tahlil orqali nafaqat kimligingizni, balki sizga eng katta muvaffaqiyat va baxt keltiradigan yashirin qobiliyatlaringiz hamda kasbiy yo'lingizni kashf eting.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/test">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg flex items-center gap-2 transition-all"
              >
                Testni Boshlash
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Stats / Info section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex flex-col items-center text-center space-y-3 transition-colors hover:bg-white/10">
            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-full">
              <FiList className="w-6 h-6" />
            </div>
            <h3 className="text-white font-semibold text-xl">60 ta savol</h3>
            <p className="text-gray-400 text-sm">
              Sizning aniq portretingizni chizish uchun chuqurlashtirilgan tahlil.
            </p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex flex-col items-center text-center space-y-3 transition-colors hover:bg-white/10">
            <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-full">
              <FiClock className="w-6 h-6" />
            </div>
            <h3 className="text-white font-semibold text-xl">~10 daqiqa</h3>
            <p className="text-gray-400 text-sm">
              Shaxsiy o'sishingiz va to'g'ri kasb tanlash uchun ozgina vaqt ajrating.
            </p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex flex-col items-center text-center space-y-3 transition-colors hover:bg-white/10">
            <div className="p-3 bg-green-500/10 text-green-400 rounded-full">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-white font-semibold text-xl">100% Aniq</h3>
            <p className="text-gray-400 text-sm">
              Tavsiyalar shunchaki umumiy emas, balki aynan sizga moslashtirilgan.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
