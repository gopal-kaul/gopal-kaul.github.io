import { FiGithub, FiLinkedin } from "react-icons/fi/index";
import { FaDiscord, FaSpotify } from "react-icons/fa/index";

export default function Overlay() {
  return (
    <div className="hidden md:block text-light">
      <div className="fixed z-10 bottom-0 left-20">
        <div className="flex flex-col gap-4 items-center ">
          <a
            rel="noreferrer noopener"
            href="https://github.com/gopal-kaul/"
            className="hover:-translate-y-1 hover:text-neonBlue hover:scale-110 transition-all"
          >
            <FiGithub />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/gopal-kaul/"
            className="hover:-translate-y-1 hover:text-neonBlue hover:scale-110 transition-all"
          >
            <FiLinkedin />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://open.spotify.com/user/1xr1nqgy1t0n47dhj23h1xaev"
            className="hover:-translate-y-1 hover:text-neonBlue hover:scale-110 transition-all"
          >
            <FaSpotify />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://discord.com/users/545099023976235029"
            className="hover:-translate-y-1 hover:text-neonBlue hover:scale-110 transition-all"
          >
            <FaDiscord />
          </a>
          <div className="border-l-2 border-light h-24"></div>
        </div>
      </div>
      <div className="fixed z-10 bottom-0 right-20">
        <div className="flex flex-col gap-4 items-center">
          <a
            rel="noreferrer noopener"
            className="hover:-translate-y-1 hover:text-neonBlue transition-all"
            href="mailto:gopalkaul5@gmail.com"
          >
            <h2 className="mb-20 rotate-90">gopalkaul5@gmail.com</h2>
          </a>
          <div className="border-l-2 border-light h-24"></div>
        </div>
      </div>
    </div>
  );
}
