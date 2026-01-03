/*
 * Royal Sovereign Design Theme - Departments Section
 * - Showcase 10 cruise ship departments
 * - Elegant card design with gold accents
 * - Interactive hover effects
 */

import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { departments } from '@/data/courses';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DepartmentsSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[oklch(0.97_0.01_90)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-[oklch(0.25_0.05_250/0.1)] text-[oklch(0.25_0.05_250)] text-sm font-medium mb-4"
          >
            {t('departments')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.15_0.03_250)] mb-4"
          >
            10 Specialized Departments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Master Guest Relations Management across all major 5-star cruise ship departments with our comprehensive training programs.
          </motion.p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={`/courses?department=${dept.id}`}>
                <div className="group h-full royal-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[oklch(0.25_0.05_250)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{dept.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-semibold text-[oklch(0.15_0.03_250)] mb-2 group-hover:text-[oklch(0.75_0.15_85)] transition-colors">
                    {dept.name[language] || dept.name.en}
                  </h3>

                  {/* Course count */}
                  <p className="text-sm text-muted-foreground mb-4">
                    10 {t('courses')}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center text-[oklch(0.75_0.15_85)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Courses</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
