import React from "react";
import { motion } from "framer-motion";

const Paper = ({ className, children, clickable = false, ...props }) => {
  return (
    <motion.button
      className={`p-2 bg-theme-light-sm dark:bg-theme-dark-sm  rounded-md ${
        clickable ? "cursor-pointer" : "cursor-default"
      } ${className}`}
      whileHover={clickable ? { scale: 1.05 } : null}
      whileTap={clickable ? { scale: 0.98 } : null}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Paper;
