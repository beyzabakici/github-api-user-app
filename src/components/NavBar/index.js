import { useState } from "react";
import { Link } from "react-router-dom";
import { FAVORITES_PAGE, HOME_SCREEN } from "../../constants/navigations";

export default function Navbar() {
  const [menuVisible, setMenuVisibility] = useState(false);
  return (
    <header className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
        <div className="relative h-16 flex justify-end">
          <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
            
          </div>
          <div className="hidden md:block lg:flex items-center justify-end z-10">
            <Link
              to={HOME_SCREEN}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium"
            >
              Home
            </Link>
            <Link
              to={FAVORITES_PAGE}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium"
            >
              Favorites
            </Link>
          </div>
          <div className="relative z-10 flex items-center lg:hidden">
            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMenuVisibility(!menuVisible)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {menuVisible && (
        <nav className="md:hidden" aria-label="Global" id="mobile-menu">
          <div className="pt-2 pb-3 px-2 space-y-1">
            <a
              href={HOME_SCREEN}
              className="bg-gray-900 text-white block rounded-md py-2 px-3 text-base font-medium"
              aria-current="page"
            >
              Home
            </a>

            <a
              href={FAVORITES_PAGE}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium"
            >
              Favorites
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
