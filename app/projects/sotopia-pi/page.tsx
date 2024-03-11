"use client"

import Image from "next/image";
import CoverImage from "../components";
import AgentvsStoryteller_intro from '@/public/projects/agent_vs_storyteller/agent_vs_storyteller_intro.png'
import sotopia_pi from '@/public/projects/sotopia_pi.jpg'
import model from '@/public/projects/sotopia_pi/model.png'
import safety_agent_1 from '@/public/projects/sotopia_pi/safety_agent_1.png'
import safety_agent_2 from '@/public/projects/sotopia_pi/safety_agent_2.png'
import model_step_1 from '@/public/projects/sotopia_pi/model_step_1.png'
import model_step_2 from '@/public/projects/sotopia_pi/model_step_2.png'
import model_step_3 from '@/public/projects/sotopia_pi/model_step_3.png'
import model_eval from '@/public/projects/sotopia_pi/model_eval.png'
import model_perf from '@/public/projects/sotopia_pi/model_perf.png'
import goal_results from '@/public/projects/agent_vs_storyteller/goal_results.png'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link";
import { Abhaya_Libre } from "next/font/google";
import { Detail } from "@/components/ListDetail/Detail";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


function SectionContent(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
  return <div className="w-full gap-8 grid grid-cols-12 font-inter py-10 px-6 sm:px-12" {...props} />
}

function SectionTitle(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
  return <h1 className="text-4xl col-span-12 font-grotesk black dark:white dark:font-light dark:drop-shadow-[0_1px_15px_#ccfbf1]" {...props} />
}

function SectionText(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
  return <p className="col-span-12 prose mt-4 text-lg text-slate-800 dark:text-gray-200 font-space" {...props} />
}

function Title() {
  return (
    <>
    <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
    <span className="font-display inline">Sotopia-π</span>: Interactive Learning of Socially Intelligent Language Agents. 
    </h3>
    <div className="mb-2 text-md lg:text-lg">
      <div><Link className="underline" href="https://ruiyiw.github.io/">Ruiyi Wang</Link>*</div>
      <div><Link className="underline" href="https://haofeiyu.me/">Haofei Yu</Link>*</div>
      <div><Link className="underline" href="https://sites.google.com/wellesley.edu/sharonwxzhang/home">Wenxin Zhang</Link>*</div>
      <div><Link className="underline" href="https://www.linkedin.com/in/zhengyang-jason-qi/">Zhengyang Qi</Link>*</div>
      <div><Link className="underline" href="https://maarensap.com/">Maarten Sap</Link></div>
      <div><Link className="underline" href="https://www.phontron.com/">Graham Neubig</Link></div>
      <div><Link className="underline" href="https://talkingtorobots.com/yonatanbisk.html">Yonatan Bisk</Link></div>
      <div><Link className="underline" href="https://zhuhao.me">Hao Zhu</Link></div>
      
    </div>

    <div className="mb-2 text-sm lg:text-md">
      * Leading authors. All authors are from Carnegie Mellon University.
    </div>

    
    </>              
  );
}

function Abstract() {
  return (
    <p className="antialiased mb-4 text-2xl lg:text-3xl leading-relaxed">
    Introducing a method for training language agents that can navigate real 
    life social scenarios while role-playing realisitic characters.
    Our method improves Mistral-7B to achieve GPT-4 level performance.
    We also find that social intelligence training improves
    the safety of social agents and doesn&apos;t compromise the general QA
    performance of the model.
    </p>
  );
}

