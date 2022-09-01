export default function About() {
  return (
    <div className="min-h-screen text-white">
      <div className="pt-32">
        <div className="flex flex-row items-center gap-4 whitespace-nowrap text-light">
          <h3 className="text-3xl">About Me</h3>
          <hr className="text-4xl w-60" />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-1/2">
            <h1 className="text-2xl">
              This is some placeholder text which contains information about me.
            </h1>
          </div>
          <div className="w/1-2">
            <div className="w-80 h-80 relative">
              <img
                className="object-contain z-10 rounded-md"
                src="/Gopal.webp"
                alt="Headshot"
              />
              <div className="border-2 border-light -z-10 absolute top-5 left-5 rounded-md w-80 h-80"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
