import React, { useState } from "react";
import Paper from "@shared/Paper";

// Import icons
import TextLIco from "@icons/text-left";
import TextCIco from "@icons/text-center";
import TextRIco from "@icons/text-right";

const ALIGNMENT_OPTIONS = [
  {
    id: "text-left",
    icon: <TextLIco />,
    action: "left",
    isActive: (editor) =>
      editor?.isActive && editor?.isActive({ textAlign: "left" }),
  },
  {
    id: "text-center",
    icon: <TextCIco />,
    action: "center",
    isActive: (editor) =>
      editor?.isActive && editor?.isActive({ textAlign: "center" }),
  },
  {
    id: "text-right",
    icon: <TextRIco />,
    action: "right",
    isActive: (editor) =>
      editor?.isActive && editor?.isActive({ textAlign: "right" }),
  },
];

export default function TextPosition({ editor }) {
  const [lastSelected, setLastSelected] = useState("text-left");

  const handleToolbarAction = (id, action) => () => {
    if (editor && editor.chain) {
      editor.chain().focus().setTextAlign(action).run();
      setLastSelected(id);
    }
  };

  const isSelected = (option) => option === lastSelected;

  return (
    <div className="flex flex-wrap gap-4">
      <Paper
        className={
          "flex items-center py-1 px-1 gap-2 border-2 bg-theme-lighter dark:bg-theme-darker dark:border-theme-dark-md"
        }
      >
        {ALIGNMENT_OPTIONS.map(({ id, icon, action, isActive }) => (
          <Paper
            key={id}
            className={`flex items-center py-2 px-2.5 gap-2 rounded-lg border-1 border-transparent
            ${
              isSelected(id)
                ? "bg-theme-light-sm dark:bg-theme-dark-lg"
                : "bg-theme-lighter dark:bg-theme-darker"
            }
            ${
              isActive && isActive(editor)
                ? "!border-theme-light-lg !dark:border-theme-dark-xl"
                : ""
            }
            `}
            clickable
            onClick={handleToolbarAction(id, action)}
          >
            {icon}
          </Paper>
        ))}
      </Paper>
    </div>
  );
}
