import React from "react";
import { Button, Img, Text } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex md:flex-col self-start justify-center items-center w-full mb-[3px] mx-auto md:p-5 max-w-[1392px]">
        <Img src="images/img_logo_gray_400_52x247.svg" alt="logo_one" className="h-[52px] md:w-full md:h-auto" />
        <ul className="flex justify-center mb-3 ml-[286px] gap-[34px] md:ml-0 md:flex-wrap">
          <li>
            <a href="/">
              <Text size="md" as="p" className="!text-teal-900 !font-ranade">
                HOME
              </Text>
            </a>
          </li>
          <li>
            <a href="contactus">
              <Text size="md" as="p" className="!text-teal-900 !font-ranade">
                COFFEE PODS
              </Text>
            </a>
          </li>
          <li>
            <a href="webpagenew">
              <Text size="md" as="p" className="!text-teal-900 !font-ranade">
                ABOUT US
              </Text>
            </a>
          </li>
        </ul>
        <Button
          shape="round"
          leftIcon={<Img src="images/img_icon_iconoir.svg" alt="icon / iconoir / page" />}
          className="mb-1 ml-[317px] gap-[5px] md:ml-0 sm:px-5 min-w-[216px]"
        >
          SEE DIGITAL MENU
        </Button>
      </div>
    </header>
  );
}
