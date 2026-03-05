"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020617]"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-600 text-glow mb-8"
      >
        SD
      </motion.div>
      <div className="w-48 h-[2px] bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }} animate={{ x: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
          className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />
      </div>
    </motion.div>
  );
}