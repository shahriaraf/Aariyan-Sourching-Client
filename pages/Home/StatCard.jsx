"use client";
import { motion } from "framer-motion";
export default function StatCard({ imageUrl, value = 0, label, suffix = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="flex flex-col items-center justify-center text-center bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square"
    >
      <div className="flex items-center justify-center h-16 w-16 mb-2">
        <img
          src={imageUrl}
          alt={label}
          className="h-full w-auto object-contain"
        />
      </div>
      <p className="text-3xl md:text-4xl font-bold text-slate-700">
        {value}
        {suffix}
      </p>
      <p className="mt-1 text-xs font-semibold tracking-wider uppercase text-slate-500">
        {label}
      </p>
    </motion.div>
  );
}
