'use client'
import FormRSC from "@/components/form-rsc";
import Image from "next/image";
import teaser from "../public/teaser.png";
import scenarios from "../public/scenarios.png";
import characters from "../public/characters.png";
import profiles from "../public/profiles.png";

import { Detail } from '@/components/ListDetail/Detail'
import { TitleBar } from '@/components/ListDetail/TitleBar'
import React from "react";
import Interactions from "./interactions";

function SectionContent(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
  return <div className="snap-start w-full gap-8 grid grid-cols-12 py-16 px-6 sm:px-12" {...props} />
}

export default function Home() {
  const scrollContainerRef = React.useRef(null)
  const titleRef = React.useRef(null)
  return (
    <Detail.Container data-cy="home-intro" ref={scrollContainerRef}>
        <div className="h-screen w-full snap-mandatory snap-y overflow-y-scroll">
          <div className="snap-start w-full px-6 sm:px-12 overflow-hidden flex flex-col bg-[url('../public/bg_small.png')] md:bg-[url('../public/bg_large.png')] lg:bg-[url('../public/bg_xl.png')] bg-cover bg-center bg-no-repeat justify-center">
          <div className="text-lg flex flex-row items-start sm:text-xl text-white -mx-6 px-3 sm:px-6 py-16 mb-lh">
            <div className="relative w-full sm:w-[34rem] px-6 py-6 mt-32 md:mt-48 backdrop-blur-sm bg-black/30 font-space">
              <p>A platform for realistic social simulations,</p>
              <p>& an incubator for social intelligence.</p>
            </div>
          </div>
        </div>
        <Detail.ContentContainer className="mx-auto max-w-2xl lg:max-w-5xl">
        <SectionContent>
            <h1 className="text-2xl col-span-12 w-full font-space text-teal-700 font-bold">Key features of <span className="font-display inline">Sotopia</span></h1>
              <div className="col-span-12 lg:col-span-4">
                <h2 className="text-xl font-space text-teal-700 font-bold">Human in the loop</h2>
                <p className="prose mt-4 text-md  text-gray-500 font-space break-all">
               <span className="font-display inline">Sotopia</span> is designed to natively support the interaction among humans and AI agents. With simple configuration, you can watch AI agent interacting, start chatting with AI agents, or even join a game with other human players. You can use the default frontend, or build your own frontend using the <span className="font-display inline">Sotopia</span> REST API.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <h2 className="text-xl font-space text-teal-700 font-bold">Imperfect information</h2>
                <p className="prose mt-4 text-md  text-gray-500 font-space break-all">
                Scenarios in <span className="font-display inline">Sotopia</span> typically include both public info for all characters and private info for each character. Character profiles are hidden or partially hidden from other characters based on their relationships. This feature makes <span className="font-display inline">Sotopia</span> a perfect testbed for AI agents to learn to reason about imperfect information.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <h2 className="text-xl font-space text-teal-700 font-bold">Open-Ended</h2>
                <p className="prose mt-4 text-md  text-gray-500 font-space break-all">
                You are not limited to the original set of tasks in <span className="font-display inline">Sotopia</span>. We have a tutorial teaching you how to create your own characters and scenarios and bring them to life in <span className="font-display inline">Sotopia</span>. The evaluation framework is also open-ended, you can create your own evaluation metrics, whether it&rsquo;s LLM-based or rule-based.
                </p>
              </div>
        </SectionContent>

        <SectionContent>
        <h1 className="text-2xl col-span-12 font-space text-teal-700 font-bold"><span className="font-display inline">Sotopia</span> concepts</h1>
        <div className="col-span-12 flex flex-row-reverse lg:grid lg:col-span-4">
          <div className="w-2/3 lg:w-full">
          <Image
            src={scenarios} className="object-contain object-center max-h-48" alt="scenarios image" placeholder="blur" />
          </div>
          <p className="w-1/3 lg:w-full  font-space  text-gray-500 font-lg py-4 break-all">Each scenario includes a context background, and private social goals of each agent. Scenarios cover a wide range of social interaction types.</p>
        </div>
        <div className="col-span-12 flex flex-row-reverse lg:grid lg:col-span-4">
          <div className="w-2/3 lg:w-full">
          <Image
            src={profiles} className="object-contain object-center max-h-48" alt="scenarios image" placeholder="blur" />
          </div>
          <p className="w-1/3 lg:w-full  font-space  text-gray-500 font-lg py-4 break-all">Characters in <span className="font-display inline">Sotopia</span> have their name, gender, personalities, decision making styles, occupation, some public information and even their secrets.</p>
        </div>
        <div className="col-span-12 flex flex-row-reverse lg:grid lg:col-span-4">
          <div className="w-2/3 lg:w-full">
            <Image
              src={characters} className="object-contain object-center max-h-48" alt="scenarios image" placeholder="blur" />
          </div>
          <p className="w-1/3 lg:w-full font-space  text-gray-500 font-lg py-4 break-all">The relationships between characters are in different types and include background stories. This provides more concrete context for scenarios.</p>
        </div>
        </SectionContent>
        <div className="snap-start h-screen w-full flex flex-col py-12 px-6 sm:px-12 space-y-8 overflow-auto">
            <h1 className="text-2xl w-full font-space text-teal-700 font-bold">Example Interactions</h1>
            <Interactions />
        </div>
        <div className="snap-start h-screen w-full flex flex-col py-12 px-6 sm:px-12 space-y-8">
        <h1 className="text-2xl w-full font-space text-teal-700 font-bold">Get started</h1>
        TODO add code snippets here: two lines of code to start a game. And links to the tutorial.
        </div>
        <div className="snap-start h-screen w-full flex flex-col py-12 px-6 sm:px-12 space-y-8">
        <h1 className="text-2xl w-full font-space text-teal-700 font-bold">Team</h1>
        TODO add team members here. 
        </div>
        </Detail.ContentContainer>
      </div>
  </Detail.Container>
  );
}
