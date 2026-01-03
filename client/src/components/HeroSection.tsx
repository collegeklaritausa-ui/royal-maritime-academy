/*
 * Royal Sovereign Design Theme - Hero Section
 * - Dramatic full-screen hero with cruise ship imagery
 * - Elegant typography with gold accents
 * - Animated elements for visual interest
 */

import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Users, BookOpen, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  const stats = [
    { icon: BookOpen, value: '100+', label: 'Courses' },
    { icon: Globe, value: '8', label: 'Languages' },
    { icon: Users, value: '10K+', label: 'Students' },
    { icon: Award, value: '5★', label: 'Rating' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-cruise-ship.png"
          alt="Luxury Cruise Ship"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0.05_250/0.95)] via-[oklch(0.15_0.05_250/0.8)] to-[oklch(0.15_0.05_250/0.4)]" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[oklch(0.75_0.15_85/0.1)] rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[oklch(0.55_0.12_230/0.1)] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.75_0.15_85/0.2)] border border-[oklch(0.75_0.15_85/0.3)] mb-8"
          >
            <span className="text-[oklch(0.75_0.15_85)] text-sm font-medium">🎓 AI-Augmented Maritime Education</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
          >
            The Royal Supreme
            <span className="block royal-text-gradient">Maritime Academy</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-elegant text-xl sm:text-2xl text-white/80 mb-4"
          >
            of 5 Star Hospitality and Mega Marine Construction Engineering
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-white/70 mb-10 max-w-2xl"
          >
            World-class maritime education featuring 100+ professional courses in Guest Relations Management across all 5-star cruise ship departments. Available in 8 languages with AI-augmented learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link href="/courses">
              <Button size="lg" className="gold-gradient text-[oklch(0.15_0.03_250)] font-semibold text-lg px-8 py-6 shadow-xl hover:opacity-90 transition-opacity">
                {t('enrollNow')}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white bg-white/5 hover:bg-white/10 font-semibold text-lg px-8 py-6">
                {t('learnMore')}
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
              >
                <stat.icon className="w-6 h-6 text-[oklch(0.75_0.15_85)] mx-auto mb-2" />
                <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[oklch(0.75_0.15_85)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
