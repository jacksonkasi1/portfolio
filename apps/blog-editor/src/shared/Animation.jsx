import React from "react";
import { motion } from "framer-motion";

/**
 * Animation component variant props.
 *
 * @typedef {Object} AnimationVariantProps
 * @property {"tb_opacity_transition" | "Move"} variant - The variant of animation to apply.
 * @property  {Object} props - The props of the component.
 * @property  {React.ReactNode} children - The content to apply animation to.
 * @property  {string} [className] - The class name to be applied to the animated element.
 */

/**
 *  Animation component.
 *
 * @param {AnimationVariantProps} props - Component props.
 * @returns {JSX.Element} Rendered Typography component.
 */

const Animation = ({ children, className, variant, ...props }) => {
  const variants = {
    tb_opacity_transition: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
    },
  };

  const getAnimation = (selectedVariant) => {
    return variants[selectedVariant];
  };

  const animationObject = getAnimation(variant || "opacity_transition");

  return (
    <motion.div className={className} {...animationObject} {...props}>
      {children}
    </motion.div>
  );
};

export default Animation;
