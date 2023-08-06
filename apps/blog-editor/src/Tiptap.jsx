import { useCallback } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Image } from "@tiptap/extension-image";
import TextEditor from "./apps/TextEditor";
// import {Button} from '@nextui-org/react';
import {Button, ButtonGroup} from "@nextui-org/react";

Image.configure({});

const TipTap = props => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: "<p>Hello from TipTap Rich Text Editor!</p>",
  });

  const addImage = useCallback(() => {
    const url = window.prompt("URL");
    if (!url) return;
    editor.chain().focus().setImage({ src: url }).run();
  }, [editor]);

  if (!editor) return null;

  return (
    <div>
      <h2>TipTap</h2>
      <div className="k-display-flex k-gap-2">
        <Button  onClick={() => editor.chain().focus().toggleBold().run()}>
          B1
        </Button>
        <Button onClick={() => editor.chain().focus().toggleItalic().run()}>
          I
        </Button>
        <Button onClick={addImage}>Add Image</Button>
      </div>
      <EditorContent editor={editor} />
      <TextEditor />
    </div>
  );
};

export default TipTap;