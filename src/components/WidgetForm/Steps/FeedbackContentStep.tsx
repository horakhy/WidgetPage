import { ArrowLeft } from "phosphor-react";
import React, { FormEvent, useState } from "react";
import { CloseButton } from "../../CloseButton";
import ScreenshotButton from "../ScreenshotButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  OnFeedbackSent: () => void;
  onFeedbackRestart: () => void;
}

const FeedbackContentStep = ({
  feedbackType,
  OnFeedbackSent,
  onFeedbackRestart,
}: FeedbackContentStepProps) => {
  const [screenshotImage, setScreenshotImage] = useState<string | null>(null);
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [comment, setComment] = useState<string>("");
 

  const handleSubmitFeedback = (event: FormEvent) => {
    event.preventDefault();
    console.log({screenshotImage, comment});

    OnFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          onClick={onFeedbackRestart}
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            className="h-6 w-6"
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-400 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Digite sua mensagem aqui"
          onChange={event => setComment(event.target.value)}
          />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton screenshotImage={screenshotImage} onScreenshotTook={setScreenshotImage} />
          <button
            disabled={!comment}
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar
          </button>
        </footer>
      </form>

      {/* <div className="flex py-8 gap-2 w-full"></div> */}
    </>
  );
};

export default FeedbackContentStep;
