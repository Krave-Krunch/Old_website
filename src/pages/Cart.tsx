import { motion } from 'framer-motion';
import { ArrowLeft, Trash2, ShoppingBag, Minus, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <section className="pt-32 pb-20 bg-ivory min-h-screen">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center py-20">
              <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-6" />
              <h1 className="text-heading text-charcoal mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground font-body mb-8">
                Looks like you haven't added anything to your cart yet.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/shop')}
                className="px-8 py-3 bg-charcoal text-ivory rounded-full font-body text-sm tracking-wider uppercase"
              >
                Continue Shopping
              </motion.button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

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
            <span className="font-body text-sm uppercase tracking-wider">Continue Shopping</span>
          </motion.button>

          <AnimatedSection>
            <h1 className="text-display text-charcoal mb-12">Your Cart</h1>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item, index) => (
                <motion.div
                  key={`${item.productId}-${item.weight}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 p-6 bg-card rounded-2xl shadow-card"
                >
                  <img
                    src={item.image}
                    alt={item.flavor}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-muted-foreground font-body text-xs uppercase tracking-wider">
                          {item.name}
                        </p>
                        <h3 className="font-heading text-lg text-foreground">
                          {item.flavor}
                        </h3>
                        <p className="text-muted-foreground font-body text-sm">
                          Weight: {item.weight}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.productId, item.weight)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.productId, item.weight, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-cream hover:bg-muted transition-colors flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-body w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.weight, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-cream hover:bg-muted transition-colors flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-heading text-lg text-gold font-semibold">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <AnimatedSection delay={0.2}>
              <div className="bg-charcoal rounded-2xl p-8 text-ivory sticky top-28">
                <h2 className="font-heading text-xl mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-ivory/70">Subtotal</span>
                    <span>₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-ivory/70">Shipping</span>
                    <span className="text-gold">Free</span>
                  </div>
                  <div className="border-t border-ivory/20 pt-4 flex justify-between font-heading text-xl">
                    <span>Total</span>
                    <span className="text-gold">₹{totalPrice}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gold text-charcoal rounded-full font-body text-sm tracking-wider uppercase font-medium"
                >
                  Proceed to Checkout
                </motion.button>
                
                <button
                  onClick={clearCart}
                  className="w-full mt-4 text-ivory/60 hover:text-ivory font-body text-sm transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
