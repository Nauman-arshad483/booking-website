// VideoPopup.tsx
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

interface VideoPopupProps {
  videoUrl: string;
  loading: boolean;
  onClose: () => void;
}

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-x"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const VideoPopup: React.FC<VideoPopupProps> = ({ videoUrl, loading, onClose }) => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  return (
    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
      <div className="relative mx-auto max-w-7xl">
        <div className="bg-black/70 p-2 rounded-lg shadow-lg">
          <div className="mt-4 flex justify-end">
            <button className=" text-white px-4 py-2 rounded" onClick={onClose}>
              <CloseIcon />
            </button>
          </div>{" "}
          {loading ? (
            <p>Loading video...</p>
          ) : (
            <>
              <ReactPlayer
                ref={playerRef}
                width="100%"
                height="700px"
                url={videoUrl}
                controls={true}
                light={false}
                pip={true}
                playing={playing}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
