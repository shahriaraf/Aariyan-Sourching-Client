"use client";
import { useEffect, useState, useRef } from "react";
import { useAnimation, animate } from "framer-motion";

function Counter({ to, duration = 2 }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const controlsAnim = animate(count, to, {
            duration,
            onUpdate(value) {
              setCount(Math.floor(value));
            },
          });
          return () => controlsAnim.stop();
        } else {
          setCount(0);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
    </span>
  );
}

export default function Production() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-2">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Production Capacity</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Knit */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-lg border border-yellow-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Knit</h3>
            <p className="text-4xl font-bold text-yellow-600 mb-2">
              <Counter to={1000000} />
            </p>
            <p className="text-gray-600 font-semibold">pieces per month</p>
            <div className="mt-4 pt-4 border-t border-yellow-300">
              <p className="text-sm text-gray-600">
                Production Time: <span className="font-semibold text-gray-900">45-60 days</span>
              </p>
            </div>
          </div>

          {/* Woven */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-lg border border-yellow-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Woven</h3>
            <p className="text-4xl font-bold text-yellow-600 mb-2">
              <Counter to={500000} />
            </p>
            <p className="text-gray-600 font-semibold">pieces per month</p>
            <div className="mt-4 pt-4 border-t border-yellow-300">
              <p className="text-sm text-gray-600">
                Production Time: <span className="font-semibold text-gray-900">90-120 days</span>
              </p>
            </div>
          </div>

          {/* Sweater */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-lg border border-yellow-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Sweater</h3>
            <p className="text-4xl font-bold text-yellow-600 mb-2">
              <Counter to={300000} />
            </p>
            <p className="text-gray-600 font-semibold">pieces per month</p>
            <div className="mt-4 pt-4 border-t border-yellow-300">
              <p className="text-sm text-gray-600">
                Production Time: <span className="font-semibold text-gray-900">120-140 days</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 text-center">
          <p className="text-gray-700">
            <span className="font-semibold">Note:</span> For repeat orders, the lead time can be reduced and is negotiable during the order placement process.
          </p>
        </div>
      </div>
    </section>
  );
}
