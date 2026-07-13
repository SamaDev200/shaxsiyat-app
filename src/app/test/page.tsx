"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import questionsData from "../../data/questions.json";

type AnswerValue = -3 | -2 | -1 | 0 | 1 | 2 | 3;

export default function TestWizard() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerValue>>({});

  const QUESTIONS_PER_PAGE = 6;
  const totalPages = Math.ceil(questionsData.length / QUESTIONS_PER_PAGE);

  useEffect(() => {
    const saved = localStorage.getItem("shaxsiyat_answers");
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
    const savedPage = localStorage.getItem("shaxsiyat_page");
    if (savedPage) {
      setCurrentPage(parseInt(savedPage, 10));
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("shaxsiyat_answers", JSON.stringify(answers));
      localStorage.setItem("shaxsiyat_page", currentPage.toString());
    }
  }, [answers, currentPage, mounted]);

  if (!mounted) return null;

  const startIndex = currentPage * QUESTIONS_PER_PAGE;
  const currentQuestions = questionsData.slice(startIndex, startIndex + QUESTIONS_PER_PAGE);

  const handleAnswer = (questionId: number, value: AnswerValue) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    const allAnswered = currentQuestions.every((q) => answers[q.id] !== undefined);
    if (!allAnswered) {
      alert("Iltimos, ushbu sahifadagi barcha savollarga javob bering.");
      return;
    }
    if (currentPage < totalPages - 1) {
      setCurrentPage((p) => p + 1);
      window.scrollTo(0, 0);
    } else {
      localStorage.setItem("shaxsiyat_completed", "true");
      router.push("/dashboard");
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((p) => p - 1);
      window.scrollTo(0, 0);
    }
  };

  const progress = ((currentPage + 1) / totalPages) * 100;
  const progressWidth = progress + "%";

  const likertValues: AnswerValue[] = [3, 2, 1, 0, -1, -2, -3];

  function getSizeClass(val: number) {
    const abs = Math.abs(val);
    if (abs === 3) return "w-12 h-12 sm:w-14 sm:h-14";
    if (abs === 2) return "w-10 h-10 sm:w-12 sm:h-12";
    if (abs === 1) return "w-8 h-8 sm:w-10 sm:h-10";
    return "w-6 h-6 sm:w-8 sm:h-8";
  }

  function getColorClass(val: number, isSelected: boolean) {
    if (isSelected) {
      if (val > 0) return "bg-purple-500 border-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.4)]";
      if (val < 0) return "bg-cyan-500 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.4)]";
      return "bg-gray-500 border-gray-500";
    }
    if (val > 0) return "border-purple-500 hover:bg-purple-500/20";
    if (val < 0) return "border-cyan-500 hover:bg-cyan-500/20";
    return "border-gray-500 hover:bg-gray-500/20";
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white py-12 px-4 sm:px-6 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-8 sticky top-0 bg-[#0B0F19] pt-4 pb-6 z-10 border-b border-white/10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 text-sm font-medium">
              {Math.round(progress)}% tugallandi
            </span>
            <span className="text-gray-400 text-sm font-medium">
              Sahifa {currentPage + 1} / {totalPages}
            </span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: progressWidth }}
              className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
            />
          </div>
        </div>

        {/* Questions */}
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="space-y-12"
        >
          {currentQuestions.map((q) => (
            <div key={q.id} className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-medium text-center mb-8">
                {q.text}
              </h3>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-purple-400 text-sm font-semibold hidden sm:block w-32 text-right">
                  Qo&apos;shilaman
                </span>

                <div className="flex items-center justify-center gap-2 sm:gap-4 w-full sm:w-auto">
                  {likertValues.map((val) => {
                    const isSelected = answers[q.id] === val;
                    const sizeClass = getSizeClass(val);
                    const colorClass = getColorClass(val, isSelected);

                    return (
                      <button
                        key={val}
                        onClick={() => handleAnswer(q.id, val)}
                        className={"rounded-full border-2 transition-all duration-200 flex items-center justify-center cursor-pointer " + sizeClass + " " + colorClass}
                        aria-label={"Qiymat " + val}
                      />
                    );
                  })}
                </div>

                <span className="text-cyan-400 text-sm font-semibold hidden sm:block w-32 text-left">
                  Qo&apos;shilmayman
                </span>

                <div className="flex justify-between w-full sm:hidden text-xs font-semibold mt-2 px-2">
                  <span className="text-purple-400">Qo&apos;shilaman</span>
                  <span className="text-cyan-400">Qo&apos;shilmayman</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-between items-center pb-20">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={currentPage === 0
              ? "px-6 py-3 rounded-full font-medium transition-colors text-gray-600 cursor-not-allowed"
              : "px-6 py-3 rounded-full font-medium transition-colors text-white hover:bg-white/10"
            }
          >
            Oldingisi
          </button>
          <button
            onClick={handleNext}
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform cursor-pointer"
          >
            {currentPage === totalPages - 1 ? "Natijani ko'rish" : "Keyingisi"}
          </button>
        </div>
      </div>
    </div>
  );
}
