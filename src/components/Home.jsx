import Typewriter from "typewriter-effect";
export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="pt-32 md:pt-40 text-white">
        <h1 className="text-xl text-neonBlue">Hey, my name is</h1>
        <h1 className="text-7xl">Gopal Kaul.</h1>
        <div className="flex flex-row text-4xl">
          <h2>I&apos;m a</h2> &nbsp;
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
        <h2>Future Oracle Employee</h2>
      </div>
    </div>
  );
}
