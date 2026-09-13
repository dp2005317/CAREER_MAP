"use client";

import React, { useState } from 'react';
import { FundamentalQuestion, CodingQuestion } from '@/data/types';
import { FundamentalSection } from './FundamentalSection';
import { CodingSection } from './CodingSection';
import { motion } from 'framer-motion';
import { Trophy, Target, ArrowRight, RotateCcw, AlertTriangle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  fundamentalQuestions: FundamentalQuestion[];
  codingQuestions: CodingQuestion[];
  onFinish: (result: { fundamentalScore: number, codingScore: number, totalScore: number, status: string }) => void;
}

type AssessmentState = 'intro' | 'fundamental' | 'coding' | 'results';

export function AssessmentEngine({ fundamentalQuestions, codingQuestions, onFinish }: Props) {
  const [currentState, setCurrentState] = useState<AssessmentState>('intro');
  const [fundamentalScore, setFundamentalScore] = useState(0);
  const [codingScore, setCodingScore] = useState(0);

  const handleFundamentalComplete = (score: number) => {
    setFundamentalScore(score);
    setCurrentState('coding');
  };

  const handleCodingComplete = (score: number) => {
    setCodingScore(score);
    setCurrentState('results');
    
    // Trigger confetti if they did well
    const total = score + fundamentalScore;
    const maxTotal = fundamentalQuestions.length + codingQuestions.length;
    if (total / maxTotal >= 0.8) {
      try { confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } }); } catch (e) {}
    }
  };

  const totalScore = fundamentalScore + codingScore;
  const maxScore = fundamentalQuestions.length + codingQuestions.length;
  const percentage = Math.round((totalScore / maxScore) * 100);

  let status = "Needs Revision";
  let statusColor = "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/20";
  let message = "We recommend re-watching this lecture before moving on.";

  if (percentage >= 80) {
    status = "Mastered";
    statusColor = "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20";
    message = "Excellent work! You have a solid grasp of these concepts.";
  } else if (percentage >= 60) {
    status = "Good";
    statusColor = "text-blue-600 dark:text-orange-400 bg-blue-50 dark:bg-orange-500/10 border-blue-200 dark:border-orange-500/20";
    message = "Good job. A quick review of the weak areas might help.";
  } else if (percentage >= 40) {
    status = "Needs Practice";
    statusColor = "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20";
    message = "You got some concepts, but there are still gaps. Try the assessment again.";
  }

  const finishAssessment = () => {
    onFinish({
      fundamentalScore,
      codingScore,
      totalScore,
      status
    });
  };

  if (currentState === 'intro') {
    return (
      <div className="max-w-2xl mx-auto text-center mt-12">
        <div className="w-20 h-20 bg-blue-100 dark:bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Target className="w-10 h-10 text-blue-600 dark:text-orange-400" />
        </div>
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Lecture Assessment</h2>
        <p className="text-gray-600 dark:text-zinc-400 mb-8 leading-relaxed">
          Test your knowledge on this lecture's topics. The assessment consists of two parts:
          <br/><br/>
          <strong className="text-gray-900 dark:text-zinc-200">Section A:</strong> 10 Fundamental Questions<br/>
          <strong className="text-gray-900 dark:text-zinc-200">Section B:</strong> 10 Coding Challenges
        </p>
        <button 
          onClick={() => setCurrentState('fundamental')}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-gradient-to-r dark:from-orange-600 dark:to-orange-500 dark:hover:from-orange-500 dark:hover:to-orange-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/30 dark:shadow-orange-600/30 transition-transform hover:scale-105 active:scale-95"
        >
          Start Assessment
        </button>
      </div>
    );
  }

  if (currentState === 'fundamental') {
    return <FundamentalSection questions={fundamentalQuestions} onComplete={handleFundamentalComplete} />;
  }

  if (currentState === 'coding') {
    return <CodingSection questions={codingQuestions} onComplete={handleCodingComplete} />;
  }

  if (currentState === 'results') {
    return (
      <div className="max-w-3xl mx-auto bg-white dark:bg-[#0c0c0e] rounded-3xl p-8 shadow-sm border border-gray-200/80 dark:border-white/10 mt-8">
        <div className="text-center mb-10">
          <div className="w-24 h-24 bg-gradient-to-tr from-blue-100 to-indigo-100 dark:from-orange-500/20 dark:to-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Trophy className="w-12 h-12 text-blue-600 dark:text-orange-400" />
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-2">{percentage}%</h2>
          <div className={`inline-block px-4 py-1.5 rounded-full border font-bold uppercase tracking-wider text-sm mt-2 ${statusColor}`}>
            {status}
          </div>
          <p className="text-gray-600 dark:text-zinc-400 mt-4 max-w-md mx-auto">{message}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 flex flex-col items-center justify-center">
            <h4 className="text-sm font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Fundamentals</h4>
            <span className="text-3xl font-black text-gray-900 dark:text-white">{fundamentalScore} <span className="text-lg text-gray-400 dark:text-zinc-500">/ {fundamentalQuestions.length}</span></span>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 flex flex-col items-center justify-center">
            <h4 className="text-sm font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Coding</h4>
            <span className="text-3xl font-black text-gray-900 dark:text-white">{codingScore} <span className="text-lg text-gray-400 dark:text-zinc-500">/ {codingQuestions.length}</span></span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => {
              setFundamentalScore(0);
              setCodingScore(0);
              setCurrentState('fundamental');
            }}
            className="px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-gray-700 dark:text-zinc-200 font-bold flex items-center justify-center gap-2 transition-colors border border-transparent dark:border-white/10"
          >
            <RotateCcw className="w-5 h-5" />
            Retry Assessment
          </button>
          <button 
            onClick={finishAssessment}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-500 text-white font-bold flex items-center justify-center gap-2 transition-colors shadow-md shadow-blue-500/20 dark:shadow-orange-600/25"
          >
            Continue to Next Lecture
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return null;
}
