"use client";

import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";

export default function PolicyBrief() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto bg-white shadow-xl p-12 print:shadow-none print:p-0">
        <div className="flex justify-between items-center mb-8 print:hidden">
          <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <button 
            onClick={() => window.print()} 
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Printer className="mr-2 h-4 w-4" /> Print / Save PDF
          </button>
        </div>

        <header className="border-b-2 border-gray-900 pb-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            1000 Points: India&apos;s 2-Year Plan to Fix National Highway Safety
          </h1>
          <div className="flex justify-between text-gray-600 font-medium">
            <p>Policy Brief | October 2025</p>
            <p>Proposed by Prashant Fawade</p>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-wide border-b border-gray-200 pb-2">Executive Summary</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            India&apos;s National Highways (NH) are the deadliest in the world, claiming over 1.68 lakh lives annually. Despite massive infrastructure spending, safety outcomes remain poor due to systemic flaws in design, enforcement, and accountability.
          </p>
          <p className="text-gray-800 leading-relaxed font-semibold">
            This proposal outlines a 2-year roadmap to transform the NH network into a restricted-access, high-safety corridor system. By implementing a &quot;Vehicles-First&quot; doctrine, a 1-Hour Highway Court system, and a 1000-Point Driver Safety Ledger, India can reduce highway fatalities by 50% within 3 years.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-wide border-b border-gray-200 pb-2">The Problem</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li><strong>Mixed Traffic Hazards:</strong> High-speed vehicles share space with pedestrians, livestock, and parked trucks.</li>
            <li><strong>Enforcement Gap:</strong> Traffic violations are rampant due to slow judicial processes and lack of immediate consequences.</li>
            <li><strong>Accountability Void:</strong> Engineers and contractors are rarely held liable for design flaws that cause accidents.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-wide border-b border-gray-200 pb-2">The Solution: 3 Pillars</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pillar 1: Reclaiming the NH (Vehicles-First Doctrine)</h3>
            <p className="text-gray-800 mb-2">Redefine National Highways as restricted-access zones for licensed drivers only.</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Automated License Scanners at all entry points.</li>
              <li>Zero-Tolerance No-Stopping Zones on all lanes and shoulders.</li>
              <li>Construction of parallel service roads for local traffic and pedestrians.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pillar 2: The Vigilance Revolution</h3>
            <p className="text-gray-800 mb-2">Establish a rapid justice system to deter violations.</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>1-Hour Highway Courts:</strong> Mobile modular courts to process offenses instantly.</li>
              <li><strong>1000-Point Ledger:</strong> An annual points balance for every driver. Points are deducted for violations; zero balance leads to immediate suspension.</li>
              <li><strong>Rehabilitation Hostels:</strong> Mandatory residential education for severe offenders.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pillar 3: Engineering Accountability</h3>
            <p className="text-gray-800 mb-2">Ensure infrastructure quality matches global standards.</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Public Accountability Boards displaying engineer names at highway entries.</li>
              <li>Strict penalties for firms responsible for accident-causing design flaws.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-wide border-b border-gray-200 pb-2">Implementation Roadmap</h2>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-100 p-4 rounded">
              <strong className="block text-blue-900 mb-2">Phase 1 (Months 1-6)</strong>
              <p>Pilot on 5 corridors. Legal amendments for 1-Hour Courts.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <strong className="block text-blue-900 mb-2">Phase 2 (Months 7-12)</strong>
              <p>Install scanners. Build lay-bys. Train Highway Patrol squads.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <strong className="block text-blue-900 mb-2">Phase 3 (Year 2)</strong>
              <p>National rollout of 1000-Point System. Full enforcement.</p>
            </div>
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>Generated by SaferHighwaysIndia Advocacy Initiative</p>
          <p>Based on the article &quot;Road Map to Safer National Highways&quot; (2025)</p>
        </footer>
      </div>
    </div>
  );
}
