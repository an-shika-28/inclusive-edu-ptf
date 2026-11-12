import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import PageContainer from './ui/PageContainer';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-[#D8CEBC] bg-[#EAE0CC] py-12 text-[#536466]">
      <PageContainer>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#D8CEBC]">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#4D6A6D] text-white flex items-center justify-center">
                <BookOpen size={18} aria-hidden="true" />
              </div>
              <span className="font-bold text-lg text-[#4D6A6D]">
                InclusiveEdu
              </span>
            </div>
            <p className="text-sm max-w-md text-[#536466] leading-relaxed">
              An accessible learning platform designed around different student needs. Upload learning materials and adapt them with reading, listening, and cognitive support tools.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#4D6A6D]">
              Platform Navigation
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="hover:text-[#4D6A6D] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-[#4D6A6D] transition-colors"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#modes"
                  className="hover:text-[#4D6A6D] transition-colors"
                >
                  Accessibility modes
                </a>
              </li>
              <li>
                <Link
                  to="/login"
                  className="hover:text-[#4D6A6D] transition-colors"
                >
                  Log in / Role selection
                </Link>
              </li>
            </ul>
          </div>

          {/* Project & Contract Note */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#4D6A6D]">
              Project Status
            </h2>
            <div className="p-3.5 rounded-lg bg-[#F9F6F0] border border-[#D8CEBC] text-xs space-y-1.5 text-[#536466]">
              <p className="font-semibold text-[#4D6A6D]">
                Prototype Stage
              </p>
              <p>
                Academic prototype exploring accessible educational technology interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6D7E7F]">
          <p>
            &copy; 2026 Inclusive Education Platform. Developed under Team Build Contract v4.
          </p>
          <p>
            Built for accessibility, high readability, and multimodal learning.
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}
