import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  flavor: string;
  price: number;
  image: string;
  color: string;
  delay?: number;
}

export const ProductCard = ({ id, name, flavor, price, image, color, delay = 0 }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500">
        {/* Image Container */}
        <div 
          className="relative aspect-[3/4] overflow-hidden"
          style={{ backgroundColor: color }}
        >
          <motion.img
            src={image}
            alt={`${name} ${flavor}`}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Quick View Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 left-4 right-4 py-3 bg-ivory/95 backdrop-blur-sm text-charcoal rounded-full font-body text-sm tracking-wider uppercase flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
          >
            <ShoppingBag className="w-4 h-4" />
            View Details
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-muted-foreground font-body text-xs tracking-widest uppercase mb-1">
            {name}
          </p>
          <h3 className="font-heading text-xl font-medium text-foreground mb-2">
            {flavor}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-gold font-heading text-lg font-semibold">
              ₹{price}
            </span>
            <span className="text-muted-foreground font-body text-xs">
              From 15g
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
