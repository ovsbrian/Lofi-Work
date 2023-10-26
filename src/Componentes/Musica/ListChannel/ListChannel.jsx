import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { videosLofi } from "./ListMusic";

export const ListChannel = ({ setYoutubeID, setImgID, setVolume }) => {
  const [selectedKeys, setSelectedKeys] = useState(["Lofi Hip Hop"]);
  const [arrow, arrowState] = useState(false);

  const cambiarVideoLofi = (key) => {
    setSelectedKeys([key]);
    const newLofi = videosLofi.find(
      (video) => video.nameRadio == key.currentKey
    );
    setVolume(100);
    setYoutubeID(newLofi.radioID);
    setImgID(newLofi.setImgID);
    localStorage.setItem("nombrepista", key.currentKey);
  };

  const nombrePista = localStorage.getItem("nombrepista");

  return (
    <>
      <Dropdown onOpenChange={() => arrowState(!arrow)}>
        <DropdownTrigger>
          <Button
            variant="bordered"
            className="capitalize p-1 m-0 border-none min-w-4 h-4 bg-[#c4b196]"
          >
            {nombrePista ? nombrePista : selectedKeys}
            {!arrow ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </DropdownTrigger>

        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={cambiarVideoLofi}
        >
          {videosLofi.map((video) => (
            <DropdownItem key={video.nameRadio}>{video.nameRadio}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
