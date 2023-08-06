import React from "react";
import { Link } from "react-router-dom";

import { motion as m } from "framer-motion";

/**
 * Typography component props.
 *
 * @typedef {Object} TypographyProps
 *
 * @property {"P_Bold_H1" | "P_Bold_H2" | "P_Bold_H3" | "P_Bold_H4" | "P_Bold_H5" | "P_Bold_H6" |
 *            "P_SemiBold_H1" | "P_SemiBold_H2" | "P_SemiBold_H3" | "P_SemiBold_H4" | "P_SemiBold_H5" | "P_SemiBold_H6" |
 *            "P_Medium_H1" | "P_Medium_H2" | "P_Medium_H3" | "P_Medium_H4" | "P_Medium_H5" | "P_Medium_H6" |
 *            "P_Regular_H1" | "P_Regular_H2" | "P_Regular_H3" | "P_Regular_H4" | "P_Regular_H5" | "P_Regular_H6"} variant - Typography variant.
 * @property {React.ReactNode} children - Content of the Typography component.
 * @property {string} [className] - Additional CSS class names.
 * @property {number} [maxLines] - Maximum number of lines to display before truncating with ellipsis.
 * @property {string} [link] - Link URL (if provided, the Typography will be wrapped in a Link component).
 * @property {string} [target] - Target attribute for the link (used when `link` is provided).
 * @property {string} [animate] - Type of animation to apply on hover ('move' or 'underline').
 * @property {Object} [mVariants] - Framer Motion variants for animation.
 * @property {number} [mDelay] - Delay for the animation in milliseconds.
 * @property {boolean} [disableSelect] - If true, prevents text selection.
 */

/**
 * Typography component.
 *
 * @param {TypographyProps} props - Component props.
 * @returns {JSX.Element} Rendered Typography component.
 */

function Typography({
  mVariants,
  mDelay = 0,
  variant,
  children,
  className,
  maxLines = 0,
  link = "",
  target = "",
  animate = "",
  disableSelect = false, // Added the new prop with a default value of false
  ...props
}) {
  const getClassName = () => {
    switch (variant) {
      // "Bold" - 700
      case "P_Bold_H1":
        return "font-poppins font-bold text-[40px] md:text-[62px] tracking-normal";
      case "P_Bold_H2":
        return "font-poppins font-bold text-[32px] md:text-[49px] tracking-normal";
      case "P_Bold_H3":
        return "font-poppins font-bold text-[24px] md:text-[39px] tracking-normal";
      case "P_Bold_H4":
        return "font-poppins font-bold text-[20px] md:text-[25px] tracking-normal";
      case "P_Bold_H5":
        return "font-poppins font-bold text-[16px] md:text-[20px] tracking-normal";
      case "P_Bold_H6":
        return "font-poppins font-bold text-[14px] md:text-[16px] tracking-normal";

      // "SemiBold" - 600
      case "P_SemiBold_H1":
        return "font-poppins font-semibold text-[40px] md:text-[62px] tracking-normal";
      case "P_SemiBold_H2":
        return "font-poppins font-semibold text-[32px] md:text-[49px] tracking-normal";
      case "P_SemiBold_H3":
        return "font-poppins font-semibold text-[24px] md:text-[39px] tracking-normal";
      case "P_SemiBold_H_T":
        return "font-poppins font-semibold text-[24px] md:text-[31px] tracking-normal";
      case "P_SemiBold_H4":
        return "font-poppins font-semibold text-[20px] md:text-[25px] tracking-normal";
      case "P_SemiBold_H5":
        return "font-poppins font-semibold text-[16px] md:text-[20px] tracking-normal";
      case "P_SemiBold_H6":
        return "font-poppins font-semibold text-[14px] md:text-[16px] tracking-normal";

      // "Medium" - 500
      case "P_Medium_H1":
        return "font-poppins font-semibold text-[40px] md:text-[62px] tracking-normal";
      case "P_Medium_H2":
        return "font-poppins font-semibold text-[32px] md:text-[49px] tracking-normal";
      case "P_Medium_H3":
        return "font-poppins font-semibold text-[24px] md:text-[39px] tracking-normal";
      case "P_Medium_H4":
        return "font-poppins font-semibold text-[20px] md:text-[25px] tracking-normal";
      case "P_Medium_H5":
        return "font-poppins font-semibold text-[16px] md:text-[20px] tracking-normal";
      case "P_Medium_H6":
        return "font-poppins font-semibold text-[14px] md:text-[16px] tracking-normal";

      // "Regular" - 400
      case "P_Regular_H1":
        return "font-poppins font-normal text-[40px] md:text-[62px] tracking-normal";
      case "P_Regular_H2":
        return "font-poppins font-normal text-[32px] md:text-[49px] tracking-normal";
      case "P_Regular_H3":
        return "font-poppins font-normal text-[24px] md:text-[39px] tracking-normal";
      case "P_Regular_H4":
        return "font-poppins font-normal text-[20px] md:text-[25px] tracking-normal";
      case "P_Regular_H5":
        return "font-poppins font-normal text-[16px] md:text-[20px] tracking-normal";
      case "P_Regular_H6":
        return "font-poppins font-normal text-[14px] md:text-[16px] tracking-normal";

      default:
        return "";
    }
  };

  const fontTypes = getClassName();

  const lineClampClass =
    maxLines > 0 ? `line-clamp-${maxLines.toString()}` : "whitespace-normal";

  const getAnimationClass = () => {
    switch (animate) {
      case "move":
        return "hover:ml-1.5 transition-all duration-300";
      case "underline":
        return "hover:underline transition-all duration-300";
      default:
        return "";
    }
  };

  const animationClass = getAnimationClass();

  const content = (
    <m.span
      initial="hidden"
      whileInView="visible"
      variants={mVariants}
      transition={{ duration: 0.6, ease: "easeIn", delay: mDelay }}
      viewport={{ once: true }}
      className={`${fontTypes} ${className} ${lineClampClass} ${animationClass} overflow-wrap overflow-hidden leading-normal`}
      style={{ userSelect: disableSelect ? "none" : "auto" }} // Add this line to conditionally apply userSelect style
      {...props}
    >
      {children}
    </m.span>
  );

  return link ? (
    <Link to={link} target={target} className="max-w-fit">
      {content}
    </Link>
  ) : (
    content
  );
}

export default Typography;
