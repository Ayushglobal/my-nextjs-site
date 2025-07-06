'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Award, Target, Users, TrendingUp, Play, CheckCircle } from 'lucide-react';

interface About3DProps {
  scrollY: number;
}

export default function About3D({ scrollY }: About3DProps) {
  console.log('About3D component rendered, scrollY:', scrollY);

  const features = [
    {
      icon: Award,
      title: 'Expert Instructors',
      description: 'Learn from certified professionals with years of industry experience',
    },
    {
      icon: Target,
      title: 'Practical Focus',
      description: 'Hands-on training that prepares you for real-world scenarios',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a thriving community of fitness professionals and enthusiasts',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Advance your career with recognized certifications and skills',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 perspective-1500">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 transform-style-3d"
          style={{
            transform: `translateZ(${scrollY * 0.2}px) rotateX(${scrollY * 0.05}deg) rotateY(${scrollY * 0.1}deg)`,
          }}
        >
          <div className="w-full h-full bg-fitness-blue opacity-10 rounded-full blur-3xl animate-pulse" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative perspective-1000"
          >
            {/* Main 3D Container */}
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
            >
              {/* Central Card */}
              <motion.div
                className="relative w-80 h-80 mx-auto bg-gradient-dark rounded-3xl border border-fitness-gray/30 backdrop-blur-xl p-8"
                style={{ transform: 'translateZ(60px)' }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center h-full flex flex-col justify-center">
                  <motion.div
                    className="w-20 h-20 bg-fitness-orange rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse-glow"
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Play className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4" data-macaly="about-main-title">
                    Interactive Learning Experience
                  </h3>
                  <p className="text-white/70" data-macaly="about-main-description">
                    Immersive 3D training modules that bring fitness education to life
                  </p>
                </div>
              </motion.div>

              {/* Floating Gym Equipment */}
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="absolute w-24 h-24 bg-fitness-blue/20 backdrop-blur-sm rounded-2xl border border-fitness-blue/30 flex items-center justify-center transform-style-3d"
                  style={{
                    transform: `
                      translateZ(${20 + index * 15}px)
                      translateX(${Math.cos((index * Math.PI) / 2) * 180}px)
                      translateY(${Math.sin((index * Math.PI) / 2) * 180}px)
                    `,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    rotateY: [0, 360],
                    rotateX: [0, 180, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  whileHover={{ scale: 1.3, rotateZ: 180 }}
                >
                  <feature.icon className="w-8 h-8 text-fitness-blue" />
                  {/* Energy Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-fitness-orange rounded-2xl opacity-30"
                    animate={{ 
                      scale: [1, 1.4, 1], 
                      opacity: [0.3, 0, 0.3],
                      rotate: [0, 360]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  />
                </motion.div>
              ))}

              {/* Orbiting Gym Equipment */}
              <motion.div
                className="absolute w-20 h-20 bg-fitness-orange rounded-xl flex items-center justify-center transform-style-3d"
                style={{ transform: 'translateZ(100px)' }}
                animate={{
                  rotateY: [0, 360],
                  translateX: [120, 0, -120, 0, 120],
                  translateY: [0, -60, 0, 60, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <TrendingUp className="w-8 h-8 text-white" />
                {/* Spinning Ring */}
                <motion.div
                  className="absolute inset-0 border-4 border-fitness-blue rounded-xl opacity-50"
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Floating Dumbbell */}
              <motion.div
                className="absolute w-16 h-8 transform-style-3d"
                style={{ transform: 'translateZ(150px)' }}
                animate={{
                  rotateY: [0, 360],
                  translateX: [80, -80, 80],
                  translateY: [-80, 80, -80],
                  rotateZ: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute left-0 top-1/2 w-4 h-4 bg-fitness-blue rounded-full transform -translate-y-1/2 shadow-xl" />
                  <div className="absolute left-3 top-1/2 w-10 h-1 bg-fitness-gray rounded-full transform -translate-y-1/2" />
                  <div className="absolute right-0 top-1/2 w-4 h-4 bg-fitness-blue rounded-full transform -translate-y-1/2 shadow-xl" />
                </div>
              </motion.div>

              {/* Floating Kettlebell */}
              <motion.div
                className="absolute w-12 h-16 transform-style-3d"
                style={{ transform: 'translateZ(80px)' }}
                animate={{
                  rotateX: [0, 360],
                  translateX: [-100, 100, -100],
                  translateY: [100, -100, 100],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute top-0 left-1/2 w-6 h-4 bg-fitness-gray rounded-full transform -translate-x-1/2" />
                  <div className="absolute bottom-0 left-1/2 w-12 h-12 bg-fitness-orange rounded-full transform -translate-x-1/2 shadow-2xl" />
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-12 h-12 bg-fitness-orange rounded-full transform -translate-x-1/2 opacity-30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Floating Medicine Ball */}
              <motion.div
                className="absolute w-14 h-14 bg-fitness-blue rounded-full shadow-2xl transform-style-3d"
                style={{ transform: 'translateZ(200px)' }}
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 360],
                  translateX: [0, 150, 0, -150, 0],
                  translateY: [0, -100, 0, 100, 0],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* Cross Pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-1 bg-white/30 rounded-full" />
                  <div className="absolute w-1 h-8 bg-white/30 rounded-full" />
                </div>
                {/* Pulsing Aura */}
                <motion.div
                  className="absolute inset-0 bg-fitness-blue rounded-full opacity-20"
                  animate={{ scale: [1, 2, 1], opacity: [0.2, 0, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>

              {/* Energy Waves */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  scale: [1, 2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="absolute top-1/2 left-1/2 w-64 h-2 bg-gradient-mesh rounded-full blur-sm transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
                <div className="absolute top-1/2 left-1/2 w-48 h-2 bg-fitness-blue rounded-full blur-sm transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block px-4 py-2 bg-fitness-orange/20 rounded-full text-fitness-orange font-semibold text-sm border border-fitness-orange/30 mb-6"
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              data-macaly="about-title"
            >
              Revolutionizing
              <span className="block bg-gradient-mesh bg-clip-text text-transparent">
                Fitness Education
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl text-white/70 mb-8"
              data-macaly="about-description"
            >
              We combine cutting-edge technology with proven fitness methodologies to deliver an unparalleled learning experience that prepares you for success in the fitness industry.
            </motion.p>

            {/* Features List */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <motion.div
                    className="w-12 h-12 bg-fitness-gray rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-fitness-orange transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotateY: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-6 h-6 text-fitness-orange group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-fitness-orange transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-white/60">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Success Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 p-6 bg-fitness-gray/20 rounded-2xl border border-fitness-gray/30 backdrop-blur-sm mb-8"
            >
              {[
                { number: '50K+', label: 'Graduates' },
                { number: '95%', label: 'Job Placement' },
                { number: '4.9/5', label: 'Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.7 + index * 0.1, type: "spring" }}
                >
                  <div className="text-2xl font-bold text-fitness-orange">{stat.number}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg"
                className="bg-fitness-orange hover:bg-fitness-orange/90 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                data-macaly="about-primary-cta"
              >
                Start Your Journey
                <CheckCircle className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-fitness-blue text-fitness-blue hover:bg-fitness-blue hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn More
                <Play className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}