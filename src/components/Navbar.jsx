import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X, ArrowRight, LogIn } from 'lucide-react';
import PageContainer from './ui/PageContainer';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    if (!isHome) {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#EAE0CC]/95 backdrop-blur-xs border-b border-[#D8CEBC]">
      <PageContainer>
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-3 focus-visible:outline-[#4D6A6D] focus-visible:outline-offset-2 rounded-lg p-1.5 -ml-1.5 transition-colors"
            aria-label="Inclusive Education Platform - Return to homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-[#4D6A6D] text-white flex items-center justify-center shadow-xs group-hover:bg-[#3d5557] transition-colors">
              <BookOpen size={22} aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#4D6A6D] tracking-tight leading-none">
                InclusiveEdu
              </span>
              <span className="text-xs text-[#536466] font-medium tracking-wide">
                Adaptive Learning Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            <button
              type="button"
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-semibold text-[#536466] hover:text-[#4D6A6D] transition-colors cursor-pointer min-h-11 flex items-center"
            >
              How it works
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('modes')}
              className="text-sm font-semibold text-[#536466] hover:text-[#4D6A6D] transition-colors cursor-pointer min-h-11 flex items-center"
            >
              Accessibility modes
            </button>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-4 py-2 min-h-11 text-sm font-semibold text-[#4D6A6D] border border-[#798478]/40 hover:bg-[#C9ADA1]/25 hover:border-[#798478] rounded-lg transition-colors focus-visible:outline-3 focus-visible:outline-[#4D6A6D] focus-visible:outline-offset-2"
            >
              <LogIn size={16} aria-hidden="true" />
              <span>Log in</span>
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-5 py-2 min-h-11 text-sm font-semibold text-white bg-[#4D6A6D] hover:bg-[#3d5557] rounded-lg shadow-xs transition-colors focus-visible:outline-3 focus-visible:outline-[#4D6A6D] focus-visible:outline-offset-2"
            >
              <span>Get started</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center min-w-11 min-h-11 p-2 text-[#4D6A6D] rounded-lg hover:bg-[#C9ADA1]/30 transition-colors focus-visible:outline-3 focus-visible:outline-[#4D6A6D]"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden border-t border-[#D8CEBC] py-4 space-y-3 bg-[#EAE0CC] animate-in fade-in duration-200"
          >
            <button
              type="button"
              onClick={() => scrollToSection('how-it-works')}
              className="w-full text-left px-4 py-3 min-h-11 text-base font-semibold text-[#4D6A6D] hover:bg-[#C9ADA1]/20 rounded-lg flex items-center"
            >
              How it works
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('modes')}
              className="w-full text-left px-4 py-3 min-h-11 text-base font-semibold text-[#4D6A6D] hover:bg-[#C9ADA1]/20 rounded-lg flex items-center"
            >
              Accessibility modes
            </button>
            <div className="pt-2 border-t border-[#D8CEBC] flex flex-col gap-2.5 px-2">
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 min-h-11 text-base font-semibold text-[#4D6A6D] border border-[#798478]/50 rounded-lg hover:bg-[#C9ADA1]/30"
              >
                <LogIn size={18} aria-hidden="true" />
                <span>Log in</span>
              </Link>
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 min-h-11 text-base font-semibold text-white bg-[#4D6A6D] hover:bg-[#3d5557] rounded-lg shadow-xs"
              >
                <span>Get started</span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </PageContainer>
    </header>
  );
}
