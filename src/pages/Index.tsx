import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Award, Heart, Star } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import heroBg from '@/assets/hero-bg.jpg';
import texturePattern from '@/assets/texture-pattern.jpg';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);

  const benefits = [
    { icon: Leaf, title: 'Plant Based', desc: '100% natural ingredients' },
    { icon: Shield, title: 'Zero Cholesterol', desc: 'Heart-healthy snacking' },
    { icon: Award, title: 'Premium Quality', desc: 'FSSAI certified' },
    { icon: Heart, title: 'Guilt-Free', desc: 'Low calorie indulgence' },
  ];

  const testimonials = [
    {
      text: "Finally, a snack that doesn't compromise on taste or health. Krave Krunch has become my daily ritual.",
      author: 'Priya Sharma',
      role: 'Wellness Coach',
      rating: 5,
    },
    {
      text: 'The caramel flavor is absolutely divine. Premium quality you can taste in every bite.',
      author: 'Rahul Mehta',
      role: 'Food Blogger',
      rating: 5,
    },
    {
      text: "I've tried many healthy snacks, but nothing comes close to this. The masala flavor is addictive!",
      author: 'Anita Desai',
      role: 'Nutritionist',
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroBg}
            alt="Krave Krunch Makhana"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-6 md:px-12 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          >
            Premium Flavoured Makhana
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-display text-ivory mb-6"
          >
            Crunch That
            <br />
            <span className="text-gold-gradient">Feels Premium</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-ivory/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Healthy snacking without compromise. Discover the perfect blend of 
            taste, nutrition, and pure indulgence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/shop"
              className="group px-10 py-4 bg-gold text-charcoal font-body text-sm tracking-widest uppercase rounded-full flex items-center gap-3 hover:bg-gold-light transition-all duration-300"
            >
              Shop the Crunch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/why-makhana"
              className="px-10 py-4 border border-ivory/30 text-ivory font-body text-sm tracking-widest uppercase rounded-full hover:bg-ivory/10 transition-all duration-300"
            >
              Discover Makhana
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-ivory/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-gold rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-cream">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Why Choose Us
            </p>
            <h2 className="text-headline text-charcoal">
              Snacking, Elevated
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center p-6 rounded-2xl bg-ivory shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-charcoal mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {benefit.desc}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Flavours */}
      <section className="section-padding bg-ivory">
        <div className="container mx-auto">
          <AnimatedSection className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
                Our Collection
              </p>
              <h2 className="text-headline text-charcoal">
                Signature Flavours
              </h2>
            </div>
            <Link
              to="/shop"
              className="group flex items-center gap-2 text-charcoal font-body text-sm tracking-wider uppercase hover:text-gold transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product, index) => (
              <ProductCard
                key={product.id}
                {...product}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${texturePattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-charcoal/95" />

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
                Our Story
              </p>
              <h2 className="text-headline text-ivory mb-6">
                Crafted with Passion,
                <br />
                <span className="text-gold">Served with Pride</span>
              </h2>
              <p className="text-ivory/70 font-body text-lg leading-relaxed mb-6">
                Born from a simple belief that healthy snacking shouldn't mean 
                compromising on taste, Krave Krunch reimagines the ancient 
                superfood Makhana for the modern palate.
              </p>
              <p className="text-ivory/70 font-body text-lg leading-relaxed mb-8">
                Every batch is roasted in pure olive oil and seasoned with 
                premium ingredients, creating a snacking experience that's 
                both indulgent and nourishing.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-gold font-body text-sm tracking-wider uppercase hover:gap-4 transition-all"
              >
                Read Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <img
                    src={products[0].image}
                    alt="Himalayan Salted"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square rounded-2xl overflow-hidden mt-8"
                >
                  <img
                    src={products[1].image}
                    alt="Masala"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-cream">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Testimonials
            </p>
            <h2 className="text-headline text-charcoal">
              What Our Customers Say
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.author} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-ivory p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-heading text-lg font-medium text-charcoal">
                      {testimonial.author}
                    </p>
                    <p className="font-body text-sm text-gold">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold blur-3xl"
        />
        
        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-headline text-ivory mb-6">
              Ready to Experience
              <br />
              <span className="text-gold">Premium Snacking?</span>
            </h2>
            <p className="text-ivory/70 font-body text-lg max-w-xl mx-auto mb-10">
              Join thousands of health-conscious snackers who've made the switch 
              to Krave Krunch.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-charcoal font-body text-sm tracking-widest uppercase rounded-full hover:bg-gold-light transition-all duration-300 animate-pulse-glow"
            >
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
