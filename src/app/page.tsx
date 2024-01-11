"use client";
import { useState } from "react";
import styles from "@/app/ui/loader.module.css";
import { lusitana } from "./ui/fonts";
import { EarthMesh } from "./components/EarthMesh";

export default function Home() {
  // State to manage loading completion
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Function to handle loading completion
  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <main className={`${styles.layout_main}`}>
      <div className={`${styles.section1}`}>
        <h1
          className={`mb-4 text-center  text-6xl font-bold ${lusitana.className}`}
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
            value={loadingComplete ? "100" : "50"} // Update value based on loading completion
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

      {/* Render the video popup when loading is complete */}
      {loadingComplete && (
        <div className={`${styles.videoPopup}`}>
          {/* Add your video component or any content here */}
          <video controls width="400">
            <source src="your-video-source.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </main>
  );
}
