import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
import { Popover } from '@headlessui/react'

export const Widget = () => {
  // const [isWidgetOpen, setisWidgetOpen] = useState<boolean>(false);

  // const toggleWidgetVisibility = () => {
  //   setisWidgetOpen(!isWidgetOpen);
  // }
  
  return (
    <Popover className="absolute bottom-5 right-5">
      <Popover.Panel>Hello Brudah</Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500">
          <span className="pl-2">Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
};

export default Widget;
