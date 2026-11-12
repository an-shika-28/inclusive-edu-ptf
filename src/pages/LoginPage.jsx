import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import {
  GraduationCap,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  User,
  Mail
} from 'lucide-react';
import PageContainer from '../components/ui/PageContainer';
import Badge from '../components/ui/Badge';

export default function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Preselection from query parameters (?role=teacher or ?role=student)
  const [selectedRole, setSelectedRole] = useState(() => {
    const roleParam = searchParams.get('role');
    return roleParam === 'teacher' || roleParam === 'student' ? roleParam : null;
  });

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setErrorMessage('');
  };

  const handleKeyDownRole = (e, role) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleRoleSelect(role);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedRole) {
      setErrorMessage('Please select a role (Teacher or Student) to continue.');
      return;
    }

    if (email.trim() && !email.includes('@')) {
      setErrorMessage('Please enter a valid email address (e.g. you@example.com).');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Smooth transition into selected dashboard per contract connection map
    setTimeout(() => {
      if (selectedRole === 'teacher') {
        navigate('/teacher');
      } else {
        navigate('/student');
      }
    }, 150);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EAE0CC] text-[#2A3638]">
      {/* Top Header Bar */}
      <header className="border-b border-[#D8CEBC] bg-[#EAE0CC]/95 backdrop-blur-xs py-4">
        <PageContainer>
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group focus-visible:outline-3 focus-visible:outline-[#4D6A6D] rounded-lg p-1 transition-colors"
              aria-label="Inclusive Education Platform - Return to homepage"
            >
              <div className="w-9 h-9 rounded-xl bg-[#4D6A6D] text-white flex items-center justify-center">
                <BookOpen size={20} aria-hidden="true" />
              </div>
              <span className="font-bold text-lg text-[#4D6A6D] tracking-tight">
                InclusiveEdu
              </span>
            </Link>

            {/* Back to Home Link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#536466] hover:text-[#4D6A6D] px-3 py-2 rounded-lg transition-colors focus-visible:outline-3 focus-visible:outline-[#4D6A6D]"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              <span>Back to home</span>
            </Link>
          </div>
        </PageContainer>
      </header>

      {/* Main Role Selection Area */}
      <main className="flex-1 flex items-center justify-center py-10 sm:py-16">
        <PageContainer>
          <div className="max-w-xl mx-auto">
            <div className="bg-[#F9F6F0] border-2 border-[#D8CEBC] rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
              {/* Heading & Helper */}
              <div className="text-center space-y-2">
                <div className="inline-block mb-1">
                  <Badge variant="sage">Demo Role Selection</Badge>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-[#4D6A6D] tracking-tight">
                  Welcome to your learning space
                </h1>
                <p className="text-sm sm:text-base text-[#536466]">
                  Choose how you'll use the platform.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Role Selector Cards */}
                <fieldset className="space-y-3">
                  <legend className="text-xs font-bold text-[#6D7E7F] uppercase tracking-wider mb-2">
                    Select Your Role *
                  </legend>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Teacher Option Card */}
                    <div
                      role="button"
                      tabIndex={0}
                      aria-pressed={selectedRole === 'teacher'}
                      onClick={() => handleRoleSelect('teacher')}
                      onKeyDown={(e) => handleKeyDownRole(e, 'teacher')}
                      className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between min-h-11 focus-visible:outline-3 focus-visible:outline-[#4D6A6D] ${
                        selectedRole === 'teacher'
                          ? 'border-[#4D6A6D] bg-[#4D6A6D]/10 shadow-xs'
                          : 'border-[#D8CEBC] bg-[#F2EBE0]/60 hover:bg-[#F2EBE0] hover:border-[#A0A083]'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                            selectedRole === 'teacher'
                              ? 'bg-[#4D6A6D] text-white'
                              : 'bg-[#4D6A6D]/20 text-[#4D6A6D]'
                          }`}
                        >
                          <GraduationCap size={24} aria-hidden="true" />
                        </div>
                        {selectedRole === 'teacher' && (
                          <CheckCircle2
                            size={20}
                            className="text-[#4D6A6D]"
                            aria-label="Selected"
                          />
                        )}
                      </div>

                      <div className="pt-3">
                        <h3 className="font-bold text-base text-[#4D6A6D]">
                          Teacher
                        </h3>
                        <p className="text-xs text-[#536466] mt-1 leading-snug">
                          Upload, organize, and share learning materials with students.
                        </p>
                      </div>
                    </div>

                    {/* Student Option Card */}
                    <div
                      role="button"
                      tabIndex={0}
                      aria-pressed={selectedRole === 'student'}
                      onClick={() => handleRoleSelect('student')}
                      onKeyDown={(e) => handleKeyDownRole(e, 'student')}
                      className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between min-h-11 focus-visible:outline-3 focus-visible:outline-[#4D6A6D] ${
                        selectedRole === 'student'
                          ? 'border-[#798478] bg-[#798478]/15 shadow-xs'
                          : 'border-[#D8CEBC] bg-[#F2EBE0]/60 hover:bg-[#F2EBE0] hover:border-[#A0A083]'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                            selectedRole === 'student'
                              ? 'bg-[#798478] text-white'
                              : 'bg-[#798478]/25 text-[#3b453a]'
                          }`}
                        >
                          <BookOpen size={24} aria-hidden="true" />
                        </div>
                        {selectedRole === 'student' && (
                          <CheckCircle2
                            size={20}
                            className="text-[#798478]"
                            aria-label="Selected"
                          />
                        )}
                      </div>

                      <div className="pt-3">
                        <h3 className="font-bold text-base text-[#4D6A6D]">
                          Student
                        </h3>
                        <p className="text-xs text-[#536466] mt-1 leading-snug">
                          Access shared materials and upload your own study files.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>

                {/* Optional Prototype Details */}
                <div className="space-y-4 pt-2 border-t border-[#D8CEBC]">
                  <div>
                    <label
                      htmlFor="display-name"
                      className="block text-xs font-semibold text-[#4D6A6D] uppercase tracking-wide mb-1.5"
                    >
                      Display Name <span className="text-[#6D7E7F] normal-case font-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#798478]">
                        <User size={16} aria-hidden="true" />
                      </div>
                      <input
                        id="display-name"
                        type="text"
                        placeholder="e.g. Alex or Prof. Davis"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 min-h-11 rounded-lg border border-[#D8CEBC] bg-[#F2EBE0]/60 focus:bg-[#F9F6F0] text-sm text-[#2A3638] placeholder-[#798478]/70"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email-address"
                      className="block text-xs font-semibold text-[#4D6A6D] uppercase tracking-wide mb-1.5"
                    >
                      Email Address <span className="text-[#6D7E7F] normal-case font-normal">(optional for demo)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#798478]">
                        <Mail size={16} aria-hidden="true" />
                      </div>
                      <input
                        id="email-address"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 min-h-11 rounded-lg border border-[#D8CEBC] bg-[#F2EBE0]/60 focus:bg-[#F9F6F0] text-sm text-[#2A3638] placeholder-[#798478]/70"
                      />
                    </div>
                  </div>
                </div>

                {/* Inline Error Message */}
                {errorMessage && (
                  <div
                    role="alert"
                    className="p-3 rounded-lg bg-[#C9ADA1]/20 border border-[#C9ADA1] text-xs font-semibold text-[#78281f] flex items-center gap-2"
                  >
                    <AlertCircle size={16} className="shrink-0" aria-hidden="true" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Primary Action Button */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-11 rounded-lg bg-[#4D6A6D] hover:bg-[#3d5557] active:bg-[#34494a] text-white font-semibold text-base transition-colors shadow-xs cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-3 focus-visible:outline-[#4D6A6D]"
                  >
                    <span>
                      {selectedRole === 'teacher'
                        ? 'Continue as teacher'
                        : selectedRole === 'student'
                        ? 'Continue as student'
                        : 'Select a role to continue'}
                    </span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>

                  {/* Secondary contract prototype disclaimer */}
                  <div className="text-center">
                    <p className="text-xs text-[#6D7E7F]">
                      Demo prototype — use the demo flow to explore the interface.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </PageContainer>
      </main>

      {/* Simple Accessible Footer */}
      <footer className="py-6 border-t border-[#D8CEBC] text-center text-xs text-[#6D7E7F]">
        <PageContainer>
          <p>
            Inclusive Education Platform &bull; Academic Prototype &bull; No production credentials collected
          </p>
        </PageContainer>
      </footer>
    </div>
  );
}
