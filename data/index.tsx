import {
  SiNextdotjs,
  SiAntdesign,
  SiNestjs,
  SiExpress,
  SiPostman,
} from "react-icons/si";
import {
  BiLogoReact,
  BiLogoRedux,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoGit,
  BiLogoMongodb,
  BiLogoVisualStudio,
} from "react-icons/bi";
import {
  HiHome,
  HiUser,
  HiEnvelope,
  HiMiniShare,
  HiViewColumns,
  HiRectangleGroup,
} from "react-icons/hi2";

import { BsGithub } from "react-icons/bs";
import { DiNodejs } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";

export const links = [
  {
    name: "Home",
    icon: <HiHome size={22} />,
    href: "#home",
  },
  {
    name: "About",
    icon: <HiUser size={22} />,
    href: "#about",
  },
  {
    name: "Skills",
    icon: <HiRectangleGroup size={22} />,
    href: "#skills",
  },
  {
    name: "Projects",
    icon: <HiViewColumns size={22} />,
    href: "#projects",
  },
  {
    name: "Experience",
    icon: <HiMiniShare size={22} />,
    href: "#experience",
  },
  {
    name: "Contact",
    icon: <HiEnvelope size={22} />,
    href: "#contact",
  },
] as const;

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "Html",
        image: (
          <BiLogoHtml5
            size={25}
            style={{
              color: "#e34c26",
            }}
          />
        ),
      },
      {
        name: "Css",
        image: (
          <BiLogoCss3
            size={25}
            style={{
              color: "#264de4",
            }}
          />
        ),
      },
      {
        name: "JavaScript",
        image: (
          <IoLogoJavascript
            size={25}
            style={{
              color: "#f0db4f",
            }}
          />
        ),
      },
      {
        name: "Tailwind Css",
        image: (
          <BiLogoTailwindCss
            size={25}
            style={{
              color: "#38bdf8",
            }}
          />
        ),
      },
      {
        name: "React",
        image: (
          <BiLogoReact
            size={25}
            style={{
              color: "#61dbfb",
            }}
          />
        ),
      },
      {
        name: "Redux",
        image: (
          <BiLogoRedux
            size={25}
            style={{
              color: "#764abc",
            }}
          />
        ),
      },
      {
        name: "Next",
        image: <SiNextdotjs size={25} />,
      },
      {
        name: "Ant Design",
        image: <SiAntdesign size={25} />,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node",
        image: (
          <DiNodejs
            size={25}
            style={{
              color: "#68a063",
            }}
          />
        ),
      },
      {
        name: "Express",
        image: (
          <SiExpress
            size={25}
            style={{
              color: "black",
              backgroundColor: "white",
              padding: "4px",
            }}
          />
        ),
      },
      {
        name: "MongoDB",
        image: (
          <BiLogoMongodb
            size={25}
            style={{
              color: "#4db33d",
            }}
          />
        ),
      },
      {
        name: "Nest",
        image: (
          <SiNestjs
            size={25}
            style={{
              color: "#ea2845",
              padding: "2px",
            }}
          />
        ),
      },
    ],
  },
  {
    title: "Other",
    skills: [
      {
        name: "Git",
        image: (
          <BiLogoGit
            size={25}
            style={{
              color: "#f1502f",
            }}
          />
        ),
      },
      {
        name: "Github",
        image: (
          <BsGithub
            size={25}
            style={{
              color: "#171515",
              backgroundColor: "white",
              padding: "3px",
            }}
          />
        ),
      },
      {
        name: "VS Code",
        image: (
          <BiLogoVisualStudio
            size={25}
            style={{
              color: "#0078d7",
            }}
          />
        ),
      },
      {
        name: "Postman",
        image: (
          <SiPostman
            size={25}
            style={{
              color: "#ef5b25",
            }}
          />
        ),
      },
    ],
  },
] as const;
