import { AlertTriangle, TrendingUp, Users } from "lucide-react";

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            The Silent Crisis on Our Roads
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Despite massive infrastructure investments, the human cost of travel on Indian highways remains tragically high.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-6">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">1.68 Lakh</h3>
            <p className="text-gray-600 font-medium">Lives lost annually (2022)</p>
          </div>
          <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-6">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">4.61 Lakh</h3>
            <p className="text-gray-600 font-medium">Serious injuries per year</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">₹1.5 Lakh Cr</h3>
            <p className="text-gray-600 font-medium">Estimated economic loss</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Current Design Fails</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center mt-1 mr-4">
                    <span className="font-bold text-sm">1</span>
                  </div>
                  <p className="text-gray-700"><strong>Mixed Traffic Chaos:</strong> High-speed vehicles share space with pedestrians, cyclists, and parked trucks.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center mt-1 mr-4">
                    <span className="font-bold text-sm">2</span>
                  </div>
                  <p className="text-gray-700"><strong>Unregulated Access:</strong> Random entry points create unpredictable hazards for drivers.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center mt-1 mr-4">
                    <span className="font-bold text-sm">3</span>
                  </div>
                  <p className="text-gray-700"><strong>Slow Justice:</strong> Enforcement is weak, and penalties are delayed, leading to a culture of impunity.</p>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-80 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center overflow-hidden">
              {/* Simple SVG Infographic: System Failure */}
              <svg viewBox="0 0 400 300" className="w-full h-full">
                <rect x="0" y="0" width="400" height="300" fill="#f9fafb" />
                {/* Road */}
                <rect x="50" y="100" width="300" height="100" fill="#374151" rx="4" />
                <line x1="50" y1="150" x2="350" y2="150" stroke="#fbbf24" strokeWidth="2" strokeDasharray="10 10" />
                
                {/* Chaos Elements */}
                <circle cx="100" cy="130" r="8" fill="#ef4444" opacity="0.8" /> {/* Car */}
                <circle cx="200" cy="170" r="8" fill="#ef4444" opacity="0.8" /> {/* Car */}
                
                {/* Hazards */}
                <rect x="150" y="110" width="20" height="10" fill="#fbbf24" rx="2" /> {/* Obstacle */}
                <circle cx="250" cy="140" r="4" fill="#10b981" /> {/* Pedestrian */}
                <path d="M 300 100 L 300 130" stroke="#6b7280" strokeWidth="2" /> {/* Random entry */}
                
                {/* Labels */}
                <text x="200" y="250" textAnchor="middle" fontSize="14" fill="#1f2937" fontWeight="bold">Current System: Unpredictable & Dangerous</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
