import Typewriter from "typewriter-effect";
export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="pt-32 md:pt-40 text-white">
        <h1 className="text-xl text-neonBlue">Hey, my name is</h1>
        <h1 className="text-6xl md:text-7xl hover:text-neonBlue">Gopal Kaul.</h1>
        <div className="flex flex-row text-2xl md:text-4xl whitespace-nowrap">
          <h2>I&apos;m a</h2> &nbsp;
          <div className="text-light">
            <Typewriter
              options={{
                autoStart: true,
                strings: [
                  "Full Stack Developer.",
                  "JavaScript Developer.",
                  "Gamer.",
                  "Linux Enthusiast.",
                ],
                loop: true,
                delay: 75,
              }}
            />
          </div>
        </div>
        <h2 className="pt-16 text-xl md:text-2xl text-white">
          I&apos;m a Computer Science Engineer pursuing my degree from Osmania
          University, Hyderabad. <br />I am a Full Stack Web Developer who loves
          React. I also am an avid Arch Linux user.
          <br />
        </h2>
      </div>
    </div>
  );
}
