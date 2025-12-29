import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      })
      .to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
      });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Rolls-Royce
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the pinnacle of <br /> automotive <b>l</b>uxury"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>
            Where Excellence Meets Elegance—Your Journey, Now Extraordinary
          </p>
          <p className="text-gray-500">
            Rolls-Royce crafts bespoke masterpieces for the world's most
            discerning clientele, uniting timeless British craftsmanship with
            cutting-edge innovation
          </p>
        </div>
      </div>

      <div id="clip" className="h-dvh w-screen">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
