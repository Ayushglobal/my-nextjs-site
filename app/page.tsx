'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import CoursesSection from '@/components/CoursesSection';
import About3D from '@/components/About3D';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log('Home component mounted');
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-fitness-dark text-white overflow-hidden">
      <Navbar />
      
      {/* Floating 3D Gym Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 perspective-1500">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-fitness-orange opacity-10 rounded-full blur-xl transform-style-3d"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotateY: [0, 360],
          }}
          transition={{
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
          style={{
            transform: `translateZ(${scrollY * 0.1}px)`,
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-20 w-24 h-24 bg-fitness-blue opacity-15 rounded-full blur-xl transform-style-3d"
          animate={{
            y: [0, 40, 0],
            x: [0, -15, 0],
            rotateX: [0, 360],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotateX: { duration: 15, repeat: Infinity, ease: "linear" },
          }}
          style={{
            transform: `translateZ(${scrollY * -0.1}px)`,
          }}
        />

        {/* Floating Dumbbell */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-24 h-12 opacity-5 transform-style-3d"
          animate={{
            rotateZ: [0, 360],
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            rotateZ: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transform: `translateZ(${scrollY * 0.15}px)`,
          }}
        >
          <div className="relative w-full h-full">
            <div className="absolute left-0 top-1/2 w-6 h-6 bg-fitness-orange rounded-full transform -translate-y-1/2" />
            <div className="absolute left-4 top-1/2 w-16 h-1 bg-fitness-gray rounded-full transform -translate-y-1/2" />
            <div className="absolute right-0 top-1/2 w-6 h-6 bg-fitness-orange rounded-full transform -translate-y-1/2" />
          </div>
        </motion.div>

        {/* Floating Kettlebell */}
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-20 h-24 opacity-8 transform-style-3d"
          animate={{
            rotateX: [0, 360],
            y: [0, -35, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotateX: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transform: `translateZ(${scrollY * -0.05}px)`,
          }}
        >
          <div className="relative w-full h-full">
            <div className="absolute top-0 left-1/2 w-8 h-6 bg-fitness-gray rounded-full transform -translate-x-1/2 opacity-60" />
            <div className="absolute bottom-0 left-1/2 w-20 h-20 bg-fitness-blue rounded-full transform -translate-x-1/2 opacity-60" />
          </div>
        </motion.div>

        {/* Floating Medicine Ball */}
        <motion.div
          className="absolute top-2/3 left-1/3 w-16 h-16 bg-fitness-orange rounded-full opacity-6 transform-style-3d"
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 180, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 18, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transform: `translateZ(${scrollY * 0.08}px)`,
          }}
        />

        {/* Energy Wave Lines */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transform: `translateZ(${scrollY * 0.05}px)`,
          }}
        >
          <div className="absolute top-1/4 left-1/2 w-96 h-1 bg-gradient-mesh rounded-full blur-sm transform -translate-x-1/2 rotate-45" />
          <div className="absolute bottom-1/4 left-1/2 w-64 h-1 bg-fitness-blue rounded-full blur-sm transform -translate-x-1/2 -rotate-45" />
          <div className="absolute top-1/2 left-1/4 w-48 h-1 bg-fitness-orange rounded-full blur-sm transform -translate-y-1/2 rotate-90" />
        </motion.div>
      </div>

      <main className="relative z-10">
        <Hero scrollY={scrollY} />
        <CoursesSection scrollY={scrollY} />
        <About3D scrollY={scrollY} />
        <Testimonials scrollY={scrollY} />
      </main>
      
      <Footer />
    </div>
  );
}
