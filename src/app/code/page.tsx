"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/database/authContext";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { MobileDock } from "@/components/layout/MobileDock";
import Editor from "@monaco-editor/react";
import { Play, Loader2, Code2, MonitorX, Keyboard, Terminal, FileCode2, Copy, Check, Trash2 } from "lucide-react";

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
  const { user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState("code");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(DEFAULT_CODE.python);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isError, setIsError] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [activeConsoleTab, setActiveConsoleTab] = useState<"output" | "input">("output");
  const [copied, setCopied] = useState(false);

  // Auth redirect
  useEffect(() => {
    if (!isLoading && user === null) {
      router.push("/login?redirect=/code");
    }
  }, [user, isLoading, router]);

  const handleLanguageChange = (langId: string) => {
    setLanguage(langId);
    setCode(DEFAULT_CODE[langId]);
    setOutput("");
  };

  const handleCopyOutput = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = async () => {
    if (!code.trim()) return;
    
    setActiveConsoleTab("output");
    setIsRunning(true);
    setIsError(false);
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
        setOutput(`Error:\n${data.error || 'Failed to execute code'}`);
        setIsError(true);
      } else {
        setOutput(data.output || "Code executed successfully (no output).");
        setIsError(false);
      }
    } catch (error: any) {
      setOutput(`Execution failed:\n${error.message || 'Unknown error'}`);
      setIsError(true);
    } finally {
      setIsRunning(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex w-full h-screen items-center justify-center bg-[#EEF2F6] dark:bg-[#0c0c0e]">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

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
          <div className="flex items-center justify-between shrink-0 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-2xl rounded-2xl p-4 shadow-sm border border-white/60 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h1 className="font-black text-xl leading-none mb-1 text-gray-900 dark:text-white">Code Playground</h1>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Practice algorithms and test logic directly in your browser.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <select 
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="px-4 py-2.5 rounded-xl outline-none font-semibold text-sm bg-white/60 dark:bg-zinc-800/60 backdrop-blur-xl border border-white/40 dark:border-white/10 text-gray-800 dark:text-gray-200 shadow-sm transition-all focus:ring-2 focus:ring-orange-500 cursor-pointer"
              >
                {SUPPORTED_LANGUAGES.map(l => (
                  <option key={l.id} value={l.id} className="bg-white dark:bg-zinc-800">{l.name}</option>
                ))}
              </select>

              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className={`neu-btn-primary px-6 py-2.5 font-bold flex items-center gap-2 ${isRunning ? 'opacity-70 cursor-wait' : 'hover:scale-105'}`}
              >
                {isRunning ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                <span>{isRunning ? 'Running...' : 'Run Code'}</span>
              </button>
            </div>
          </div>

          {/* Workspace (Editor + Output) */}
          <div className="flex-1 flex gap-4 min-h-0">
            {/* Editor Container */}
            <div className="flex-[2] rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/5 shadow-md flex flex-col bg-white dark:bg-[#1e1e1e]">
              <div className="h-10 shrink-0 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-[#18181b] flex items-center px-4 gap-2">
                <FileCode2 className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400 font-mono">
                  main.{language === 'python' ? 'py' : language === 'javascript' ? 'js' : language === 'java' ? 'java' : language === 'cpp' ? 'cpp' : 'c'}
                </span>
              </div>
              <div className="flex-1 relative group">
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
                    fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
                  }}
                />
              </div>
            </div>

            {/* Consolidated I/O Container (Input and Output in the same place) */}
            <div className="flex-1 rounded-2xl border border-slate-200/60 dark:border-white/5 shadow-md bg-white dark:bg-[#0c0c0e] overflow-hidden flex flex-col min-h-0">
              {/* Console Tab Header */}
              <div className="h-11 shrink-0 px-3 border-b border-slate-100 dark:border-white/5 bg-slate-50/70 dark:bg-[#141416] flex items-center justify-between gap-2">
                <div className="flex items-center gap-1 bg-slate-200/60 dark:bg-white/[0.06] p-0.5 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setActiveConsoleTab("output")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeConsoleTab === "output"
                        ? "bg-white dark:bg-zinc-800 text-gray-900 dark:text-white shadow-sm"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5 text-orange-500" />
                    <span>Terminal Output</span>
                    {isRunning && (
                      <span className="relative flex h-2 w-2 ml-0.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                      </span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveConsoleTab("input")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeConsoleTab === "input"
                        ? "bg-white dark:bg-zinc-800 text-gray-900 dark:text-white shadow-sm"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <Keyboard className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                    <span>Custom Input</span>
                    {input.trim().length > 0 && (
                      <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                        active
                      </span>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  {activeConsoleTab === "output" && output && (
                    <>
                      <button
                        type="button"
                        onClick={handleCopyOutput}
                        title="Copy output"
                        className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                      <button
                        type="button"
                        onClick={() => setOutput("")}
                        title="Clear output"
                        className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </>
                  )}

                  {activeConsoleTab === "input" && input && (
                    <button
                      type="button"
                      onClick={() => setInput("")}
                      title="Clear stdin"
                      className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Tab Content Area */}
              <div className="flex-1 min-h-0 relative flex flex-col bg-[#fafafa] dark:bg-[#0a0a0a]">
                {activeConsoleTab === "output" ? (
                  <div className="flex-1 overflow-auto p-4 custom-scrollbar">
                    {input.trim().length > 0 && (
                      <div className="mb-3 flex items-center justify-between text-[11px] font-mono text-gray-500 dark:text-zinc-400 bg-slate-100/70 dark:bg-white/[0.03] px-3 py-1.5 rounded-lg border border-slate-200/50 dark:border-white/5">
                        <span>Using custom stdin input</span>
                        <button
                          type="button"
                          onClick={() => setActiveConsoleTab("input")}
                          className="text-orange-500 hover:underline font-sans font-semibold text-[11px]"
                        >
                          View / Edit stdin
                        </button>
                      </div>
                    )}
                    <pre className={`font-mono text-[13px] leading-relaxed whitespace-pre-wrap break-words ${isError ? 'text-red-500' : 'text-gray-800 dark:text-gray-300'}`}>
                      {output || <span className="text-gray-400 dark:text-gray-600 italic">No output yet. Click 'Run Code' to execute.</span>}
                    </pre>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col p-4 min-h-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-400">
                        Standard Input (stdin)
                      </span>
                      <span className="text-[10px] text-gray-400 dark:text-gray-500">
                        Supplied to program upon Run
                      </span>
                    </div>
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Enter values to feed into standard input (e.g. for input(), cin >>, or scanf)..."
                      className="flex-1 w-full bg-white dark:bg-[#121214] p-3.5 rounded-xl border border-slate-200/80 dark:border-white/10 outline-none resize-none font-mono text-[13px] text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-inner"
                    />
                    <p className="mt-2 text-[11px] text-gray-400 dark:text-gray-500 shrink-0">
                      Separate multiple input lines with newlines. When you click <strong className="text-gray-600 dark:text-gray-300 font-semibold">Run Code</strong>, this input is sent and you are switched to Output automatically.
                    </p>
                  </div>
                )}
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
