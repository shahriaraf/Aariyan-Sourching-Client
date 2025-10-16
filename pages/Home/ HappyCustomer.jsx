"use client";
import { useEffect, useRef, useState } from "react";
import { useMotionValue, animate } from "framer-motion";
export default function HappyCustomer({ value = 30, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const motionValue = useMotionValue(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const controls = animate(motionValue, value, {
            duration: 1.5,
            onUpdate(val) {
              setCount(Math.floor(val));
            },
          });
          return () => controls.stop();
        } else {
          motionValue.set(0);
          setCount(0);
        }
      },
      { threshold: 0.5 } 
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [value, motionValue]);

  return (
    <div
      ref={ref}
      className="mt-12 lg:mt-0 lg:col-span-3 lg:pl-8 lg:border-l lg:border-gray-200 flex items-center justify-center h-full"
    >
      <div className="bg-slate-50 p-8 rounded-lg text-center w-full max-w-xs mx-auto">
        <p className="text-5xl font-bold text-yellow-500">
          {count}
          {suffix}
        </p>
        <p className="mt-2 text-base font-medium text-gray-800">
          Happy Customer
        </p>
      </div>
    </div>
  );
}
