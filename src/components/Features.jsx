import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    setTransformStyle(
      `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`
    );
  };

  const handleMouseLeave = () => setTransformStyle("");

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        playsInline
        preload="metadata"
        className="absolute left-0 top-0 size-full object-cover object-center"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => (
  <section
    id="models"
    className="bg-black pb-32 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.18),transparent_70%)]"
  >
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 pt-16 pb-24">
        <h2 className="special-font text-4xl font-light leading-tight text-blue-50 sm:text-5xl md:text-6xl">
          Into the World of <br />
          <span className="text-white">Bespoke Luxury</span>
        </h2>
        <p className="mt-8 max-w-md font-circular-web text-lg text-blue-50 opacity-60">
          Immerse yourself in a realm of unparalleled craftsmanship where every
          detail is meticulously curated to create an extraordinary automotive
          masterpiece tailored exclusively for you.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="https://res.cloudinary.com/demhugr1s/video/upload/q_auto,f_auto/v1766996621/feature-1_ii80wi.mp4"
          title={<>Phan<b>t</b>om</>}
          description="The ultimate expression of luxury, where timeless elegance meets cutting-edge innovation for the world's most discerning individuals."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="https://res.cloudinary.com/demhugr1s/video/upload/q_auto,f_auto/v1766995585/feature-2_mtj5rc.mp4"
            title={<>Ecst<b>a</b>sy</>}
    description="The Spirit of Ecstasy — a timeless masterpiece representing Rolls-Royce’s uncompromising pursuit of perfection."

          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="https://res.cloudinary.com/demhugr1s/video/upload/q_auto,f_auto/v1766996375/feature-3_hu6mzu.mp4"
            title={<>Gh<b>o</b>st</>}
            description="Where modern minimalism meets timeless sophistication, delivering a refined driving experience like no other."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="https://res.cloudinary.com/demhugr1s/video/upload/q_auto,f_auto/v1766996288/feature-4_ecmibt.mp4"
            title={<>Spe<b>c</b>tre</>}
            description="The world's first ultra-luxury electric super coupé - redefining performance with silent, effortless power."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 relative h-[19rem] overflow-hidden">
          <video
            src="https://res.cloudinary.com/demhugr1s/video/upload/q_auto,f_auto/v1766996372/feature-6_tizhmb.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 flex size-full flex-col justify-between p-5">
            <h1 className="bento-title special-font max-w-64 text-white">
              Des<b>i</b>gn that defines wh<b>a</b>t’s next.
            </h1>
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 relative h-[19rem] overflow-hidden">
          <video
            src="https://res.cloudinary.com/demhugr1s/video/upload/q_auto,f_auto/v1766996506/feature-5_euohhb.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
