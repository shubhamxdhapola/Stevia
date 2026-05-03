import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <ScrollToTop />
      <Navbar />
      <main className="pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-brand-950 text-white relative overflow-hidden">
        <img src="/images/leaf-decor.png" alt="" className="absolute -right-20 -top-10 w-64 opacity-[0.04] rotate-45 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center">
                  <span className="text-lg">🌿</span>
                </div>
                <span className="font-display text-xl font-bold">Herbasweet</span>
              </div>
              <p className="text-brand-400 text-sm leading-relaxed mb-5">
                Nature's sweetness, zero compromise. Premium stevia products crafted for a healthier lifestyle.
              </p>
              <div className="flex items-center gap-3">
                {["𝕏", "f", "in", "📷"].map((icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full bg-brand-800/50 hover:bg-brand-700 flex items-center justify-center text-brand-300 hover:text-white text-xs font-bold transition-colors">
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-brand-200 text-sm uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                {["Home", "Products", "About Us", "Blog", "Contact"].map(l => (
                  <li key={l}><a href="#" className="text-brand-400 hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-brand-200 text-sm uppercase tracking-wider mb-4">Products</h4>
              <ul className="space-y-2.5 text-sm">
                {["Stevia Tablets", "Sweetener Powder", "Stevia Drops", "Gift Bundles"].map(l => (
                  <li key={l}><a href="#" className="text-brand-400 hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-brand-200 text-sm uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-2.5 text-sm text-brand-400">
                <li className="flex items-center gap-2">📧 support@herbasweet.com</li>
                <li className="flex items-center gap-2">📞 1800-000-0000</li>
                <li className="flex items-center gap-2">🌐 www.herbasweet.com</li>
                <li className="flex items-center gap-2">📍 Mumbai, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-brand-800/50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-500">
            <span>© {new Date().getFullYear()} Herbasweet. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
