import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { 
  Flame, 
  Heart, 
  Brain, 
  Dumbbell, 
  Moon, 
  Sparkles,
  Leaf,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import texturePattern from '@/assets/texture-pattern.jpg';

const WhyMakhana = () => {
  const benefits = [
    {
      icon: Flame,
      title: 'Low Calorie',
      value: '347 kcal',
      desc: 'Per 100g — perfect for guilt-free snacking without compromising on satisfaction',
    },
    {
      icon: Heart,
      title: 'Heart Healthy',
      value: '0mg',
      desc: 'Zero cholesterol and low sodium, supporting cardiovascular wellness',
    },
    {
      icon: Brain,
      title: 'Brain Food',
      value: 'Rich',
      desc: 'High in thiamine, supporting cognitive function and mental clarity',
    },
    {
      icon: Dumbbell,
      title: 'Protein Rich',
      value: '9.7g',
      desc: 'Per 100g — excellent plant-based protein source for active lifestyles',
    },
    {
      icon: Moon,
      title: 'Sleep Support',
      value: 'Natural',
      desc: 'Contains compounds that may help regulate sleep patterns naturally',
    },
    {
      icon: Sparkles,
      title: 'Anti-Aging',
      value: 'Powerful',
      desc: 'Rich in antioxidants that help combat oxidative stress',
    },
  ];

  const nutrition = [
    { label: 'Calories', value: '347 kcal' },
    { label: 'Protein', value: '9.7g' },
    { label: 'Carbs', value: '76.9g' },
    { label: 'Fiber', value: '14.5g' },
    { label: 'Fat', value: '0.1g' },
    { label: 'Calcium', value: '60mg' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${texturePattern})`,
            backgroundSize: '400px',
          }}
        />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              The Superfood
            </p>
            <h1 className="text-display text-ivory mb-6">
              Why
              <span className="text-gold"> Makhana?</span>
            </h1>
            <p className="text-ivory/70 font-body text-xl leading-relaxed">
              An ancient superfood revered in Ayurveda, now reimagined for 
              the health-conscious modern snacker.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Makhana */}
      <section className="section-padding bg-ivory">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
                The Origin
              </p>
              <h2 className="text-headline text-charcoal mb-6">
                The Lotus Seed
                <br />
                <span className="text-gold">Superfood</span>
              </h2>
              <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
                <p>
                  Makhana, also known as fox nuts or lotus seeds, are harvested from 
                  the Euryale ferox plant found in the wetlands of Bihar, India. For 
                  centuries, they've been a staple in traditional medicine and festive cuisines.
                </p>
                <p>
                  These puffed seeds are naturally gluten-free, vegan, and incredibly 
                  versatile. When roasted, they transform into a light, crispy snack 
                  that's both satisfying and nutritious.
                </p>
                <p>
                  At Krave Krunch, we elevate this superfood with premium olive oil 
                  roasting and artisan seasonings, creating snacks that honor tradition 
                  while embracing modern flavors.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="rounded-full overflow-hidden aspect-square shadow-elevated"
                >
                  <img
                    src={texturePattern}
                    alt="Makhana Seeds"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-body text-sm"
                >
                  <Leaf className="w-4 h-4 inline mr-2" />
                  100% Natural
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-gold text-charcoal px-4 py-2 rounded-full font-body text-sm"
                >
                  <Shield className="w-4 h-4 inline mr-2" />
                  Ayurvedic Wisdom
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Health Benefits
            </p>
            <h2 className="text-headline text-charcoal">
              Nourishment in Every Bite
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-ivory p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                      <benefit.icon className="w-7 h-7 text-gold" />
                    </div>
                    <span className="font-heading text-2xl font-bold text-gold">
                      {benefit.value}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-charcoal mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Table */}
      <section className="section-padding bg-charcoal">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
                Nutritional Profile
              </p>
              <h2 className="text-headline text-ivory mb-6">
                What's Inside
                <br />
                <span className="text-gold">Every 100g</span>
              </h2>
              <p className="text-ivory/70 font-body text-lg mb-8">
                Makhana packs an impressive nutritional punch, making it one of 
                nature's most complete snacking options.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {nutrition.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-ivory/5 border border-ivory/10 rounded-xl p-4"
                  >
                    <p className="text-ivory/50 font-body text-xs uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-gold font-heading text-2xl font-semibold">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="bg-gold/20 rounded-3xl p-8 md:p-12">
                  <h3 className="font-heading text-2xl text-ivory mb-6">
                    Compared to Popular Snacks
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      { name: 'Makhana', calories: 347, highlight: true },
                      { name: 'Potato Chips', calories: 536, highlight: false },
                      { name: 'Peanuts', calories: 567, highlight: false },
                      { name: 'Cashews', calories: 553, highlight: false },
                    ].map((item) => (
                      <div key={item.name} className="flex items-center gap-4">
                        <span className={`font-body text-sm ${item.highlight ? 'text-gold' : 'text-ivory/70'}`}>
                          {item.name}
                        </span>
                        <div className="flex-1 h-2 bg-ivory/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(item.calories / 600) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={`h-full rounded-full ${item.highlight ? 'bg-gold' : 'bg-ivory/30'}`}
                          />
                        </div>
                        <span className={`font-body text-sm ${item.highlight ? 'text-gold' : 'text-ivory/50'}`}>
                          {item.calories} kcal
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-cream">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-headline text-charcoal mb-6">
              Ready to Make the
              <span className="text-gold"> Healthy Switch?</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto mb-10">
              Experience the perfect blend of taste and nutrition with Krave Krunch.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 px-12 py-5 bg-charcoal text-ivory font-body text-sm tracking-widest uppercase rounded-full hover:bg-charcoal/90 transition-all duration-300"
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

export default WhyMakhana;
