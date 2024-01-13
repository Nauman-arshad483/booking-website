"use client";
import { useState, useEffect } from "react";
import styles from "@/app/ui/loader.module.css";
import { lusitana } from "./ui/fonts";
import { EarthMesh } from "./components/EarthMesh";
import VideoPlayer from "./components/VideoPlayer";

export default function Home() {
  const [progress, setProgress] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    console.log("Closing popup");
    setProgress(0);
    setShowPopup(false);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : 100
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      handleOpenPopup();
    }
  }, [progress, handleOpenPopup]);

  return (
    <main className={`${styles.layout_main}`}>
      <div className={`${styles.section1}`}>
        <h1
          className={`mb-4 text-center text-6xl font-bold ${lusitana.className}`}
        >
          About MAURITIUS
        </h1>
        <h2 className="text-xl font-semibold">
          Welcome to Mauritius{" "}
          <span
            style={{
              background: "linear-gradient(45deg, #ff8a00, #e52e71)",
              padding: "5px 10px",
              borderRadius: "5px",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Hubair
          </span>
        </h2>
        <p className="text-[linear-gradient(45deg, #ff8a00, #e52e71)] text-lg mt-4 tracking-wide">
          The new way to travel.
        </p>
        <div className={`relative mt-4 w-full ${styles.progress_container}`}>
          <progress
            className={`w-full ${styles.progress_bar}`}
            value={progress}
            max="100"
          ></progress>
          <span
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ${styles.progress_text}`}
          >
            LOADING
          </span>
        </div>
      </div>

      <div className={`${styles.section2}`}>
        <div className={`flex ${styles.earth_container}`}>
          <EarthMesh />
        </div>
      </div>

      <div className={`${styles.videoPopup}`}>
        <div className={`${styles.videoPopup}`}>
          <VideoPlayer
            showPopup={showPopup}
            handleClosePopup={handleClosePopup}
          />
        </div>
      </div>
    </main>
  );
}
