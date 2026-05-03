import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [addedToCart, setAddedToCart] = useState(false);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center animate-fade-in px-4">
        <div className="w-24 h-24 rounded-full bg-brand-50 flex items-center justify-center text-5xl mb-6">🍃</div>
        <h2 className="font-display text-2xl font-bold text-brand-900 mb-2">Product Not Found</h2>
        <p className="text-brand-500 mb-6">The product you're looking for doesn't exist.</p>
        <Link to="/" className="px-6 py-2.5 bg-brand-600 text-white rounded-full font-medium hover:bg-brand-700 transition-colors">
          ← Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  const otherProducts = products.filter((p) => p.id !== product.id);

  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <div className="bg-brand-50/60 border-b border-brand-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-brand-500">
            <Link to="/" className="hover:text-brand-700 transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link to="/#products" className="hover:text-brand-700 transition-colors">Products</Link>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-brand-800 font-medium truncate max-w-[180px]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Main */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="sticky top-28 bg-gradient-to-br from-brand-50 via-white to-brand-50/30 rounded-3xl p-8 sm:p-14 border border-brand-100/50 shadow-xl shadow-brand-100/20 flex items-center justify-center overflow-hidden min-h-[400px]">
              {/* Category Badge */}
              <span className="absolute top-5 left-5 px-4 py-1.5 bg-brand-700 text-white text-[10px] font-bold tracking-widest uppercase rounded-full shadow-lg shadow-brand-700/30 z-10">
                {product.category}
              </span>

              {/* Discount Badge */}
              <span className="absolute top-5 right-5 px-3 py-1.5 bg-amber-400 text-amber-900 text-[10px] font-bold tracking-wider uppercase rounded-full z-10">
                23% OFF
              </span>

              {/* Background circle */}
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-brand-100/30" />

              <img
                src={product.image}
                alt={product.name}
                className="relative z-10 max-h-80 sm:max-h-96 object-contain drop-shadow-xl animate-float"
              />

              {/* Decorative leaf */}
              <img src="/images/leaf-decor.png" alt="" className="absolute -bottom-8 -right-8 w-40 opacity-[0.06] rotate-45 pointer-events-none" />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <span className="text-sm text-brand-500">(128 Reviews)</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-bold text-brand-950 mb-2 leading-tight">
              {product.name}
            </h1>

            <p className="text-sm text-brand-500 font-medium tracking-wide mb-6">
              {product.tagline}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-brand-100/60">
              <span className="text-4xl font-bold text-brand-700">₹{product.price}</span>
              <span className="text-lg text-brand-400 line-through">₹{Math.round(product.price * 1.3)}</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">SAVE ₹{Math.round(product.price * 0.3)}</span>
            </div>

            <p className="text-brand-600 leading-relaxed mb-8 text-[15px]">
              {product.description}
            </p>

            {/* Info Cards */}
            <div className="space-y-3 mb-8">
              {[
                { icon: "🧪", label: "Ingredients", value: product.ingredients },
                { icon: "📋", label: "How to Use", value: product.usage },
                { icon: "📦", label: "Net Quantity", value: product.quantity },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-brand-50/60 rounded-xl border border-brand-100/40 hover:bg-brand-50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-white border border-brand-100 flex items-center justify-center text-lg shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-800 uppercase tracking-wider mb-0.5">{item.label}</h4>
                    <p className="text-sm text-brand-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quantity + Cart */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              {/* Qty Selector */}
              <div className="flex items-center border border-brand-200 rounded-full overflow-hidden bg-white shrink-0">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-11 h-11 flex items-center justify-center text-brand-700 hover:bg-brand-50 transition-colors cursor-pointer font-bold text-lg">−</button>
                <span className="w-12 text-center font-semibold text-brand-900">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="w-11 h-11 flex items-center justify-center text-brand-700 hover:bg-brand-50 transition-colors cursor-pointer font-bold text-lg">+</button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3.5 rounded-full font-bold text-white shadow-lg transition-all duration-300 cursor-pointer text-center ${addedToCart ? "bg-brand-500 shadow-brand-500/25 scale-[0.98]" : "bg-brand-700 shadow-brand-700/30 hover:bg-brand-800 hover:shadow-xl hover:-translate-y-0.5"}`}
                id="add-to-cart-btn"
              >
                {addedToCart ? "✓ Added to Cart!" : `🛒 Add to Cart — ₹${product.price * qty}`}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-brand-500 pt-4 border-t border-brand-100/50">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                Free Shipping
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                30-Day Returns
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                100% Authentic
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {otherProducts.length > 0 && (
        <section className="bg-surface-white border-t border-brand-100/40 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-950 text-center mb-10">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {otherProducts.map((p, i) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group card-hover bg-white rounded-2xl overflow-hidden border border-brand-100/50 flex items-center gap-5 p-5">
                  <div className="w-24 h-24 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-brand-900 group-hover:text-brand-700 transition-colors text-sm mb-1">{p.name}</h3>
                    <p className="text-xs text-brand-500 mb-2">{p.tagline}</p>
                    <span className="text-lg font-bold text-brand-700">₹{p.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductDetails;
