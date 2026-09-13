"use client";

import React, { useState } from 'react';
import { CodingQuestion } from '@/data/types';
import Editor from '@monaco-editor/react';
import { Play, Send, CheckCircle2, XCircle, Terminal, AlertTriangle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useTheme } from 'next-themes';

interface Props {
  questions: CodingQuestion[];
  onComplete: (score: number, answers: Record<string, string>) => void;
}

export function CodingSection({ questions, onComplete }: Props) {
  const { resolvedTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQ = questions[currentIndex];

  const [code, setCode] = useState<string>(currentQ.starterCode || currentQ.buggyCode || "");
  const [output, setOutput] = useState<string | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // When question changes, reset state
  React.useEffect(() => {
    setCode(currentQ.starterCode || currentQ.buggyCode || "");
    setOutput(null);
    setIsSubmitted(false);
    setIsCorrect(false);
  }, [currentIndex, currentQ]);

  const handleRun = async () => {
    setIsExecuting(true);
    try {
      // In a real app, this would call your Judge0 API endpoint
      // For now, we simulate execution or call our Next.js API route
      const res = await axios.post('/api/execute', {
        code,
        language: currentQ.language,
        input: currentQ.exampleInput
      });
      
      setOutput(res.data.output);
    } catch (error: any) {
      setOutput(error.response?.data?.error || "Execution failed.");
    } finally {
      setIsExecuting(false);
    }
  };

  const handleSubmit = async () => {
    setIsExecuting(true);
    try {
      // Execute against hidden test cases
      const res = await axios.post('/api/execute', {
        code,
        language: currentQ.language,
        input: currentQ.exampleInput // Should be test case input
      });
      
      const actualOutput = (res.data.output || "").trim();
      const expected = (currentQ.expectedOutput || "").trim();
      
      // Simple exact match evaluation for now
      const correct = actualOutput === expected;
      
      setIsCorrect(correct);
      if (correct) setScore(prev => prev + 1);
      
      setAnswers(prev => ({ ...prev, [currentQ.id]: code }));
      setOutput(actualOutput);
      setIsSubmitted(true);
    } catch (error: any) {
      setOutput(error.response?.data?.error || "Submission failed.");
      setIsSubmitted(true);
      setIsCorrect(false);
    } finally {
      setIsExecuting(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete(score, answers);
    }
  };

  if (!questions || questions.length === 0) return <div>No coding questions available.</div>;

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)]">
      {/* Left Panel: Problem Description */}
      <div className="w-full lg:w-1/3 flex flex-col bg-white dark:bg-[#0c0c0e] rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-sm overflow-hidden shrink-0">
        <div className="p-5 border-b border-gray-100 dark:border-white/10 flex items-center justify-between bg-gray-50/50 dark:bg-white/[0.02]">
          <div>
            <h2 className="text-lg font-black text-gray-900 dark:text-white">Section B: Coding</h2>
            <p className="text-xs text-gray-500 dark:text-zinc-400 font-medium">Question {currentIndex + 1} of {questions.length}</p>
          </div>
          <span className={`text-[10px] uppercase font-black px-2 py-1 rounded tracking-wider ${
            currentQ.difficulty === 'easy' ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' :
            currentQ.difficulty === 'medium' ? 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400' :
            currentQ.difficulty === 'hard' ? 'bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400' :
            'bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-400'
          }`}>
            {currentQ.difficulty}
          </span>
        </div>
        
        <div className="flex-1 p-5 overflow-y-auto custom-scrollbar">
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Problem Statement</h3>
            <p className="text-sm text-gray-600 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap">{currentQ.question}</p>
          </div>
          
          {(currentQ.exampleInput || currentQ.exampleOutput) && (
            <div className="mb-6 space-y-4">
              {currentQ.exampleInput && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">Example Input</h4>
                  <div className="bg-gray-100 dark:bg-black/60 dark:border dark:border-white/10 p-3 rounded-xl font-mono text-xs text-gray-800 dark:text-zinc-200">
                    {currentQ.exampleInput}
                  </div>
                </div>
              )}
              {currentQ.exampleOutput && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">Example Output</h4>
                  <div className="bg-gray-100 dark:bg-black/60 dark:border dark:border-white/10 p-3 rounded-xl font-mono text-xs text-gray-800 dark:text-zinc-200">
                    {currentQ.exampleOutput}
                  </div>
                </div>
              )}
            </div>
          )}
          
          {isSubmitted && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl mt-6 border ${
                isCorrect ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20' : 'bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/20'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> : <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />}
                <h4 className={`text-sm font-bold ${isCorrect ? 'text-emerald-800 dark:text-emerald-300' : 'text-red-800 dark:text-red-300'}`}>
                  {isCorrect ? 'Test Cases Passed' : 'Test Cases Failed'}
                </h4>
              </div>
              <p className={`text-xs ${isCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-700 dark:text-red-400'}`}>
                {currentQ.explanation}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Right Panel: Editor & Output */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4 min-w-0">
        <div className="flex-1 bg-white dark:bg-[#0c0c0e] border border-gray-200/80 dark:border-white/10 rounded-3xl shadow-sm overflow-hidden flex flex-col">
          <div className="px-4 py-3 bg-gray-50/50 dark:bg-white/[0.02] border-b border-gray-100 dark:border-white/10 flex items-center justify-between">
            <span className="text-sm font-bold text-gray-700 dark:text-zinc-300 font-mono">main.{currentQ.language}</span>
            <div className="flex gap-2">
              <button 
                onClick={handleRun}
                disabled={isExecuting || isSubmitted}
                className="px-4 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-gray-700 dark:text-zinc-200 font-bold text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50 border border-transparent dark:border-white/10"
              >
                <Play className="w-3.5 h-3.5" />
                Run Code
              </button>
              <button 
                onClick={handleSubmit}
                disabled={isExecuting || isSubmitted}
                className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50 shadow-sm shadow-blue-500/20 dark:shadow-orange-600/25"
              >
                <Send className="w-3.5 h-3.5" />
                Submit
              </button>
            </div>
          </div>
          
          <div className="flex-1 min-h-0 relative">
            <Editor
              height="100%"
              language={currentQ.language === 'cpp' ? 'cpp' : currentQ.language}
              theme={resolvedTheme === 'dark' ? 'vs-dark' : 'vs-light'}
              value={code}
              onChange={(val) => setCode(val || "")}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                lineHeight: 1.6,
                padding: { top: 16 },
                scrollBeyondLastLine: false,
                readOnly: isSubmitted
              }}
            />
          </div>
        </div>

        {/* Terminal/Output Area */}
        <div className="h-48 bg-gray-900 dark:bg-black rounded-3xl border border-gray-800 dark:border-white/10 shadow-sm overflow-hidden flex flex-col shrink-0">
          <div className="px-4 py-2 bg-gray-950 dark:bg-zinc-950 border-b border-gray-800 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-gray-400" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Console Output</span>
            </div>
            {isSubmitted && (
               <button 
                onClick={handleNext}
                className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 dark:bg-gradient-to-r dark:from-orange-600 dark:to-orange-500 text-white font-bold text-xs flex items-center gap-1 transition-colors shadow-md dark:shadow-orange-600/20"
              >
                {currentIndex < questions.length - 1 ? 'Next Problem' : 'Finish Assessment'}
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          <div className="flex-1 p-4 overflow-y-auto font-mono text-sm text-gray-300">
            {isExecuting ? (
              <div className="flex items-center gap-2 text-blue-400 dark:text-orange-400 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-blue-400 dark:bg-orange-400 animate-bounce" />
                Executing code...
              </div>
            ) : output !== null ? (
              <pre className="whitespace-pre-wrap">{output}</pre>
            ) : (
              <span className="text-gray-600 dark:text-zinc-500">Ready. Click 'Run Code' to test your solution.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
