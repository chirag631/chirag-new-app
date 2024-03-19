import React from "react";
import { Text, Img } from "./..";

export default function SpalshFourServicing({
  servicing = "Servicing",
  coffeeonthe = "Coffee on the Go",
  description = "Enjoy your daily dose of luck on your way to the office. Our coffee is ready to serve your taste buds in no time. A statement in its might, carry your fortune in style.",
  ...props
}) {
  return (
    <div {...props}>
      <div className="self-stretch h-[498px] bg-black-900_3f relative rounded-[15px]">
        <Img
          src="images/img_nathan_dumlao_y_1.png"
          alt="nathandumlaoy"
          className="justify-center h-[498px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[15px]"
        />
        <div className="flex flex-col items-start justify-center w-full h-full gap-[9px] left-0 bottom-0 right-0 top-0 p-3.5 m-auto bg-gradient absolute rounded-[15px]">
          <Text size="md" as="p" className="mt-[309px] ml-1.5 md:ml-0 !text-white-A700 uppercase">
            {servicing}
          </Text>
          <Text size="2xl" as="p" className="ml-1.5 md:ml-0 !text-gray-400 !font-ranade">
            {coffeeonthe}
          </Text>
          <Text as="p" className="w-[98%] md:w-full ml-1.5 md:ml-0 !text-white-A700 !font-normal">
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
}
