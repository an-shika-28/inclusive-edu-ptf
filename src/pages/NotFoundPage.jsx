import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Home } from 'lucide-react';
import PageContainer from '../components/ui/PageContainer';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EAE0CC] text-[#2A3638]">
      <header className="border-b border-[#D8CEBC] bg-[#EAE0CC] py-4">
        <PageContainer>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#4D6A6D] text-white flex items-center justify-center">
              <BookOpen size={20} aria-hidden="true" />
            </div>
            <span className="font-bold text-lg text-[#4D6A6D]">
              InclusiveEdu
            </span>
          </div>
        </PageContainer>
      </header>

      <main className="flex-1 flex items-center justify-center py-16">
        <PageContainer>
          <div className="max-w-md mx-auto text-center bg-[#F9F6F0] border-2 border-[#D8CEBC] rounded-2xl p-8 sm:p-12 shadow-sm space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#C9ADA1]/30 text-[#4D6A6D] flex items-center justify-center font-bold text-2xl">
              404
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#4D6A6D] tracking-tight">
                We couldn't find that page
              </h1>
              <p className="text-sm text-[#536466]">
                The page you are looking for does not exist or has been moved.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-11 rounded-lg bg-[#4D6A6D] hover:bg-[#3d5557] text-white font-semibold text-base transition-colors shadow-xs"
              >
                <Home size={18} aria-hidden="true" />
                <span>Go to home</span>
              </Link>
            </div>
          </div>
        </PageContainer>
      </main>
    </div>
  );
}
