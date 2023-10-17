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
import Interactions from "./interactions";
import { TypeAnimation } from 'react-type-animation';
import { Evaluation } from "./evaluation";

import bg_small from "../public/bg_small.png";
import bg_large from "../public/bg_large.png";
import bg_xl from "../public/bg_xl.png";
import { ModeToggle } from "@/components/ui/model-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";

function SectionContent(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
  return <div className="snap-start w-full gap-8 grid grid-cols-12 py-16 px-6 sm:px-12" {...props} />
}

function SectionTitle(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
  return <h1 className="text-2xl col-span-12 font-space text-teal-700  dark:text-teal-400 font-bold dark:font-light dark:drop-shadow-[0_1px_15px_#ccfbf1]" {...props} />
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
    role: "Annotations",
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
    name: "L.-P. Morency",
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
  return (
    <Detail.Container data-cy="home-intro" ref={scrollContainerRef}>
        <div className="relative h-screen w-full snap-proximity snap-y overflow-y-scroll">
          <div className="relative snap-start w-full overflow-hidden justify-center">
            <Image className="block md:hidden"
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
            <Image className="hidden md:block 2xl:hidden "
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
            <Image className="hidden 2xl:block "
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
            <div className="text-lg flex flex-row items-start sm:text-xl text-white -mx-6 px-9 sm:px-18 py-16 mb-lh">
              <div className="relative w-full sm:w-[34rem] px-6 py-6 mt-32 md:mt-48 backdrop-blur-sm bg-black/30 font-space">
                <p>A platform for realistic social simulations,</p>
                <p>& an incubator for social intelligence.</p>
              </div>
            </div>
          </div>
        <Detail.ContentContainer className="mx-auto max-w-2xl lg:max-w-5xl">
        <SectionContent>
            {/* <h1 className="text-2xl col-span-12 w-full font-space text-teal-700 dark:text-teal-400/50 italic dark:text-teal-500 dark:drop-shadow-[0_1px_35px_#ccfbf1]">Large language models like GPT-4 are excellent at solving tasks, but do they have social intelligence?
            To answer that, Sotopia focus on social interactions among humans and AI agents with simulation, evaulation and analyzation.
            Sotopia, born for better AI social intelligence.</h1> */}
            <TypeAnimation className="lg:h-24 h-60 col-span-12 w-full font-space text-teal-700/50 italic dark:text-teal-400 dark:drop-shadow-[0_1px_15px_#ccfbf1]"
              preRenderFirstString={true}
              sequence={[
                // Same substring at the start will only be typed once, initially
                'Large language models like GPT-4 are excellent at solving tasks, but do they have social intelligence?',
                2000,
                'Large language models like GPT-4 are excellent at solving tasks, but do they have social intelligence?\nTo answer that, Sotopia focus on social interactions among humans and AI agents, employing simulation.',
                1000,
                'Large language models like GPT-4 are excellent at solving tasks, but do they have social intelligence?\nTo answer that, Sotopia focus on social interactions among humans and AI agents, conducting evaulation.',
                1000,
                'Large language models like GPT-4 are excellent at solving tasks, but do they have social intelligence?\nTo answer that, Sotopia focus on social interactions among humans and AI agents, supporting analyzation.',
                1000,
                'Large language models like GPT-4 are excellent at solving tasks, but do they have social intelligence?\nTo answer that, Sotopia focus on social interactions among humans and AI agents, supporting analyzation.\nSotopia',
                1000,
                'Large language models like GPT-4 are excellent at solving tasks, but do they have social intelligence?\nTo answer that, Sotopia focus on social interactions among humans and AI agents, supporting analyzation.\nSotopia, born for better AI social intelligence.',
                1000,
              ]}
              speed={60}
              deletionSpeed={70}
              style={{whiteSpace: 'pre-line', fontSize: '1.5em' }}
              repeat={0}
            />
        </SectionContent>
        <SectionContent>
            <SectionTitle>Key features of <span className="font-display inline">Sotopia</span></SectionTitle>
              <div className="col-span-12 lg:col-span-4">
                <h2 className="text-xl font-space text-teal-700 dark:text-teal-400 font-bold">Enables human-AI interaction</h2>
                <p className="prose mt-4 text-md  text-gray-500 dark:text-gray-200 font-space">
               <span className="font-display inline">Sotopia</span> is designed to natively support the interaction among humans and AI agents. With simple configuration, you can watch AI agent interacting, start chatting with AI agents, or even join a game with other human players. You can use the default frontend, or build your own frontend using the <span className="font-display inline">Sotopia</span> REST API.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <h2 className="text-xl font-space text-teal-700 dark:text-teal-400 font-bold">Focus goal-driven behavior</h2>
                <p className="prose mt-4 text-md  text-gray-500 dark:text-gray-200 font-space">
                Scenarios in <span className="font-display inline">Sotopia</span> typically include both social goals and hidden character information for each interaction.
                Agents in <span className="font-display inline">Sotopia</span> are driven by their own goals and background.
                This feature makes <span className="font-display inline">Sotopia</span> a perfect testbed for AI agents to learn to reason in a rich social context.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <h2 className="text-xl font-space text-teal-700 dark:text-teal-400 font-bold">Supports open-endedness</h2>
                <p className="prose mt-4 text-md  text-gray-500 dark:text-gray-200 font-space">
                You are not limited to the original set of tasks in <span className="font-display inline">Sotopia</span>. We have a tutorial teaching you how to create your own characters and scenarios and bring them to life in <span className="font-display inline">Sotopia</span>. The evaluation framework is also open-ended, you can create your own evaluation metrics, whether it&rsquo;s LLM-based or rule-based.
                </p>
              </div>
        </SectionContent>

        <SectionContent>
        <SectionTitle><span className="font-display inline">Sotopia</span> concepts</SectionTitle>
        <div className="col-span-12 flex flex-row-reverse lg:grid lg:col-span-4">
          <div className="w-2/3 lg:w-full">
          <Image
            src={scenarios} className="object-contain object-center max-h-48" alt="scenarios image" placeholder="blur" />
          </div>
          <p className="w-1/3 lg:w-full  font-space  text-gray-500 dark:text-gray-200 font-lg py-4">Each scenario includes a context background, and private social goals of each agent. Scenarios cover a wide range of social interaction types.</p>
        </div>
        <div className="col-span-12 flex flex-row-reverse lg:grid lg:col-span-4">
          <div className="w-2/3 lg:w-full">
          <Image
            src={profiles} className="object-contain object-center max-h-48" alt="scenarios image" placeholder="blur" />
          </div>
          <p className="w-1/3 lg:w-full  font-space  text-gray-500 dark:text-gray-200 font-lg py-4">Characters in <span className="font-display inline">Sotopia</span> have their name, gender, personalities, decision making styles, occupation, some public information and even their secrets.</p>
        </div>
        <div className="col-span-12 flex flex-row-reverse lg:grid lg:col-span-4">
          <div className="w-2/3 lg:w-full">
            <Image
              src={characters} className="object-contain object-center max-h-48" alt="scenarios image" placeholder="blur" />
          </div>
          <p className="w-1/3 lg:w-full font-space  text-gray-500 dark:text-gray-200 font-lg py-4">The relationships between characters are in different types and include background stories. This provides more concrete context for scenarios.</p>
        </div>
        </SectionContent>

        <SectionContent>
          <SectionTitle>Social Simulation</SectionTitle>
          <div className="lg:col-span-6 col-span-12">
            <p className="font-space text-gray-500 dark:text-gray-200 font-lg mb-5"><span className="font-display inline">Sotopia</span>&apos;s main goal is to simulate social interactions.</p>
            <p className="font-space text-gray-500 dark:text-gray-200 font-lg mb-5">In <span className="font-display inline">Sotopia</span> (as of now), we create 90 social scenarios spanning a range of cooperative, competitive, and mixed social goals along with 40 characters with individual personalities, occupations, secrets, background stories, and relationships with other characters, the cross product of which constructs a large task space.
            </p>
          
            <p className="font-space text-gray-500 dark:text-gray-200 font-lg mb-5">Through sampling tasks from this space, we simulate the interaction episodes where agents role-play their respective characters and interact based on their private social goals.
                In this simulation, we not only create and use LLM-based agents, but also involve human participants in role-playing to study the differences between the models&apos; and humans&apos; social intelligence. </p>
              
            <p className="font-space text-gray-500 dark:text-gray-200 font-lg mb-5">The simulation is designed to be flexible and extensible. You can create your own scenarios, characters, and even evaluation metrics to test your own AI models. </p>

          </div>
          <figure className="text-2xl lg:col-span-6 lg:col-start-7 col-span-12">
            <video className="drop-shadow-md" loop autoPlay muted>
              <source src="/sotopia_demo.mp4" type="video/mp4" />
              The video shows a demo of the simulation, where human participant plays as Noah to interact with AI agents.
            </video>
            <figcaption className="mt-3 text-sm text-gray-500 dark:text-gray-200 dark:text-slate-50 italic">The video shows a demo of the simulation, where human participant plays as Noah to interact with AI agents.</figcaption>
          </figure>
        </SectionContent>

        <SectionContent>
          <SectionTitle>Social Evaluation</SectionTitle>
          <div className="lg:col-span-6 col-span-12">
            <p className="font-space text-gray-500 dark:text-gray-200 font-lg mb-3"><span className="font-display inline">Sotopia</span> supports evaluation of social interactions.</p>
            <p className="font-space text-gray-500 dark:text-gray-200 font-lg mb-3">To comprehensively evaluate multi-faceted social interactions, it&apos;s essential to acknowledge that human motivations inherently encompass a diverse set of implicit goals. These goals include maintaining relationships, managing finances, acquiring information, safeguarding secrets, and adhering to social norms. Simply reducing this complexity to a single score or a &quot;winning rate&quot; falls short in capturing the richness of these interactions. 
            </p>

            <p className="font-space text-gray-500 dark:text-gray-200 font-lg mb-3">Therefore, we propose <span className="font-display inline">Sotopia-Eval</span> to evaluate agents using multi-dimensional criteria inspired by previous research on sociology, psychology, and economics. We use GPT-4 to evaluate goals in interactions, finding it to be a decent proxy of human judgments on <span className="font-display inline">Sotopia-Eval</span>. Especially for the criteria of goal completion, maintaining finances, and preserving relationships. </p>
              
          </div>
          <Evaluation />
        </SectionContent>

        <div className="snap-start h-screen w-full flex flex-col py-12 px-6 sm:px-12 space-y-8">
            <SectionTitle>Simulation Highlights</SectionTitle>
            <h1 className="text-lg w-full font-space text-grey-500 dark:text-grey-200 italic">Below shows the highlights of the example simulation. Click the external link to view the full episode and corresponding evaluation.</h1>
            <Interactions />
            </div>

            <SectionContent>
              <SectionTitle>Meet the team</SectionTitle>
              {team_members_state.map((member, index) => (
                <Link href={member.url} scroll={false} key={index} className="col-span-3 lg:col-span-2 text-center font-space">
                  <div className="absoluate">
                    <Avatar className={cn("w-full dark:border-transparent dark:border-2", "dark:bg-gradient-to-br", member.gradient)}>
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                  </div>
                  <span className="font-light">{member.name} </span>
                  <br />
                  <span className="italic"> {member.role} </span>
                </Link>
              ))}
            </SectionContent>
          </Detail.ContentContainer>
        </div>
  </Detail.Container>
  );
}
