'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Star, Users, TrendingUp } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  console.log('Hero component rendered, scrollY:', scrollY);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Gym Background Elements */}
      <div className="absolute inset-0 perspective-1500">
        {/* Floating Dumbbell */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-16 transform-style-3d"
          style={{
            transform: `translateZ(${scrollY * 0.5}px) rotateX(${scrollY * 0.1}deg) rotateY(${scrollY * 0.2}deg)`,
          }}
          animate={{
            rotateZ: [0, 360],
            y: [0, -30, 0],
          }}
          transition={{
            rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="relative w-full h-full">
            {/* Dumbbell Shape */}
            <div className="absolute left-0 top-1/2 w-8 h-8 bg-fitness-orange rounded-full transform -translate-y-1/2 shadow-2xl" />
            <div className="absolute left-6 top-1/2 w-20 h-2 bg-fitness-gray rounded-full transform -translate-y-1/2" />
            <div className="absolute right-0 top-1/2 w-8 h-8 bg-fitness-orange rounded-full transform -translate-y-1/2 shadow-2xl" />
          </div>
        </motion.div>

        {/* Floating Barbell */}
        <motion.div
          className="absolute top-1/3 right-1/5 w-40 h-6 transform-style-3d"
          style={{
            transform: `translateZ(${scrollY * -0.3}px) rotateX(${scrollY * -0.15}deg) rotateY(${scrollY * -0.1}deg)`,
          }}
          animate={{
            rotateY: [0, 180, 360],
            x: [0, 20, 0],
          }}
          transition={{
            rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="relative w-full h-full">
            {/* Barbell Shape */}
            <div className="absolute left-0 top-1/2 w-6 h-12 bg-fitness-blue rounded-lg transform -translate-y-1/2 shadow-xl" />
            <div className="absolute left-4 top-1/2 w-32 h-2 bg-fitness-gray rounded-full transform -translate-y-1/2" />
            <div className="absolute right-0 top-1/2 w-6 h-12 bg-fitness-blue rounded-lg transform -translate-y-1/2 shadow-xl" />
          </div>
        </motion.div>

        {/* Floating Kettlebell */}
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-16 h-20 transform-style-3d"
          animate={{
            rotateX: [0, 360],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotateX: { duration: 12, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transform: `translateZ(${scrollY * 0.4}px)`,
          }}
        >
          <div className="relative w-full h-full">
            {/* Kettlebell Shape */}
            <div className="absolute top-0 left-1/2 w-8 h-6 bg-fitness-gray rounded-full transform -translate-x-1/2" />
            <div className="absolute bottom-0 left-1/2 w-16 h-16 bg-fitness-orange rounded-full transform -translate-x-1/2 shadow-2xl" />
          </div>
        </motion.div>

        {/* Floating Medicine Ball */}
        <motion.div
          className="absolute top-2/3 right-1/3 w-20 h-20 transform-style-3d"
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transform: `translateZ(${scrollY * -0.2}px)`,
          }}
        >
          <div className="w-full h-full bg-fitness-blue rounded-full shadow-2xl animate-pulse-glow" />
        </motion.div>

        {/* Abstract Gym Energy Waves */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute top-1/4 left-1/3 w-96 h-2 bg-gradient-mesh rounded-full blur-sm transform rotate-45" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-2 bg-fitness-blue rounded-full blur-sm transform -rotate-45" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 bg-fitness-orange/20 rounded-full text-fitness-orange font-semibold text-sm border border-fitness-orange/30">
                <Star className="w-4 h-4 mr-2" />
                #1 Fitness Education Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
              data-macaly="hero-title"
            >
              Transform Your
              <span className="block bg-gradient-mesh bg-clip-text text-transparent animate-pulse-glow">
                Fitness Journey
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-white/80 mb-8 max-w-xl"
              data-macaly="hero-description"
            >
              Master the art of fitness with our expert-led courses. From personal training to nutrition science, unlock your potential with cutting-edge education.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button 
                size="lg"
                className="bg-fitness-orange hover:bg-fitness-orange/90 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1"
                data-macaly="primary-cta"
              >
                Start Free Trial
                <TrendingUp className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-fitness-blue text-fitness-blue hover:bg-fitness-blue hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              {[
                { icon: Users, number: '50K+', label: 'Students' },
                { icon: Star, number: '4.9', label: 'Rating' },
                { icon: TrendingUp, number: '95%', label: 'Success Rate' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center space-x-3"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-fitness-gray rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-fitness-orange" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Gym Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative perspective-1000"
          >
            <motion.div
              className="relative transform-style-3d"
              animate={{
                rotateY: [0, 10, 0, -10, 0],
                rotateX: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                transform: `translateZ(${scrollY * -0.2}px)`,
              }}
            >
              {/* Main Gym Card */}
              <div className="relative w-96 h-96 mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-dark rounded-3xl border border-fitness-gray/30 backdrop-blur-xl transform-style-3d overflow-hidden"
                  style={{ transform: 'translateZ(40px)' }}
                  whileHover={{ scale: 1.05, rotateY: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Gym Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-fitness-orange rounded-lg transform rotate-45" />
                    <div className="absolute top-4 right-4 w-6 h-6 bg-fitness-blue rounded-full" />
                    <div className="absolute bottom-4 left-4 w-10 h-2 bg-fitness-orange rounded-full" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-fitness-blue rounded-lg transform -rotate-45" />
                  </div>

                  <div className="p-8 h-full flex flex-col justify-center items-center text-center relative z-10">
                    <motion.div
                      className="w-24 h-24 bg-fitness-orange rounded-2xl flex items-center justify-center mb-6 animate-pulse-glow relative"
                      animate={{ 
                        rotateY: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <Play className="w-12 h-12 text-white" />
                      {/* Energy Ring */}
                      <motion.div
                        className="absolute inset-0 border-2 border-fitness-blue rounded-2xl"
                        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Interactive Gym Training</h3>
                    <p className="text-white/70">Experience fitness education like never before</p>

                    {/* Floating Mini Dumbbells */}
                    <motion.div
                      className="absolute top-12 left-12 w-8 h-4"
                      animate={{
                        rotate: [0, 360],
                        y: [0, -10, 0],
                      }}
                      transition={{
                        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                      }}
                    >
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-fitness-orange rounded-full" />
                        <div className="w-4 h-0.5 bg-fitness-gray rounded-full" />
                        <div className="w-2 h-2 bg-fitness-orange rounded-full" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-12 right-12 w-8 h-4"
                      animate={{
                        rotate: [360, 0],
                        y: [0, 10, 0],
                      }}
                      transition={{
                        rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      }}
                    >
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-fitness-blue rounded-full" />
                        <div className="w-4 h-0.5 bg-fitness-gray rounded-full" />
                        <div className="w-2 h-2 bg-fitness-blue rounded-full" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating 3D Gym Equipment */}
                <motion.div
                  className="absolute -top-8 -right-8 w-16 h-16 bg-fitness-blue rounded-xl flex items-center justify-center animate-float transform-style-3d"
                  style={{ transform: 'translateZ(60px)' }}
                  animate={{
                    rotateZ: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotateZ: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <Star className="w-8 h-8 text-white" />
                  <motion.div
                    className="absolute inset-0 border-2 border-fitness-orange rounded-xl opacity-50"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <motion.div
                  className="absolute -bottom-8 -left-8 w-20 h-20 bg-fitness-orange rounded-full flex items-center justify-center transform-style-3d"
                  style={{ transform: 'translateZ(80px)' }}
                  animate={{
                    y: [0, -20, 0],
                    rotateY: [0, 180, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <TrendingUp className="w-10 h-10 text-white" />
                  {/* Pulsing Energy Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-fitness-blue rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1], 
                      opacity: [1, 0, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>

                {/* Additional Floating Gym Elements */}
                <motion.div
                  className="absolute top-1/4 -left-12 w-12 h-12"
                  animate={{
                    x: [0, 20, 0],
                    rotateZ: [0, 180, 360],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ transform: 'translateZ(100px)' }}
                >
                  {/* Mini Kettlebell */}
                  <div className="relative w-full h-full">
                    <div className="absolute top-0 left-1/2 w-4 h-2 bg-fitness-gray rounded-full transform -translate-x-1/2" />
                    <div className="absolute bottom-0 left-1/2 w-8 h-8 bg-fitness-blue rounded-full transform -translate-x-1/2 shadow-lg" />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-1/4 -right-12 w-12 h-6"
                  animate={{
                    x: [0, -15, 0],
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ transform: 'translateZ(120px)' }}
                >
                  {/* Mini Barbell */}
                  <div className="relative w-full h-full">
                    <div className="absolute left-0 top-1/2 w-2 h-4 bg-fitness-orange rounded-sm transform -translate-y-1/2" />
                    <div className="absolute left-1 top-1/2 w-10 h-1 bg-fitness-gray rounded-full transform -translate-y-1/2" />
                    <div className="absolute right-0 top-1/2 w-2 h-4 bg-fitness-orange rounded-sm transform -translate-y-1/2" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-fitness-orange rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}