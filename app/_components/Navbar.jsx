"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'

const sections = ["intro", "work", "skills", "contact"];

export const Topbar = () => {
  return (
    <nav className='p-14'>

      <Link href="/" className='hover:opacity-70 duration-200'>
        <Image
          src="/port-logo.svg"
          width={200}
          height={47}
          alt="Amartya Chowdhury"
        />
      </Link>

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
  // const indicatorStyle = itemRefs.current[activeIdx]
  //   ? {
  //     top: itemRefs.current[activeIdx].offsetTop + itemRefs.current[activeIdx].offsetHeight / 2,
  //   }
  //   : {};

  return (
    <nav className='fixed top-1/2 right-10 -translate-y-1/2'>

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
          {/*
          <li className="hover:text-foreground/70 duration-200"><Link href="#intro">intro</Link></li>
          <li className="hover:text-foreground/70 duration-200 text-foreground/50"><Link href="#work">work</Link></li>
          <li className="hover:text-foreground/70 duration-200 text-foreground/50"><Link href="#skills">skills</Link></li>
          <li className="hover:text-foreground/70 duration-200 text-foreground/50"><Link href="#contact">contact</Link></li>
          */}
        </ul>
      </div>

    </nav>
  )
}
