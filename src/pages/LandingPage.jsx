import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  GraduationCap,
  Eye,
  Volume2,
  Captions,
  Accessibility,
  SlidersHorizontal,
  Upload,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../components/ui/PageContainer';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

export default function LandingPage() {
  // State for interactive Hero Product Preview toolbar
  const [previewMode, setPreviewMode] = useState('visual');
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#EAE0CC] text-[#2A3638]">
      {/* 1. Shared Navigation */}
      <Navbar />

      <main className="flex-1 space-y-20 md:space-y-28 pt-8 pb-16">
        {/* 2 & 3. HERO & PRODUCT PREVIEW SECTION */}
        <section aria-labelledby="hero-heading">
          <PageContainer>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Hero Text (~55% width on desktop) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-block">
                  <span className="text-xs font-bold tracking-widest text-[#4D6A6D] uppercase bg-[#A0A083]/20 px-3 py-1.5 rounded-full border border-[#A0A083]/30">
                    LEARNING THAT ADAPTS TO YOU
                  </span>
                </div>

                <h1
                  id="hero-heading"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#4D6A6D] tracking-tight leading-[1.15]"
                >
                  A more accessible way to learn.
                </h1>

                <p className="text-lg sm:text-xl text-[#536466] leading-relaxed max-w-2xl font-normal">
                  Upload learning materials and explore reading, listening and learning-support tools designed around different needs.
                </p>

                {/* CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-12 rounded-lg bg-[#4D6A6D] hover:bg-[#3d5557] active:bg-[#34494a] text-white font-semibold text-base shadow-sm transition-colors text-center focus-visible:outline-3 focus-visible:outline-[#4D6A6D]"
                  >
                    <span>Get started</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>

                  <a
                    href="#modes"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-12 rounded-lg border-2 border-[#4D6A6D] text-[#4D6A6D] bg-[#F9F6F0]/60 hover:bg-[#F9F6F0] active:bg-[#C9ADA1]/20 font-semibold text-base transition-colors text-center focus-visible:outline-3 focus-visible:outline-[#4D6A6D]"
                  >
                    <span>Explore modes</span>
                  </a>
                </div>

                {/* Highlight badges */}
                <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg border-t border-[#D8CEBC] text-xs sm:text-sm text-[#536466]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-[#4D6A6D] shrink-0" aria-hidden="true" />
                    <span>Visual reading</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-[#4D6A6D] shrink-0" aria-hidden="true" />
                    <span>Audio & captions</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-[#4D6A6D] shrink-0" aria-hidden="true" />
                    <span>Text simplification</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Product Preview (~45% width on desktop) */}
              <div className="lg:col-span-5">
                <div className="relative">
                  {/* Decorative backdrop glow */}
                  <div className="absolute -inset-2 bg-[#C9ADA1]/40 rounded-2xl blur-lg -z-10" />

                  {/* Illustrative Product Preview Card */}
                  <div className="bg-[#F9F6F0] border-2 border-[#D8CEBC] rounded-2xl p-5 shadow-md space-y-4">
                    {/* Simulated Document Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#D8CEBC]">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-[#4D6A6D] text-white flex items-center justify-center shrink-0">
                          <BookOpen size={16} aria-hidden="true" />
                        </div>
                        <div className="truncate">
                          <p className="text-xs font-semibold text-[#4D6A6D] truncate">
                            Cell_Structure_Notes.pdf
                          </p>
                          <p className="text-[11px] text-[#6D7E7F]">
                            Sample Learning Document
                          </p>
                        </div>
                      </div>
                      <Badge variant="sage">Mock Preview</Badge>
                    </div>

                    {/* Mode Selector Tabs */}
                    <div>
                      <div className="text-[11px] font-bold text-[#6D7E7F] uppercase tracking-wider mb-1.5">
                        Active Mode Selector
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#EAE0CC] rounded-lg border border-[#D8CEBC]">
                        <button
                          type="button"
                          onClick={() => setPreviewMode('visual')}
                          className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                            previewMode === 'visual'
                              ? 'bg-[#4D6A6D] text-white shadow-xs'
                              : 'text-[#536466] hover:text-[#4D6A6D]'
                          }`}
                        >
                          <Eye size={13} aria-hidden="true" />
                          <span>Visual</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setPreviewMode('hearing')}
                          className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                            previewMode === 'hearing'
                              ? 'bg-[#4D6A6D] text-white shadow-xs'
                              : 'text-[#536466] hover:text-[#4D6A6D]'
                          }`}
                        >
                          <Captions size={13} aria-hidden="true" />
                          <span>Hearing</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setPreviewMode('learning')}
                          className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                            previewMode === 'learning'
                              ? 'bg-[#4D6A6D] text-white shadow-xs'
                              : 'text-[#536466] hover:text-[#4D6A6D]'
                          }`}
                        >
                          <Accessibility size={13} aria-hidden="true" />
                          <span>Support</span>
                        </button>
                      </div>
                    </div>

                    {/* Interactive Small Reading Toolbar */}
                    <div className="bg-[#EAE0CC]/60 border border-[#D8CEBC] rounded-lg p-2.5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => setFontSize((s) => Math.max(14, s - 1))}
                          className="p-1.5 text-[#4D6A6D] hover:bg-[#F9F6F0] rounded cursor-pointer min-w-8 min-h-8 flex items-center justify-center"
                          title="Decrease font size"
                          aria-label="Decrease text size"
                        >
                          <ZoomOut size={15} />
                        </button>
                        <span className="text-xs font-semibold text-[#4D6A6D] px-1">
                          {fontSize}px
                        </span>
                        <button
                          type="button"
                          onClick={() => setFontSize((s) => Math.min(22, s + 1))}
                          className="p-1.5 text-[#4D6A6D] hover:bg-[#F9F6F0] rounded cursor-pointer min-w-8 min-h-8 flex items-center justify-center"
                          title="Increase font size"
                          aria-label="Increase text size"
                        >
                          <ZoomIn size={15} />
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setHighContrast(!highContrast)}
                          className={`px-2 py-1 rounded text-xs font-medium border cursor-pointer ${
                            highContrast
                              ? 'bg-[#2A3638] text-[#F9F6F0] border-[#2A3638]'
                              : 'bg-[#F9F6F0] text-[#4D6A6D] border-[#D8CEBC]'
                          }`}
                          aria-pressed={highContrast}
                        >
                          {highContrast ? 'Dark' : 'Standard'}
                        </button>

                        <button
                          type="button"
                          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold bg-[#4D6A6D] text-white hover:bg-[#3d5557] cursor-pointer"
                          aria-label={isPlayingAudio ? 'Pause demo speech' : 'Play demo speech'}
                        >
                          <Volume2 size={13} aria-hidden="true" />
                          <span>{isPlayingAudio ? 'Stop' : 'Listen'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Preview Document Canvas */}
                    <div
                      className={`p-4 rounded-xl border transition-all duration-200 ${
                        highContrast
                          ? 'bg-[#2A3638] text-[#EAE0CC] border-[#2A3638]'
                          : 'bg-[#F9F6F0] text-[#2A3638] border-[#D8CEBC]'
                      }`}
                      style={{ fontSize: `${fontSize}px` }}
                    >
                      {previewMode === 'visual' && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-sm tracking-tight text-[#4D6A6D]">
                            1.1 Cellular Biology Overview
                          </h4>
                          <p className="leading-relaxed text-xs sm:text-sm opacity-90">
                            Plant and animal cells share common structures including the nucleus, mitochondria, and cytoplasm, each serving specialized biochemical roles.
                          </p>
                          <div className="pt-1 flex items-center gap-2 text-[11px] text-[#A0A083] font-medium">
                            <span className="inline-block w-2 h-2 rounded-full bg-[#A0A083]" />
                            <span>Visual adjustment active ({fontSize}px)</span>
                          </div>
                        </div>
                      )}

                      {previewMode === 'hearing' && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs text-[#4D6A6D] font-semibold border-b border-[#D8CEBC]/50 pb-1">
                            <span className="flex items-center gap-1">
                              <Captions size={14} /> Synchronized Caption
                            </span>
                            <span className="text-[11px] font-mono">01:14</span>
                          </div>
                          <p className="leading-relaxed text-xs sm:text-sm font-medium bg-[#EAE0CC]/50 p-2 rounded">
                            "Mitochondria are often referred to as the powerhouse of the cell because they produce ATP energy molecules."
                          </p>
                        </div>
                      )}

                      {previewMode === 'learning' && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-1 text-xs text-[#798478] font-bold uppercase tracking-wider">
                            <Sparkles size={13} /> Simplified Explanation
                          </div>
                          <p className="leading-relaxed text-xs sm:text-sm bg-[#C9ADA1]/20 p-2.5 rounded border border-[#C9ADA1]/40">
                            <strong>Summary:</strong> Cells are tiny building blocks. The nucleus is the brain, and mitochondria provide energy to keep cells working.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="text-[11px] text-[#6D7E7F] text-center pt-1">
                      Illustrative interface preview. Real workspace loads your uploaded materials.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>

        {/* 4. ACCESSIBILITY MODES SECTION */}
        <section id="modes" aria-labelledby="modes-heading" className="scroll-mt-24">
          <PageContainer>
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
              <Badge variant="sage">Tailored Access</Badge>
              <h2
                id="modes-heading"
                className="text-3xl sm:text-4xl font-bold text-[#4D6A6D] tracking-tight"
              >
                Choose how you learn
              </h2>
              <p className="text-[#536466] text-base sm:text-lg">
                Select from dedicated accessibility modes designed to adapt materials to visual, auditory, and cognitive preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Mode Card 1: Visual Mode */}
              <Card
                className="flex flex-col justify-between hoverEffect border-t-4 border-t-[#4D6A6D]"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4D6A6D]/15 text-[#4D6A6D] flex items-center justify-center">
                    <Eye size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-[#4D6A6D]">
                        Visual Mode
                      </h3>
                      <Badge variant="slate">Reading</Badge>
                    </div>
                    <p className="text-sm text-[#536466] leading-relaxed">
                      Readable content, adjustable text size, spacing, contrast, and text-to-speech with integrated playback controls.
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-[#536466] pt-2 border-t border-[#D8CEBC]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#4D6A6D]" />
                      <span>Custom font scaling and line spacing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#4D6A6D]" />
                      <span>High-contrast color themes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#4D6A6D]" />
                      <span>Speech synthesis (Play, Pause, Stop)</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6">
                  <Link
                    to="/login"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-11 rounded-lg border border-[#4D6A6D] text-[#4D6A6D] hover:bg-[#4D6A6D] hover:text-white font-semibold text-sm transition-colors text-center"
                  >
                    <span>Explore Visual Mode</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </Card>

              {/* Mode Card 2: Hearing Mode */}
              <Card
                className="flex flex-col justify-between hoverEffect border-t-4 border-t-[#798478]"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#798478]/20 text-[#798478] flex items-center justify-center">
                    <Captions size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-[#4D6A6D]">
                        Hearing Mode
                      </h3>
                      <Badge variant="olive">Listening</Badge>
                    </div>
                    <p className="text-sm text-[#536466] leading-relaxed">
                      Transcripts and captions for audio and video learning materials with clean timestamp playback.
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-[#536466] pt-2 border-t border-[#D8CEBC]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#798478]" />
                      <span>Speech-to-text transcript panel</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#798478]" />
                      <span>Multi-format support (MP3, WAV, MP4)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#798478]" />
                      <span>Copyable notes and transcript search</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6">
                  <Link
                    to="/login"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-11 rounded-lg border border-[#798478] text-[#798478] hover:bg-[#798478] hover:text-white font-semibold text-sm transition-colors text-center"
                  >
                    <span>Explore Hearing Mode</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </Card>

              {/* Mode Card 3: Learning Support Mode */}
              <Card
                className="flex flex-col justify-between hoverEffect border-t-4 border-t-[#C9ADA1]"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C9ADA1]/40 text-[#4a362f] flex items-center justify-center">
                    <Accessibility size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-[#4D6A6D]">
                        Learning Support Mode
                      </h3>
                      <Badge variant="almond">Cognitive</Badge>
                    </div>
                    <p className="text-sm text-[#536466] leading-relaxed">
                      Dyslexia-friendly presentation, clear typography, and simplified explanations for challenging content.
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-[#536466] pt-2 border-t border-[#D8CEBC]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#4a362f]" />
                      <span>Readable dyslexia-friendly styling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#4a362f]" />
                      <span>Text simplification & key summary blocks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#4a362f]" />
                      <span>Distraction-free reading focus</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6">
                  <Link
                    to="/login"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-11 rounded-lg border border-[#798478] text-[#4D6A6D] hover:bg-[#C9ADA1]/40 font-semibold text-sm transition-colors text-center"
                  >
                    <span>Explore Learning Support</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            </div>
          </PageContainer>
        </section>

        {/* 5. HOW IT WORKS SECTION */}
        <section id="how-it-works" aria-labelledby="how-it-works-heading" className="scroll-mt-24">
          <PageContainer>
            <div className="bg-[#F9F6F0] border border-[#D8CEBC] rounded-2xl p-8 sm:p-12 shadow-xs">
              <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
                <Badge variant="sage">Simple Process</Badge>
                <h2
                  id="how-it-works-heading"
                  className="text-3xl sm:text-4xl font-bold text-[#4D6A6D] tracking-tight"
                >
                  How it works
                </h2>
                <p className="text-[#536466] text-base">
                  Three simple steps to transform any learning material into an inclusive format.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#EAE0CC] border-2 border-[#D8CEBC] flex items-center justify-center text-[#4D6A6D] shadow-xs relative">
                    <Upload size={28} aria-hidden="true" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#4D6A6D] text-white text-xs font-bold flex items-center justify-center">
                      1
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#4D6A6D]">
                    Upload a learning material
                  </h3>
                  <p className="text-sm text-[#536466] leading-relaxed">
                    Upload course notes, textbooks, slides, audio lectures, or images in supported formats (PDF, TXT, images, audio).
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#EAE0CC] border-2 border-[#D8CEBC] flex items-center justify-center text-[#4D6A6D] shadow-xs relative">
                    <SlidersHorizontal size={28} aria-hidden="true" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#4D6A6D] text-white text-xs font-bold flex items-center justify-center">
                      2
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#4D6A6D]">
                    Choose a learning mode
                  </h3>
                  <p className="text-sm text-[#536466] leading-relaxed">
                    Switch seamlessly between Visual, Hearing, or Learning Support mode inside your dedicated workspace.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#EAE0CC] border-2 border-[#D8CEBC] flex items-center justify-center text-[#4D6A6D] shadow-xs relative">
                    <BookOpen size={28} aria-hidden="true" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#4D6A6D] text-white text-xs font-bold flex items-center justify-center">
                      3
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#4D6A6D]">
                    Read, listen or use supports
                  </h3>
                  <p className="text-sm text-[#536466] leading-relaxed">
                    Customize text display, read alongside automated speech, review transcripts, or simplify challenging sentences.
                  </p>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>

        {/* 6. ROLE ENTRY SECTION */}
        <section aria-labelledby="roles-heading">
          <PageContainer>
            <div className="text-center max-w-xl mx-auto space-y-3 mb-10">
              <Badge variant="almond">Get Started</Badge>
              <h2
                id="roles-heading"
                className="text-3xl sm:text-4xl font-bold text-[#4D6A6D] tracking-tight"
              >
                Start with your learning role
              </h2>
              <p className="text-[#536466] text-base">
                Choose your space to manage materials or access personalized learning tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Teacher Card */}
              <div className="bg-[#F9F6F0] border-2 border-[#D8CEBC] hover:border-[#4D6A6D] rounded-2xl p-8 flex flex-col justify-between transition-all duration-200 shadow-xs hover:shadow-md">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#4D6A6D] text-white flex items-center justify-center shadow-xs">
                    <GraduationCap size={30} aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#798478]">
                      For Educators
                    </span>
                    <h3 className="text-2xl font-bold text-[#4D6A6D]">
                      I'm a Teacher
                    </h3>
                    <p className="text-sm text-[#536466] leading-relaxed">
                      Organise and share learning materials with your class. Manage document privacy and inspect materials in the workspace.
                    </p>
                  </div>
                  <div className="pt-2 text-xs text-[#6D7E7F] space-y-1">
                    <p>✓ Upload PDFs, notes, and media</p>
                    <p>✓ Toggle public/private student sharing</p>
                    <p>✓ Preview in all accessibility modes</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    to="/login?role=teacher"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-11 rounded-lg bg-[#4D6A6D] hover:bg-[#3d5557] active:bg-[#34494a] text-white font-semibold text-base transition-colors shadow-xs text-center"
                  >
                    <span>Continue as Teacher</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Student Card */}
              <div className="bg-[#F9F6F0] border-2 border-[#D8CEBC] hover:border-[#798478] rounded-2xl p-8 flex flex-col justify-between transition-all duration-200 shadow-xs hover:shadow-md">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#798478] text-white flex items-center justify-center shadow-xs">
                    <BookOpen size={30} aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#798478]">
                      For Learners
                    </span>
                    <h3 className="text-2xl font-bold text-[#4D6A6D]">
                      I'm a Student
                    </h3>
                    <p className="text-sm text-[#536466] leading-relaxed">
                      Access shared resources from your instructors and upload your own study materials with complete privacy.
                    </p>
                  </div>
                  <div className="pt-2 text-xs text-[#6D7E7F] space-y-1">
                    <p>✓ Access materials shared with you</p>
                    <p>✓ Private uploads for personal study</p>
                    <p>✓ Tailored visual, audio, and simplified modes</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    to="/login?role=student"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-11 rounded-lg bg-[#798478] hover:bg-[#687267] active:bg-[#586257] text-white font-semibold text-base transition-colors shadow-xs text-center"
                  >
                    <span>Continue as Student</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
