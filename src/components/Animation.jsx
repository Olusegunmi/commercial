import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Animation = ({ children, delay = 0.1 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        className="my-16 px-4"
      >
        {children}
      </motion.div>
    );
}

export default Animation