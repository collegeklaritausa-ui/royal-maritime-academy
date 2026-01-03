/*
 * Royal Sovereign Design Theme - Header Component
 * - Royal Navy background with gold accents
 * - Elegant typography with Playfair Display
 * - Multilingual support with 8 languages
 */

import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Globe, Shield, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';
import { languages } from '@/data/courses';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const currentLanguage = languages.find(l => l.code === language);

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/courses', label: t('courses') },
    { href: '/programs', label: t('programs') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 royal-gradient text-white">
      {/* Top bar with security badge */}
      <div className="bg-black/20 py-1.5">
        <div className="container flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[oklch(0.75_0.15_85)]" />
            <span className="text-white/80">{t('securityBadge')} | {t('gdprNotice')}</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-white/80">
            <span>📧 the.royal.Marine.academy.usa@gmail.com</span>
            <span>📱 +216 20 579 336</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-full bg-[oklch(0.75_0.15_85)] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-2xl">⚓</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-lg font-bold leading-tight">
                Royal Maritime Academy
              </h1>
              <p className="text-xs text-white/70 font-elegant">
                5-Star Hospitality & Marine Engineering
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    location === item.href
                      ? 'bg-[oklch(0.75_0.15_85)] text-[oklch(0.15_0.03_250)]'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Right side - Language & CTA */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 gap-2">
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{currentLanguage?.flag} {currentLanguage?.nativeName}</span>
                  <span className="sm:hidden">{currentLanguage?.flag}</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`cursor-pointer ${language === lang.code ? 'bg-accent' : ''}`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    <span>{lang.nativeName}</span>
                    <span className="ml-auto text-muted-foreground text-xs">{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Enroll CTA */}
            <Link href="/courses">
              <Button className="hidden sm:flex gold-gradient text-[oklch(0.15_0.03_250)] font-semibold hover:opacity-90 shadow-lg">
                {t('enrollNow')}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-md text-sm font-medium transition-all ${
                      location === item.href
                        ? 'bg-[oklch(0.75_0.15_85)] text-[oklch(0.15_0.03_250)]'
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/courses">
                <Button className="w-full mt-2 gold-gradient text-[oklch(0.15_0.03_250)] font-semibold">
                  {t('enrollNow')}
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
