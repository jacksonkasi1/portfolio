import React, { useState } from "react";
import Paper from "@shared/Paper";

// Import icons
import TextBIco from "@icons/text-b";
import UnderlineIco from "@icons/underline";
import ItalicIco from "@icons/italic";
import QuotesIco from "@icons/quotes";
import StrikethroughIco from "@icons/strikethrough";

const FONT_STYLE_OPTIONS = [
  { id: "text-b", icon: <TextBIco />, action: "toggleBold" },
  { id: "underline", icon: <UnderlineIco />, action: "toggleUnderline" },
  { id: "italic", icon: <ItalicIco />, action: "toggleItalic" },
  { id: "quotes", icon: <QuotesIco />, action: "toggleBlockquote" },
  { id: "strikethrough", icon: <StrikethroughIco />, action: "toggleStrike" },
];

export default function FontStyle({ editor }) {
  const [lastSelected, setLastSelected] = useState('text-b');

  const handleToolbarAction = (id, action) => () => {
    if (editor && editor.chain) {
      editor.chain().focus()[action]().run();
      setLastSelected(id);
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Paper
        className={
          "flex items-center py-1 px-1 gap-2 border-2 bg-theme-lighter dark:bg-black dark:border-theme-dark-md"
        }
      >
        {FONT_STYLE_OPTIONS.map(({ id, icon, action }) => (
          <Paper
            key={id}
            className={`flex items-center py-2 px-2.5 gap-2 rounded-lg dark:border-theme-dark-md bg-theme-lighter ${
              lastSelected === id ? "border-1.5" : "border-none dark:bg-theme-darker"
            }`}
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
