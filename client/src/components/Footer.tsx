/*
 * Royal Sovereign Design Theme - Footer Component
 * - Royal Navy background with gold accents
 * - Contact information and credentials
 * - GDPR and security compliance badges
 */

import { Link } from 'wouter';
import { Mail, Phone, Shield, Lock, Globe, Anchor, Ship } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="royal-gradient text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-[oklch(0.75_0.15_85)] flex items-center justify-center">
                <span className="text-2xl">⚓</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">Royal Maritime Academy</h3>
                <p className="text-xs text-white/70">Est. 2024</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              The Royal Supreme AI Augmented Maritime Academy of 5 Star Hospitality and Mega Marine Construction Engineering - Excellence in maritime education.
            </p>
            {/* Partner Brand */}
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Ship className="w-5 h-5 text-[oklch(0.75_0.15_85)]" />
                <span className="font-elegant text-lg font-semibold text-[oklch(0.75_0.15_85)]">Roudie Cruise</span>
              </div>
              <p className="text-xs text-white/60">The 5-Star Brand of Luxury Cruising</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-[oklch(0.75_0.15_85)]">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: t('home') },
                { href: '/courses', label: t('courses') },
                { href: '/programs', label: t('programs') },
                { href: '/about', label: t('about') },
                { href: '/contact', label: t('contact') },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-white/80 hover:text-[oklch(0.75_0.15_85)] transition-colors text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-[oklch(0.75_0.15_85)]">{t('contact')}</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:the.royal.Marine.academy.usa@gmail.com" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 text-[oklch(0.75_0.15_85)]" />
                  <div>
                    <p className="text-sm font-medium">Academy Email</p>
                    <p className="text-xs text-white/60">the.royal.Marine.academy.usa@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:hotel.director.raoued@gmail.com" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 text-[oklch(0.75_0.15_85)]" />
                  <div>
                    <p className="text-sm font-medium">Director's Office</p>
                    <p className="text-xs text-white/60">hotel.director.raoued@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/80">
                  <Phone className="w-5 h-5 mt-0.5 text-[oklch(0.75_0.15_85)]" />
                  <div>
                    <p className="text-sm font-medium">Phone Numbers</p>
                    <p className="text-xs text-white/60">+216 20 579 336</p>
                    <p className="text-xs text-white/60">+216 58 204 914</p>
                    <p className="text-xs text-white/60">+216 99 800 911 (VIP)</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Security & Compliance */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-[oklch(0.75_0.15_85)]">Security & Compliance</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                <Shield className="w-8 h-8 text-emerald-400" />
                <div>
                  <p className="text-sm font-medium">GDPR Compliant</p>
                  <p className="text-xs text-white/60">Full data protection</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                <Lock className="w-8 h-8 text-blue-400" />
                <div>
                  <p className="text-sm font-medium">Cybersecurity Protected</p>
                  <p className="text-xs text-white/60">Advanced encryption</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                <Globe className="w-8 h-8 text-[oklch(0.75_0.15_85)]" />
                <div>
                  <p className="text-sm font-medium">8 Languages</p>
                  <p className="text-xs text-white/60">Global accessibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Anchor className="w-4 h-4" />
              <span>© 2024-2025 The Royal Supreme AI Augmented Maritime Academy. All Rights Reserved.</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
