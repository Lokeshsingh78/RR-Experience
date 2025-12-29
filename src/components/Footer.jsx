import { FaGithub, FaEnvelope, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { href: "https://github.com/Lokeshsingh78", icon: <FaGithub /> },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=lokeshsinghtanwar78@gmail.com",
    icon: <FaEnvelope />,
  },
  { href: "https://x.com/Not_LokeshSingh", icon: <FaXTwitter /> },
];

const Footer = () => {
  return (
    <footer className="relative w-screen bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 bottom-0 h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} Lokesh Singh Tanwar
        </p>

        <div className="flex gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition hover:scale-110 hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p className="text-xs text-white/40">
          Concept project • Not affiliated
        </p>
      </div>
    </footer>
  );
};

export default Footer;
