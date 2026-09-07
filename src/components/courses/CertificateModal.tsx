"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Printer, 
  Share2, 
  Award, 
  CheckCircle2, 
  Download, 
  ExternalLink, 
  Sparkles,
  Edit2,
  Check
} from "lucide-react";
import { UserCertificate } from "@/database/authContext";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: UserCertificate;
}

export function CertificateModal({ isOpen, onClose, certificate }: CertificateModalProps) {
  const [recipientName, setRecipientName] = useState(certificate.recipientName || "Learner");
  const [isEditingName, setIsEditingName] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleDownloadPDF = async () => {
    if (!certRef.current) return;
    try {
      setIsDownloading(true);
      
      // Temporarily remove backdrop-blur which html2canvas can't handle
      const el = certRef.current;
      const originalFilter = el.style.filter;
      const originalBackdrop = el.style.backdropFilter;
      el.style.filter = "none";
      el.style.backdropFilter = "none";

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: "#ffffff",
        windowWidth: el.scrollWidth,
        windowHeight: el.scrollHeight,
      });

      // Restore original styles
      el.style.filter = originalFilter;
      el.style.backdropFilter = originalBackdrop;

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height]
      });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`${certificate.courseTitle.replace(/\s+/g, '_')}_Certificate.pdf`);
    } catch (err) {
      console.error("Error generating PDF:", err);
      alert("Could not generate PDF. Please try again or use the Print option (Ctrl+P).");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/courses?cert=${certificate.credentialId}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleLinkedInShare = () => {
    const title = encodeURIComponent(certificate.courseTitle);
    const org = encodeURIComponent(certificate.company || "CareerMap AI Academy");
    const certUrl = encodeURIComponent(`https://careermap-ai.vercel.app/courses?cert=${certificate.credentialId}`);
    const linkedInUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${title}&organizationName=${org}&certUrl=${certUrl}&certId=${certificate.credentialId}`;
    window.open(linkedInUrl, "_blank");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto font-sans">
        <style jsx global>{`
          @media print {
            body * {
              visibility: hidden;
            }
            #printable-certificate, #printable-certificate * {
              visibility: visible;
            }
            #printable-certificate {
              position: absolute;
              left: 0;
              top: 0;
              width: 100vw !important;
              height: 100vh !important;
              margin: 0 !important;
              padding: 24px !important;
              background: white !important;
              box-shadow: none !important;
            }
          }
        `}</style>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto border border-amber-200/50"
        >
          {/* Top Modal Controls */}
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white">Certificate of Completion</h4>
                <p className="text-[11px] text-amber-300/80">ID: {certificate.credentialId}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
              >
                {isDownloading ? (
                  <div className="w-3.5 h-3.5 border-2 border-slate-200 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Download className="w-3.5 h-3.5" />
                )}
                <span>{isDownloading ? "Generating..." : "Download PDF"}</span>
              </button>

              <button
                onClick={handleLinkedInShare}
                className="px-3 py-1.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Add to LinkedIn</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Share"}</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Luxury Printable Certificate Card */}
          <div className="p-4 sm:p-8 bg-slate-100/60 overflow-x-auto flex justify-center">
            <div
              id="printable-certificate"
              ref={certRef}
              className="w-full max-w-3xl min-h-[500px] bg-white rounded-2xl border-8 border-double border-amber-600/40 p-6 sm:p-10 flex flex-col justify-between text-center relative shadow-lg overflow-hidden select-none"
              style={{
                backgroundImage: "radial-gradient(circle at center, rgba(254, 243, 199, 0.15) 0%, rgba(255, 255, 255, 0.9) 100%)",
              }}
            >
              {/* Corner Ornaments */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-600/60"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-600/60"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-600/60"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-600/60"></div>

              {/* Certificate Header */}
              <div className="flex flex-col items-center gap-1.5 pt-2">
                <div className="flex items-center gap-2 text-amber-700 font-extrabold text-xs uppercase tracking-[0.25em]">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>CareerMap AI Learning Academy</span>
                  <Sparkles className="w-4 h-4 text-amber-500" />
                </div>
                <h1 className="text-2xl sm:text-4xl font-serif font-black tracking-wider text-slate-900 mt-1 uppercase">
                  Certificate of Completion
                </h1>
                <p className="text-xs text-slate-500 font-medium tracking-wide">
                  Official Verification of Curriculum Mastery & Technical Proficiency
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400 rounded-full mt-2"></div>
              </div>

              {/* Recipient Presentation */}
              <div className="my-6 flex flex-col items-center">
                <p className="text-xs text-slate-400 font-serif italic mb-2">This is proudly presented to</p>
                
                <div className="flex items-center gap-2 group">
                  {isEditingName ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        onBlur={() => setIsEditingName(false)}
                        autoFocus
                        className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 border-b-2 border-amber-500 outline-none text-center px-2 py-0.5"
                      />
                      <button 
                        onClick={() => setIsEditingName(false)}
                        className="p-1 rounded bg-amber-100 text-amber-800"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsEditingName(true)}>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 border-b border-dashed border-slate-300 pb-1 px-4">
                        {recipientName}
                      </h2>
                      <Edit2 className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                </div>

                <p className="text-xs text-slate-600 max-w-lg mt-3 leading-relaxed font-sans">
                  for successfully completing all practical curriculum modules, capstone assessments, and demonstrating verified mastery in
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mt-2 font-serif">
                  {certificate.courseTitle}
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  Curriculum Partner: <span className="font-bold text-slate-800">{certificate.company}</span>
                </p>

                {/* Skills Chips */}
                {certificate.skills && certificate.skills.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-1.5 mt-3 max-w-md">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60"
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Certificate Footer: Seal & Signatures */}
              <div className="grid grid-cols-3 items-end pt-4 border-t border-slate-200/80">
                {/* Date & ID */}
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Date of Issue</p>
                  <p className="text-xs font-bold text-slate-800">{certificate.issuedAt}</p>
                  <p className="text-[9px] text-slate-400 mt-0.5 font-mono">ID: {certificate.credentialId}</p>
                </div>

                {/* Official Gold Seal Stamp */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-500 p-1 shadow-md flex items-center justify-center">
                    <div className="w-full h-full rounded-full border-2 border-dashed border-amber-900/40 flex flex-col items-center justify-center text-amber-950">
                      <Award className="w-6 h-6 sm:w-7 sm:h-7 fill-amber-900/20" />
                      <span className="text-[7px] font-black uppercase tracking-tighter mt-0.5">VERIFIED</span>
                    </div>
                  </div>
                </div>

                {/* Signatory */}
                <div className="text-right flex flex-col items-end">
                  <div className="w-28 border-b border-slate-800 pb-0.5 mb-1 text-center font-serif italic text-xs text-slate-700">
                    Suman Samanta
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Academic Director</p>
                  <p className="text-[9px] text-slate-500">CareerMap AI Global</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
