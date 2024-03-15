'use client'
import FormRSC from "@/components/form-rsc";
import Image from "next/image";
import teaser from "../public/teaser.png";
import scenarios from "../public/scenarios.png";
import characters from "../public/characters.png";
import profiles from "../public/profiles.png";

import { Detail } from '@/components/ListDetail/Detail'
import { TitleBar } from '@/components/ListDetail/TitleBar'
import React, { useEffect } from "react";
import Interactions, { OutLinkLogo } from "./projects/sotopia/interactions";
import { TypeAnimation } from 'react-type-animation';
import { Evaluation } from "./projects/sotopia/evaluation";

import bg_small from "../public/bg_small.png";
import bg_large from "../public/bg_large.png";
import bg_xl from "../public/bg_xl.png";
import sotopiaTown from '../public/island_only.svg'
import agentvsstory from '../public/projects/agent_vs_storyteller.jpg'
import sotopiaPi from '../public/projects/sotopia_pi.jpg'
import sotopia from '../public/projects/sotopia.jpg'
import { ModeToggle } from "@/components/ui/model-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import LTI from "@/components/icons/lti";
import CMU from "@/components/icons/cmu";
import ImageWithTextOverlay from "@/components/ui/image-text-overlay";

export function SectionContent(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
  return <div className="snap-start w-full gap-8 grid grid-cols-12 font-inter py-10 px-6 sm:px-12" {...props} />
}

export function SectionTitle(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
  return <h1 className="text-4xl col-span-12 font-grotesk black dark:white dark:font-light dark:drop-shadow-[0_1px_15px_#ccfbf1]" {...props} />
}

// Xuhui Zhou, Hao Zhu, Leena Mathur, Ruohong Zhang, Haofei Yu, Zhengyang Qi, Louis-Philippe Morency, Yonatan Bisk, Daniel Fried, Graham Neubig, Maarten Sap

const team_members = [
  {
    name: "Xuhui Zhou",
    avatar: "/team/xuhui.jpg",
    initials: "XZ",
    gradient: "from-red-200 via-blue-300 to-fuchsia-300", // random gradient
    role: "Co-Lead",
    url: "https://xuhuiz.com"
  },
  {
    name: "Hao Zhu",
    avatar: "/team/hao.png",
    initials: "HZ",
    gradient: "from-lime-200 via-rose-300 to-amber-300", // random gradient
    role: "Co-Lead",
    url: "https://zhuhao.me"
  },
  {
    name: "Leena Mathur",
    avatar: "/team/leena.jpg",
    initials: "LM",
    gradient: "from-cyan-200 via-purple-300 to-orange-300", // random gradient
    role: "Evaluation",
    url: "https://l-mathur.github.io"
  },
  {
    name: "Ruohong Zhang",
    avatar: "/team/ruohong.jpg",
    initials: "RZ",
    gradient: "from-pink-200 via-yellow-300 to-emerald-300", // random gradient
    role: "Model training",
    url: "https://scholar.google.com/citations?user=RiDZxz8AAAAJ&hl=en"
  },
  {
    name: "Haofei Yu",
    avatar: "/team/haofei.jpg",
    initials: "HY",
    gradient: "from-teal-200 via-red-300 to-indigo-300", // random gradient
    role: "Model inference",
    url: "https://haofeiyu.me"
  },
  {
    name: "Zhengyang Qi",
    avatar: "/team/zhengyang.jpg",
    initials: "ZQ",
    gradient: "from-rose-200 via-amber-300 to-lime-300", // random gradient
    role: "Model inference",
    url: "https://zhengyangqi.com"
  },
  {
    name: "Louis-Philippe Morency",
    avatar: "/team/louis.jpg",
    initials: "LM",
    gradient: "from-purple-200 via-orange-300 to-cyan-300", // random gradient
    role: "Advisor",
    url: "https://www.cs.cmu.edu/~morency/"
  },
  {
    name: "Yonatan Bisk",
    avatar: "/team/yonatan.jpg",
    initials: "YB",
    gradient: "from-emerald-200 via-indigo-300 to-pink-300", // random gradient
    role: "Advisor",
    url: "https://yonatanbisk.com"
  },
  {
    name: "Daniel Fried",
    avatar: "/team/daniel.jpg",
    initials: "DF",
    gradient: "from-yellow-200 via-teal-300 to-red-300", // random gradient
    role: "Advisor",
    url: "https://dpfried.github.io"
  },
  {
    name: "Graham Neubig",
    avatar: "/team/graham.jpg",
    initials: "GN",
    gradient: "from-amber-200 via-lime-300 to-rose-300", // random gradient
    role: "Advisor",
    url: "http://phontron.com"
  },
  {
    name: "Maarten Sap",
    avatar: "/team/maarten.jpg",
    initials: "MS",
    gradient: "from-indigo-200 via-pink-300 to-emerald-300", // random gradient
    role: "Advisor",
    url: "https://maartensap.com"
  }
]

