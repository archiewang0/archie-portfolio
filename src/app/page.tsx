"use client";
// import { Inter } from 'next/font/google'
import { HomePageCode } from "@/helpers/documentation-code";
import TypingCodeAnimate from "@/components/TypingCodeAnimate";
import AccordionSection from "@/components/ui/Accordion";
import { ScrollDown } from "@/components/ui/ScrollDown";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { useCallback } from "react";
import { projects, sideProjects } from "@/helpers/projects";
import { useTheme } from "next-themes";

const inter = Inter({ subsets: ["vietnamese"] });

export default function Home() {
  const { theme: applicationTheme } = useTheme();
  const [show, setShow] = useState(false);

  const animationFinsihHanlder = useCallback(() => {
    setShow(true);
  }, []);

  const datas = projects(
    applicationTheme === "system" ? "light" : applicationTheme
  );

  const sideProjectdatas = sideProjects(
    applicationTheme === "system" ? "light" : applicationTheme
  );

  return (
    <>
      <div className=" relative z-10 container max-w-7xl mx-auto w-full ">
        {/* 主視覺 */}
        <div className="pt-24 sm:pt-0 relative gap-6 flex flex-col justify-start items-start">
          <div className=" h-1/4 sm:h-1/5"></div>
          <TypingCodeAnimate
            classname={`sm:text-7xl sm:leading-relaxed text-3xl`}
            animated
            code={HomePageCode}
            show
            animationFinsihEvent={animationFinsihHanlder}
          />
        </div>

        {/* 公司專案 */}
        <div
          className={cn([
            " relative top-2 mt-10 transition-all",
            show ? "opacity-100 top-0" : "opacity-0",
          ])}
        >
          <h3
            className={cn([
              "text-center sm:text-left text-2xl sm:text-3xl dark:text-slate-300 mb-5 sm:mb-8 font-black",
              inter.className,
            ])}
            id="project"
          >
            Projects.
          </h3>
          <AccordionSection datas={datas.datas} />
        </div>

        {/* side project */}
        <div
          className={cn([
            " relative top-2 mt-10 transition-all",
            show ? "opacity-100 top-0" : "opacity-0",
          ])}
        >
          <h3
            className={cn([
              "text-center sm:text-left text-2xl sm:text-3xl dark:text-slate-300 mb-5 sm:mb-8 font-black",
              inter.className,
            ])}
            id="project"
          >
            Side Projects.
          </h3>
          <AccordionSection datas={sideProjectdatas.datas} />
        </div>

        {/* 聯絡我們 */}
        <div
          className={cn([
            " relative top-2 mt-10 transition-all",
            show ? "opacity-100 top-0" : "opacity-0",
          ])}
        >
          <h3
            className={cn([
              "text-center sm:text-left text-2xl sm:text-3xl dark:text-slate-300 mb-5 sm:mb-8 font-black",
              inter.className,
            ])}
            id="contact"
          >
            Contact.
          </h3>

          <p className="flex sm:justify-start justify-center">
            <a
              className="dark:text-slate-300 mr-5"
              href="https://www.linkedin.com/in/archie-wang-6a5836211/"
              target="_bank"
            >
              LinkedIn
            </a>
            <a
              className="dark:text-slate-300 mr-5"
              href="https://www.cake.me/me/archie-wang-4e8de0"
              target="_bank"
            >
              Cake
            </a>
            <a
              className="dark:text-slate-300 mr-5"
              href="https://github.com/archiewang0"
              target="_bank"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
