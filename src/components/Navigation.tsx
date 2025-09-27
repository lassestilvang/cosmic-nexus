'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { hoverLift, hoverGlow, prefersReducedMotion } from '../lib/animations';

export default function Navigation() {
  const pathname = usePathname();
  const reducedMotion = prefersReducedMotion();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-cosmic-blue/95 backdrop-blur-sm border-b border-neon-cyan/20 fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <motion.div
                whileHover={reducedMotion ? {} : hoverLift}
                whileTap={reducedMotion ? {} : { scale: 0.95 }}
              >
                <Link href="/" className="text-neon-cyan font-bold text-xl relative">
                  <span className="relative z-10">Cosmic Nexus</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-organic-green/20 rounded-lg -z-10"
                    initial={{ scale: 0 }}
                    whileHover={reducedMotion ? {} : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={reducedMotion ? {} : hoverLift}
                  whileTap={reducedMotion ? {} : { scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      pathname === item.href
                        ? 'text-organic-green bg-neon-cyan/10'
                        : 'text-neon-cyan hover:text-organic-green'
                    }`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-neon-cyan/10 rounded-md -z-10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}