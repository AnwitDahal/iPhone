import React, { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants/index";
import gsap from "gsap";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    islastVideo: false,
    isPlaying: false,
  });

  const { isEnd, startPlay, videoId, isPlaying, islastVideo } = video;

  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;
    if(span[videoId]){
        let anim=gsap.to(span[videoId],)
    }
  }, [videoId, startPlay]);
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((value, index) => (
          <div key={index} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full text-center rounded-3xl overflow-hidden bg-black">
                <video id="video" playsInline={true} preload="auto" muted>
                  <source src={value.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {value.textLists.map((value, index) => (
                  <p key={index} className="md:text-xl font-medium">
                    {value}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
