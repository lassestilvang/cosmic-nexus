'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const drawerVariants = {
  closed: {
    x: '-100%',
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  open: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

const backdropVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => {
                        console.log('Nav link clicked');
                        onClose();
                      }}
          />

          {/* Drawer */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={drawerVariants}
            className="fixed top-0 left-0 h-full w-80 bg-cosmic-blue border-r border-neon-cyan border-opacity-30 z-[60] shadow-2xl"
          >
            {/* Header with close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => {
                  console.log('Close button clicked');
                  onClose();
                }}
                className="w-8 h-8 flex items-center justify-center text-neon-cyan hover:text-white transition-colors duration-200"
  ref={closeButtonRef}
                aria-label="Close menu"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="px-6 py-8">
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        console.log('Nav link clicked');
                        onClose();
                      }}
                      className="block text-neon-cyan hover:text-white text-xl font-medium transition-colors duration-200 hover:bg-neon-cyan hover:bg-opacity-10 px-4 py-3 rounded-lg"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
