"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/database/authContext";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { MobileDock } from "@/components/layout/MobileDock";
import Editor from "@monaco-editor/react";
import { Play, Loader2, Code2, MonitorX } from "lucide-react";

const SUPPORTED_LANGUAGES = [
  { id: "python", name: "Python 3" },
  { id: "javascript", name: "Node.js (JavaScript)" },
  { id: "cpp", name: "C++ (GCC)" },
  { id: "c", name: "C (GCC)" },
  { id: "java", name: "Java" },
];

const DEFAULT_CODE: Record<string, string> = {
  python: 'print("Hello, World!")\n',
  javascript: 'console.log("Hello, World!");\n',
  cpp: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}\n',
  c: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}\n',
  java: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n',
};

export default function CodePlaygroundPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("code");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(DEFAULT_CODE.python);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  // Auth redirect
  useEffect(() => {
    if (user === null) {
      router.push("/login?redirect=/code");
    }
  }, [user, router]);

  const handleLanguageChange = (langId: string) => {
    setLanguage(langId);
    setCode(DEFAULT_CODE[langId]);
    setOutput("");
  };

  const handleRunCode = async () => {
    if (!code.trim()) return;
    
    setIsRunning(true);
    setOutput("Executing...\n");
    
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code,
          language,
          input,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        setOutput(`Error: ${data.error || 'Failed to execute code'}`);
      } else {
        setOutput(data.output || "Code executed successfully (no output).");
      }
    } catch (error: any) {
      setOutput(`Execution failed: ${error.message || 'Unknown error'}`);
    } finally {
      setIsRunning(false);
    }
  };

  if (user === null) return null; // Will redirect

  return (
    <div className="flex w-full h-screen bg-[#EEF2F6] dark:bg-[#0c0c0e] overflow-hidden text-gray-900 dark:text-white font-sans">
      <AppSidebar 
        activeTab={activeTab} 
        onTabChange={(tab) => {
          if (tab === "code") return;
          router.push(tab === "overview" ? "/dashboard" : `/dashboard?tab=${tab}`);
        }} 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Not Supported Screen */}
        <div className="md:hidden absolute inset-0 z-50 flex flex-col items-center justify-center p-6 text-center bg-[#EEF2F6] dark:bg-[#0c0c0e]">
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-6">
            <MonitorX className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-black mb-3">Desktop Only</h2>
          <p className="text-gray-500 font-medium mb-8 max-w-sm">
            The Code Playground requires a larger screen for the best coding experience. Please switch to a PC or tablet.
          </p>
          <button 
            onClick={() => router.push("/dashboard")}
            className="neu-btn-primary px-6 py-3 font-bold"
          >
            Return to Dashboard
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col h-full w-full p-4 gap-4">
          {/* Header */}
          <div className="flex items-center justify-between shrink-0 glass-dark rounded-2xl p-4 shadow-sm border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#0c0c0e]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center border border-blue-100 dark:border-blue-900/30">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h1 className="font-black text-xl leading-none mb-1 text-gray-900 dark:text-white">Code Playground</h1>
                <p className="text-xs font-semibold text-gray-500">Practice algorithms and test logic directly in your browser.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <select 
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="neu-btn px-4 py-2.5 outline-none font-bold text-sm bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-gray-800 dark:text-gray-200"
              >
                {SUPPORTED_LANGUAGES.map(l => (
                  <option key={l.id} value={l.id}>{l.name}</option>
                ))}
              </select>

              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className={`neu-btn-primary px-6 py-2.5 font-bold flex items-center gap-2 ${isRunning ? 'opacity-70 cursor-wait' : ''}`}
              >
                {isRunning ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                <span>{isRunning ? 'Running...' : 'Run Code'}</span>
              </button>
            </div>
          </div>

          {/* Workspace (Editor + Output) */}
          <div className="flex-1 flex gap-4 min-h-0">
            {/* Editor Container */}
            <div className="flex-[2] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-sm relative group bg-white dark:bg-[#1e1e1e]">
              <Editor
                height="100%"
                language={language === 'c' || language === 'cpp' ? 'cpp' : language}
                value={code}
                onChange={(val) => setCode(val || "")}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  wordWrap: "on",
                  padding: { top: 16 },
                  scrollBeyondLastLine: false,
                  smoothScrolling: true,
                  cursorBlinking: "smooth",
                  cursorSmoothCaretAnimation: "on",
                  formatOnPaste: true,
                }}
              />
            </div>

            {/* I/O Container */}
            <div className="flex-1 flex flex-col gap-4 min-h-0">
              {/* StdIn */}
              <div className="h-[30%] shrink-0 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm bg-white dark:bg-[#121212] overflow-hidden flex flex-col">
                <div className="px-4 py-2 border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-[#18181b]">
                  <h3 className="font-bold text-xs text-gray-500 uppercase tracking-wider">Custom Input (stdin)</h3>
                </div>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter inputs here..."
                  className="flex-1 w-full bg-transparent p-4 outline-none resize-none font-mono text-sm text-gray-800 dark:text-gray-300"
                />
              </div>

              {/* StdOut */}
              <div className="flex-1 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm bg-white dark:bg-[#080808] overflow-hidden flex flex-col min-h-0">
                <div className="px-4 py-2 border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-[#18181b] flex items-center justify-between">
                  <h3 className="font-bold text-xs text-gray-500 uppercase tracking-wider">Output (stdout)</h3>
                  {isRunning && <span className="flex items-center gap-1.5 text-[10px] font-bold text-blue-500"><span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span> Executing remotely...</span>}
                </div>
                <div className="flex-1 overflow-auto p-4 custom-scrollbar">
                  <pre className="font-mono text-[13px] text-gray-800 dark:text-gray-300 whitespace-pre-wrap break-words">
                    {output || <span className="text-gray-400 italic">No output yet. Click 'Run Code' to execute.</span>}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Mobile Dock (even though desktop is required, we show dock for navigation back) */}
      <MobileDock
        activeTab="code"
        onTabChange={(tab) => {
          if (tab === "code") return;
          if (tab === "courses") {
            router.push("/courses");
            return;
          }
          router.push(tab === "overview" ? "/dashboard" : `/dashboard?tab=${tab}`);
        }}
        onOpenProfile={() => {}}
      />
    </div>
  );
}
