import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-black text-gray-900 dark:text-gray-100 p-8 sm:p-12 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 dark:hover:text-orange-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <div className="liquid-glass rounded-[2rem] p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Terms & Conditions</h1>
          <p className="text-sm text-gray-500 dark:text-zinc-400 mb-8">Last updated: August 2026</p>
          
          <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-orange-400">
            <p>Welcome to CareerMap AI. Please read these terms and conditions carefully before using our service.</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using CareerMap AI, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.</p>
            
            <h2>2. User Accounts</h2>
            <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
            
            <h2>3. Intellectual Property</h2>
            <p>The Service and its original content, features and functionality are and will remain the exclusive property of CareerMap AI and its licensors. The Service is protected by copyright, trademark, and other laws.</p>

            <h2>4. Termination</h2>
            <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

            <h2>5. Limitation of Liability</h2>
            <p>In no event shall CareerMap AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
            
            <h2>6. Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>
            
            <p className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10 text-sm text-gray-500">
              If you have any questions about these Terms, please contact us at support@careermapai.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
