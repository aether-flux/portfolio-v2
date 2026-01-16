import Image from "next/image";
import Landing from "./_components/Landing";
import { Topbar } from "./_components/Navbar";
import Work from "./_components/Work";
import Skills from "./_components/Skills";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <>

      {/*
      <div className='flex blur-[900px] fixed top-[-400px] right-[-300px]'>
        <div className='w-[900px] h-[900px] bg-accent/25 rounded-full'></div>
      </div>
      */}

      {/*
      <div className='blur-[100px] fixed -top-18 -right-14 opacity-50'>
        <div className='blur-[100px]'>
          <div className="blur-[100px]">
            <div className='blur-[100px]'>
              <Image
                src="/glow.svg"
                width={1200}
                height={1200}
                alt="Glowing light"
              />
            </div>
          </div>
        </div>
      </div>
      */}

      <Topbar />

      <Landing />

      <Work />

      <Skills />

      <Contact />
    </>
  );
}
