"use client";
import { motion } from "framer-motion";
export default function ProgressBar({ name, percentage }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <p className="text-sm font-medium text-gray-700">{name}</p>
        <p className="text-sm font-bold text-yellow-500">{percentage}</p>
      </div>
      <div className="w-full bg-gray-200/90 rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-yellow-400 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: percentage }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  );
}
