/*
 * Royal Sovereign Design Theme - Programs Section
 * - Showcase Ship Engineering and Marine Construction programs
 * - Elegant cards with imagery
 * - Clear certification pathways
 */

import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Anchor, Wrench, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProgramsSection() {
  const programs = [
    {
      icon: Anchor,
      title: '5-Star Hospitality',
      subtitle: 'Guest Relations Management',
      description: 'Master the art of luxury cruise hospitality across 10 specialized departments. From front office excellence to VIP butler services.',
      image: '/images/hospitality-training.png',
      features: ['100 Professional Courses', '5 Certification Levels', '10 Departments', '8 Languages'],
      color: 'oklch(0.75_0.15_85)',
    },
    {
      icon: Wrench,
      title: 'Ship Engineering',
      subtitle: 'Marine Systems & Propulsion',
      description: 'Comprehensive training in naval architecture, marine propulsion systems, and advanced ship engineering from fundamentals to expert level.',
      image: '/images/engineering-shipyard.png',
      features: ['Power Systems', 'Navigation Tech', 'Structural Analysis', 'Digital Twins'],
      color: 'oklch(0.55_0.12_230)',
    },
    {
      icon: GraduationCap,
      title: 'Marine Construction',
      subtitle: 'Mega Ship Building',
      description: 'Learn the complete shipbuilding process from keel laying to sea trials. Specialize in mega cruise ship construction and sustainable shipbuilding.',
      image: '/images/ai-classroom.png',
      features: ['Shipyard Operations', 'Modular Construction', 'Robotic Welding', 'Green Design'],
      color: 'oklch(0.35_0.15_15)',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-[oklch(0.25_0.05_250/0.1)] text-[oklch(0.25_0.05_250)] text-sm font-medium mb-4"
          >
            Our Programs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.15_0.03_250)] mb-4"
          >
            Three Pillars of Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive maritime education covering hospitality, engineering, and construction - from beginner fundamentals to master-level expertise.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl overflow-hidden royal-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border border-[oklch(0.90_0.01_90)]">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: program.color }}
                    >
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm font-medium mb-1" style={{ color: program.color }}>
                    {program.subtitle}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-[oklch(0.15_0.03_250)] mb-3">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: program.color }} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href="/courses">
                    <Button variant="outline" className="w-full group/btn border-2" style={{ borderColor: program.color, color: program.color }}>
                      Explore Program
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl font-bold text-[oklch(0.15_0.03_250)] mb-2">
              Certification Pathway
            </h3>
            <p className="text-muted-foreground">Progress through five levels of maritime excellence</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { level: 'Beginner', color: 'bg-emerald-500', courses: '101-102' },
              { level: 'Intermediate', color: 'bg-blue-500', courses: '201-202' },
              { level: 'Advanced', color: 'bg-purple-500', courses: '301-302' },
              { level: 'Expert', color: 'bg-amber-500', courses: '401-402' },
              { level: 'Master', color: 'bg-rose-500', courses: '501-502' },
            ].map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white royal-shadow"
              >
                <div className={`w-3 h-3 rounded-full ${cert.color}`} />
                <span className="font-medium text-[oklch(0.15_0.03_250)]">{cert.level}</span>
                <span className="text-sm text-muted-foreground">({cert.courses})</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
