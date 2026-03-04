import { ShieldCheck, Gavel, HardHat } from "lucide-react";

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            The 2-Year Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive plan built on three non-negotiable pillars to transform our highways from chaotic corridors into safe, efficient arteries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Vehicles-First Doctrine</h3>
            <p className="text-gray-600 mb-6">
              Redefining National Highways as restricted-access zones. Only licensed drivers and compliant vehicles allowed.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Automated License Scanners
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Zero-Tolerance No-Stopping Zones
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Dedicated Pedestrian Pathways
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-bl-lg">CORE INNOVATION</div>
            <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 mb-6">
              <Gavel className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. The Vigilance Revolution</h3>
            <p className="text-gray-600 mb-6">
              Replacing slow courts with instant justice. A 1000-point system ensures accountability for every driver.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                1-Hour Highway Courts
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                1000-Point Annual Safety Ledger
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Mandatory Rehabilitation Hostels
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
              <HardHat className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Engineering Accountability</h3>
            <p className="text-gray-600 mb-6">
              Holding engineers and contractors liable for design failures. If the road causes the crash, they pay.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Mandatory Global Safety Standards
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Public Accountability Boards
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Penalties for Infrastructure Failure
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
