import React, { useState, useMemo } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import DownLineIco from "@icons/down-line";

const FontList = [
  "Arial",
  "Comic Sans",
  "Courier",
  "Georgia",
  "Helvetica",
  "Impact",
  "Ubuntu",
];

export default function App() {
  const [selectedKeys, setSelectedKeys] = useState(
    new Set([FontList[0] + " "])
  );

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          className="capitalize"
          variant="shadow"
          color="default"
          radius="sm"
          endContent={<DownLineIco />}
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        aria-label="Single selection actions"
        selectionMode="single"
        variant="solid"
        color={"default"}
      >
        {FontList.map((key) => (
          <DropdownItem key={key}>{key.replace("_", " ")}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
