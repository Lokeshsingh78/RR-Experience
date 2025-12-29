import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const CLOUDINARY_VIDEOS = [
  "https://res.cloudinary.com/demhugr1s/video/upload/q_auto,f_auto/v1766996630/hero-1_zf7fhr.mp4",
  "https://res.cloudinary.com/demhugr1s/video/upload/q_auto,f_auto/v1766995869/hero-2_kff4gd.mp4",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = CLOUDINARY_VIDEOS.length;
  const nextVdRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos >= totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos, totalVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prev) => (prev % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (!hasClicked) return;

      gsap.set("#next-video", { visibility: "visible" });

      gsap.to("#next-video", {
        scale: 1,
        width: "100%",
        height: "100%",
        duration: 1,
        ease: "power1.inOut",
        onStart: () => nextVdRef.current?.play(),
      });

      gsap.from("#current-video", {
        scale: 0,
        duration: 1.5,
        ease: "power1.inOut",
      });
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0%",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) =>
    CLOUDINARY_VIDEOS[(index - 1 + totalVideos) % totalVideos];

  return (
    <div id="home" className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 hover:scale-100 hover:opacity-100"
              >
                <video
                  src={getVideoSrc(currentIndex + 1)}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  id="current-video"
                  className="size-64 scale-150 object-cover"
                  onLoadedMetadata={handleVideoLoad}
                />
              </div>
            </VideoPreview>
          </div>

          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            playsInline
            preload="metadata"
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover"
            onLoadedMetadata={handleVideoLoad}
          />

          <video
            src={getVideoSrc(currentIndex)}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute left-0 top-0 size-full object-cover"
            onLoadedMetadata={handleVideoLoad}
          />
        </div>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              eleva<b>t</b>e
            </h1>

            <p className="mb-5 max-w-64 text-blue-100">
              Enter the World of Luxury <br /> Experience Bespoke Excellence
            </p>

            <a
              href="https://github.com/Lokeshsingh78"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="Explore Code"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-yellow-300 flex-center gap-1"
              />
            </a>
          </div>
        </div>
      </div>

      <h1
        className="special-font hero-heading absolute bottom-5 right-5 z-[60] text-white pointer-events-none will-change-transform translate-z-0"
        style={{
          textShadow: "0 10px 0 rgba(0,0,0,0.9)",
        }}
      >
        R<b>O</b>LLS
      </h1>
    </div>
  );
};

export default Hero;
