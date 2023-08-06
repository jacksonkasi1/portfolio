import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

// ** import icons
import TextLIco from "@icons/text-left";
import TextCIco from "@icons/text-center";
import TextRIco from "@icons/text-right";

export default function TextPosition() {
  return (
    <div className="flex flex-wrap gap-4">
      <Tabs variant={"bordered"} aria-label="Font style tabs">
        <Tab key="text-left" title={<TextLIco />} />
        <Tab key="text-center" title={<TextCIco />} />
        <Tab key="text-right" title={<TextRIco />} />
      </Tabs>
    </div>
  );
}
