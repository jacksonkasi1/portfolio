import React, { useState, useMemo } from "react";

import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

// ** import lib
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

// ** import shared components
import Paper from "@shared/Paper";

// ** import icons
import PlusIco from "@icons/round-plus";

let clrList = ["#FF4347", "#48D8DD", "#3878F9", "#f60869"];
export default function ColorPlate({ editor }) {
  const [colorList, setColorList] = useState(clrList);
  const [selectedColors, setSelectedColors] = useState(new Set([clrList[0]]));
  const [color, setColor] = useColor("#561ecb");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  const selectedColor = useMemo(
    () => Array.from(selectedColors),
    [selectedColors]
  );

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  const handleUpdateColorList = (colorHex) => {
    setSelectedColors(new Set([colorHex]));
    setColorList((prevColors) => {
      // Check if the color already exists in the list
      if (prevColors.includes(colorHex)) {
        return prevColors;
      }
      // Remove the first color
      const updatedColors = prevColors.slice(1);
      // Add the new color
      return [...updatedColors, colorHex];
    });
  };

  const handleSetColor = (colorHex) => {
    setSelectedColors(new Set([colorHex]));
    editor.chain().focus().setColor(colorHex).run();
  };

  return (
    <>
      <Popover placement="bottom">
        <PopoverTrigger>
          <div className="flex items-center h-fit w-fit cursor-pointer border-2 rounded-md border-theme-light-md dark:border-theme-dark-md">
            <Paper
              className={`p-4 m-1 rounded-sm dark:border-theme-dark-md outline-none !bg-[${selectedColor}]`}
              style={{
                backgroundColor: selectedColor,
              }}
              clickable
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="flex !flex-row rounded-md p-1  dark:border-2 dark:border-theme-dark-md">
          {colorList.map((i) => (
            <Paper
              className={`p-4 rounded-md border-2 mx-1  dark:border-theme-light-lg outline-none !bg-[${i}]`}
              style={{
                backgroundColor: i,
              }}
              clickable
              onClick={() => handleSetColor(i)}
            />
          ))}
          <Paper
            className="p-2 rounded-md border-2 mx-1 dark:border-theme-light-lg outline-none"
            clickable
            onClick={() => handleOpen("opaque")}
          >
            <PlusIco />
          </Paper>
        </PopoverContent>
      </Popover>

      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent className="overflow-hidden max-w-sm">
          <ModalBody className="p-0">
            <ColorPicker color={color} onChange={setColor} />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                handleUpdateColorList(color.hex);
                onClose();
              }}
            >
              Add Color
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
