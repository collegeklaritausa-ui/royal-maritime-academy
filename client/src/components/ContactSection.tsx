/*
 * Royal Sovereign Design Theme - Contact Section
 * - Contact form and information
 * - All credentials displayed
 * - Security badges
 */

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Shield, Lock, Globe, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

export default function ContactSection() {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will contact you soon.');
  };

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
            {t('contact')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.15_0.03_250)] mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to start your maritime career? Contact us today for enrollment information and course details.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="royal-card rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-[oklch(0.15_0.03_250)] mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[oklch(0.15_0.03_250)] mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" className="bg-white" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[oklch(0.15_0.03_250)] mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="bg-white" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[oklch(0.15_0.03_250)] mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john@example.com" className="bg-white" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[oklch(0.15_0.03_250)] mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+1 234 567 8900" className="bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[oklch(0.15_0.03_250)] mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your interest in our programs..." 
                    className="bg-white min-h-[120px]" 
                    required 
                  />
                </div>
                <Button type="submit" className="w-full gold-gradient text-[oklch(0.15_0.03_250)] font-semibold py-6">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="royal-card rounded-2xl p-6">
              <h4 className="font-display text-lg font-semibold text-[oklch(0.15_0.03_250)] mb-4">
                Academy Contact
              </h4>
              <div className="space-y-4">
                <a href="mailto:the.royal.Marine.academy.usa@gmail.com" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[oklch(0.97_0.01_90)] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.75_0.15_85/0.1)] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[oklch(0.75_0.15_85)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[oklch(0.15_0.03_250)]">Academy Email</p>
                    <p className="text-sm text-muted-foreground">the.royal.Marine.academy.usa@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="royal-card rounded-2xl p-6">
              <h4 className="font-display text-lg font-semibold text-[oklch(0.15_0.03_250)] mb-4">
                Director's Office
              </h4>
              <div className="space-y-4">
                <a href="mailto:hotel.director.raoued@gmail.com" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[oklch(0.97_0.01_90)] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.25_0.05_250/0.1)] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[oklch(0.25_0.05_250)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[oklch(0.15_0.03_250)]">Director Email</p>
                    <p className="text-sm text-muted-foreground">hotel.director.raoued@gmail.com</p>
                  </div>
                </a>
                <a href="mailto:docteur.roued@gmail.com" className="flex items-start gap-4 p-3 rounded-lg hover:bg-[oklch(0.97_0.01_90)] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.25_0.05_250/0.1)] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[oklch(0.25_0.05_250)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[oklch(0.15_0.03_250)]">Alternative Email</p>
                    <p className="text-sm text-muted-foreground">docteur.roued@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="royal-card rounded-2xl p-6">
              <h4 className="font-display text-lg font-semibold text-[oklch(0.15_0.03_250)] mb-4">
                Phone Numbers
              </h4>
              <div className="space-y-4">
                {[
                  { label: 'Primary', number: '+216 20 579 336' },
                  { label: 'Secondary', number: '+216 58 204 914' },
                  { label: 'VIP Line', number: '+216 99 800 911' },
                ].map((phone, index) => (
                  <a key={index} href={`tel:${phone.number.replace(/\s/g, '')}`} className="flex items-start gap-4 p-3 rounded-lg hover:bg-[oklch(0.97_0.01_90)] transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[oklch(0.55_0.12_230/0.1)] flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[oklch(0.55_0.12_230)]" />
                    </div>
                    <div>
                      <p className="font-medium text-[oklch(0.15_0.03_250)]">{phone.label}</p>
                      <p className="text-sm text-muted-foreground">{phone.number}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Security Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
                <Shield className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-xs font-medium text-emerald-800">GDPR</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-center">
                <Lock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-xs font-medium text-blue-800">Encrypted</p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 text-center">
                <Globe className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-xs font-medium text-amber-800">8 Languages</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
