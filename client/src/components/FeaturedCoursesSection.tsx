/*
 * Royal Sovereign Design Theme - Featured Courses Section
 * - Showcase top courses from different levels
 * - Elegant card design with level badges
 * - Interactive hover effects
 */

import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Clock, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { courses, departments, levelColors } from '@/data/courses';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FeaturedCoursesSection() {
  const { language, t } = useLanguage();

  // Select featured courses (one from each level)
  const featuredCourses = [
    courses.find(c => c.id === 1),   // Beginner
    courses.find(c => c.id === 13),  // Intermediate
    courses.find(c => c.id === 35),  // Advanced
    courses.find(c => c.id === 47),  // Expert
    courses.find(c => c.id === 89),  // Master
    courses.find(c => c.id === 59),  // Master
  ].filter(Boolean);

  return (
    <section className="py-24 royal-gradient">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-[oklch(0.75_0.15_85/0.2)] text-[oklch(0.75_0.15_85)] text-sm font-medium mb-4"
          >
            {t('ourCourses')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Featured Courses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            From beginner fundamentals to master-level expertise, explore our most popular courses across all certification levels.
          </motion.p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course, index) => {
            if (!course) return null;
            const dept = departments.find(d => d.id === course.department);
            
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Card Header with Level Badge */}
                  <div className="relative h-32 bg-gradient-to-br from-[oklch(0.25_0.05_250)] to-[oklch(0.20_0.08_240)] p-6">
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${levelColors[course.level]}`}>
                        {course.level}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-6">
                      <span className="text-3xl">{dept?.icon}</span>
                    </div>
                    <div className="absolute bottom-4 right-6 text-white/60 text-sm">
                      {course.code}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-[oklch(0.15_0.03_250)] mb-2 line-clamp-2 group-hover:text-[oklch(0.75_0.15_85)] transition-colors">
                      {course.title[language] || course.title.en}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {course.description[language] || course.description.en}
                    </p>

                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span>{course.credits} {t('credits')}</span>
                      </div>
                    </div>

                    {/* Department */}
                    <div className="text-xs text-[oklch(0.75_0.15_85)] font-medium">
                      {dept?.name[language] || dept?.name.en}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/courses">
            <Button size="lg" className="gold-gradient text-[oklch(0.15_0.03_250)] font-semibold px-8">
              View All 100 Courses
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
