import Link from "next/link";
import { Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">SaferHighways<span className="text-yellow-500">India</span></h3>
            <p className="text-gray-400 max-w-sm">
              A citizen-led initiative to transform India&apos;s National Highways into safe, world-class infrastructure.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#solution" className="text-gray-400 hover:text-white transition-colors">The Solution</Link></li>
              <li><Link href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</Link></li>
              <li><Link href="/policy-brief" className="text-gray-400 hover:text-white transition-colors">Policy Brief</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Safer Highways India Initiative. Open Source Advocacy.</p>
        </div>
      </div>
    </footer>
  );
}
