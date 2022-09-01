import { useState } from "react";
export default function Navbar() {
  return (
    <div className="mx-2 md:mx-6 mt-4 flex flex-row justify-between sticky text-light">
      <h1></h1>
      <div className="flex flex-row gap-4">
        <a href="#about">About Me</a>
        <a href="#experience">Experience</a>
      </div>
    </div>
  );
}
