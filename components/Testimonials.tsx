'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  scrollY: number;
}

export default function Testimonials({ scrollY }: TestimonialsProps) {
  console.log('Testimonials component rendered, scrollY:', scrollY);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Certified Personal Trainer',
      content: 'FitAcademy transformed my career completely. The 3D learning experience made complex concepts so much easier to understand. I\'m now running my own successful training studio!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Nutrition Specialist',
      content: 'The nutrition science course was incredible. The interactive modules and real-world applications gave me the confidence to start my nutrition consulting business.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'Yoga Instructor',
      content: 'The community support and expert guidance at FitAcademy is unmatched. I gained not just knowledge but lifelong connections in the fitness industry.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* 3D Gym Background Elements */}
      <div className="absolute inset-0 perspective-1500">
        <motion.div
          className="absolute top-1/4 left-0 w-64 h-64 bg-fitness-orange opacity-5 rounded-full blur-3xl"
          style={{
            transform: `translateZ(${scrollY * 0.1}px) translateX(${scrollY * 0.2}px)`,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-fitness-blue opacity-5 rounded-full blur-3xl"
          style={{
            transform: `translateZ(${scrollY * -0.1}px) translateX(${scrollY * -0.2}px)`,
          }}
        />

        {/* Floating Gym Equipment */}
        <motion.div
          className="absolute top-1/3 left-1/6 w-20 h-10 transform-style-3d opacity-10"
          animate={{
            rotateY: [0, 360],
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transform: `translateZ(${scrollY * 0.15}px)`,
          }}
        >
          {/* Floating Barbell */}
          <div className="relative w-full h-full">
            <div className="absolute left-0 top-1/2 w-4 h-6 bg-fitness-orange rounded-lg transform -translate-y-1/2" />
            <div className="absolute left-3 top-1/2 w-14 h-1 bg-fitness-gray rounded-full transform -translate-y-1/2" />
            <div className="absolute right-0 top-1/2 w-4 h-6 bg-fitness-orange rounded-lg transform -translate-y-1/2" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/6 w-16 h-20 transform-style-3d opacity-15"
          animate={{
            rotateX: [0, 360],
            scale: [1, 1.2, 1],
            y: [0, -25, 0],
          }}
          transition={{
            rotateX: { duration: 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transform: `translateZ(${scrollY * -0.1}px)`,
          }}
        >
          {/* Floating Kettlebell */}
          <div className="relative w-full h-full">
            <div className="absolute top-0 left-1/2 w-6 h-4 bg-fitness-gray rounded-full transform -translate-x-1/2" />
            <div className="absolute bottom-0 left-1/2 w-16 h-16 bg-fitness-blue rounded-full transform -translate-x-1/2 shadow-xl" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-2/3 center w-12 h-12 bg-fitness-orange rounded-full opacity-10 transform-style-3d"
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 180, 360],
            scale: [1, 1.4, 1],
          }}
          transition={{
            rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 12, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transform: `translateZ(${scrollY * 0.1}px) translateX(50%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-fitness-orange/20 rounded-full text-fitness-orange font-semibold text-sm border border-fitness-orange/30 mb-6"
          >
            Success Stories
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            data-macaly="testimonials-title"
          >
            What Our
            <span className="block bg-gradient-mesh bg-clip-text text-transparent">
              Students Say
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
            data-macaly="testimonials-description"
          >
            Join thousands of successful fitness professionals who transformed their careers with FitAcademy
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 100, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -25, 
                rotateX: 15,
                rotateY: 8,
                scale: 1.08,
                transition: { duration: 0.4 }
              }}
              viewport={{ once: true }}
              className="group transform-style-3d"
            >
              <div className="relative bg-gradient-dark rounded-3xl border border-fitness-gray/30 overflow-hidden backdrop-blur-xl p-8 h-full shadow-2xl">
                {/* 3D Depth Layers */}
                <motion.div
                  className="absolute inset-0 bg-gradient-mesh opacity-0 group-hover:opacity-15 rounded-3xl"
                  style={{ transform: 'translateZ(8px)' }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating Mini Gym Elements */}
                <motion.div
                  className="absolute top-6 left-6 w-4 h-2 opacity-0 group-hover:opacity-50 transform-style-3d"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                  style={{ transform: 'translateZ(15px)' }}
                >
                  {/* Mini Dumbbell */}
                  <div className="flex items-center space-x-0.5">
                    <div className="w-1 h-1 bg-fitness-orange rounded-full" />
                    <div className="w-2 h-0.5 bg-fitness-gray rounded-full" />
                    <div className="w-1 h-1 bg-fitness-orange rounded-full" />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 right-6 w-3 h-3 bg-fitness-blue rounded-full opacity-0 group-hover:opacity-40 transform-style-3d"
                  animate={{
                    scale: [1, 1.6, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ transform: 'translateZ(20px)' }}
                />

                {/* Floating Energy Particles */}
                <motion.div
                  className="absolute top-12 right-12 w-2 h-2 bg-fitness-orange rounded-full opacity-0 group-hover:opacity-60 transform-style-3d"
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  style={{ transform: 'translateZ(25px)' }}
                />

                <motion.div
                  className="absolute bottom-12 left-12 w-2 h-2 bg-fitness-blue rounded-full opacity-0 group-hover:opacity-60 transform-style-3d"
                  animate={{
                    y: [0, 15, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  style={{ transform: 'translateZ(30px)' }}
                />
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-6 right-6 w-12 h-12 bg-fitness-orange/20 rounded-xl flex items-center justify-center"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <Quote className="w-6 h-6 text-fitness-orange" />
                </motion.div>

                {/* Rating */}
                <motion.div
                  className="flex items-center space-x-1 mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.7 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Content */}
                <motion.p
                  className="text-white/80 text-lg leading-relaxed mb-8"
                  data-macaly={`testimonial-content-${testimonial.id}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.8 }}
                >
                  "{testimonial.content}"
                </motion.p>

                {/* Author */}
                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 1 }}
                >
                  <motion.div
                    className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-fitness-orange"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      data-macaly={`testimonial-avatar-${testimonial.id}`}
                    />
                    <div className="absolute inset-0 bg-fitness-orange/20 group-hover:bg-fitness-orange/10 transition-colors duration-300" />
                  </motion.div>
                  
                  <div>
                    <motion.h4
                      className="text-white font-semibold text-lg group-hover:text-fitness-orange transition-colors duration-300"
                      data-macaly={`testimonial-name-${testimonial.id}`}
                    >
                      {testimonial.name}
                    </motion.h4>
                    <motion.p
                      className="text-fitness-blue text-sm"
                      data-macaly={`testimonial-role-${testimonial.id}`}
                    >
                      {testimonial.role}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-mesh opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl pointer-events-none"
                  style={{ transform: 'translateZ(5px)' }}
                />

                {/* Floating Elements */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-8 h-8 bg-fitness-blue rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  style={{ transform: 'translateZ(30px)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-flex items-center space-x-6 bg-gradient-dark rounded-2xl border border-fitness-gray/30 backdrop-blur-xl p-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2" data-macaly="cta-title">
                Ready to Join Them?
              </h3>
              <p className="text-white/70" data-macaly="cta-description">
                Start your fitness education journey today
              </p>
            </div>
            <motion.button
              className="bg-fitness-orange hover:bg-fitness-orange/90 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-macaly="testimonials-cta"
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}