'use client'
import FormRSC from "@/components/form-rsc";
import Image from "next/image";


import { Detail } from '@/components/ListDetail/Detail'
import { TitleBar } from '@/components/ListDetail/TitleBar'
import React, { useEffect } from "react";
import Interactions, { OutLinkLogo } from "../projects/sotopia/interactions";
import { TypeAnimation } from 'react-type-animation';
import { Evaluation } from "../projects/sotopia/evaluation";

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

// return a shuffled array
function shuffleArray(array: any[]) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const core_team_members = [
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
    name: "Yonatan Bisk",
    avatar: "/team/yonatan.jpg",
    initials: "YB",
    gradient: "from-emerald-200 via-indigo-300 to-pink-300", // random gradient
    role: "Advisor",
    url: "https://yonatanbisk.com"
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

const collaborators = [
  {
    name: "Leena Mathur",
    avatar: "/team/leena.jpg",
    initials: "LM",
    gradient: "from-cyan-200 via-purple-300 to-orange-300", // random gradient
    role: "SOTOPIA",
    url: "https://l-mathur.github.io"
  },
  {
    name: "Ruohong Zhang",
    avatar: "/team/ruohong.jpg",
    initials: "RZ",
    gradient: "from-pink-200 via-yellow-300 to-emerald-300", // random gradient
    role: "SOTOPIA",
    url: "https://scholar.google.com/citations?user=RiDZxz8AAAAJ&hl=en"
  },
  {
    name: "Haofei Yu",
    avatar: "/team/haofei.jpg",
    initials: "HY",
    gradient: "from-teal-200 via-red-300 to-indigo-300", // random gradient
    role: "SOTOPIA Sotopia-π",
    url: "https://haofeiyu.me"
  },
  {
    name: "Zhengyang Qi",
    avatar: "/team/zhengyang.jpg",
    initials: "ZQ",
    gradient: "from-rose-200 via-amber-300 to-lime-300", // random gradient
    role: "SOTOPIA Sotopia-π",
    url: "https://zhengyangqi.com"
  },
  {
    name: "Hyunwoo Kim",
    avatar: "/team/hyunwoo.jpg",
    initials: "HK",
    gradient: "from-fuchsia-200 via-blue-300 to-red-300", // random gradient
    role: "Agents vs Script",
    url: "https://hyunw.kim/"
  },
  {
    name: "Tiwalayo Eisape",
    avatar: "/team/tiwa.jpg",
    initials: "TE",
    gradient: "from-fuchsia-200 via-blue-300 to-red-300", // random gradient
    role: "Agents vs Script",
    url: "https://github.com/eisape"
  },
  {
    name: "Louis-Philippe Morency",
    avatar: "/team/louis.jpg",
    initials: "LM",
    gradient: "from-purple-200 via-orange-300 to-cyan-300", // random gradient
    role: "SOTOPIA",
    url: "https://www.cs.cmu.edu/~morency/"
  },
  {
    name: "Daniel Fried",
    avatar: "/team/daniel.jpg",
    initials: "DF",
    gradient: "from-yellow-200 via-teal-300 to-red-300", // random gradient
    role: "SOTOPIA",
    url: "https://dpfried.github.io"
  },
  {
    name: "Ruiyi Wang",
    avatar: "/team/ruiyi.png",
    initials: "RW",
    gradient: "from-rose-200 via-amber-300 to-lime-300", // random gradient
    role: "Sotopia-π",
    url: "https://ruiyiw.github.io/"
  },
  {
    name: "Wenxin Zhang",
    avatar: "/team/wenxin.jpeg",
    initials: "WZ",
    gradient: "from-rose-200 via-amber-300 to-lime-300", // random gradient
    role: "Sotopia-π",
    url: "https://sites.google.com/wellesley.edu/sharonwxzhang/home"
  }
]


export default function Page() {
  const scrollContainerRef = React.useRef(null)
  const titleRef = React.useRef(null)
  const [team_core_members_state, change_core_team_members_state] = React.useState
(core_team_members)
  const [team_collaborators_state, change_collaborators_state] = React.useState(collaborators)
  useEffect(() => {
    // generate random gradient for each team member
    change_core_team_members_state(shuffleArray(core_team_members.map((member) => {
      return {
        ...member,
        gradient: core_team_members[Math.floor(Math.random() * core_team_members.length)].gradient
      }
    })));

    change_collaborators_state(shuffleArray(collaborators.map((member) => {
      return {
        ...member,
        gradient: collaborators[Math.floor(Math.random() * collaborators.length)].gradient
      }
    })));

    return () => {};
  }, [])
  return (
    <Detail.Container data-cy="home-intro" ref={scrollContainerRef}>
        <div className="relative w-full snap-proximity snap-y">
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
            <SectionTitle>
              <Link href="https://github.com/orgs/sotopia-lab/discussions/34" className="text-teal-600">Join us</Link> in building the future of social AI.
            </SectionTitle>
            </SectionContent>
            <SectionContent>
            <SectionTitle>Core Team</SectionTitle>
              {team_core_members_state.map((member, index) => (
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
          </SectionContent>

          <SectionContent>
            <SectionTitle>Collaborators</SectionTitle>
            {team_collaborators_state.map((member, index) => (
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
          </SectionContent>

          <SectionContent>
            <SectionTitle>Organizations</SectionTitle>
            {/* <p className="text-4xl col-span-12 lg:col-span-7 lg:col-start-1 font-sans">Language Technologies Institute
            @ Carnegie Mellon University</p> */}
            {/* <LTI className="col-span-12 lg:col-span-6 lg:col-start-6 text-center font-space" /> */}
            <Image src="/organizations/cmu_lti.png" alt="Carnegie Mellon University" width={300} height={300} className="col-span-12 lg:col-span-6 font-space" />
            <Image src="/organizations/ai2.jpg" alt="AI2" width={300} height={300} className="col-span-12 lg:col-span-6 font-space" />
            <Image src="/organizations/MIT-Logo.png" alt="MIT" width={300} height={100} className="col-span-12 lg:col-span-6 font-space" />

            <p className="text-xl col-span-12 justify-center">We greatly thank <a href="https://openai.com/" className="underline decoration-dotted">OpenAI</a> and <a href="https://openai.com/" className="underline decoration-dotted">Together AI</a> for their support of model credits. Please reach out if you want to contribute to this line of research in any format.</p> 
            </SectionContent>
          </Detail.ContentContainer>
        </div>
  </Detail.Container>
  );
}