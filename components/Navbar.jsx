"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Rotate as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import LoadingBar from 'react-top-loading-bar'

export default function Navbar() {
  const pathName = usePathname();

  const [isOpen, setOpen] = useState(false);
  const [progress, setProgress] = useState(0)

  return (
    <>
    <Fade>
    <LoadingBar color="#3282B8" progress={progress} waitingTime={800} onLoaderFinished={() => setProgress(0)} shadow={true} />

      <div
        className={`w-full  md:h-[16vh] h-[10vh] font-inter flex items-center justify-between`}
      >
        <div className=" flex justify-center items-center  ">
          <img
            src="/ss/logo.svg"
            className="h-[50px] md:h-[70px] absolute top-4 md:top-5 left-5"
          />
        </div>
        
        <nav className=" p-7  font-inter font-semibold text-lg gap-12 font-xl flex items-center justify-end invisible md:visible absolute top-0 right-5" >
          <Link href="/" className={`hover:text-primary ${pathName == "/" ? "active" : ""} `} onClick={() => setProgress(100)}>
            Home
          </Link>
          <Link href="/about" className={`hover:text-primary ${pathName == "/about" ? "active" : ""}`} onClick={() => setProgress(100)}>
            About
          </Link>
          <Link
            href="/changelog"
            className={`hover:text-primary ${pathName == "/changelog" ? "active" : ""}`} onClick={() => setProgress(100)}
          >
            Changelog
          </Link>
          
          <Link href="/blog" className={`hover:text-primary ${pathName == "/blog" ? "active" : ""}`} onClick={() => setProgress(100)}>
            Blog
          </Link>
          <Link href="/team" className={`hover:text-primary ${pathName == "/team" ? "active" : ""}`} onClick={() => setProgress(100)}>
            Team
          </Link>
          <Link
            href="/download"
            className={pathName == "/download" ? "active" : ""}
            onClick={() => setProgress(100)}
          >
            <button
              className={` p-[2px] h-12 w-36 rounded-full bg-gradient-to-r from-secondary to-primary   hover:bg-primary hover:text-white ${
                pathName == "/download"
                  ? "text-white bg-primary"
                  : "border-primary"
              }`}

            >
              <div className={` h-full w-full rounded-full  bg-gray-800 grid place-items-center hover:bg-gradient-to-r hover:from-darkersecondary hover:to-secondary 
              ${
                pathName == "/download"
                  ? "bg-gradient-to-r from-secondary to-primary"
                  : ""}`}>
              <h1>Try DroidX-UI</h1>
   
   </div>
            </button>
          </Link>
        </nav>
        <div className="absolute right-5 top-3  md:invisible visible  ">
          <Hamburger color="#3282B8" toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      </Fade>

      <div
        className={`w-full  h-[100vh] absolute transition-all z-50 bg-secondary ${
          isOpen ? "top-[10vh]" : "top-[-100vh]"
        }`}
      >

        <nav className="font-inter font-bold text-2xl gap-6  flex flex-col text-center mt-10 z-50 ">
        <Link
            href="/"
            className={` rounded-full  text-white  p-4  ${
              pathName == "/" ? "active" : ""
            }`}
            onClick={() => setOpen(!isOpen)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={` rounded-full  text-white  p-4  ${
              pathName == "/about" ? "active" : ""
            }`}
            onClick={() => setOpen(!isOpen)}
          >
            About
          </Link>
          <Link
            href="/changelog"
            className={` rounded-full  text-white  p-4  ${
              pathName == "/changelog" ? "active" : ""
            }`}
            onClick={() => setOpen(!isOpen)}
          >
            Changelog
          </Link>

          
          <Link
            href="/blog"
            className={` rounded-full  text-white  p-4  ${
              pathName == "/blog" ? "active" : ""
            }`}
            onClick={() => setOpen(!isOpen)}
          >
            Blog
          </Link>
          <Link
            href="/team"
            className={` rounded-full  text-white  p-4  ${
              pathName == "/team" ? "active" : ""
            }`}
            onClick={() => setOpen(!isOpen)}
          >
            Team
          </Link>
          <Link
            href="/download"
            className={`col-span-2 ${pathName == "/download" ? "active" : ""}`}
            onClick={() => setOpen(!isOpen)}
          >
            <button className="p-4  border rounded-xl border-primary hover:bg-secondary hover:text-white">
              Try DroidX-UI
            </button>
          </Link>
        </nav>
      </div>
    </>
  );
}

// export default Navbar;
