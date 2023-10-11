import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export const ListChannel = ({ setYoutubeID, setImgID }) => {
  const [selectedKeys, setSelectedKeys] = useState(["Lofi Hip Hop"]);
  const [arrow, arrowState] = useState(false);
  const videosLofi = [
    {
      nameRadio: "Lofi Hip Hop",
      radioID: "jfKfPfyJRdk",
      setImgID: "https://media.tenor.com/0hjOGLFaQa0AAAAd/lofi-girl-lofi.gif",
    },
    {
      nameRadio: "Jazz Lofi",
      radioID: "HAZoLuME-PU",
      setImgID: "https://media.tenor.com/MMQLFgdTW4sAAAAd/music-anime-anime.gif",
    },
    {
      nameRadio: "Coffee Shop Radio",
      radioID: "lP26UCnoH9s",
      setImgID: "https://media.tenor.com/avGMW8rlSt0AAAAd/cafe.gif",
    },
    {
      nameRadio: "Chill radio",
      radioID: "tyVQk-BAWms",
      setImgID: "https://media.tenor.com/mZ2TFt7WPD0AAAAC/baby.gif",
    },
    {
      nameRadio: "Lofi & Rain",
      radioID: "0ba7dl40tSQ",
      setImgID: "https://media.tenor.com/Ep_QVNj--2gAAAAd/lick.gif",
    },
  ];

  const cambiarVideoLofi = (key) => {
    setSelectedKeys([key]);

    const newLofi = videosLofi.find(
      (video) => video.nameRadio == key.currentKey
    );
    setYoutubeID(newLofi.radioID);
    setImgID(newLofi.setImgID);
  };

  return (
    <>
      <Dropdown onOpenChange={() => arrowState(!arrow)}>
        <DropdownTrigger>
          <Button
            variant="bordered"
            className="capitalize p-1 m-0 border-none min-w-4 h-4 justify-between"
          >
            {selectedKeys}
            {!arrow ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            )}
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
