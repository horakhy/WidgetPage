import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import React from "react";
import Loading from "../Loading";

interface ScreenshotButtonProps {
  screenshotImage: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

const ScreenshotButton = (props: ScreenshotButtonProps) => {
  const { screenshotImage, onScreenshotTook } = props;
  const [isScreenshoting, setIsScreenshoting] = React.useState(false);

  const handleTakeScreenshot = async () => {
    setIsScreenshoting(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');
    
    onScreenshotTook(base64image);
    setIsScreenshoting(false);

  };

  return screenshotImage ? (
    <button
      className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
      onClick={() => onScreenshotTook(null)}
      type="button"
      style={{
        backgroundImage: `url(${screenshotImage})`,
        backgroundPosition: 'right bottom',
        backgroundSize: 180
      }}
    >
      <Trash weight="fill" className="w-4 h-4" />
    </button>
  ) : (
    <button
      className="p-2 bg-zinc-800 border-transparent hover:bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      onClick={handleTakeScreenshot}
      type="button"
    >
      {isScreenshoting ? (
        <Loading />
      ) : (
        <Camera weight="bold" className="w-6 h-6" />
      )}
    </button>
  );
};

export default ScreenshotButton;
