import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

// ** import icons
import TextBIco from "@icons/text-b";
import UnderlineIco from "@icons/underline";
import ItalicIco from "@icons/italic";
import QuotesIco from "@icons/quotes";
import Paper from "@shared/Paper";
import Animation from "@shared/Animation";

export default function FontStyle({ editor }) {
  const handleToolbarAction = (selected) => {
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
        default:
          return;
      }
    }
  };

  const handleTabClick = (key) => {
    console.log(key);
    handleToolbarAction(key);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Tabs
        variant={"bordered"}
        aria-label="Font style tabs"
        onClick={handleTabClick}
      >
        <Tab
          key="text-b"
          title={<TextBIco name="text-b" />}
        />
        <Tab key="underline" title={<UnderlineIco name="underline" />} />
        <Tab key="italic" title={<ItalicIco />} />
        <Tab key="quotes" title={<QuotesIco />} />
      </Tabs>
      {/* <Animation className='w-fit py-1 px-2 flex gap-2' > */}
      <Paper
        className={
          "flex items-center py-1 px-2 gap-2 border-2 dark:border-theme-dark-md"
        }
      >
        <Paper
          className={
            "flex items-center py-1 px-2 gap-2 border-2 dark:border-theme-dark-md"
          }
          clickable
          onClick={() => handleToolbarAction("text-b")}
        >
          <TextBIco />
        </Paper>
        <button onClick={() => handleToolbarAction("underline")}>
          underline
        </button>
        <button onClick={() => handleToolbarAction("italic")}>italic</button>
        <button onClick={() => handleToolbarAction("quotes")}>quotes</button>
      </Paper>
      {/* </Animation> */}
    </div>
  );
}
