import { ArrowRight } from "lucide-react";

export default function ImplementationSection() {
  return (
    <section id="implementation" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            The Path to Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This isn&apos;t just a dream. It&apos;s a practical, phased plan that can start today.
          </p>
        </div>

        <div className="relative border-l-4 border-blue-200 ml-4 md:ml-12 pl-8 md:pl-16 space-y-12">
          <div className="relative">
            <div className="absolute -left-12 md:-left-20 top-0 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white font-bold text-sm">1</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Phase 1: Pilot & Policy (Months 1-6)</h3>
            <p className="text-gray-600">
              Select 5 high-risk highway corridors for pilot implementation. Draft necessary amendments to the Motor Vehicles Act to enable 1-Hour Courts.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-12 md:-left-20 top-0 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white font-bold text-sm">2</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Phase 2: Infrastructure Upgrade (Months 7-12)</h3>
            <p className="text-gray-600">
              Install automated license scanners at entry points. Construct mandatory lay-bys and pedestrian pathways on pilot routes.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-12 md:-left-20 top-0 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white font-bold text-sm">3</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Phase 3: National Rollout (Year 2)</h3>
            <p className="text-gray-600">
              Expand the 1000-Point System nationwide. Launch the public awareness campaign. Establish Engineering Accountability Boards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
