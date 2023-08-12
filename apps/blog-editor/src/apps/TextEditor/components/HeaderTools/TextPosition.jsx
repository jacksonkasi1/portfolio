import React, { useState } from "react";
import Paper from "@shared/Paper";

// Import icons
import TextLIco from "@icons/text-left";
import TextCIco from "@icons/text-center";
import TextRIco from "@icons/text-right";

const ALIGNMENT_OPTIONS = [
  { id: "text-left", icon: <TextLIco /> },
  { id: "text-center", icon: <TextCIco /> },
  { id: "text-right", icon: <TextRIco /> },
];

export default function TextPosition({ editor }) {
  const [lastSelected, setLastSelected] = useState("text-left");

  const alignmentOptions = {
    "text-left": "left",
    "text-center": "center",
    "text-right": "right",
  };

  const handleToolbarAction = (selected) => () => {
    if (editor && editor.chain) {
      const alignmentValue = alignmentOptions[selected];
      if (alignmentValue) {
        editor.chain().focus().setTextAlign(alignmentValue).run();
        setLastSelected(selected);
      }
    }
  };

  const isSelected = (option) => option === lastSelected;

  return (
    <div className="flex flex-wrap gap-4">
      <Paper
        className={
          "flex items-center py-1 px-1 gap-2 border-2 bg-theme-lighter dark:bg-black dark:border-theme-dark-md"
        }
      >
        {ALIGNMENT_OPTIONS.map(({ id, icon }) => (
          <Paper
            key={id}
            className={`flex items-center py-2 px-2.5 gap-2 rounded-lg dark:border-theme-dark-md bg-theme-lighter ${
              isSelected(id) ? "border-1.5" : "border-none dark:bg-theme-darker"
            }`}
            clickable
            onClick={handleToolbarAction(id)}
          >
            {icon}
          </Paper>
        ))}
      </Paper>
    </div>
  );
}
