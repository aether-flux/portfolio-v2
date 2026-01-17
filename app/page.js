import Image from "next/image";
import Landing from "./_components/Landing";
import { Sidenav, Topbar } from "./_components/Navbar";
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

      <Sidenav />

      <Topbar />

      <Landing />

      <Work />

      <Skills />

      <Contact />

      <footer className="px-14 py-8 border-t-[1px] border-foreground/20">
        <span className="font-mono font-light text-lg text-center uppercase">Made with ❤️ and 🦀 by Amartya Chowdhury</span>
      </footer>
    </>
  );
}
