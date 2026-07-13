"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { calculateResults, type PersonalityResult } from "../../lib/scoring";
import { personalityTypes, type PersonalityType } from "../../data/personalityTypes";
import { FiDownload, FiRepeat, FiArrowRight, FiCheck, FiAlertTriangle, FiBriefcase, FiTarget } from "react-icons/fi";

function SpectrumBar({ label1, label2, value1, value2, color1, color2 }: {
  label1: string; label2: string; value1: number; value2: number; color1: string; color2: string;
}) {
  const dominant = value1 >= value2;
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium">
        <span className={dominant ? color1 + " font-bold" : "text-gray-500"}>{label1} {value1}%</span>
        <span className={!dominant ? color2 + " font-bold" : "text-gray-500"}>{label2} {value2}%</span>
      </div>
      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden flex">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: value1 + "%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-l-full"
          style={{ background: dominant ? "var(--bar-active, #8B5CF6)" : "rgba(255,255,255,0.15)" }}
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: value2 + "%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-r-full"
          style={{ background: !dominant ? "var(--bar-active, #06B6D4)" : "rgba(255,255,255,0.15)" }}
        />
      </div>
    </div>
  );
}

export default function Dashboard() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [result, setResult] = useState<PersonalityResult | null>(null);
  const [typeInfo, setTypeInfo] = useState<PersonalityType | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // DEVELOPMENT BYPASS: No redirects
    const savedAnswers = localStorage.getItem("shaxsiyat_answers");
    let answers = {};
    if (savedAnswers) {
      answers = JSON.parse(savedAnswers);
    } else {
      // Mock answers
      answers = { 1: 3, 2: -3, 3: 3, 4: -3, 5: 3, 6: -3, 7: 3, 8: -3 };
    }

    const calcResult = calculateResults(answers);
    setResult(calcResult);
    setTypeInfo(personalityTypes[calcResult.code] || null);
  }, [router]);

  const handleRetake = () => {
    localStorage.removeItem("shaxsiyat_answers");
    localStorage.removeItem("shaxsiyat_page");
    localStorage.removeItem("shaxsiyat_completed");
    router.push("/test");
  };

  if (!mounted || !result || !typeInfo) {
    return (
      <div className="min-h-screen bg-[#0B0F19] text-white flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="text-purple-400 font-medium mb-2 tracking-wide uppercase text-sm">Sizning natijangiz</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Sizning Shaxsiy Profilingiz 🌟
          </h1>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card A — Personality Type (spans 2 cols on lg) */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 bg-gradient-to-br from-purple-900/40 to-cyan-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <p className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wider">Sizning Shaxsiyat Turingiz</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="text-6xl sm:text-8xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-wider">
                {result.code}
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{typeInfo.name}</h2>
                <p className="text-gray-400 italic text-lg">{typeInfo.motto}</p>
              </div>
            </div>
            <p className="mt-6 text-gray-300 leading-relaxed">{typeInfo.description}</p>
          </motion.div>

          {/* Card B — Spectrum */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:row-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <FiTarget className="text-cyan-400 w-5 h-5" />
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Shaxsiyat Tarozisi ⚖️</p>
            </div>
            <div className="space-y-8">
              <SpectrumBar
                label1="🗣️ Ekstravert (E)" label2="🎧 Introvert (I)"
                value1={result.percentages.EI.first} value2={result.percentages.EI.second}
                color1="text-purple-400" color2="text-cyan-400"
              />
              <SpectrumBar
                label1="🔍 Senzor (S)" label2="🔮 Intuitiv (N)"
                value1={result.percentages.SN.first} value2={result.percentages.SN.second}
                color1="text-yellow-400" color2="text-green-400"
              />
              <SpectrumBar
                label1="🧠 Fikrlovchi (T)" label2="❤️ Hissiyotli (F)"
                value1={result.percentages.TF.first} value2={result.percentages.TF.second}
                color1="text-blue-400" color2="text-pink-400"
              />
              <SpectrumBar
                label1="📅 Rejali (J)" label2="🌊 Moslashuvchan (P)"
                value1={result.percentages.JP.first} value2={result.percentages.JP.second}
                color1="text-orange-400" color2="text-indigo-400"
              />
            </div>
          </motion.div>

          {/* Card C — Strengths */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <FiCheck className="text-green-400 w-5 h-5" />
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">🚀 Kuchli Tomonlar</p>
            </div>
            <ul className="space-y-3">
              {typeInfo.strengths.map((s, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                  <span className="text-gray-200">{s}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Card C2 — Weaknesses */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <FiAlertTriangle className="text-red-400 w-5 h-5" />
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">🌱 O'sish Nuqtalari</p>
            </div>
            <ul className="space-y-3">
              {typeInfo.weaknesses.map((w, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                  <span className="text-gray-200">{w}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Card D — Careers (spans 2 cols) */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <FiBriefcase className="text-yellow-400 w-5 h-5" />
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">💼 Sizga Mos Kasblar</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {typeInfo.careers.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="bg-white/[0.04] border border-white/5 rounded-xl p-4 hover:bg-white/[0.08] transition-colors"
                >
                  <h4 className="text-white font-semibold mb-1 flex items-center gap-2 text-base">
                    {c.title}
                  </h4>
                  <p className="text-gray-400 text-sm mt-1">{c.reason}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Card E — Recommendations */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <FiTarget className="text-purple-400 w-5 h-5" />
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">💡 Siz uchun Maxsus Maslahatlar</p>
            </div>
            <ul className="space-y-3">
              {typeInfo.recommendations.map((r, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-purple-400 font-bold flex-shrink-0">{i + 1}.</span>
                  <span className="text-gray-200 text-sm">{r}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Card F — Actions (Download PDF + Retake) */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-3 bg-gradient-to-r from-purple-900/30 to-cyan-900/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-white font-semibold text-lg">Natijalaringizni saqlang!</h3>
              <p className="text-gray-400 text-sm">PDF hisobot sifatida yuklab oling yoki testni qaytadan topshiring.</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform cursor-pointer"
              >
                <FiDownload className="w-5 h-5" />
                PDF Yuklab Olish
              </button>
              <button
                onClick={handleRetake}
                className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors cursor-pointer"
              >
                <FiRepeat className="w-5 h-5" />
                Qayta Topshirish
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
