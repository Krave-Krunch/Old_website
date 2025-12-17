import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Check, Leaf, Shield, Award } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const weightOptions = [
  { weight: '15g' as const, label: '15g', multiplier: 1 },
  { weight: '25g' as const, label: '25g', multiplier: 1.5 },
  { weight: '50g' as const, label: '50g', multiplier: 2.5 },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<'15g' | '25g' | '50g'>('15g');
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-ivory">
          <div className="text-center">
            <h1 className="text-heading text-charcoal mb-4">Product Not Found</h1>
            <button
              onClick={() => navigate('/shop')}
              className="text-gold hover:underline"
            >
              Return to Shop
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const getPrice = () => {
    const option = weightOptions.find((w) => w.weight === selectedWeight);
    return Math.round(product.price * (option?.multiplier || 1));
  };

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      flavor: product.flavor,
      weight: selectedWeight,
      price: getPrice(),
      quantity,
      image: product.image,
    });
    toast.success(`${product.flavor} (${selectedWeight}) added to cart!`);
  };

  return (
    <Layout>
      <section className="pt-28 pb-20 bg-ivory min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/shop')}
            className="flex items-center gap-2 text-muted-foreground hover:text-charcoal transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-body text-sm uppercase tracking-wider">Back to Shop</span>
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div
                className="aspect-square rounded-3xl overflow-hidden shadow-elevated"
                style={{ backgroundColor: product.color }}
              >
                <img
                  src={product.image}
                  alt={`${product.name} ${product.flavor}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -right-4 bg-gold text-charcoal px-6 py-3 rounded-full font-body text-sm font-medium shadow-lg"
              >
                Premium Quality
              </motion.div>
            </motion.div>

            {/* Product Info */}
            <div className="flex flex-col">
              <AnimatedSection>
                <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-2">
                  {product.name}
                </p>
                <h1 className="text-display text-charcoal mb-4">
                  {product.flavor}
                </h1>
                <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                  {product.description}
                </p>
              </AnimatedSection>

              {/* Benefits */}
              <AnimatedSection delay={0.1} className="mb-8">
                <div className="flex flex-wrap gap-3">
                  {product.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="flex items-center gap-2 px-4 py-2 bg-cream rounded-full font-body text-sm text-charcoal"
                    >
                      <Check className="w-3 h-3 text-gold" />
                      {benefit}
                    </span>
                  ))}
                </div>
              </AnimatedSection>

              {/* Weight Selection */}
              <AnimatedSection delay={0.2} className="mb-8">
                <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-4">
                  Select Weight
                </p>
                <div className="flex gap-4">
                  {weightOptions.map((option) => (
                    <motion.button
                      key={option.weight}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedWeight(option.weight)}
                      className={`flex-1 py-4 px-6 rounded-xl font-body text-sm transition-all duration-300 ${
                        selectedWeight === option.weight
                          ? 'bg-charcoal text-ivory shadow-card'
                          : 'bg-cream text-charcoal hover:bg-muted'
                      }`}
                    >
                      <span className="block text-lg font-semibold mb-1">{option.label}</span>
                      <span className="block text-xs opacity-70">
                        ₹{Math.round(product.price * option.multiplier)}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </AnimatedSection>

              {/* Quantity */}
              <AnimatedSection delay={0.3} className="mb-8">
                <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-4">
                  Quantity
                </p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-full bg-cream text-charcoal hover:bg-muted transition-colors flex items-center justify-center text-xl"
                  >
                    −
                  </button>
                  <span className="font-heading text-2xl w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-full bg-cream text-charcoal hover:bg-muted transition-colors flex items-center justify-center text-xl"
                  >
                    +
                  </button>
                </div>
              </AnimatedSection>

              {/* Price & Add to Cart */}
              <AnimatedSection delay={0.4} className="mt-auto">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Total Price</p>
                    <p className="font-heading text-3xl text-gold font-semibold">
                      ₹{getPrice() * quantity}
                    </p>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-charcoal text-ivory rounded-full font-body text-sm tracking-wider uppercase flex items-center justify-center gap-3 hover:bg-charcoal/90 transition-colors shadow-card"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </motion.button>
              </AnimatedSection>

              {/* Trust Badges */}
              <AnimatedSection delay={0.5} className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Leaf, label: '100% Natural' },
                    { icon: Shield, label: 'FSSAI Certified' },
                    { icon: Award, label: 'Premium Quality' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="text-center">
                      <Icon className="w-5 h-5 mx-auto text-gold mb-2" />
                      <p className="font-body text-xs text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
