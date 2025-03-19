import { motion } from 'framer-motion';
import { Typography } from "@material-tailwind/react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="w-16 h-16 border-4 border-gold/30 border-t-gold rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <Typography className="mt-4 text-gold/80 font-playfair">
        Researching...
      </Typography>
    </div>
  );
};

export default LoadingSpinner;
