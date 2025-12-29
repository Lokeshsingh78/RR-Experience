import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen w-screen items-center justify-center px-6 md:px-10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-black py-20 text-blue-50">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="mb-6 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-white/60">
            The Next Era
          </span>

          <AnimatedTitle
            title="let&#39;s c<b>r</b>aft the <br /> ultimate era of <br /> l<b>u</b>xury t<b>o</b>gether."
            className="special-font w-full !text-4xl !font-black !leading-[.9] sm:!text-5xl"
          />

          <p className="mt-6 max-w-md font-circular-web text-sm text-white/60">
            Innovation, precision, and experience — let’s build something
            timeless and future-ready together.
          </p>

          <div className="mt-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
