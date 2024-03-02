'use client'
import FormRSC from "@/components/form-rsc";
import Image from "next/image";


import { Detail } from '@/components/ListDetail/Detail'
import { TitleBar } from '@/components/ListDetail/TitleBar'
import React, { useEffect } from "react";
import Interactions, { OutLinkLogo } from "../interactions";
import { TypeAnimation } from 'react-type-animation';
import { Evaluation } from "../evaluation";

import bg_small from "@/public/bg_small.png";
import bg_large from "@/public/bg_large.png";
import bg_xl from "@/public/bg_xl.png";
import sotopiaTown from '@/public/island_only.svg'
import { ModeToggle } from "@/components/ui/model-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import LTI from "@/components/icons/lti";
import CMU from "@/components/icons/cmu";

function SectionContent(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
  return <div className="snap-start w-full gap-8 grid grid-cols-12 font-inter py-16 px-6 sm:px-12" {...props} />
}

function SectionTitle(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
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

export default function Page() {
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
        <div className="relative h-screen w-full snap-proximity snap-y overflow-y-scroll">
          <div className="relative snap-start w-full overflow-hidden justify-center dark:bg-gradient-to-br dark:from-sky-900 bg-gradient-to-br from-yellow-50 to-emerald-200">
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
            <div className="text-2xl flex flex-row items-start sm:text-xl text-white -mx-6 px-9 sm:px-18 py-16 mb-lh">
              <div className="relative w-full sm:w-[34rem] px-6 py-6 mt-32 md:mt-48 backdrop-blur-sm bg-black/30 font-space">
                <p>A research platform for realistic social simulations,</p>
                <p>& an incubator for social intelligence.</p>
              </div>
            </div>
          </div>
        <Detail.ContentContainer className="mx-auto max-w-2xl lg:max-w-5xl">
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
            <h1 className="text-lg w-full font-space text-grey-500 dark:text-grey-200 italic">Below are some highlights of the <span className="font-display inline">Sotopia</span> interactions. Click the <OutLinkLogo link={"https://sotopia-chatbot.vercel.app/render/01H94EFEP55SP18FQ65PZP4BRN"}/> to view the full episode and corresponding evaluation.</h1>
            <Interactions />
            </div>

            <SectionContent>
              <SectionTitle>Meet the team</SectionTitle>
              {team_members_state.map((member, index) => (
                <Link href={member.url} scroll={false} key={index} className="col-span-3 lg:col-span-2 text-center font-space">
                  <div className="absoluate">
                    <Avatar className={cn("w-full hover:shadow-lg hover:-translate-y-[1px] hover:shadow-gray-500 dark:shadow-gray-200 dark:border-transparent dark:border-2", "dark:bg-gradient-to-br", member.gradient)}>
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div className="w-full mt-4">
                  <span className="font-light">{member.name} </span>
                  <br />
                  <span className="italic"> {member.role} </span>
                  </div>
                </Link>
              ))}

            {/* <p className="text-4xl col-span-12 lg:col-span-7 lg:col-start-1 font-sans">Language Technologies Institute
            @ Carnegie Mellon University</p> */}
            <CMU className="col-span-12 lg:col-span-5 text-center font-space bg-black p-3" />
            <LTI className="col-span-12 lg:col-span-6 lg:col-start-6 text-center font-space" />
            <p className="text-xl col-span-12 justify-center">We greatly thank <a href="https://openai.com/" className="underline decoration-dotted">OpenAI</a> and <a href="https://openai.com/" className="underline decoration-dotted">Together AI</a> for their support of model credits.</p> 
            </SectionContent>
          </Detail.ContentContainer>
        </div>
  </Detail.Container>
  );
}