import React from "react";

// ** import shared components
import Animation from "@shared/Animation";

// ** import sub components
import SelectFont from "./SelectFont";
import Counter from "./Counter";
import FontStyle from "./FontStyle";
import TextPosition from "./TextPosition";
import ColorPlate from "./ColorPlate";

const HeaderTools = ({ editor }) => {
  return (
    <Animation
      variant={"tb_opacity_transition"}
      className="flex items-center gap-x-2 w-full max-w-5xl mx-auto justify-between"
    >
      <div className="flex items-center gap-x-2">
        <SelectFont />
        <Counter />
      </div>
      <div className="flex items-center gap-x-2">
        <FontStyle editor={editor} />
        <ColorPlate editor={editor} />
        <TextPosition editor={editor} />
      </div>
    </Animation>
  );
};

export default HeaderTools;
