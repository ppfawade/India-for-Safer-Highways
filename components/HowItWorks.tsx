import { Clock, AlertOctagon, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            The 1000-Point System Explained
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A transparent, fair, and immediate way to ensure every driver respects the road.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                1000
              </div>
              <h3 className="text-xl font-bold mb-4">You Start with 1000 Points</h3>
              <p className="text-gray-600">
                Every licensed driver begins the year with a full safety ledger. It&apos;s your privilege to maintain.
              </p>
            </div>
          </div>

          <div className="hidden lg:block text-center">
            <div className="w-full h-1 bg-gray-200 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full border border-gray-200">
                <AlertOctagon className="h-6 w-6 text-red-500" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-red-100 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                -10
              </div>
              <h3 className="text-xl font-bold mb-4">Violations Deduct Points</h3>
              <p className="text-gray-600">
                Caught speeding or driving dangerously? Points are deducted instantly via automated systems.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-900 text-white rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-yellow-400">The 1-Hour Highway Court</h3>
              <p className="text-lg text-gray-300 mb-6">
                No more years of waiting. Justice is delivered on the spot.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <strong className="block text-white">Immediate Processing</strong>
                    <span className="text-gray-400">Mobile patrol squads bring offenders to modular courts instantly.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <strong className="block text-white">Certainty of Consequence</strong>
                    <span className="text-gray-400">Penalties are applied within 60 minutes, reinforcing the link between action and consequence.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <svg viewBox="0 0 400 250" className="w-full h-full rounded-lg">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#fbbf24" />
                  </marker>
                </defs>
                
                {/* Timeline */}
                <line x1="60" y1="200" x2="340" y2="200" stroke="#4b5563" strokeWidth="2" />
                <circle cx="60" cy="200" r="4" fill="#fbbf24" />
                <text x="60" y="225" textAnchor="middle" fill="#9ca3af" fontSize="12">0m</text>
                <circle cx="200" cy="200" r="4" fill="#fbbf24" />
                <text x="200" y="225" textAnchor="middle" fill="#9ca3af" fontSize="12">30m</text>
                <circle cx="340" cy="200" r="4" fill="#fbbf24" />
                <text x="340" y="225" textAnchor="middle" fill="#9ca3af" fontSize="12">60m</text>

                {/* Step 1: Violation */}
                <g transform="translate(60, 100)">
                  <circle cx="0" cy="0" r="30" fill="#ef4444" opacity="0.2" />
                  <circle cx="0" cy="0" r="25" fill="#ef4444" opacity="0.1" />
                  <rect x="-15" y="-10" width="30" height="20" rx="4" fill="#ef4444" />
                  <circle cx="-8" cy="10" r="4" fill="#1f2937" />
                  <circle cx="8" cy="10" r="4" fill="#1f2937" />
                  <text x="0" y="50" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Violation</text>
                  <text x="0" y="65" textAnchor="middle" fill="#9ca3af" fontSize="10">Speeding Detected</text>
                </g>

                {/* Arrow 1 */}
                <path d="M 100 100 L 160 100" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowhead)" />

                {/* Step 2: Mobile Court */}
                <g transform="translate(200, 100)">
                  <rect x="-25" y="-20" width="50" height="40" rx="4" fill="#3b82f6" />
                  <path d="M -25 -20 L 0 -35 L 25 -20" fill="#2563eb" />
                  <rect x="-10" y="-10" width="20" height="20" fill="#ffffff" rx="2" opacity="0.3" />
                  <text x="0" y="50" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Mobile Court</text>
                  <text x="0" y="65" textAnchor="middle" fill="#9ca3af" fontSize="10">Hearing & Verdict</text>
                </g>

                {/* Arrow 2 */}
                <path d="M 240 100 L 300 100" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowhead)" />

                {/* Step 3: Resolution */}
                <g transform="translate(340, 100)">
                  <circle cx="0" cy="0" r="30" fill="#10b981" opacity="0.2" />
                  <circle cx="0" cy="0" r="25" fill="#10b981" opacity="0.1" />
                  <path d="M -10 0 L -3 7 L 10 -7" stroke="#10b981" strokeWidth="4" fill="none" />
                  <text x="0" y="50" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Resolved</text>
                  <text x="0" y="65" textAnchor="middle" fill="#9ca3af" fontSize="10">Fine Paid /</text>
                  <text x="0" y="77" textAnchor="middle" fill="#9ca3af" fontSize="10">Points Deducted</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
