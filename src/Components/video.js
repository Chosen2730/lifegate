import React, { useEffect, useRef } from "react";
import video from "../assets/videos/video2.mp4";
export default function Video() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className=''>
      <div className='relative'>
        <video
          className='w-screen min-h-[850px] object-cover'
          playsInline
          loop
          muted
          controls={false}
          alt='video'
          src={video}
          ref={videoEl}
        />
        <div className='bg-gray-900 opacity-50 w-full h-full absolute top-0 right-0' />
      </div>
    </div>
  );
}
