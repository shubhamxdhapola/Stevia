import { Link } from "react-router-dom";

function ProductCard({ product, index }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      style={{ animationDelay: `${index * 150}ms` }}
      id={`product-card-${product.id}`}
    >
      <div className="card-hover bg-white rounded-3xl overflow-hidden border border-brand-100/50 shadow-sm">
        {/* Image */}
        <div className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-brand-50/30 to-white p-6 sm:p-8 h-64 sm:h-72 flex items-center justify-center">
          {/* Category Tag */}
          <span className="absolute top-4 left-4 z-10 px-3.5 py-1 bg-brand-700 text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
            {product.category}
          </span>

          {/* Decorative Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-44 h-44 rounded-full bg-brand-100/40 group-hover:scale-125 transition-transform duration-700" />
          </div>

          <img
            src={product.image}
            alt={product.name}
            className="relative z-10 h-full object-contain drop-shadow-lg transition-all duration-700 ease-out group-hover:scale-110 group-hover:drop-shadow-2xl"
            loading="lazy"
          />

          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/5 transition-colors duration-500 z-10 flex items-end justify-center pb-4">
            <span className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 px-5 py-2 bg-white/90 backdrop-blur-sm text-brand-700 text-xs font-semibold rounded-full shadow-lg">
              Quick View →
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 border-t border-brand-50">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              100% Natural
            </span>
            <span className="text-[11px] font-medium text-brand-400">•</span>
            <span className="text-[11px] font-semibold text-brand-500">Zero Cal</span>
          </div>

          <h3 className="font-display text-lg font-semibold text-brand-950 mb-1 line-clamp-1 group-hover:text-brand-700 transition-colors">
            {product.name}
          </h3>

          <p className="text-sm text-brand-500/80 mb-4 line-clamp-1">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold text-brand-800">₹{product.price}</span>
              <span className="text-sm text-brand-400 line-through">₹{Math.round(product.price * 1.3)}</span>
            </div>

            <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center shadow-lg shadow-brand-600/30 group-hover:bg-brand-700 group-hover:shadow-brand-700/40 transition-all duration-300 group-hover:scale-110">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
