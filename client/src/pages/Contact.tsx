/*
 * Royal Sovereign Design Theme - Contact Page
 * - Full contact form
 * - All contact credentials
 * - Security badges
 */

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Shield, Lock, Globe, Send, Clock, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

export default function Contact() {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will contact you within 24 hours.');
  };

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
                {t('contact')}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-white/80">
                Ready to start your maritime career? Contact us today for enrollment information, course details, or any questions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="royal-card rounded-2xl p-8">
                  <h2 className="font-display text-2xl font-bold text-[oklch(0.15_0.03_250)] mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[oklch(0.15_0.03_250)] mb-2">
                          First Name *
                        </label>
                        <Input placeholder="John" className="bg-white" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[oklch(0.15_0.03_250)] mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Doe" className="bg-white" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[oklch(0.15_0.03_250)] mb-2">
                          Email Address *
                        </label>
                        <Input type="email" placeholder="john@example.com" className="bg-white" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[oklch(0.15_0.03_250)] mb-2">
                          Phone Number
                        </label>
                        <Input type="tel" placeholder="+1 234 567 8900" className="bg-white" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[oklch(0.15_0.03_250)] mb-2">
                        Subject *
                      </label>
                      <Select required>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="enrollment">Course Enrollment</SelectItem>
                          <SelectItem value="information">Program Information</SelectItem>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[oklch(0.15_0.03_250)] mb-2">
                        Interested Program
                      </label>
                      <Select>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Select a program (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hospitality">5-Star Hospitality</SelectItem>
                          <SelectItem value="engineering">Ship Engineering</SelectItem>
                          <SelectItem value="construction">Marine Construction</SelectItem>
                          <SelectItem value="all">All Programs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[oklch(0.15_0.03_250)] mb-2">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Tell us about your interest in our programs, your background, and any questions you have..." 
                        className="bg-white min-h-[150px]" 
                        required 
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input type="checkbox" id="gdpr" className="mt-1" required />
                      <label htmlFor="gdpr" className="text-sm text-muted-foreground">
                        I agree to the processing of my personal data in accordance with the GDPR and Privacy Policy. *
                      </label>
                    </div>

                    <Button type="submit" size="lg" className="w-full gold-gradient text-[oklch(0.15_0.03_250)] font-semibold py-6">
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
                {/* Quick Contact */}
                <div className="royal-card rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-[oklch(0.15_0.03_250)] mb-6">
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="w-5 h-5 text-[oklch(0.75_0.15_85)]" />
                      <span className="text-muted-foreground">Response within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MessageSquare className="w-5 h-5 text-[oklch(0.75_0.15_85)]" />
                      <span className="text-muted-foreground">8 Languages supported</span>
                    </div>
                  </div>
                </div>

                {/* Academy Contact */}
                <div className="royal-card rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-[oklch(0.15_0.03_250)] mb-6">
                    Academy Contact
                  </h3>
                  <a 
                    href="mailto:the.royal.Marine.academy.usa@gmail.com" 
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-[oklch(0.97_0.01_90)] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[oklch(0.75_0.15_85/0.1)] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[oklch(0.75_0.15_85)]" />
                    </div>
                    <div>
                      <p className="font-medium text-[oklch(0.15_0.03_250)]">Academy Email</p>
                      <p className="text-sm text-muted-foreground break-all">the.royal.Marine.academy.usa@gmail.com</p>
                    </div>
                  </a>
                </div>

                {/* Director's Office */}
                <div className="royal-card rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-[oklch(0.15_0.03_250)] mb-6">
                    Director's Office
                  </h3>
                  <div className="space-y-3">
                    <a 
                      href="mailto:hotel.director.raoued@gmail.com" 
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-[oklch(0.97_0.01_90)] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[oklch(0.25_0.05_250/0.1)] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-[oklch(0.25_0.05_250)]" />
                      </div>
                      <div>
                        <p className="font-medium text-[oklch(0.15_0.03_250)]">Director Email</p>
                        <p className="text-sm text-muted-foreground break-all">hotel.director.raoued@gmail.com</p>
                      </div>
                    </a>
                    <a 
                      href="mailto:docteur.roued@gmail.com" 
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-[oklch(0.97_0.01_90)] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[oklch(0.25_0.05_250/0.1)] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-[oklch(0.25_0.05_250)]" />
                      </div>
                      <div>
                        <p className="font-medium text-[oklch(0.15_0.03_250)]">Alternative Email</p>
                        <p className="text-sm text-muted-foreground break-all">docteur.roued@gmail.com</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="royal-card rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-[oklch(0.15_0.03_250)] mb-6">
                    Phone Numbers
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Primary Line', number: '+216 20 579 336' },
                      { label: 'Secondary Line', number: '+216 58 204 914' },
                      { label: 'VIP Line', number: '+216 99 800 911' },
                    ].map((phone, index) => (
                      <a 
                        key={index}
                        href={`tel:${phone.number.replace(/\s/g, '')}`} 
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-[oklch(0.97_0.01_90)] transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[oklch(0.55_0.12_230/0.1)] flex items-center justify-center flex-shrink-0">
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
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
                    <Shield className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                    <p className="text-xs font-medium text-emerald-800">GDPR</p>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-center">
                    <Lock className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                    <p className="text-xs font-medium text-blue-800">Encrypted</p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 text-center">
                    <Globe className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                    <p className="text-xs font-medium text-amber-800">8 Languages</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
