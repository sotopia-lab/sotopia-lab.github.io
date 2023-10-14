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
import { TypeAnimation } from 'react-type-animation';

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
        {/* <h1 className="text-5xl col-span-12 w-full font-space text-teal-700/50 italic dark:text-teal-300 dark:drop-shadow-[0_1px_15px_#ccfbf1]">Sotopia</h1> */}
            <TypeAnimation className="text-5xl h-3 col-span-12 w-full font-space text-teal-700/50 italic dark:text-teal-300 dark:drop-shadow-[0_1px_15px_#ccfbf1]"
              sequence={[
                // Same substring at the start will only be typed once, initially
                'Large language models like GPT-4 are excellent at solving tasks, but do they have social intelligence?',
                1000,
                'To answer that, Sotopia focus on social interactions among humans and AI agents, employing simulation.',
                1000,
                'To answer that, Sotopia focus on social interactions among humans and AI agents, conducting evaulation.',
                1000,
                'To answer that, Sotopia focus on social interactions among humans and AI agents, supporting analyzation.',
                1000,
                'Sotopia, born for better AI social intelligence.',
                1000,
              ]}
              speed={60}
              deletionSpeed={70}
              style={{ fontSize: '2em' }}
              repeat={2}
            />
        </SectionContent>
        <SectionContent>
            <h1 className="text-2xl col-span-12 w-full font-space text-teal-700 font-bold">Key features of <span className="font-display inline">Sotopia</span></h1>
              <div className="col-span-12 lg:col-span-4">
                <h2 className="text-xl font-space text-teal-700 font-bold">Human-centered</h2>
                <p className="prose mt-4 text-md  text-gray-500 font-space">
               <span className="font-display inline">Sotopia</span> is designed to natively support the interaction among humans and AI agents. With simple configuration, you can watch AI agent interacting, start chatting with AI agents, or even join a game with other human players. You can use the default frontend, or build your own frontend using the <span className="font-display inline">Sotopia</span> REST API.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <h2 className="text-xl font-space text-teal-700 font-bold">Goal-driven</h2>
                <p className="prose mt-4 text-md  text-gray-500 font-space">
                Scenarios in <span className="font-display inline">Sotopia</span> typically include both social goals and hidden character information for each interaction.
                Agents in <span className="font-display inline">Sotopia</span> are driven by their own goals and background.
                This feature makes <span className="font-display inline">Sotopia</span> a perfect testbed for AI agents to learn to reason in a rich social context.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <h2 className="text-xl font-space text-teal-700 font-bold">Open-ended</h2>
                <p className="prose mt-4 text-md  text-gray-500 font-space">
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
          <p className="w-1/3 lg:w-full  font-space  text-gray-500 font-lg py-4">Each scenario includes a context background, and private social goals of each agent. Scenarios cover a wide range of social interaction types.</p>
        </div>
        <div className="col-span-12 flex flex-row-reverse lg:grid lg:col-span-4">
          <div className="w-2/3 lg:w-full">
          <Image
            src={profiles} className="object-contain object-center max-h-48" alt="scenarios image" placeholder="blur" />
          </div>
          <p className="w-1/3 lg:w-full  font-space  text-gray-500 font-lg py-4">Characters in <span className="font-display inline">Sotopia</span> have their name, gender, personalities, decision making styles, occupation, some public information and even their secrets.</p>
        </div>
        <div className="col-span-12 flex flex-row-reverse lg:grid lg:col-span-4">
          <div className="w-2/3 lg:w-full">
            <Image
              src={characters} className="object-contain object-center max-h-48" alt="scenarios image" placeholder="blur" />
          </div>
          <p className="w-1/3 lg:w-full font-space  text-gray-500 font-lg py-4">The relationships between characters are in different types and include background stories. This provides more concrete context for scenarios.</p>
        </div>
        </SectionContent>

        <SectionContent>
          <h1 className="text-2xl col-span-12 font-space text-teal-700 font-bold">Social Simulation</h1>
          <div className="lg:col-span-6 col-span-12">
            <p className="font-space text-gray-500 font-lg mb-3"><span className="font-display inline">Sotopia</span> is all about social interactions.</p>
            <p className="font-space text-gray-500 font-lg mb-3">In <span className="font-display inline">Sotopia</span> (as of now), we create 90 social scenarios spanning a range of cooperative, competitive, and mixed social goals along with 40 characters with individual personalities, occupations, secrets, background stories, and relationships with other characters, the cross product of which constructs a large task space.
            </p>
          
            <p className="font-space text-gray-500 font-lg mb-3">Through sampling tasks from this space, we simulate the interaction episodes where agents role-play their respective characters and interact based on their private social goals.
                In this simulation, we not only create and use LLM-based agents, but also involve human participants in role-playing to study the differences between the models&apos; and humans&apos; social intelligence. </p>
              
            <p className="font-space text-gray-500 font-lg mb-3">The simulation is designed to be flexible and extensible. You can create your own scenarios, characters, and even evaluation metrics to test your own AI models. </p>

            <p className="font-space text-gray-500 font-lg mb-3">The video shows a demo of the simulation, where human participant plays as Noah to interact with AI agents. </p>
        </div>
          <video className="text-2xl lg:col-span-6 lg:col-start-7 col-span-12 drop-shadow-md" loop autoPlay muted>
            <source src="/sotopia_demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SectionContent>
        <div className="snap-start h-screen w-full flex flex-col py-12 px-6 sm:px-12 space-y-8">
            <h1 className="text-2xl w-full font-space text-teal-700 font-bold">Simulation Highlights</h1>
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
