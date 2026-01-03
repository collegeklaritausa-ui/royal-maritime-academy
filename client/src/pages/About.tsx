/*
 * Royal Sovereign Design Theme - About Page
 * - Academy history and mission
 * - Director profile
 * - Roudie Cruise partnership
 */

import { motion } from 'framer-motion';
import { Award, Users, Globe, Ship, Target, Eye, Heart, Shield, Lock, Anchor } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-academy-building.png"
              alt="Academy Building"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0.05_250/0.95)] via-[oklch(0.15_0.05_250/0.85)] to-[oklch(0.15_0.05_250/0.7)]" />
          </div>
          
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[oklch(0.75_0.15_85/0.2)] text-[oklch(0.75_0.15_85)] text-sm font-medium mb-6">
                {t('about')}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                The Royal Supreme AI Augmented
                <span className="block royal-text-gradient">Maritime Academy</span>
              </h1>
              <p className="text-xl text-white/80 font-elegant">
                of 5 Star Hospitality and Mega Marine Construction Engineering
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Our Mission',
                  description: 'To provide world-class maritime education that combines traditional excellence with AI-augmented learning, preparing professionals for leadership roles in the global cruise and maritime industry.',
                },
                {
                  icon: Eye,
                  title: 'Our Vision',
                  description: 'To become the leading maritime academy globally, recognized for innovation in hospitality training, ship engineering education, and sustainable marine construction practices.',
                },
                {
                  icon: Heart,
                  title: 'Our Values',
                  description: 'Excellence, integrity, innovation, and cultural diversity guide everything we do. We believe in nurturing talent from all backgrounds and creating future industry leaders.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="royal-card rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[oklch(0.25_0.05_250)] flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-[oklch(0.75_0.15_85)]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Director Section */}
        <section className="py-20 bg-gradient-to-b from-[oklch(0.97_0.01_90)] to-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden royal-shadow">
                  <img
                    src="/images/director-maritime.png"
                    alt="Academy Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 royal-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[oklch(0.75_0.15_85)] flex items-center justify-center">
                      <Ship className="w-6 h-6 text-[oklch(0.15_0.03_250)]" />
                    </div>
                    <div>
                      <p className="font-elegant text-lg font-semibold text-[oklch(0.75_0.15_85)]">Roudie Cruise</p>
                      <p className="text-xs text-muted-foreground">5-Star Luxury Brand</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-[oklch(0.25_0.05_250/0.1)] text-[oklch(0.25_0.05_250)] text-sm font-medium mb-6">
                  Academy Leadership
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[oklch(0.15_0.03_250)] mb-6">
                  Meet Our <span className="royal-text-gradient">Director</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  With decades of experience in 5-star hospitality and maritime excellence, our Director leads the Royal Supreme AI Augmented Maritime Academy with a vision to transform maritime education globally.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  As the founder of Roudie Cruise, the prestigious 5-star luxury cruising brand, he brings unparalleled industry expertise to our curriculum, ensuring students receive real-world knowledge from the very best.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Award, label: '5-Star Excellence', value: 'Certified' },
                    { icon: Users, label: 'Students Trained', value: '10,000+' },
                    { icon: Globe, label: 'Languages', value: '8' },
                    { icon: Ship, label: 'Cruise Experience', value: '20+ Years' },
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-xl bg-[oklch(0.97_0.01_90)] border border-[oklch(0.90_0.01_90)]">
                      <item.icon className="w-6 h-6 text-[oklch(0.75_0.15_85)] mb-2" />
                      <p className="font-display text-xl font-bold text-[oklch(0.15_0.03_250)]">{item.value}</p>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Roudie Cruise Partnership */}
        <section className="py-20 royal-gradient">
          <div className="container">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
              >
                Our Partner Brand
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/70 max-w-2xl mx-auto"
              >
                Experience the pinnacle of maritime luxury with Roudie Cruise
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-2xl bg-[oklch(0.75_0.15_85)] flex items-center justify-center">
                  <Ship className="w-16 h-16 text-[oklch(0.15_0.03_250)]" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-elegant text-3xl font-bold text-[oklch(0.75_0.15_85)] mb-2">
                    Roudie Cruise
                  </h3>
                  <p className="text-xl text-white/80 mb-4">
                    The 5-Star Brand of Luxury Cruising
                  </p>
                  <p className="text-white/60">
                    Our exclusive partnership with Roudie Cruise provides students with real-world training opportunities, internships aboard luxury vessels, and direct career placement services in the world's finest cruise lines.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl sm:text-4xl font-bold text-[oklch(0.15_0.03_250)] mb-4"
              >
                Security & Compliance
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Your data and privacy are protected by the highest security standards
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: 'GDPR Compliant',
                  description: 'Full compliance with European data protection regulations. Your personal information is handled with the utmost care.',
                  color: 'emerald',
                },
                {
                  icon: Lock,
                  title: 'Cybersecurity Protected',
                  description: 'Advanced encryption protocols and security measures protect all academy systems and student data.',
                  color: 'blue',
                },
                {
                  icon: Anchor,
                  title: 'Code Protection',
                  description: 'Proprietary curriculum and training materials are protected under international copyright law.',
                  color: 'amber',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="royal-card rounded-2xl p-8 text-center"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-${item.color}-100 flex items-center justify-center mx-auto mb-6`}>
                    <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[oklch(0.15_0.03_250)] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
