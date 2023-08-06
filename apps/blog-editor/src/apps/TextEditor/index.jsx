import React from "react";

// ** import shared components
import Animation from "@shared/Animation";

// ** import components
import HeaderTools from "./components/HeaderTools";

const TextEditor = () => {
  return (
    <Animation
      variant={"tb_opacity_transition"}
      className="flex items-center gap-x-2"
    >
      <HeaderTools />
    </Animation>
  );
};

export default TextEditor;
