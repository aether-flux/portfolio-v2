"use client";

import { Menu, X } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'

const sections = ["intro", "work", "skills", "contact"];

export const Topbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open])

  return (
    <>
      <nav className='px-5 md:px-14 p-5 md:p-7 flex items-start justify-between'>

        <div className='flex flex-col gap-3'>
          <Link href="/" className='hover:opacity-70 duration-200 w-fit block'>
            <Image
              src="/port-logo.svg"
              width={200}
              height={47}
              className="w-[120px] md:w-[200px]"
              alt="Amartya Chowdhury"
            />
          </Link>
          <span className='font-mono font-light text-sm md:text-md uppercase hover:opacity-70 duration-200'>{'> '}I use Arch BTW</span>
        </div>

        <button onClick={() => setOpen(!open)} className="z-[170] md:hidden">
          {open 
            ? <X className="w-4 h-4 text-foreground hover:text-foreground/70 duration-200 cursor-pointer md:hidden" /> 
            : <Menu className="w-4 h-4 text-foreground hover:text-foreground/70 duration-200 cursor-pointer md:hidden" />}
        </button>

      </nav>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export const MobileNav = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-[125] bg-background/70 backdrop-blur-md transition-transform duration-200 ease-in-out
      ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="h-full flex flex-col justify-center px-8">

        <ul className="flex flex-col gap-8 text-4xl font-sans uppercase tracking-wide">
          {sections.map((id) => (
            <li key={id}>
              <Link
                href={`#${id}`}
                onClick={onClose}
                className="hover:opacity-70 transition-opacity"
              >
                {id}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export const MiniTopbar = () => {
  return (
    <nav className='px-5 md:px-14 p-5 md:p-7'>

      <div className='flex flex-col gap-3'>
        <Link href="/" className='hover:opacity-70 duration-200 w-fit block'>
          <Image
            src="/port-logo.svg"
            width={200}
            height={47}
            className="w-[120px] md:w-[200px]"
            alt="Amartya Chowdhury"
          />
        </Link>
        <span className='font-mono font-light text-sm md:text-md uppercase hover:opacity-70 duration-200'>{'> '}I use Arch BTW</span>
      </div>

    </nav>
  )
}

export const Sidenav = () => {
  const [active, setActive] = useState("intro");
  const [indicator, setIndicator] = useState({ top: 0 });
  const itemRefs = useRef([]);

  useEffect(() => {
    const update = () => {
      const idx = sections.indexOf(active);
      const el = itemRefs.current[idx];
      if (!el) return;

      setIndicator({
        top: el.offsetTop + el.offsetHeight / 2
      });
    }

    requestAnimationFrame(update);
  }, [active])

  useEffect(() => {
    const observers = sections.map((id) => {
      const el = document.getElementById(id);

      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          root: null,
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o && o.disconnect())
  }, [])

  const activeIdx = sections.indexOf(active);

  return (
    <nav className='fixed top-1/2 right-10 -translate-y-1/2 hidden md:block'>

      <div className="relative">
        <span
          className='absolute -left-6 h-[2px] w-4 bg-foreground transition-all duration-200 ease-in-out'
          style={indicator}
        />

        <ul className='flex flex-col gap-2 font-sans font-medium text-xl uppercase leading-[110%] tracking-[10%]'>
          {sections.map((id, i) => (
            <li key={id} ref={(el) => (itemRefs.current[i] = el)} className={`hover:text-foreground/70 duration-200 ${active === id ? "text-foreground" : "text-foreground/40"}`}>
              <Link href={`#${id}`}>{id}</Link>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  )
}
