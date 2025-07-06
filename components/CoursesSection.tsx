'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, BookOpen, Dumbbell, Heart, Zap } from 'lucide-react';

interface CoursesSectionProps {
  scrollY: number;
}

export default function CoursesSection({ scrollY }: CoursesSectionProps) {
  console.log('CoursesSection rendered, scrollY:', scrollY);

  const courses = [
    {
      id: 1,
      title: 'Personal Training Certification',
      description: 'Become a certified personal trainer with our comprehensive program',
      duration: '8 weeks',
      students: '2.5K',
      rating: 4.9,
      price: '$299',
      icon: Dumbbell,
      color: 'fitness-orange',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'Nutrition Science Mastery',
      description: 'Master the science of nutrition and meal planning',
      duration: '6 weeks',
      students: '1.8K',
      rating: 4.8,
      price: '$249',
      icon: Heart,
      color: 'fitness-blue',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'HIIT Training Specialist',
      description: 'Specialize in High-Intensity Interval Training methods',
      duration: '4 weeks',
      students: '3.2K',
      rating: 5.0,
      price: '$199',
      icon: Zap,
      color: 'fitness-orange',
      image: 'https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Yoga Instructor Certification',
      description: 'Transform lives through the ancient practice of yoga',
      duration: '10 weeks',
      students: '1.6K',
      rating: 4.9,
      price: '$349',
      icon: BookOpen,
      color: 'fitness-blue',
      image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="courses" className="py-24 relative overflow-hidden">
      {/* 3D Gym Background Elements */}
      <div className="absolute inset-0 opacity-5 perspective-1500">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-fitness-orange rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: `translateY(${scrollY * 0.3}px) translateZ(50px)`,
          }}
        />
        
        {/* Floating Gym Equipment */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-16 transform-style-3d"
          animate={{
            rotateY: [0, 360],
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transform: `translateZ(${scrollY * 0.2}px)`,
          }}
        >
          {/* Floating Barbell */}
          <div className="relative w-full h-full">
            <div className="absolute left-0 top-1/2 w-8 h-12 bg-fitness-blue rounded-lg transform -translate-y-1/2 shadow-xl opacity-30" />
            <div className="absolute left-6 top-1/2 w-20 h-2 bg-fitness-gray rounded-full transform -translate-y-1/2 opacity-30" />
            <div className="absolute right-0 top-1/2 w-8 h-12 bg-fitness-blue rounded-lg transform -translate-y-1/2 shadow-xl opacity-30" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/5 w-24 h-24 transform-style-3d"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 180, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            rotateX: { duration: 12, repeat: Infinity, ease: "linear" },
            rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transform: `translateZ(${scrollY * -0.1}px)`,
          }}
        >
          {/* Floating Kettlebell */}
          <div className="relative w-full h-full opacity-20">
            <div className="absolute top-0 left-1/2 w-8 h-6 bg-fitness-gray rounded-full transform -translate-x-1/2" />
            <div className="absolute bottom-0 left-1/2 w-20 h-20 bg-fitness-orange rounded-full transform -translate-x-1/2 shadow-2xl" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-2/3 right-1/6 w-16 h-16 bg-fitness-blue rounded-full shadow-2xl transform-style-3d opacity-20"
          animate={{
            rotateY: [0, 360],
            y: [0, -50, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transform: `translateZ(${scrollY * 0.15}px)`,
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
            className="inline-block px-4 py-2 bg-fitness-blue/20 rounded-full text-fitness-blue font-semibold text-sm border border-fitness-blue/30 mb-6"
          >
            Popular Courses
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            data-macaly="courses-title"
          >
            Master Your
            <span className="block bg-gradient-mesh bg-clip-text text-transparent">
              Fitness Expertise
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
            data-macaly="courses-description"
          >
            Choose from our comprehensive collection of professional fitness courses designed by industry experts
          </motion.p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 perspective-1000">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -30, 
                rotateX: 10,
                rotateY: 8,
                scale: 1.05,
                transition: { duration: 0.4 }
              }}
              viewport={{ once: true }}
              className="group transform-style-3d"
            >
              <div className="relative bg-gradient-dark rounded-3xl border border-fitness-gray/30 overflow-hidden backdrop-blur-xl shadow-2xl">
                {/* 3D Depth Layers */}
                <motion.div
                  className="absolute inset-0 bg-gradient-mesh opacity-0 group-hover:opacity-10 rounded-3xl"
                  style={{ transform: 'translateZ(5px)' }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-fitness-blue/10 opacity-0 group-hover:opacity-20 rounded-3xl"
                  style={{ transform: 'translateZ(10px)' }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                />

                {/* Floating Mini Gym Equipment */}
                <motion.div
                  className="absolute top-4 left-4 w-6 h-3 opacity-0 group-hover:opacity-60 transform-style-3d"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {/* Mini Dumbbell */}
                  <div className="flex items-center space-x-0.5">
                    <div className="w-1.5 h-1.5 bg-fitness-orange rounded-full" />
                    <div className="w-3 h-0.5 bg-fitness-gray rounded-full" />
                    <div className="w-1.5 h-1.5 bg-fitness-orange rounded-full" />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 right-4 w-4 h-4 bg-fitness-blue rounded-full opacity-0 group-hover:opacity-40 transform-style-3d"
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ transform: 'translateZ(25px)' }}
                />
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-macaly={`course-image-${course.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fitness-dark via-transparent to-transparent" />
                  
                  {/* Floating Icon */}
                  <motion.div
                    className={`absolute top-4 right-4 w-12 h-12 bg-${course.color} rounded-xl flex items-center justify-center transform-style-3d`}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    <course.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Rating Badge */}
                  <motion.div
                    className="absolute top-4 left-4 bg-fitness-dark/80 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-1"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                  >
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-semibold">{course.rating}</span>
                  </motion.div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-fitness-orange transition-colors duration-300"
                    data-macaly={`course-title-${course.id}`}
                  >
                    {course.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-white/70 mb-4 line-clamp-2"
                    data-macaly={`course-description-${course.id}`}
                  >
                    {course.description}
                  </motion.p>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1 text-white/60">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-white/60">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-fitness-orange">
                      {course.price}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className="w-full bg-fitness-orange hover:bg-fitness-orange/90 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      data-macaly={`course-cta-${course.id}`}
                    >
                      Enroll Now
                      <BookOpen className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </div>

                {/* 3D Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-mesh opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl"
                  style={{ transform: 'translateZ(5px)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Courses Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-fitness-blue text-fitness-blue hover:bg-fitness-blue hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Courses
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}