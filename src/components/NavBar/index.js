import { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FAVORITES_PAGE, HOME_SCREEN } from "../../constants/navigations";
import debounce from "lodash.debounce";

export default function NavBar() {
  const [menuVisible, setMenuVisibility] = useState(false);
  const [query, setQuery] = useSearchParams("");
  const debouncedSearch = useCallback(debounce((query) => query ? setQuery({'q': query}) : setQuery({}), 300), []);
  
  return (
    <header className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
        <div className="relative h-16 flex justify-end">
          <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search Repos
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full bg-gray-700 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
                  placeholder="Search Repos"
                  type="search"
                  onChange={(text) => debouncedSearch(text.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:flex items-center justify-end z-10">
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
        <nav className="" aria-label="Global" id="mobile-menu">
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
