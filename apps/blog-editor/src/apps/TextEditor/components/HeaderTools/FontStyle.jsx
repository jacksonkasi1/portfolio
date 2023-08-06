import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

// ** import icons
import TextBIco from "@icons/text-b";
import UnderlineIco from "@icons/underline";
import ItalicIco from "@icons/italic";
import QuotesIco from "@icons/quotes";

export default function FontStyle() {
  return (
    <div className="flex flex-wrap gap-4">
      <Tabs variant={"bordered"} aria-label="Font style tabs">
        <Tab key="text-b" title={<TextBIco />} />
        <Tab key="underline" title={<UnderlineIco />} />
        <Tab key="italic" title={<ItalicIco />} />
        <Tab key="quotes" title={<QuotesIco />} />
      </Tabs>
    </div>
  );
}
