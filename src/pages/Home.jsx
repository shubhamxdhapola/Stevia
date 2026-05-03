import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = ["All", "Tablets", "Powder", "Liquid"];

function Home() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visible, setVisible] = useState(false);

  useEffect(() => { setVisible(true); }, []);
  useEffect(() => {
    const q = searchParams.get("search") || "";
    if (q) setSearch(q);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative hero-gradient text-white overflow-hidden min-h-[600px] lg:min-h-[700px]">
        {/* Decorative Leaf Images */}
        <img src="/images/hero-leaves.png" alt="" className="absolute -top-20 -left-32 w-[500px] opacity-20 rotate-12 leaf-float-1 pointer-events-none select-none" />
        <img src="/images/leaf-decor.png" alt="" className="absolute -bottom-10 -right-24 w-[400px] opacity-15 -rotate-45 leaf-float-2 pointer-events-none select-none" />
        <img src="/images/leaf-decor.png" alt="" className="absolute top-20 right-10 w-[200px] opacity-10 rotate-[60deg] leaf-float-3 pointer-events-none select-none hidden lg:block" />

        {/* Gradient Overlay Circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-400/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-300/8 rounded-full blur-[80px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/15 mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                100% Organic & Certified
              </span>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.1] mb-6">
                Feel the{" "}
                <span className="italic text-brand-300">Natural Power</span>
                <br />
                Elevate Your Health
                <br />
                <span className="relative inline-block">
                  and Wellness
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-400/50" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0 8 Q50 0 100 8 Q150 16 200 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>

              <p className="text-lg text-brand-200/90 leading-relaxed mb-8 max-w-lg">
                Discover our premium range of stevia-based sweeteners. A healthier, zero-calorie alternative to sugar — crafted with care for your well-being.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a href="#products" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-800 font-semibold rounded-full shadow-2xl shadow-black/20 hover:bg-brand-50 hover:-translate-y-0.5 transition-all duration-300" id="explore-btn">
                  Shop Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#benefits" className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300">
                  Learn More
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 text-sm text-brand-200/70">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {["⭐","⭐","⭐","⭐","⭐"].map((s,i) => <span key={i} className="text-yellow-400 text-xs">{s}</span>)}
                  </div>
                  <span>4.9/5 Rating</span>
                </div>
                <div className="w-px h-4 bg-white/20" />
                <span>10,000+ Happy Customers</span>
              </div>
            </div>

            {/* Right - Product Showcase */}
            <div className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-brand-500/15 blur-3xl" />
              <div className="absolute w-56 h-56 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-72 h-72 rounded-full border border-white/5 animate-[spin_30s_linear_infinite_reverse]" />
              <img src="/images/tablets.png" alt="Herbasweet Stevia Tablets" className="relative z-10 w-64 sm:w-72 lg:w-80 drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-float" />
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 40 C360 10 720 70 1080 30 C1260 10 1360 40 1440 25 L1440 80 L0 80Z" fill="#fafff8" />
          </svg>
        </div>
      </section>

      {/* ═══════════ PRODUCT BENEFITS ═══════════ */}
      <section id="benefits" className="py-20 sm:py-28 bg-surface-white relative overflow-hidden">
        <img src="/images/leaf-decor.png" alt="" className="absolute -right-20 top-10 w-48 opacity-[0.06] rotate-45 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-700 text-xs font-bold tracking-widest uppercase rounded-full mb-4">Why Choose Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-950 mb-4">
              Our Product <span className="text-gradient-green">Benefits</span>
            </h2>
            <p className="text-brand-500 max-w-2xl mx-auto">
              Crafted with the finest stevia leaves and designed to bring you natural sweetness without compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: "🌿", title: "All-Natural Formula", desc: "Sourced from premium stevia leaves with zero artificial additives or chemicals", color: "from-green-50 to-emerald-50" },
              { icon: "⚡", title: "Zero Calories", desc: "Enjoy sweetness without affecting your daily calorie intake or weight goals", color: "from-yellow-50 to-amber-50" },
              { icon: "💪", title: "Diabetic Friendly", desc: "Zero glycemic index makes it safe for diabetics and health-conscious individuals", color: "from-blue-50 to-cyan-50" },
              { icon: "🍃", title: "Fast-Acting Results", desc: "Dissolves instantly in any beverage, providing immediate natural sweetness", color: "from-emerald-50 to-teal-50" },
            ].map((item, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-7 border border-brand-100/50 group text-center">
                <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-900 mb-2">{item.title}</h3>
                <p className="text-sm text-brand-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#products" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-600 text-white font-semibold rounded-full shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              Explore All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* ═══════════ KEY INGREDIENTS ═══════════ */}
      <section id="ingredients" className="py-20 sm:py-28 relative overflow-hidden">
        <img src="/images/hero-leaves.png" alt="" className="absolute -left-32 bottom-0 w-72 opacity-[0.05] rotate-180 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-700 text-xs font-bold tracking-widest uppercase rounded-full mb-4">Pure Ingredients</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-950 mb-4">
              What are our <span className="text-gradient-green">Key Ingredients?</span>
            </h2>
            <p className="text-brand-500 max-w-2xl mx-auto">
              We use only the purest, highest-quality ingredients. Natural stevia extract forms the core of every Herbasweet product.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { img: "/images/stevia-leaf.png", name: "Stevia Leaf Extract", desc: "Pure Reb-A extract from handpicked stevia leaves for optimal sweetness" },
              { img: "/images/powder.png", name: "Natural Sweetener Base", desc: "Carefully processed stevia powder that dissolves instantly in any beverage" },
              { img: "/images/drops.png", name: "Liquid Stevia Essence", desc: "Concentrated liquid form for precision dosing and convenience" },
            ].map((item, i) => (
              <div key={i} className="card-hover ingredient-card rounded-3xl p-6 border border-brand-100/60 text-center group">
                <div className="w-36 h-36 mx-auto mb-5 rounded-full bg-brand-50 border-2 border-brand-100 flex items-center justify-center overflow-hidden group-hover:border-brand-300 transition-colors duration-500">
                  <img src={item.img} alt={item.name} className="w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="font-display text-base font-semibold text-brand-900 mb-2">{item.name}</h3>
                <p className="text-sm text-brand-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* ═══════════ PRODUCTS ═══════════ */}
      <section id="products" className="py-20 sm:py-28 relative overflow-hidden">
        <img src="/images/leaf-decor.png" alt="" className="absolute -right-16 -top-16 w-60 opacity-[0.04] -rotate-12 pointer-events-none" />
        <img src="/images/leaf-decor.png" alt="" className="absolute -left-16 bottom-0 w-52 opacity-[0.04] rotate-[160deg] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-700 text-xs font-bold tracking-widest uppercase rounded-full mb-4">Shop Now</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-950 mb-4">
              Our <span className="text-gradient-green">Products</span>
            </h2>
            <p className="text-brand-500 max-w-lg mx-auto">
              Choose the perfect format for your lifestyle
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="relative w-full sm:w-auto sm:min-w-[260px]">
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-brand-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 text-sm outline-none transition-all shadow-sm" id="filter-search" />
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <div className="flex items-center gap-2" id="category-filters">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${activeCategory === cat ? "bg-brand-700 text-white shadow-lg shadow-brand-700/25" : "bg-white text-brand-600 border border-brand-200 hover:bg-brand-50 hover:border-brand-300"}`} id={`filter-${cat.toLowerCase()}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-display text-xl font-semibold text-brand-800 mb-2">No Products Found</h3>
              <p className="text-brand-500 text-sm mb-4">Try a different search or category.</p>
              <button onClick={() => { setSearch(""); setActiveCategory("All"); }} className="px-6 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-medium hover:bg-brand-200 transition-colors cursor-pointer">Clear Filters</button>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════ COMPARISON ═══════════ */}
      <section className="py-20 sm:py-28 bg-surface-white relative overflow-hidden">
        <img src="/images/hero-leaves.png" alt="" className="absolute -right-40 -top-20 w-96 opacity-[0.05] rotate-[30deg] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-700 text-xs font-bold tracking-widest uppercase rounded-full mb-4">Comparison</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-950 mb-4">
              Herbasweet is a{" "}
              <span className="text-gradient-green">Better Alternative</span>
            </h2>
            <p className="text-brand-500 max-w-2xl mx-auto">See how Herbasweet compares to regular sugar and artificial sweeteners</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-sm font-semibold text-brand-700 border-b-2 border-brand-200">Feature</th>
                  <th className="p-4 text-sm font-semibold text-white bg-brand-700 rounded-t-xl text-center border-b-2 border-brand-600">Herbasweet</th>
                  <th className="p-4 text-sm font-semibold text-brand-600 text-center border-b-2 border-brand-200">Regular Sugar</th>
                  <th className="p-4 text-sm font-semibold text-brand-600 text-center border-b-2 border-brand-200">Artificial Sweetener</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Calories", "Zero", "16 per tsp", "Varies"],
                  ["Natural", "✅ 100%", "✅ Yes", "❌ No"],
                  ["Diabetic Safe", "✅ Yes", "❌ No", "⚠️ Varies"],
                  ["Aftertaste", "✅ None", "✅ None", "❌ Bitter"],
                  ["Tooth Decay", "✅ No Risk", "❌ High Risk", "✅ Low Risk"],
                ].map(([feat, herb, sugar, art], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-brand-50/30" : "bg-white"}>
                    <td className="p-4 text-sm font-medium text-brand-800">{feat}</td>
                    <td className="p-4 text-sm font-semibold text-brand-700 text-center bg-brand-50/60">{herb}</td>
                    <td className="p-4 text-sm text-brand-600 text-center">{sugar}</td>
                    <td className="p-4 text-sm text-brand-600 text-center">{art}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative hero-gradient text-white py-20 sm:py-28 overflow-hidden">
        <img src="/images/leaf-decor.png" alt="" className="absolute -left-20 top-0 w-72 opacity-15 rotate-45 leaf-float-1 pointer-events-none" />
        <img src="/images/leaf-decor.png" alt="" className="absolute -right-20 bottom-0 w-60 opacity-10 -rotate-30 leaf-float-2 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Whole Body Benefits <br className="hidden sm:block" />in Every Drop
          </h2>
          <p className="text-lg text-brand-200/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            From managing blood sugar to supporting weight loss goals — Herbasweet is your daily companion for a healthier life. Join 10,000+ customers who've made the switch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#products" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-brand-800 font-bold rounded-full shadow-2xl shadow-black/20 hover:bg-brand-50 hover:-translate-y-1 transition-all duration-300 text-lg">
              🛒 Shop Now
            </a>
            <div className="flex items-center gap-3 text-sm text-brand-200">
              <span className="flex items-center gap-1"><svg className="w-5 h-5 text-brand-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Free Shipping</span>
              <span className="w-px h-4 bg-white/20" />
              <span className="flex items-center gap-1"><svg className="w-5 h-5 text-brand-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> 30-Day Returns</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
