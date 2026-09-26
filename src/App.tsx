/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { scenarios23, Scenario23 } from './data/scenarios';
import { 
  AlertTriangle, 
  Timer, 
  FileText, 
  Send, 
  ChevronRight, 
  RefreshCcw,
  CheckCircle2,
  Clock,
  Download,
  Info,
  Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { jsPDF } from 'jspdf';
import confetti from 'canvas-confetti';
import { PWAInstallButton } from './components/PWAInstallButton';
import { OfflineIndicator } from './components/OfflineIndicator';

type AppStage = 'CHOICE' | 'READING' | 'REPORTING' | 'RESULT';

export default function App() {
  const [stage, setAppStage] = useState<AppStage>('CHOICE');
  const [selectedScenario, setSelectedScenario] = useState<Scenario23 | null>(null);
  const [timeLeft, setTimeLeft] = useState(120);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  
  // User answers
  const [userL, setUserL] = useState('');
  const [userN_Nature, setUserN_Nature] = useState('');
  const [userN_Numbers, setUserN_Numbers] = useState('');
  const [userH, setUserH] = useState('');
  
  // Time tracking
  const readingStartTimeRef = React.useRef(0);
  const reportingStartTimeRef = React.useRef(0);
  const [readingDuration, setReadingDuration] = useState(0);
  const [reportingDuration, setReportingDuration] = useState(0);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  const startScenario = (scenario: Scenario23) => {
    setSelectedScenario(scenario);
    setAppStage('READING');
    setTimeLeft(120);
    setIsTimerRunning(true);
    // Reset answers
    setUserL('');
    setUserN_Nature('');
    setUserN_Numbers('');
    setUserH('');
    
    readingStartTimeRef.current = Date.now();
    reportingStartTimeRef.current = 0;
  };

  const handleNextFromReading = useCallback(() => {
    const now = Date.now();
    const duration = readingStartTimeRef.current > 0 ? Math.round((now - readingStartTimeRef.current) / 1000) : 0;
    setReadingDuration(duration);
    setAppStage('REPORTING');
    reportingStartTimeRef.current = now;
    setTimeLeft(300); // 5 minutes for reporting
    setIsTimerRunning(true);
  }, []);

  const handleSubmit = useCallback(() => {
    const now = Date.now();
    const duration = reportingStartTimeRef.current > 0 ? Math.round((now - reportingStartTimeRef.current) / 1000) : 0;
    setReportingDuration(duration);
    setAppStage('RESULT');
    setIsTimerRunning(false);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#059669', '#10b981', '#34d399']
    });
  }, []);

  const shareWhatsApp = () => {
    if (!selectedScenario) return;
    const text = `*KSIA ERT Topic 2.3 Report*
*Scenario #${selectedScenario.id}:* ${selectedScenario.title}
*Date:* ${new Date().toLocaleString()}

*Drill Performance:*
- Reading Phase: ${formatDuration(readingDuration)}
- Reporting Phase: ${formatDuration(reportingDuration)}

*L-N-N-H Report:*
*L - Location:* ${userL}
*N - Nature:* ${userN_Nature}
*N - Numbers:* ${userN_Numbers}
*H - Hazards:* ${userH}`;

    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    let timer: number;
    if (isTimerRunning && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      if (stage === 'READING') {
        handleNextFromReading();
      } else if (stage === 'REPORTING') {
        handleSubmit();
      }
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft, stage, handleNextFromReading, handleSubmit]);

  const resetApp = () => {
    setAppStage('CHOICE');
    setSelectedScenario(null);
    setIsTimerRunning(false);
  };

  const exportPDF = useCallback(() => {
    if (!selectedScenario) return;
    
    const doc = new jsPDF();
    const margin = 20;
    let y = 20;

    // Header
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('KSIA ERT Readiness Drill', margin, 25);
    doc.setFontSize(12);
    doc.text('Topic 2.3: L-N-N-H Reporting Drill', margin, 33);

    y = 55;
    doc.setTextColor(0);
    doc.setFontSize(14);
    doc.text(`Scenario #${selectedScenario.id}: ${selectedScenario.title}`, margin, y);
    y += 10;
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Date: ${new Date().toLocaleString()}`, margin, y);
    y += 7;
    doc.text(`Reading Time: ${formatDuration(readingDuration)} | Reporting Time: ${formatDuration(reportingDuration)}`, margin, y);
    y += 15;

    // User Report Section
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('YOUR L-N-N-H REPORT', margin, y);
    y += 10;

    const sections = [
      { label: 'L - Location', value: userL },
      { label: 'N - Nature', value: userN_Nature },
      { label: 'N - Numbers', value: userN_Numbers },
      { label: 'H - Hazards', value: userH }
    ];

    doc.setFontSize(11);
    sections.forEach(section => {
      doc.setFont('helvetica', 'bold');
      doc.text(section.label + ':', margin, y);
      y += 6;
      doc.setFont('helvetica', 'normal');
      const lines = doc.splitTextToSize(section.value || 'No entry provided.', 170);
      doc.text(lines, margin, y);
      y += (lines.length * 5) + 10;
    });

    // Reference Section
    y += 10;
    doc.setDrawColor(200);
    doc.line(margin, y, 190, y);
    y += 15;

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('FACILITATOR EXTRACTION KEY', margin, y);
    y += 10;

    const keySections = [
      { label: 'L (Location)', value: selectedScenario.extractionKey.l },
      { label: 'N (Nature)', value: selectedScenario.extractionKey.n_nature },
      { label: 'N (Numbers)', value: selectedScenario.extractionKey.n_numbers },
      { label: 'H (Hazards)', value: selectedScenario.extractionKey.h }
    ];

    doc.setFontSize(11);
    keySections.forEach(section => {
      doc.setFont('helvetica', 'bold');
      doc.text(section.label + ':', margin, y);
      y += 6;
      doc.setFont('helvetica', 'normal');
      const lines = doc.splitTextToSize(section.value, 170);
      doc.text(lines, margin, y);
      y += (lines.length * 5) + 8;
    });

    doc.save(`KSIA_Drill_Topic2.3_Scenario_${selectedScenario.id}.pdf`);
  }, [selectedScenario, userL, userN_Nature, userN_Numbers, userH]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100">
      <OfflineIndicator />
      
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3" onClick={resetApp} style={{ cursor: 'pointer' }}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-none tracking-tight">KSIA ERT</h1>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-1">Topic 2.3 • Readiness Drill</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <PWAInstallButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <AnimatePresence mode="wait">
          {stage === 'CHOICE' && (
            <motion.div
              key="choice"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-extrabold text-slate-900">Select an Incident Number</h2>
                <p className="text-slate-500">Pick a scenario from the drill bank to begin your L-N-N-H report.</p>
              </div>

              <div className="rounded-3xl bg-emerald-50 p-8 border border-emerald-100">
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Info size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-900 text-lg">Drill Rules</h3>
                    <ul className="mt-2 space-y-2 text-emerald-800/80">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        Exactly 2 minutes to read the incident details.
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        Exactly 5 minutes to complete the radio report.
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        Manual entry of Location, Nature, Numbers, and Hazards.
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        Plain Language / Clear Text mandatory for all transmissions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-3">
                {scenarios23.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => startScenario(scenario)}
                    className="aspect-square flex flex-col items-center justify-center rounded-2xl border-2 border-slate-200 bg-white p-4 transition-all hover:border-slate-900 hover:shadow-lg active:scale-95 group"
                  >
                    <span className="text-2xl font-black text-slate-900 group-hover:scale-110 transition-transform">
                      {scenario.id}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {stage === 'READING' && selectedScenario && (
            <motion.div
              key="reading"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="mx-auto max-w-2xl"
            >
              <div className="rounded-3xl border-4 border-slate-900 bg-white p-8 shadow-2xl space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 flex flex-col items-end">
                  <div className={`flex items-center gap-2 rounded-2xl px-4 py-2 font-mono text-2xl font-bold shadow-inner ${timeLeft <= 5 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-900'}`}>
                    <Clock size={24} />
                    {timeLeft}s
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-sm font-bold tracking-wider uppercase">
                    Incident #{selectedScenario.id}
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 leading-tight">
                    {selectedScenario.title}
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none">
                  <p className="text-xl leading-relaxed text-slate-700 font-medium">
                    {selectedScenario.scenarioText}
                  </p>
                </div>

                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mt-8">
                  <motion.div 
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 120, ease: "linear" }}
                    className={`h-full ${timeLeft <= 5 ? 'bg-red-500' : 'bg-slate-900'}`}
                  />
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleNextFromReading}
                    className="w-full group flex items-center justify-center gap-3 rounded-2xl bg-slate-900 py-4 text-xl font-bold text-white transition-all hover:bg-slate-800 hover:shadow-xl active:scale-95"
                  >
                    Proceed to Radio Report
                    <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {stage === 'REPORTING' && selectedScenario && (
            <motion.div
              key="reporting"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mx-auto max-w-3xl space-y-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-black text-slate-900">4-Part Initial Report</h2>
                  <p className="text-slate-500 font-medium uppercase tracking-wider text-sm mt-1">L-N-N-H Structured Format</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className={`flex items-center gap-2 rounded-2xl px-4 py-2 font-mono text-xl font-bold shadow-inner ${timeLeft <= 30 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-900'}`}>
                    <Clock size={20} />
                    {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-slate-400">Scenario</span>
                    <p className="text-lg font-bold text-slate-900">#{selectedScenario.id}</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white text-[10px]">L</span>
                    Location
                  </label>
                  <textarea
                    value={userL}
                    onChange={(e) => setUserL(e.target.value)}
                    placeholder="Precise location (Sublevel, room, pillar/grid)..."
                    className="w-full rounded-2xl border-2 border-slate-200 p-4 text-lg font-medium outline-none transition-all focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 min-h-[100px]"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white text-[10px]">N</span>
                      Nature
                    </label>
                    <textarea
                      value={userN_Nature}
                      onChange={(e) => setUserN_Nature(e.target.value)}
                      placeholder="Physical mechanism or threat type..."
                      className="w-full rounded-2xl border-2 border-slate-200 p-4 text-lg font-medium outline-none transition-all focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white text-[10px]">N</span>
                      Numbers
                    </label>
                    <textarea
                      value={userN_Numbers}
                      onChange={(e) => setUserN_Numbers(e.target.value)}
                      placeholder="Casualty count and clinical state..."
                      className="w-full rounded-2xl border-2 border-slate-200 p-4 text-lg font-medium outline-none transition-all focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 min-h-[100px]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white text-[10px]">H</span>
                    Hazards
                  </label>
                  <textarea
                    value={userH}
                    onChange={(e) => setUserH(e.target.value)}
                    placeholder="Immediate environmental/kinetic escalators..."
                    className="w-full rounded-2xl border-2 border-slate-200 p-4 text-lg font-medium outline-none transition-all focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 min-h-[100px]"
                  />
                </div>
              </div>

              <div className="flex pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={!userL || !userN_Nature || !userN_Numbers || !userH}
                  className="w-full group flex items-center justify-center gap-3 rounded-2xl bg-slate-900 py-6 text-xl font-bold text-white transition-all hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl active:scale-95"
                >
                  <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Submit Radio Report
                </button>
              </div>
            </motion.div>
          )}

          {stage === 'RESULT' && selectedScenario && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto max-w-4xl space-y-8"
            >
              <div className="text-center space-y-4">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-4xl font-black text-slate-900">Drill Completed</h2>
                <div className="flex items-center justify-center gap-6 mt-4">
                  <div className="bg-slate-100 rounded-2xl px-6 py-3 border border-slate-200">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Reading Phase</span>
                    <span className="text-2xl font-black text-slate-900 flex items-center gap-2">
                      <Clock size={20} className="text-slate-400" />
                      {formatDuration(readingDuration)}
                    </span>
                  </div>
                  <div className="bg-slate-100 rounded-2xl px-6 py-3 border border-slate-200">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Reporting Phase</span>
                    <span className="text-2xl font-black text-slate-900 flex items-center gap-2">
                      <Clock size={20} className="text-slate-400" />
                      {formatDuration(reportingDuration)}
                    </span>
                  </div>
                </div>
                <p className="text-slate-500 text-lg mt-4">Compare your response with the standard extraction key.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* User Answer */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-widest text-xs">
                    <FileText size={14} />
                    Your Broadcast
                  </div>
                  <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 space-y-6">
                    <div>
                      <span className="text-[10px] font-black bg-slate-900 text-white px-2 py-0.5 rounded mr-2">L</span>
                      <p className="mt-1 text-slate-700 font-medium">{userL}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black bg-slate-900 text-white px-2 py-0.5 rounded mr-2">N</span>
                      <p className="mt-1 text-slate-700 font-medium">{userN_Nature}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black bg-slate-900 text-white px-2 py-0.5 rounded mr-2">N</span>
                      <p className="mt-1 text-slate-700 font-medium">{userN_Numbers}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black bg-slate-900 text-white px-2 py-0.5 rounded mr-2">H</span>
                      <p className="mt-1 text-slate-700 font-medium">{userH}</p>
                    </div>
                  </div>
                </div>

                {/* Answer Key */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-xs">
                    <CheckCircle2 size={14} />
                    Standard Extraction Key
                  </div>
                  <div className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 p-6 space-y-6">
                    <div>
                      <span className="text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded mr-2">L</span>
                      <p className="mt-1 text-emerald-900 font-bold">{selectedScenario.extractionKey.l}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded mr-2">N</span>
                      <p className="mt-1 text-emerald-900 font-bold">{selectedScenario.extractionKey.n_nature}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded mr-2">N</span>
                      <p className="mt-1 text-emerald-900 font-bold">{selectedScenario.extractionKey.n_numbers}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded mr-2">H</span>
                      <p className="mt-1 text-emerald-900 font-bold">{selectedScenario.extractionKey.h}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={exportPDF}
                  className="flex-1 flex items-center justify-center gap-3 rounded-2xl bg-slate-900 py-5 text-lg font-bold text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95"
                >
                  <Download size={20} />
                  Download PDF
                </button>
                <button
                  onClick={shareWhatsApp}
                  className="flex-1 flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] py-5 text-lg font-bold text-white transition-all hover:bg-[#128C7E] hover:shadow-lg active:scale-95"
                >
                  <Share2 size={20} />
                  Share WhatsApp
                </button>
                <button
                  onClick={resetApp}
                  className="flex-1 flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white py-5 text-lg font-bold text-slate-900 transition-all hover:border-slate-900 hover:shadow-lg active:scale-95"
                >
                  <RefreshCcw size={20} />
                  New Drill
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-sm font-bold text-slate-400 tracking-widest uppercase">
            Emergency Response Team Readiness Training • Topic 2.3
          </p>
          <p className="mt-1 text-xs text-slate-300 font-medium">
            Proprietary Training Material • King Salman International Airport
          </p>
        </div>
      </footer>
    </div>
  );
}
