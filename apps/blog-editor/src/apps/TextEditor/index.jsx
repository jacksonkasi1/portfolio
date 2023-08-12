import React from "react";

// ** import shared components
import Animation from "@shared/Animation";

// ** import components
import Content from "./Content";

const TextEditor = () => {
  return (
    <Animation
      variant={"tb_opacity_transition"}
      className="flex flex-col gap-y-4 max-w-6xl mx-auto items-center gap-x-2"
    >
      <Content />
    </Animation>
  );
};

export default TextEditor;
