/*
 * Royal Sovereign Design Theme - Programs Page
 * - Three main program tracks
 * - Certification pathways
 * - Detailed curriculum overview
 */

import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Anchor, Wrench, GraduationCap, ArrowRight, CheckCircle, Clock, Award, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Programs() {
  const { t } = useLanguage();

  const programs = [
    {
      icon: Anchor,
      title: '5-Star Hospitality',
      subtitle: 'Guest Relations Management',
      description: 'Master the art of luxury cruise hospitality across 10 specialized departments. Our comprehensive program covers everything from front office excellence to VIP butler services, preparing you for leadership roles in the world\'s finest cruise lines.',
      image: '/images/hospitality-training.png',
      color: 'oklch(0.75_0.15_85)',
      features: [
        '100 Professional Courses',
        '10 Specialized Departments',
        '5 Certification Levels',
        'AI-Augmented Learning',
        'Real-World Internships',
        'Career Placement Services',
      ],
      departments: [
        'Front Office & Reception',
        'Food & Beverage Service',
        'Housekeeping & Cabin Services',
        'Entertainment & Activities',
        'Spa & Wellness',
        'Concierge & Shore Excursions',
        'Casino & Gaming',
        'Retail & Boutique',
        'VIP & Butler Services',
        'Guest Safety & Security',
      ],
    },
    {
      icon: Wrench,
      title: 'Ship Engineering',
      subtitle: 'Marine Systems & Propulsion',
      description: 'Comprehensive training in naval architecture, marine propulsion systems, and advanced ship engineering. From fundamentals to expert level, learn to design, operate, and maintain the complex systems that power modern vessels.',
      image: '/images/engineering-shipyard.png',
      color: 'oklch(0.55_0.12_230)',
      features: [
        'Naval Architecture',
        'Marine Propulsion Systems',
        'Electrical Systems',
        'Navigation Technology',
        'Condition Monitoring',
        'Digital Twin Technology',
      ],
      departments: [
        'Diesel Engine Technology',
        'Gas Turbine Propulsion',
        'Electric & Hybrid Systems',
        'HVAC & Climate Control',
        'Bridge Equipment',
        'Dynamic Positioning',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Marine Construction',
      subtitle: 'Mega Ship Building',
      description: 'Learn the complete shipbuilding process from keel laying to sea trials. Specialize in mega cruise ship construction, sustainable shipbuilding practices, and cutting-edge construction technologies.',
      image: '/images/ai-classroom.png',
      color: 'oklch(0.35_0.15_15)',
      features: [
        'Shipyard Operations',
        'Block Construction',
        'Hull Erection',
        'Outfitting & Systems',
        'Sea Trials',
        'Green Ship Design',
      ],
      departments: [
        'Steel Processing',
        'Modular Construction',
        'Robotic Welding',
        '3D Printing',
        'Composite Materials',
        'Environmental Assessment',
      ],
    },
  ];

  const certificationLevels = [
    { level: 'Beginner', courses: '101-102', duration: '3-6 months', color: 'bg-emerald-500', description: 'Foundation Certificate - Essential skills and knowledge' },
    { level: 'Intermediate', courses: '201-202', duration: '6-9 months', color: 'bg-blue-500', description: 'Professional Certificate - Applied expertise' },
    { level: 'Advanced', courses: '301-302', duration: '9-12 months', color: 'bg-purple-500', description: 'Advanced Diploma - Specialized mastery' },
    { level: 'Expert', courses: '401-402', duration: '12-18 months', color: 'bg-amber-500', description: 'Expert Diploma - Industry leadership' },
    { level: 'Master', courses: '501-502', duration: '18-24 months', color: 'bg-rose-500', description: 'Master\'s Certificate - Elite excellence' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32">
        {/* Hero Section */}
        <section className="py-20 royal-gradient">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[oklch(0.75_0.15_85/0.2)] text-[oklch(0.75_0.15_85)] text-sm font-medium mb-6">
                {t('programs')}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Three Pillars of <span className="royal-text-gradient">Excellence</span>
              </h1>
              <p className="text-xl text-white/80">
                Comprehensive maritime education covering hospitality, engineering, and construction - from beginner fundamentals to master-level expertise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programs Detail */}
        <section className="py-20 bg-white">
          <div className="container">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`mb-20 last:mb-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden royal-shadow">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: program.color }}
                    >
                      <program.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <p className="text-sm font-medium mb-2" style={{ color: program.color }}>
                      {program.subtitle}
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-[oklch(0.15_0.03_250)] mb-4">
                      {program.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {program.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {program.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" style={{ color: program.color }} />
                          <span className="text-sm text-[oklch(0.15_0.03_250)]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Departments/Topics */}
                    <div className="p-6 rounded-xl bg-[oklch(0.97_0.01_90)] mb-6">
                      <h4 className="font-display text-lg font-semibold text-[oklch(0.15_0.03_250)] mb-4">
                        {index === 0 ? 'Departments' : 'Key Topics'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {program.departments.map((dept, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-white border"
                            style={{ borderColor: program.color, color: program.color }}
                          >
                            {dept}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href="/courses">
                      <Button 
                        size="lg" 
                        className="font-semibold"
                        style={{ backgroundColor: program.color }}
                      >
                        Explore Courses
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certification Pathway */}
        <section className="py-20 bg-gradient-to-b from-[oklch(0.97_0.01_90)] to-white">
          <div className="container">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl sm:text-4xl font-bold text-[oklch(0.15_0.03_250)] mb-4"
              >
                Certification Pathway
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Progress through five levels of maritime excellence, from foundation skills to master-level expertise
              </motion.p>
            </div>

            <div className="max-w-4xl mx-auto">
              {certificationLevels.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Connector line */}
                  {index < certificationLevels.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-8 bg-[oklch(0.90_0.01_90)]" />
                  )}
                  
                  <div className="flex items-start gap-6">
                    {/* Level indicator */}
                    <div className={`w-16 h-16 rounded-2xl ${cert.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 royal-card rounded-xl p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
                        <h3 className="font-display text-xl font-bold text-[oklch(0.15_0.03_250)]">
                          {cert.level}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            Courses {cert.courses}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {cert.duration}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 royal-gradient">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '100+', label: 'Professional Courses', icon: GraduationCap },
                { value: '8', label: 'Languages Available', icon: Users },
                { value: '10', label: 'Departments', icon: Anchor },
                { value: '5', label: 'Certification Levels', icon: Award },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-10 h-10 text-[oklch(0.75_0.15_85)] mx-auto mb-4" />
                  <div className="font-display text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[oklch(0.15_0.03_250)] mb-6">
                Ready to Start Your Maritime Career?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Explore our complete course catalog and find the perfect program for your career goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/courses">
                  <Button size="lg" className="gold-gradient text-[oklch(0.15_0.03_250)] font-semibold px-8">
                    Browse Courses
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 font-semibold px-8">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
