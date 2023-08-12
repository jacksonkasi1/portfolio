import React, { useState } from "react";
import Paper from "@shared/Paper";

// Import icons
import TextBIco from "@icons/text-b";
import UnderlineIco from "@icons/underline";
import ItalicIco from "@icons/italic";
import QuotesIco from "@icons/quotes";
import StrikethroughIco from "@icons/strikethrough";

const FONT_STYLE_OPTIONS = [
  {
    id: "text-b",
    icon: <TextBIco />,
    action: "toggleBold",
    isActive: (editor) => editor?.isActive && editor?.isActive("bold"),
  },
  {
    id: "underline",
    icon: <UnderlineIco />,
    action: "toggleUnderline",
    isActive: (editor) => editor?.isActive && editor?.isActive("underline"),
  },
  {
    id: "italic",
    icon: <ItalicIco />,
    action: "toggleItalic",
    isActive: (editor) => editor?.isActive && editor?.isActive("italic"),
  },
  {
    id: "quotes",
    icon: <QuotesIco />,
    action: "toggleBlockquote",
    isActive: (editor) => editor?.isActive && editor?.isActive("blockquote"),
  },
  {
    id: "strikethrough",
    icon: <StrikethroughIco />,
    action: "toggleStrike",
    isActive: (editor) => editor?.isActive && editor?.isActive("strike"),
  },
];

export default function FontStyle({ editor }) {
  const [lastSelected, setLastSelected] = useState("text-b");

  const handleToolbarAction = (id, action) => () => {
    if (editor && editor.chain) {
      editor.chain().focus()[action]().run();
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
        {FONT_STYLE_OPTIONS.map(({ id, icon, action, isActive }) => (
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
