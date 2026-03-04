import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            India Can Make Its <span className="text-yellow-400">Highways Safer</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
            A practical 2-year roadmap to redesign and manage national highways to reduce crashes and save thousands of lives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/policy-brief" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Policy Brief
            </Link>
            <Link 
              href="#solution" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all border border-white/20"
            >
              Learn How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
