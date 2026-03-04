import { User } from "lucide-react";

export default function AboutAuthor() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center text-gray-400">
            <User className="h-16 w-16" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Proposal</h2>
            <p className="text-lg text-gray-600 mb-6">
              This concept was developed by <strong>Prashant Fawade</strong>, an advocate for safer infrastructure and smarter governance. It combines engineering principles with behavioral economics to solve India&apos;s unique road safety challenges.
            </p>
            <a href="https://ppfawade.blogspot.com/2025/10/road-map-to-safer-national-highways.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
              Read the original article &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