export default function Home() {
  const scrollContainerRef = React.useRef(null)
  const titleRef = React.useRef(null)
  const [team_members_state, change_team_members_state] = React.useState(team_members)
  useEffect(() => {
    // generate random gradient for each team member
    change_team_members_state(team_members.map((member) => {
      return {
        ...member,
        gradient: team_members[Math.floor(Math.random() * team_members.length)].gradient
      }
    }));
    return () => {};
  }, [])
  return (
    <Detail.Container data-cy="home-intro" ref={scrollContainerRef}>
        <div className="">
          <div className="relative snap-start w-full overflow-hidden justify-center dark:bg-gradient-to-br dark:from-sky-900 bg-gradient-to-br from-yellow-50 to-emerald-200 h-[45vh]">
            <Image className="block md:hidden dark:hidden"
              src = {bg_small}
              alt = "background image"
              quality={100}
              placeholder="blur"
              sizes="100vw"
              fill
              style={{
                objectFit: 'cover',
                position:'absolute',
              }}
            />
            <Image className="hidden md:block xl:hidden dark:hidden"
              src = {bg_large}
              alt = "background image"
              quality={100}
              placeholder="blur"
              sizes="100vw"
              fill
              style={{
                objectFit: 'cover',
                position:'absolute',
              }}
            />
            <Image className="hidden xl:block dark:hidden"
              src = {bg_xl}
              alt = "background image"
              quality={100}
              placeholder="blur"
              sizes="100vw"
              fill
              style={{
                objectFit: 'cover',
                position:'absolute',
              }}
            />
            <Image className="hidden dark:block drop-shadow-[30px_30px_150px_#bfdbfe]" src={sotopiaTown} alt="Sotopia Town" style={{
                objectFit: 'cover',
                position:'absolute',
                left: '50%',
                top: '40%',
                transform: 'translate(-50%, -50%) scale(120%)',
            }}/>
            <div className="text-2xl flex flex-row items-start sm:text-xl text-white -mx-6 px-9 sm:px-18 py-8 mb-lh">
              <div className="relative w-full sm:w-[34rem] px-6 py-6 mt-32 md:mt-48 backdrop-blur-sm bg-black/30 font-space">
                <p>A research platform for realistic social simulations,</p>
                <p>& an incubator for social intelligence.</p>
              </div>
            </div>
          </div>
        <Detail.ContentContainer className="mx-auto max-w-2xl lg:max-w-5xl">

        <SectionContent>
              <Link href="#AI_social_intelligence" className="col-span-12 lg:col-span-4 bg-lime-100 p-5 hover:bg-lime-200 dark:bg-lime-800">
                <h2 className="text-4xl font-space black dark:white font-bold">AI Social Intelligence</h2>
                <p className="prose mt-4 text-lg text-slate-800 dark:text-gray-200 font-space">
                We are passionate about building more socially aware, adept, and responsible AI systems that contribute to the common good of human society.
                </p>
              </Link>
              <Link href="#key_concepts" className="col-span-12 lg:col-span-4 bg-orange-100 p-5 hover:bg-orange-200 dark:bg-orange-800">
                <h2 className="text-4xl font-space black dark:white font-bold">Sotopia Concepts</h2>
                <p className="prose mt-4 text-lg text-slate-800 dark:text-gray-200 font-space">
                <span className="font-display inline">Sotopia</span> centers around essential concepts in human social interacions, such as social scenarios, character profiles, and relationships between characters.
                </p>
              </Link>
              <Link href="#latest_research" className="col-span-12 lg:col-span-4 bg-teal-100 p-5 hover:bg-teal-200 dark:bg-teal-800">
                <h2 className="text-4xl font-space black dark:white font-bold">Latest Research</h2>
                <p className="prose mt-4 text-lg text-slate-800 dark:text-gray-200 font-space">
                <span className="font-display inline">Sotopia</span> has faciliated a line of research projects, check out our latest publications and projects.
                </p>
              </Link>
        </SectionContent>

        <SectionContent id="AI_social_intelligence">
        <SectionTitle>Social Intelligence for AI</SectionTitle>
            <p className="col-span-12 prose mt-4 text-lg text-slate-800 dark:text-gray-200 font-space">
            {/* AI systems today have impressive but narrow capabilities. It seems that we'll keep whittling away at their constraints, and in the extreme case they will reach human performance on virtually every intellectual task. It's hard to fathom how much human-level AI could benefit society, and it's equally hard to imagine how much it could damage society if built or used incorrectly. */}
              AI systems today have impressive capabilities, but they are often socially unaware, sometimes even present biased or harmful behaviors. We believe that aligning AI systems with human values and society requires situating AI in a rich social environment, confronting them with complex objectives and social norms, and evaluating their performance in a variety of social contexts. <span className="font-display inline">Sotopia</span> is the first step towards this vision. Here&lsquo;s why you might want to use <span className="font-display inline">Sotopia</span>:
            </p>
            <div className="col-span-12 lg:col-span-4 bg-slate-100 dark:bg-slate-600 bg-clip-padding p-3">
              <h2 className="text-xl font-space black dark:white font-bold">Enables human-AI interaction</h2>
              <p className="prose mt-4 text-md  text-gray-800 dark:text-gray-200 font-space">
              <span className="font-display inline">Sotopia</span> is designed to natively support the interaction among humans and AI agents. With simple configuration, you can watch AI agent interacting, start chatting with AI agents, or even join a game with other human players. You can use the default frontend, or build your own frontend using the <span className="font-display inline">Sotopia</span> REST API.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-slate-100 dark:bg-slate-600 bg-clip-padding p-3">
              <h2 className="text-xl font-space black dark:white font-bold">Centers goal-driven behavior</h2>
              <p className="prose mt-4 text-md  text-gray-800 dark:text-gray-200 font-space">
              Scenarios in <span className="font-display inline">Sotopia</span> typically include both social goals and hidden character information for each interaction.
              Agents in <span className="font-display inline">Sotopia</span> are driven by their own goals and background.
              This feature makes <span className="font-display inline">Sotopia</span> a perfect testbed for AI agents to learn to reason in a rich social context.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-slate-100 dark:bg-slate-600 bg-clip-padding p-3">
              <h2 className="text-xl font-space black dark:white font-bold">Supports customization</h2>
              <p className="prose mt-4 text-md  text-gray-800 dark:text-gray-200 font-space">
              You are not limited to the original set of tasks in <span className="font-display inline">Sotopia</span>. We have a tutorial teaching you how to create your own characters and scenarios and bring them to life in <span className="font-display inline">Sotopia</span>. The evaluation framework is also open-ended, you can create your own evaluation metrics, whether it&rsquo;s LLM-based or rule-based.
              </p>
            </div>
        </SectionContent>

        <SectionContent id='key_concepts'>
        <SectionTitle>Key Concepts</SectionTitle>
        <p className="col-span-12 prose mt-4 text-lg text-slate-800 dark:text-gray-200 font-space">
              <span className="font-display inline">Sotopia</span> is a growing platform for social intelligence research. It includes a variety of social scenarios, character profiles, and relationships between characters.
              We will constantsly roll out new features and content to enrich the <span className="font-display inline">Sotopia</span> platform.
              Here are some key concepts in <span className="font-display inline">Sotopia</span>:
        </p>
        <div className="col-span-12 flex flex-row-reverse lg:grid lg:col-span-4 bg-slate-100 dark:bg-slate-600 bg-clip-padding p-3">
          <div className="w-2/3 lg:w-full mt-4">
          <Image
            src={scenarios} className="object-contain object-center max-h-48" alt="scenarios image" placeholder="blur" />
          </div>
          <p className="w-1/3 lg:w-full  font-space  text-gray-800 dark:text-gray-200 font-lg py-4">Each scenario includes a context background, and private social goals of each agent. Scenarios cover a wide range of social interaction types.</p>
        </div>
        <div className="col-span-12 flex flex-row-reverse lg:grid lg:col-span-4 bg-slate-100 dark:bg-slate-600 bg-clip-padding p-3">
          <div className="w-2/3 lg:w-full">
          <Image
            src={profiles} className="object-contain object-center max-h-48" alt="scenarios image" placeholder="blur" />
          </div>
          <p className="w-1/3 lg:w-full  font-space  text-gray-800 dark:text-gray-200 font-lg py-4">Characters in <span className="font-display inline">Sotopia</span> have their name, gender, personalities, decision making styles, occupation, some public information and even their secrets.</p>
        </div>
        <div className="col-span-12 flex flex-row-reverse lg:grid lg:col-span-4 bg-slate-100 dark:bg-slate-600 bg-clip-padding p-3">
          <div className="w-2/3 lg:w-full">
            <Image
              src={characters} className="object-contain object-center max-h-48" alt="scenarios image" placeholder="blur" />
          </div>
          <p className="w-1/3 lg:w-full font-space  text-gray-800 dark:text-gray-200 font-lg py-4">The relationships between characters are in different types and include background stories. This provides more concrete context for scenarios.</p>
        </div>
        </SectionContent>

        <SectionContent id='latest_research'>
          <SectionTitle>Latest Research</SectionTitle>
            <div className="col-span-12 lg:col-span-4">
            <Link href="/projects/agent_vs_script">
              <ImageWithTextOverlay
              src={agentvsstory}
              alt="a picture of green colors"
              title={<p>Is this the real life? Is this just fantasy? The Misleading Success of Simulating Social Interactions With LLMs</p>}
              />
              <p className="prose mt-4 text-lg  text-black dark:text-gray-200 font-space italic hover:underline">
              TL;DR: Omniscenient social simulation with LLMs is different from realistic human social interactions.
              </p>
              </Link>
              </div>
              <div className="col-span-12 lg:col-span-4">
              <Link href="/projects/sotopia-pi">
                <ImageWithTextOverlay
                src={sotopiaPi}
                alt="a picture of green colors"
                title={<p><span className='font-display inline'>Sotopia-π</span>: Interactive Learning of Socially Intelligent Language Agents</p>}
                />
                <p className="prose mt-4 text-lg  text-black dark:text-gray-200 font-space italic hover:underline">
                
                Check out our newest training method aiming for more socially intelligent and aligned agents.
                </p>
              </Link>
              </div>
              <div className="col-span-12 lg:col-span-4">
              <Link href="/projects/sotopia">
              <ImageWithTextOverlay
                  src={sotopia}
                  alt="road to purple"
                  title={<p><span className="font-display inline">Sotopia</span>: Interactive Evaluation for Social Intelligence in Language Agents</p>}
                />
                <p className="prose mt-4 text-lg  text-black dark:text-gray-200 font-space italic hover:underline">
                TL;DR: A interation-based framework for evaluating social intelligence in language agents.
                </p>
                {/* <p className="prose mt-4 text-sm  text-gray-500 dark:text-gray-200 font-space">
                  TL;DR: We introduce a new benchmark for social intelligence, where AI agents are evaluated on their ability to understand and generate stories.
                </p> */}
              </Link>
              </div>
        </SectionContent>

        </Detail.ContentContainer>
        </div>
  </Detail.Container>
  );
}
