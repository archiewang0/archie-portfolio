import { AccordionSectionProps } from "@/components/ui/Accordion";
import jet1Img from "public/img/jet1.png";
import jet2Img from "public/img/jet2.png";
import jet3Img from "public/img/jet3.png";
import jet4Img from "public/img/jet4.png";
import jet5Img from "public/img/jet5.png";
import webcomp1 from "public/img/webcomp1.png";
import webcomp2 from "public/img/webcomp2.png";
import member1 from "public/img/member1.png";
import member2 from "public/img/member2.png";
import member3 from "public/img/member3.png";
import b2e1 from "public/img/b2e1.png";
import b2e2 from "public/img/b2e2.png";
import store1 from "public/img/store1.png";
import store2 from "public/img/store2.png";
import japan1 from "public/img/japan1.png";
import japan2 from "public/img/japan2.png";
import scratch1 from "public/img/scratch1.png";
import scratch2 from "public/img/scratch2.png";
import drawing1 from "public/img/drawing1.png";
import drawing2 from "public/img/drawing2.png";
import drawing3 from "public/img/drawing3.png";
import drawing4 from "public/img/drawing4.png";

const projects = (theme: string | undefined): AccordionSectionProps => {
  theme = theme ? theme : "light";
  const datas: AccordionSectionProps = {
    datas: [
      {
        id: "id-1",
        time: "2023 JUL - NOW",
        projectName: "Jet EVCharging",
        company: "Jet OPTO",
        webLink: "https://jet-evcharging.com/home/B3-1030-DC-1",
        describe:
          "In less than a year, I completed the charging station project, which is now live and operational. This project allows the company to earn around ten thousand dollars per month. Additionally, we are developing more powerful features to increase customer retention and attract potential future clients.",
        skills: [
          `skill-icons:angular-${theme}`,
          `skill-icons:tailwindcss-${theme}`,
          `skill-icons:expressjs-${theme}`,
          `skill-icons:sequelize-${theme}`,
          `skill-icons:postgresql-${theme}`,
          `skill-icons:aws-${theme}`,
          `skill-icons:gitlab-${theme}`,
          "skill-icons:sass",
          "skill-icons:typescript",
        ],
        images: [
          { src: jet1Img, href: jet1Img.src },
          { src: jet2Img, href: jet2Img.src },
          { src: jet3Img, href: jet3Img.src },
          { src: jet4Img, href: jet4Img.src },
          { src: jet5Img, href: jet5Img.src },
        ],
      },
      {
        id: "id-2",
        time: "2021 JUL - 2023 JUL",
        projectName: "Lion Travel Web Component",
        company: "Lion Travel",
        webLink: "https://www.liontravel.com/category/zh-tw/index",
        describe:
          "Focused on the development and maintenance of front-end shared components for Lion Travel's B2C, B2B, and B2E platforms, improving system performance and user experience.",
        skills: [
          `skill-icons:react-${theme}`,
          `skill-icons:nodejs-${theme}`,
          "skill-icons:sass",
          "skill-icons:typescript",
        ],
        images: [
          { src: webcomp1, href: webcomp1.src },
          { src: webcomp2, href: webcomp2.src },
        ],
      },
      {
        id: "id-3",
        time: "2021 JUL - 2023 JUL",
        projectName: "Lion Travel Member",
        company: "Lion Travel",
        webLink: "https://member.liontravel.com/profile/information",
        describe:
          "Collaborated with the design and backend teams to revamp Lion Travel's B2C platform, improving the membership workflow and interface details to enhance the overall user experience.",
        skills: [
          `skill-icons:react-${theme}`,
          `skill-icons:nodejs-${theme}`,
          "skill-icons:sass",
          "skill-icons:typescript",
        ],
        images: [
          { src: member1, href: member1.src },
          { src: member2, href: member2.src },
          { src: member3, href: member3.src },
        ],
      },
      {
        id: "id-4",
        time: "2021 JUL - 2023 JUL",
        projectName: "Event Project - B2E Landing Page",
        company: "Lion Travel",
        webLink: "https://b2e-info.liontravel.com/zh-tw/index",
        describe:
          "Collaborated with the design team to create the B2E landing page, utilizing elegant animations and layout design to enhance the corporate's image.",
        skills: ["skill-icons:jquery", "skill-icons:html", "skill-icons:sass"],
        images: [
          { src: b2e1, href: b2e1.src },
          { src: b2e2, href: b2e2.src },
        ],
      },
      {
        id: "id-5",
        time: "2021 JUL - 2023 JUL",
        projectName: "Event Project - Retail Store",
        company: "Lion Travel",
        webLink: "https://www.liontravel.com/event/retail-store/",
        describe:
          "For the opening of Lion Travel's physical store, ensured alignment with the store's overall visual theme. The marketing website echoed the style of the physical store, and collaborated with the design team through multiple discussions to refine the details of animation presentations.",
        skills: ["skill-icons:jquery", "skill-icons:html", "skill-icons:sass"],
        images: [
          { src: store1, href: store1.src },
          { src: store2, href: store2.src },
        ],
      },
      {
        id: "id-6",
        time: "2021 JUL - 2023 JUL",
        projectName: "Event Project - Kirinnomachi Japan Heritage",
        company: "Lion Travel",
        webLink: "https://event.xinmedia.com/kirinnomachi-japan-heritage/",
        describe:
          "This webpage provides a comprehensive introduction to Tottori Prefecture's folk culture, culinary traditions, and natural landscapes, increasing the number of group tour sign-ups to Tottori Prefecture in Japan.",
        skills: ["skill-icons:jquery", "skill-icons:html", "skill-icons:sass"],
        images: [
          { src: japan1, href: japan1.src },
          { src: japan2, href: japan2.src },
        ],
      },
      {
        id: "id-9",
        time: "2021 JUL - 2023 JUL",
        projectName: "Event Project - Anhuitravel Scratch",
        company: "Lion Travel",
        webLink: "https://www.anhuitravel.com.tw/event/scratch/",
        describe:
          "The marketing webpage for Anhui showcases the cultural features of various locations and incorporates interactive mini-games to attract consumers and encourage them to visit.",
        skills: ["skill-icons:jquery", "skill-icons:html", "skill-icons:sass"],
        images: [
          { src: scratch1, href: scratch1.src },
          { src: scratch2, href: scratch2.src },
        ],
      },
    ],
  };

  return datas;
};

const sideProjects = (theme: string | undefined): AccordionSectionProps => {
  theme = theme ? theme : "light";
  const datas: AccordionSectionProps = {
    datas: [
      {
        id: "id-1",
        time: "2025 FEB - 2025 APR",
        projectName: "Drawing app",
        company: "",
        webLink: "https://drawing-app-drab.vercel.app/",
        describe:
          "An online drawing webpage that allows Google login and access to saved drawings.",
        skills: [
          `skill-icons:nextjs-${theme}`,
          `skill-icons:tailwindcss-${theme}`,
          `skill-icons:vercel-${theme}`,
          "skill-icons:mongodb",
          "skill-icons:typescript",
        ],
        images: [
          { src: drawing1, href: drawing1.src },
          { src: drawing2, href: drawing2.src },
          { src: drawing3, href: drawing3.src },
          { src: drawing4, href: drawing4.src },
        ],
      },
    ],
  };

  return datas;
};

export { projects, sideProjects };
