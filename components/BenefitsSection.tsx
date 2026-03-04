import { Users, TrendingUp, ShieldCheck, DollarSign } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            A Win-Win for India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Safer highways mean more than just fewer accidents. They mean a stronger economy and a better quality of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">For Families</h3>
            <p className="text-gray-600">
              Thousands of lives saved annually. Fewer tragedies, more safe journeys home.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">For Economy</h3>
            <p className="text-gray-600">
              Reduced accident costs save ₹1.5 Lakh Cr annually. Efficient logistics boost GDP.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mx-auto mb-6">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">For Drivers</h3>
            <p className="text-gray-600">
              Predictable, stress-free driving. Clear rules and fair enforcement for everyone.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-6">
              <DollarSign className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">For Government</h3>
            <p className="text-gray-600">
              Efficient use of infrastructure funds. Reduced healthcare burden from trauma cases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
