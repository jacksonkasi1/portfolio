import React from "react";

// ** import icons
import TextLIco from "@icons/text-left";
import TextCIco from "@icons/text-center";
import TextRIco from "@icons/text-right";

// ** import components
import Paper from "@shared/Paper";

export default function TextPosition({ editor }) {
  const handleToolbarAction = (selected) => () => {
    if (editor && editor.chain) {
      switch (selected) {
        case "text-left":
          editor.chain().focus().setTextAlign('left').run()
          break;
        case "text-center":
          editor.chain().focus().setTextAlign('center').run()
          break;
        case "text-right":
          editor.chain().focus().setTextAlign('right').run()
          break;
        default:
          return;
      }
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Paper
        className={
          "flex items-center py-1 px-1 gap-2 border-2 bg-theme-lighter dark:bg-theme-darker dark:border-theme-dark-md"
        }
      >
        <Paper
          className={
            "flex items-center py-2 px-2.5 gap-2 rounded-lg border-1.5 dark:border-theme-dark-md bg-theme-lighter"
          }
          clickable
          onClick={handleToolbarAction("text-left")}
        >
          <TextLIco />
        </Paper>
        <Paper
          className={
            "flex items-center py-2 px-2.5 gap-2 rounded-lg border-1.5 dark:border-theme-dark-md bg-theme-lighter"
          }
          clickable
          onClick={handleToolbarAction("text-center")}
        >
          <TextCIco />
        </Paper>
        <Paper
          className={
            "flex items-center py-2 px-2.5 gap-2 rounded-lg border-1.5 dark:border-theme-dark-md bg-theme-lighter"
          }
          clickable
          onClick={handleToolbarAction("text-right")}
        >
          <TextRIco />
        </Paper>
      </Paper>
    </div>
  );
}
