"use client";
import { useEffect, useRef, useState } from "react";
import { useMotionValue, animate } from "framer-motion";
import Image from "next/image";

function Counter({ to, duration = 2 }) {
  const [count, setCount] = useState(0);
  const motionValue = useMotionValue(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const controls = animate(motionValue, to, {
            duration,
            onUpdate(value) {
              setCount(Math.floor(value));
            },
          });
          return () => controls.stop();
        } else {
          animate(motionValue, 0, {
            duration,
            onUpdate(value) {
              setCount(Math.floor(value));
            },
          });
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [to, duration, motionValue]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function OurProfile() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-2">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Profile</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-video">
            <Image
              src={"/profile.jpg"}
              alt="Our Workshop"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">AARYAN SOURCING</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              AARYAN SOURCING was established in 2020, having a strong
              connection with our sister concern, EXPO DRESS MARKETING, which is
              a well-known garment house since 2000. With over two decades of
              industry expertise, we specialize in garment services.
            </p>
            <div className="mt-12 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">
                  <Counter to={25} /> <sup className="text-xl">+</sup>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Years in Business
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">
                  <Counter to={50} /> <sup className="text-xl">+</sup>
                </div>
                <div className="text-sm font-bold text-gray-900 mt-1">
                  Country
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">
                  <Counter to={20} /> <sup className="text-xl">+</sup>
                </div>
                <div className="text-xs text-gray-500 mt-1">Total Manpower</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">
                  <Counter to={50} /> <sup className="text-xl">+</sup>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Sourcing Factories
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">
                  <Counter to={30000} />
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Number Of Workers
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">
                  <Counter to={250000} />
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Per Day Production
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <a
            href="/LookBook-Image/AaryanSourcingProfile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-10 py-3 hover:bg-gray-700 transition-colors inline-block"
          >
            Our Profile
          </a>
        </div>
      </div>
    </section>
  );
}
