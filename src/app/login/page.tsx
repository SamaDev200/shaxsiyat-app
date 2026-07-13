"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Xatolik yuz berdi");
        setLoading(false);
        return;
      }

      // Save token to localStorage for client-side usage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/test");
    } catch {
      setError("Server bilan aloqa yo'q");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex items-center justify-center px-4">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Shaxsiyat.uz
          </Link>
          <h1 className="text-3xl font-bold mt-4">Xush kelibsiz! 👋</h1>
          <p className="text-gray-400 mt-2">Hisobingizga kiring va testni boshlang</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <label className="text-gray-400 text-sm font-medium block mb-1.5">Email</label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                required
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-400 text-sm font-medium block mb-1.5">Parol</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Parolingizni kiriting"
                required
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black rounded-xl font-semibold hover:scale-[1.02] transition-transform cursor-pointer disabled:opacity-50"
          >
            {loading ? "Kuting..." : "Kirish"}
            {!loading && <FiArrowRight className="w-5 h-5" />}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Hisobingiz yo'qmi?{" "}
          <Link href="/register" className="text-cyan-400 hover:text-cyan-300 font-medium">
            Ro'yxatdan o'tish
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
