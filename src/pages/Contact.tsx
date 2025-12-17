import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@kravekrunch.com',
      link: 'mailto:info@kravekrunch.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 86188 90788',
      link: 'tel:+91 86188 90788',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Purnea, Bihar',
      link: '#',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-charcoal">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="text-display text-ivory mb-6">
              Contact
              <span className="text-gold"> Us</span>
            </h1>
            <p className="text-ivory/70 font-body text-xl leading-relaxed">
              Questions, feedback, or just want to say hello? 
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-ivory">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-cream rounded-3xl p-8 md:p-12">
                <h2 className="font-heading text-2xl font-medium text-charcoal mb-8">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-sm text-muted-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-ivory rounded-xl border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-body"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-muted-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-ivory rounded-xl border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-body"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block font-body text-sm text-muted-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-ivory rounded-xl border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-body"
                      placeholder="How can we help?"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-body text-sm text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-ivory rounded-xl border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-body resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-charcoal text-ivory font-body text-sm tracking-widest uppercase rounded-full flex items-center justify-center gap-2 hover:bg-charcoal/90 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2} direction="right">
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-medium text-charcoal mb-4">
                    Let's Connect
                  </h2>
                  <p className="text-muted-foreground font-body text-lg">
                    Whether you have questions about our products, need help with 
                    an order, or want to explore partnership opportunities — 
                    we're here to help.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <motion.a
                      key={item.title}
                      href={item.link}
                      whileHover={{ x: 8 }}
                      className="flex items-start gap-4 p-6 bg-cream rounded-2xl group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-colors">
                        <item.icon className="w-5 h-5 text-gold group-hover:text-charcoal transition-colors" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          {item.title}
                        </p>
                        <p className="font-heading text-lg text-charcoal">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social & WhatsApp */}
                <div className="pt-8 border-t border-border">
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    Prefer instant messaging?
                  </p>
                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-body text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-body text-sm"
                    >
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </motion.a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              FAQ
            </p>
            <h2 className="text-headline text-charcoal">
              Common Questions
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto grid gap-6">
            {[
              {
                q: 'What is Makhana made of?',
                a: 'Makhana, also known as fox nuts, are the seeds of the lotus flower. They are naturally gluten-free, vegan, and packed with nutrients.',
              },
              {
                q: 'How long does shipping take?',
                a: 'We typically ship within 24-48 hours. Delivery takes 3-7 business days depending on your location across India.',
              },
              {
                q: 'Do you offer bulk or corporate orders?',
                a: 'Yes! We offer special pricing for bulk and corporate orders. Please reach out to us for a customized quote.',
              },
              {
                q: 'Are your products suitable for diabetics?',
                a: 'Makhana has a low glycemic index, making it a good snacking option. However, please consult your healthcare provider for personalized advice.',
              },
            ].map((faq, index) => (
              <AnimatedSection key={faq.q} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-ivory p-6 rounded-2xl shadow-soft"
                >
                  <h3 className="font-heading text-lg font-medium text-charcoal mb-2">
                    {faq.q}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {faq.a}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
