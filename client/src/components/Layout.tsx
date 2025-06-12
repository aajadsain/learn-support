import { Link, useLocation } from "wouter";
import { GraduationCap, Menu } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <GraduationCap className="text-primary text-2xl mr-3" size={32} />
              <Link href="/">
                <h1 className="text-xl font-bold text-gray-700 cursor-pointer">
                  LearnSupport Directory
                </h1>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/">
                <span
                  className={`${location === "/" ? "text-primary font-medium border-b-2 border-primary pb-2" : "text-gray-500 hover:text-gray-700"} transition-colors cursor-pointer`}
                >
                  Providers
                </span>
              </Link>
              <Link href="/about">
                <span
                  className={`${location === "/about" ? "text-primary font-medium border-b-2 border-primary pb-2" : "text-gray-500 hover:text-gray-700"} transition-colors cursor-pointer`}
                >
                  About
                </span>
              </Link>
              <Link href="/contact">
                <span
                  className={`${location === "/contact" ? "text-primary font-medium border-b-2 border-primary pb-2" : "text-gray-500 hover:text-gray-700"} transition-colors cursor-pointer`}
                >
                  Contact
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <GraduationCap
                  className="text-primary text-2xl mr-3"
                  size={32}
                />
                <h3 className="text-xl font-bold text-gray-700">
                  LearnSupport Directory
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Connecting students with qualified learning support providers to
                achieve academic success.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/">
                    <span className="hover:text-primary transition-colors">
                      Find Providers
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="hover:text-primary transition-colors">
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="hover:text-primary transition-colors">
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a
                    href="#help"
                    className="hover:text-primary transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="hover:text-primary transition-colors">
                      Contact Us
                    </span>
                  </Link>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 LearnSupport Directory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
//? the server is start with
