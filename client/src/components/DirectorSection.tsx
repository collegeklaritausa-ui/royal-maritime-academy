/*
 * Royal Sovereign Design Theme - Director Section
 * - Showcase the Academy Director with professional photo
 * - Elegant layout with gold accents
 * - Roudie Cruise branding
 */

import { motion } from 'framer-motion';
import { Award, Ship, Users, Globe, Mail, Phone } from 'lucide-react';

export default function DirectorSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[oklch(0.97_0.01_90)] to-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-[oklch(0.75_0.15_85/0.1)] rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[oklch(0.25_0.05_250/0.1)] rounded-full blur-3xl" />
            
            {/* Main image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden royal-shadow">
                <img
                  src="/images/director-photo.webp"
                  alt="Academy Director"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
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
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[oklch(0.25_0.05_250/0.1)] text-[oklch(0.25_0.05_250)] text-sm font-medium mb-6">
              Academy Leadership
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.15_0.03_250)] mb-6">
              Meet Our <span className="royal-text-gradient">Director</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With decades of experience in 5-star hospitality and maritime excellence, our Director leads the Royal Supreme AI Augmented Maritime Academy with a vision to transform maritime education globally. As the founder of Roudie Cruise, the prestigious 5-star luxury cruising brand, he brings unparalleled industry expertise to our curriculum.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mb-8">
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

            {/* Contact */}
            <div className="p-6 rounded-xl royal-gradient text-white">
              <h4 className="font-display text-lg font-semibold mb-4">Director's Office</h4>
              <div className="space-y-3">
                <a href="mailto:hotel.director.raoued@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-[oklch(0.75_0.15_85)]" />
                  <span className="text-sm">hotel.director.raoued@gmail.com</span>
                </a>
                <a href="mailto:docteur.roued@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-[oklch(0.75_0.15_85)]" />
                  <span className="text-sm">docteur.roued@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-white/80">
                  <Phone className="w-5 h-5 text-[oklch(0.75_0.15_85)]" />
                  <span className="text-sm">+216 99 800 911 (VIP Line)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
