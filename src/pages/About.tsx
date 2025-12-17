import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Target, Eye, Heart, Sparkles } from 'lucide-react';
import texturePattern from '@/assets/texture-pattern.jpg';
import { products } from '@/data/products';

const About = () => {
  const timeline = [
    { year: '2023', title: 'The Idea', desc: 'Born from a passion for healthy, delicious snacking' },
    { year: '2023', title: 'Research & Development', desc: 'Perfecting our unique roasting process and flavour profiles' },
    { year: '2024', title: 'Launch', desc: 'Introducing Krave Krunch to discerning snackers across India' },
    { year: '2024', title: 'Growing', desc: 'Expanding our flavour range and reaching more health-conscious consumers' },
  ];

  const values = [
    { icon: Target, title: 'Quality First', desc: 'We source only the finest makhana and ingredients' },
    { icon: Eye, title: 'Transparency', desc: 'What you see is what you get — no hidden additives' },
    { icon: Heart, title: 'Health Focused', desc: 'Every recipe is designed with your wellbeing in mind' },
    { icon: Sparkles, title: 'Innovation', desc: 'Constantly exploring new flavours and experiences' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-charcoal relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-gold/10"
        />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h1 className="text-display text-ivory mb-6">
              About
              <span className="text-gold"> Krave Krunch</span>
            </h1>
            <p className="text-ivory/70 font-body text-xl leading-relaxed">
              We believe that snacking should be a moment of pure joy — 
              nourishing your body while delighting your senses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-ivory">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-headline text-charcoal mb-6">
                A Modern Take on an
                <br />
                <span className="text-gold">Ancient Superfood</span>
              </h2>
              <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
                <p>
                  Makhana, or fox nuts, have been cherished in India for centuries — 
                  a symbol of purity and wellness in Ayurvedic tradition. We saw an 
                  opportunity to reimagine this incredible superfood for the modern palate.
                </p>
                <p>
                  Every batch of Krave Krunch is roasted to perfection in premium olive oil, 
                  then seasoned with carefully curated spices and flavours. The result? 
                  A snack that's light, crispy, and utterly irresistible.
                </p>
                <p>
                  From our hands to yours, each pack carries our commitment to quality, 
                  authenticity, and the belief that healthy can be delicious.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden shadow-elevated"
                >
                  <img
                    src={texturePattern}
                    alt="Premium Makhana"
                    className="w-full aspect-square object-cover"
                  />
                </motion.div>
                <div className="absolute -bottom-6 -left-6 bg-gold text-charcoal p-6 rounded-xl">
                  <p className="font-heading text-4xl font-bold">100%</p>
                  <p className="font-body text-sm">Natural Ingredients</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Our Journey
            </p>
            <h2 className="text-headline text-charcoal">
              From Passion to Product
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex gap-8 mb-12 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-charcoal flex items-center justify-center text-gold font-heading text-sm font-medium">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-px h-full bg-border mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="font-heading text-xl font-medium text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-charcoal">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              What We Stand For
            </p>
            <h2 className="text-headline text-ivory">
              Our Values
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="text-center p-8 rounded-2xl bg-ivory/5 border border-ivory/10 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-ivory mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-ivory/60">
                    {value.desc}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="section-padding bg-ivory">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              The Collection
            </p>
            <h2 className="text-headline text-charcoal">
              Five Distinctive Flavours
            </h2>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-6">
            {products.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-card"
                >
                  <img
                    src={product.image}
                    alt={product.flavor}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
