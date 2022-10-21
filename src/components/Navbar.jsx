export default function Navbar() {
  return (
    <div className="px-2 md:px-6 top-0 left-0 pt-4 flex flex-row justify-between fixed text-light w-full">
      <h1></h1>
      <div className="flex flex-row gap-4">
        <a href="#about">About Me</a>
        <a href="#experience">Experience</a>
        <a href="blog">Blog</a>
      </div>
    </div>
  );
}
