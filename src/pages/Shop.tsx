import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

const filters = ['All', 'Savory', 'Sweet', 'Spicy'];

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const getFilteredProducts = () => {
    if (activeFilter === 'All') return products;
    if (activeFilter === 'Savory') return products.filter(p => ['himalayan-salted', 'cream-onion'].includes(p.id));
    if (activeFilter === 'Sweet') return products.filter(p => p.id === 'caramel');
    if (activeFilter === 'Spicy') return products.filter(p => ['masala', 'mexican'].includes(p.id));
    return products;
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-charcoal">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Our Collection
            </p>
            <h1 className="text-display text-ivory mb-6">
              Shop the
              <span className="text-gold"> Crunch</span>
            </h1>
            <p className="text-ivory/70 font-body text-lg max-w-2xl mx-auto">
              Discover our range of premium flavoured Makhana, crafted for 
              those who refuse to compromise on taste or health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-ivory">
        <div className="container mx-auto">
          {/* Filter Bar */}
          <AnimatedSection className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
            <p className="text-muted-foreground font-body text-sm">
              Showing {getFilteredProducts().length} products
            </p>
            
            {/* Desktop Filters */}
            <div className="hidden sm:flex items-center gap-2">
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-6 py-2.5 rounded-full font-body text-sm transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-charcoal text-ivory'
                      : 'bg-cream text-charcoal hover:bg-muted'
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(true)}
              className="sm:hidden flex items-center gap-2 px-6 py-2.5 bg-cream rounded-full font-body text-sm"
            >
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </AnimatedSection>

          {/* Product Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {getFilteredProducts().map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard
                    {...product}
                    delay={index * 0.1}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {getFilteredProducts().length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground font-body text-lg">
                No products found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-sm sm:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
              <button
                onClick={() => setShowFilters(false)}
                className="absolute top-6 right-6 text-ivory"
              >
                <X className="w-6 h-6" />
              </button>
              
              <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
                Filter By
              </p>
              
              {filters.map((filter, index) => (
                <motion.button
                  key={filter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setActiveFilter(filter);
                    setShowFilters(false);
                  }}
                  className={`font-heading text-2xl transition-colors ${
                    activeFilter === filter ? 'text-gold' : 'text-ivory hover:text-gold'
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trust Badges */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {['FSSAI Certified', 'Secure Payments', 'COD Available', 'Free Shipping*'].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                <div className="w-2 h-2 rounded-full bg-gold" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
