'use client';

import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Heart,
  Dumbbell
} from 'lucide-react';

export default function Footer() {
  console.log('Footer component rendered');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    courses: [
      'Personal Training',
      'Nutrition Science',
      'HIIT Training',
      'Yoga Certification',
      'All Courses'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Press',
      'Contact'
    ],
    support: [
      'Help Center',
      'Course Support',
      'Technical Help',
      'Community',
      'Student Portal'
    ],
    legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Accessibility',
      'Refund Policy'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-fitness-black border-t border-fitness-gray/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-fitness-orange rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-12 h-12 bg-gradient-mesh rounded-xl flex items-center justify-center transform rotate-12">
                  <Dumbbell className="w-6 h-6 text-white transform -rotate-12" />
                </div>
                <span className="text-3xl font-bold text-white" data-macaly="footer-brand-name">
                  FitAcademy
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white/70 text-lg leading-relaxed mb-8 max-w-md"
                data-macaly="footer-description"
              >
                Transforming lives through innovative fitness education. Join the future of professional fitness training with our cutting-edge 3D learning platform.
              </motion.p>

              {/* Contact Info */}
              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'hello@fitacademy.com' },
                  { icon: Phone, text: '+1 (555) 123-4567' },
                  { icon: MapPin, text: 'San Francisco, CA' },
                ].map((contact, index) => (
                  <motion.div
                    key={contact.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-white/60 hover:text-fitness-orange transition-colors duration-300 cursor-pointer"
                  >
                    <contact.icon className="w-5 h-5" />
                    <span>{contact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold text-lg mb-6 capitalize">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <motion.a
                        href="#"
                        className="text-white/60 hover:text-fitness-orange transition-colors duration-300 block"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {link}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 border-t border-fitness-gray/20"
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.h3
              className="text-2xl font-bold text-white mb-4"
              data-macaly="newsletter-title"
            >
              Stay Updated with FitAcademy
            </motion.h3>
            <motion.p
              className="text-white/70 mb-8"
              data-macaly="newsletter-description"
            >
              Get the latest fitness education insights, course updates, and industry trends
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-fitness-gray/20 border border-fitness-gray/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-fitness-orange transition-colors duration-300"
                data-macaly="newsletter-input"
              />
              <motion.button
                className="px-8 py-4 bg-fitness-orange hover:bg-fitness-orange/90 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-macaly="newsletter-submit"
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-fitness-gray/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-2 text-white/60"
            >
              <span>© 2024 FitAcademy. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-fitness-orange fill-current" />
              </motion.div>
              <span>for fitness professionals</span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-fitness-gray/20 rounded-xl flex items-center justify-center text-white/60 hover:text-white hover:bg-fitness-orange transition-all duration-300"
                  whileHover={{ scale: 1.1, rotateY: 180 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 bg-fitness-orange rounded-xl flex items-center justify-center text-white hover:bg-fitness-orange/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 bg-fitness-blue opacity-10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </footer>
  );
}