export default function Index() {
  const scrollContainerRef = React.useRef(null);
  return (
    <Detail.Container data-cy="home-intro" ref={scrollContainerRef}>
      <Detail.ContentContainer className="mx-auto max-w-2xl mt-8 lg:max-w-5xl">

      <SectionContent>
        <h1 className="text-xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8">Research.</h1>
      </SectionContent>
      
    
      <SectionContent>
        <div className="col-span-12 md:col-span-6">
          <Title></Title>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="mb-2 2xl:mb-4">
            <CoverImage title={"Sotopia-pi"} src={sotopia_pi}/>
          </div>
        </div>
      </SectionContent>

       
      <SectionContent>
      <div className="col-span-12 text-center">Check out our paper, {' '}
      <Link href="https://github.com/sotopia-lab/sotopia">code</Link>, {' '}
      <Link href="https://huggingface.co/cmu-lti/sotopia-pi-mistral-7b-BC_SR">model</Link>, {' '}
      <Link href="https://huggingface.co/datasets/cmu-lti/sotopia-pi">data</Link>, {' '}
      and interactive demo!</div>
      <div className="col-span-12"><Abstract></Abstract></div>
      <hr className="col-span-12" />
      </SectionContent>

      
      <SectionContent>
        <SectionTitle>Background</SectionTitle>
        <SectionText>
        Machine social intelligence is crucial to productive human-machine {' '}
        interaction. For instance, to achieve real-time social interactions {' '}
        with users, virtual agents should not only emulate human <span className="underline decoration-wavy">verbal and {' '}
        non-verbal social behaviors</span> but also manage social skills such as {' '}
        <i>cooperation</i> and <i>negotiation</i>. However, the social intelligence of large {' '}
        language models (LLMs) still lags behind humans in various aspects, {' '}
        including theory-of-mind, following social norms, and navigating diverse {' '}
        goal-driven social scenarios. This underscores the challenge to bridge the {' '}
        gap and empower LLM agents to navigate social situations with human-like {' '}
        social decision-making abilities and values. 
        </SectionText>
      </SectionContent>

      <SectionContent>
        <SectionTitle>How does Sotopia-π work?</SectionTitle>
        <SectionText>
          The first step is to <span className="underline decoration-double">generate synthesized social tasks</span> through two substeps: {' '}
          (1) sampling keywords related to social activities from Social Chemistry, {' '}
          Social IQa, and Normbank and (2) prompting GPT-4 to generate scenarios and social {' '}
          goals based on the sampled keywords. This similar to what we have done before in creating {' '}
          <span className="font-display">Sotopia</span>, but we find we can automate this process {' '}
          to generate a large number of diverse social scenarios. The following is an example social task {' '}
          generated through this procedure:
        </SectionText>
        <Image src={model_step_1} className="my-4 col-span-12" alt="Step 1" />

        <SectionText>
          The second step is to {' '}
          <span className="underline decoration-double">collect training data</span> for behavior cloning and self-reinforcement through {' '}
          simulating the social interaction in <span className="font-display">Sotopia</span>. {' '}
          The difference between the two approaches is that for behavior cloning, {' '}
          we collect the interaction data between two GPT-4 based agents (π-expert), while for {' '}
          self-reinforcement we collect the interaction data between two agents with the {' '}
          policy we are training (π-agent, initialized by Mistral-7B).
        </SectionText>
        <Image src={model_step_2} className="col-span-12 w-2/3 my-4 lg:w-1/3 lg:my-0 mx-auto" alt="Step 2" />

        <SectionText>
          The third step is to <span className="underline decoration-double">update π-agent</span>. {' '}
          We filter data based on GPT-4 ratings and finetune on the positive examples. {' '}
          We find that choosing the top 20% of the examples from on each task yields {' '}
          the best performance. Based on the filtered positive training data, we update our {' '}
          agent&apos;s policy with supervised fine-tuning. This is a simple and effective method {' '}
          that works really well as we will show later.
        </SectionText>
        <Image src={model_step_3} className="col-span-12 w-2/3 my-4 lg:w-1/3 lg:my-0 mx-auto" alt="Step 3" />
      </SectionContent>

      <SectionContent>
        <SectionTitle>
          Performance evaluation
        </SectionTitle>
        
        <SectionText>
          We evaluate our model by simulating the interaction between π-agent and π-partner (GPT-3.5 based agent). {' '}
          This is then evaluated by both GPT-4 rating and human rating. 
        </SectionText>
        <Image src={model_eval} className="col-span-12 w-2/3 my-4 lg:w-1/3 lg:my-0 mx-auto" alt="Evaluation" />

        <SectionText>
          On the hard <span className="font-display">Sotopia</span> tasks, {' '}
          self-reinforcement improves the social goal completion ability of both {' '}
          the base model (Mistral 7B) and the behavior cloned model. {' '}
          If we first do behavior cloning and then self-reinforcement learning, {' '}
          the agent policy is improved significantly, nearly matching {' '}
          the goal completion performance of GPT-4 itself: 5.71 (ours) vs 5.89 (GPT-4) {' '}
          as rated by GPT-4. 
        </SectionText> 

        <Image src={model_perf} className="col-span-12 w-full my-4 lg:w-2/3 lg:my-0 mx-auto" alt="Performance" />

        <SectionText>On MMLU tasks, our best model achieves performance comparable to the base model. Besides improving the social abilities of LLM agents, sotopia-π also maintains the QA ability of the LLMs.</SectionText>
        
        <SectionTitle>
          Social intelligence influences social alignment
        </SectionTitle>
        <SectionText>
          A surprising finding is that social intelligence training improves the safety of social agents. {' '}
        </SectionText>
        <Image src={safety_agent_1} className="col-span-12 lg:col-span-6 w-full my-4 mx-auto" alt="Performance" />
        <Image src={safety_agent_2} className="col-span-12 lg:col-span-6 w-full my-4 mx-auto" alt="Performance" />
        
        <SectionText>
        As shown in these examples, the model trained with BC and SR is safer, more persuasive, and less toxic. {' '}
        </SectionText>
      </SectionContent>
      
      </Detail.ContentContainer>
    </Detail.Container>
  );
}