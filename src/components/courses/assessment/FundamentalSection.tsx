"use client";

import React, { useState } from 'react';
import { FundamentalQuestion } from '@/data/types';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ChevronRight, HelpCircle } from 'lucide-react';

interface Props {
  questions: FundamentalQuestion[];
  onComplete: (score: number, answers: Record<string, number>) => void;
}

export function FundamentalSection({ questions, onComplete }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [score, setScore] = useState(0);

  const currentQ = questions[currentIndex];

  const handleCheck = () => {
    if (selectedOption === null) return;
    
    setIsAnswerChecked(true);
    const isCorrect = selectedOption === currentQ.correctAnswer;
    
    const newAnswers = { ...answers, [currentQ.id]: selectedOption };
    setAnswers(newAnswers);
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    } else {
      onComplete(score, answers);
    }
  };

  if (!questions || questions.length === 0) return <div>No fundamental questions available.</div>;

  const isCorrect = selectedOption === currentQ.correctAnswer;

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-[#0c0c0e] rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200/80 dark:border-white/10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-black text-gray-900 dark:text-white">Section A: Fundamental Concepts</h2>
          <p className="text-sm text-gray-500 dark:text-zinc-400 font-medium mt-1">Test your conceptual understanding</p>
        </div>
        <div className="px-4 py-2 bg-blue-50 dark:bg-orange-500/10 text-blue-700 dark:text-orange-400 font-bold rounded-xl text-sm border border-blue-100 dark:border-orange-500/20">
          Question {currentIndex + 1} / {questions.length}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className={`text-[10px] uppercase font-black px-2 py-1 rounded tracking-wider ${
            currentQ.difficulty === 'easy' ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' :
            currentQ.difficulty === 'medium' ? 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400' :
            currentQ.difficulty === 'hard' ? 'bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400' :
            'bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-400'
          }`}>
            {currentQ.difficulty}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-zinc-100 leading-relaxed">
          {currentQ.question}
        </h3>
      </div>

      <div className="flex flex-col gap-3 mb-8">
        {currentQ.options.map((option, idx) => {
          let optionClass = "border-gray-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-orange-500/50 hover:bg-blue-50/50 dark:hover:bg-white/[0.04] cursor-pointer";
          
          if (isAnswerChecked) {
            if (idx === currentQ.correctAnswer) {
              optionClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-900 dark:text-emerald-300";
            } else if (idx === selectedOption) {
              optionClass = "border-red-500 bg-red-50 dark:bg-red-500/10 text-red-900 dark:text-red-300";
            } else {
              optionClass = "border-gray-200 dark:border-white/5 opacity-50 cursor-not-allowed";
            }
          } else if (selectedOption === idx) {
            optionClass = "border-blue-500 dark:border-orange-500 bg-blue-50 dark:bg-orange-500/10 ring-2 ring-blue-500/20 dark:ring-orange-500/20";
          }

          return (
            <div 
              key={idx}
              onClick={() => !isAnswerChecked && setSelectedOption(idx)}
              className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${optionClass}`}
            >
              <span className="font-semibold text-gray-700 dark:text-zinc-200">{option}</span>
              {isAnswerChecked && idx === currentQ.correctAnswer && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
              {isAnswerChecked && idx === selectedOption && idx !== currentQ.correctAnswer && <XCircle className="w-5 h-5 text-red-500 shrink-0" />}
            </div>
          );
        })}
      </div>

      {isAnswerChecked && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-5 rounded-2xl mb-8 flex items-start gap-3 ${
            isCorrect ? 'bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20' : 'bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20'
          }`}
        >
          <HelpCircle className={`w-6 h-6 shrink-0 mt-0.5 ${isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`} />
          <div>
            <h4 className={`text-sm font-black uppercase tracking-wide mb-1 ${isCorrect ? 'text-emerald-800 dark:text-emerald-300' : 'text-amber-800 dark:text-amber-300'}`}>
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </h4>
            <p className={`text-sm leading-relaxed ${isCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-amber-700 dark:text-amber-400'}`}>
              {currentQ.explanation}
            </p>
          </div>
        </motion.div>
      )}

      <div className="flex justify-end pt-4 border-t border-gray-100 dark:border-white/10">
        {!isAnswerChecked ? (
          <button 
            onClick={handleCheck}
            disabled={selectedOption === null}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-500 disabled:opacity-50 text-white font-bold transition-colors shadow-md shadow-blue-500/20 dark:shadow-orange-600/25"
          >
            Check Answer
          </button>
        ) : (
          <button 
            onClick={handleNext}
            className="px-6 py-3 rounded-xl bg-gray-900 hover:bg-black dark:bg-gradient-to-r dark:from-orange-600 dark:to-orange-500 text-white font-bold transition-colors flex items-center gap-2 shadow-md dark:shadow-orange-600/20"
          >
            {currentIndex < questions.length - 1 ? 'Next Question' : 'Complete Section A'}
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
