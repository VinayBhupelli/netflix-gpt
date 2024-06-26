import React from "react";

const VideoTitle = ({ title, overview }) => {
  const addEllipsis = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      const shortenedText = words.slice(0, maxWords).join(" ") + "......";
      return shortenedText;
    }
    return text;
  };
  return (
    <div className="w-screen aspect-video absolute pt-[20%] px-14 gap-3 text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <h2 className="py-6 text-xl w-3/12">{addEllipsis(overview, 30)}</h2>
      <div className="buttons">
        <button className="h-10 px-5 mx-6 bg-white text-gray-600 text-xl rounded-lg hover:bg-gray-500 hover:text-white">
          PlayMore
        </button>
        <button className="h-10 px-5 bg-gray-600 text-white text-xl rounded-lg hover:bg-white hover:text-gray-600">
          Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
