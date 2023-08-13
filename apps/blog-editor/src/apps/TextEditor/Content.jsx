"use client";

import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { TiptapExtensions } from "./extensions";
import useLocalStorage from "src/lib/hooks/use-local-storage";
import { useDebouncedCallback } from "use-debounce";
import EditorBubbleMenu from "./components/bubble-menu";
import { ImageResizer } from "./components/image-resizer";
import { TiptapEditorProps } from "./props";
import DEFAULT_EDITOR_CONTENT from "./default-content";

// ** import components
import HeaderTools from "./components/HeaderTools";

export default function Editor() {
  const [content, setContent] = useLocalStorage(
    "content",
    DEFAULT_EDITOR_CONTENT
  );
  const [saveStatus, setSaveStatus] = useState("Saved");

  const [hydrated, setHydrated] = useState(false);

  const debouncedUpdates = useDebouncedCallback(async ({ editor }) => {
    const json = editor.getJSON();
    setSaveStatus("Saving...");
    setContent(json);
    // Simulate a delay in saving.
    setTimeout(() => {
      setSaveStatus("Saved");
    }, 500);
  }, 750);

  const editor = useEditor({
    extensions: TiptapExtensions,
    editorProps: TiptapEditorProps,
    onUpdate: (e) => {
      setSaveStatus("Unsaved");
      debouncedUpdates(e);
    },
    autofocus: "end",
  });

  // Hydrate the editor with the content from localStorage.
  useEffect(() => {
    if (editor && content && !hydrated) {
      editor.commands.setContent(content);
      setHydrated(true);
    }
  }, [editor, content, hydrated]);

  return (
    <div
      onClick={() => {
        editor?.chain().focus().run();
      }}
      className="
      relative min-h-[500px] w-full max-w-screen-lg border-stone-200  p-12 px-8 sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:px-12 sm:shadow-lg
      "
    >
      <div
        className="absolute right-5 top-5 mb-5 rounded-lg bg-stone-100 px-2 py-1 text-sm text-stone-400
       border-2bg-theme-lighter dark:bg-theme-darker dark:border-theme-dark-md
      "
      >
        {saveStatus}
      </div>
      {editor && <HeaderTools editor={editor} />}
      {editor && <EditorBubbleMenu editor={editor} />}
      {editor?.isActive("image") && <ImageResizer editor={editor} />}
      {editor && (
        <EditorContent
        editor={editor}
        className="bg-gray-50 dark:bg-theme-dark-xl p-2 my-5 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md"
        style={{ outline: 'none', boxShadow: 'none' }}
      />

      )}
    </div>
  );
}
