// VideoPlayer.tsx
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import VideoPopup from "./VideoPopup";

interface VideoPlayerProps {
  showPopup: boolean;
  handleClosePopup: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  showPopup,
  handleClosePopup,
}) => {
  const [loading, setLoading] = useState(true);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);


  useEffect(() => {
    const videoUrl = "/mauritius-zoom.mp4"; // Replace with the actual path to your video file

    const xhr = new XMLHttpRequest();
    xhr.open("GET", videoUrl, true);
    xhr.responseType = "blob";

    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = Math.round((event.loaded / event.total) * 100);
        console.log(`Loading progress: ${progress}%`);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        // Video loaded successfully
        const videoBlob = xhr.response;
        const videoUrlBlob = URL.createObjectURL(videoBlob);
        console.log("Video loaded successfully:", videoUrlBlob);

        setVideoUrl(videoUrlBlob);
        setLoading(false);
      } else {
        console.error("Failed to load video. Status:", xhr.status);
      }
    };

    xhr.onerror = () => {
      console.error("Failed to load video.");
    };

    xhr.send();
  }, []);

  return (
    <div>
      {showPopup && (
        <VideoPopup
          videoUrl={videoUrl || ""}
          loading={loading}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
