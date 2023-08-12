import React from "react";

// ** import icons
import TextBIco from "@icons/text-b";
import UnderlineIco from "@icons/underline";
import ItalicIco from "@icons/italic";
import QuotesIco from "@icons/quotes";
import StrikethroughIco from "@icons/strikethrough";

// ** import components
import Paper from "@shared/Paper";

export default function FontStyle({ editor }) {
  const handleToolbarAction = (selected) => () => {
    if (editor && editor.chain) {
      switch (selected) {
        case "text-b":
          editor.chain().focus().toggleBold().run();
          break;
        case "underline":
          editor.chain().focus().toggleUnderline().run();
          break;
        case "italic":
          editor.chain().focus().toggleItalic().run();
          break;
        case "quotes":
          editor.chain().focus().toggleBlockquote().run();
          break;
        case "strikethrough":
          editor.chain().focus().toggleStrike().run();
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
          onClick={handleToolbarAction("text-b")}
        >
          <TextBIco />
        </Paper>
        <Paper
          className={
            "flex items-center py-2 px-2.5 gap-2 rounded-lg border-1.5 dark:border-theme-dark-md bg-theme-lighter"
          }
          clickable
          onClick={handleToolbarAction("underline")}
        >
          <UnderlineIco />
        </Paper>
        <Paper
          className={
            "flex items-center py-2 px-2.5 gap-2 rounded-lg border-1.5 dark:border-theme-dark-md bg-theme-lighter"
          }
          clickable
          onClick={handleToolbarAction("italic")}
        >
          <ItalicIco />
        </Paper>
        <Paper
          className={
            "flex items-center py-2 px-2.5 gap-2 rounded-lg border-1.5 dark:border-theme-dark-md bg-theme-lighter"
          }
          clickable
          onClick={handleToolbarAction("quotes")}
        >
          <QuotesIco />
        </Paper>
        <Paper
          className={
            "flex items-center py-2 px-2.5 gap-2 rounded-lg border-1.5 dark:border-theme-dark-md bg-theme-lighter"
          }
          clickable
          onClick={handleToolbarAction("strikethrough")}
        >
          <StrikethroughIco />
        </Paper>
      </Paper>
    </div>
  );
}
