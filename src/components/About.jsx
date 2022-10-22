export default function About() {
  return (
    <div className="min-h-screen text-white">
      <div className="pt-32">
        <div className="flex flex-row items-center gap-4 whitespace-nowrap text-light">
          <h3 className="text-3xl">About Me</h3>
          <hr className="text-4xl w-60" />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2">
            <h1 className="text-2xl">
              Hey, Gopal here! I&apos;m your friendly neighbourhood geek!
            </h1>
          </div>
          <div className="mt-5 ml-5 relative border-2 border-light w-[80%] h-[80%] sm:w-80 sm:h-80 aspect-square rounded-md">
            <img
              className="object-cover -translate-x-5 hover:translate-x-0 hover:translate-y-0 transition-transform duration-500 ease-in-out -translate-y-5 rounded-md"
              src="/Gopal.webp"
              alt="Headshot"
            /></div>
            {/* <div className="border-2 border-light -z-10 absolute top-5 left-5 rounded-md w-[80%] h-auto sm:w-80 sm:h-80"></div> */}
        </div>
      </div>
    </div>
  );
}
