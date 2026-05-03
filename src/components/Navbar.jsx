import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-brand-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0" id="nav-logo">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-600/25 group-hover:shadow-brand-600/40 transition-shadow duration-300">
              <span className="text-white text-lg">🌿</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-brand-900 leading-tight tracking-tight">
                Herbasweet
              </span>
              <span className="text-[10px] font-medium text-brand-500 tracking-widest uppercase">
                Natural Sweeteners
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-500 after:transition-all hover:after:w-full">
              Home
            </Link>
            <a href="/#products" className="text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-500 after:transition-all hover:after:w-full">
              Products
            </a>
            <a href="/#ingredients" className="text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-500 after:transition-all hover:after:w-full">
              Ingredients
            </a>
            <a href="/#benefits" className="text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-500 after:transition-all hover:after:w-full">
              Why Us
            </a>
          </div>

          {/* Search + Cart */}
          <div className="hidden md:flex items-center gap-3">
            <form onSubmit={handleSearch} className="relative" id="search-form">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-44 focus:w-56 pl-9 pr-4 py-2 rounded-full bg-brand-50 border border-brand-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 text-sm outline-none transition-all duration-300 placeholder:text-brand-400"
                id="search-input"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </form>

            <button className="relative p-2.5 rounded-full bg-brand-50 hover:bg-brand-100 border border-brand-200 transition-all duration-300 hover:shadow-md cursor-pointer group" id="cart-button" title="Cart">
              <svg className="w-5 h-5 text-brand-700 group-hover:text-brand-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-brand-50 cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} id="mobile-menu-toggle">
            <svg className="w-6 h-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-80 border-t border-brand-100" : "max-h-0"}`}>
        <div className="px-4 py-5 space-y-4 bg-white">
          <form onSubmit={handleSearch} className="relative">
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search products..." className="w-full pl-10 pr-4 py-2.5 rounded-full bg-brand-50 border border-brand-200 text-sm outline-none" id="mobile-search-input" />
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </form>
          <div className="flex flex-col gap-3">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-brand-700 py-1">Home</Link>
            <a href="/#products" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-brand-700 py-1">Products</a>
            <a href="/#ingredients" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-brand-700 py-1">Ingredients</a>
            <a href="/#benefits" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-brand-700 py-1">Why Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
