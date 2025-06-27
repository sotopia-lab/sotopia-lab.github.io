"use client"

import Image from "next/image";
import CoverImage from "../components";
import AgentvsStoryteller_intro from '@/public/projects/agent_vs_storyteller/agent_vs_storyteller_intro.png'
import sotopia_pi from '@/public/projects/sotopia_rl.png'
import model from '@/public/projects/sotopia_pi/model.png'
import safety_agent_1 from '@/public/projects/sotopia_pi/safety_agent_1.png'
import safety_agent_2 from '@/public/projects/sotopia_pi/safety_agent_2.png'
import model_step_1 from '@/public/projects/sotopia_pi/model_step_1.png'
import model_step_2 from '@/public/projects/sotopia_pi/model_step_2.png'
import model_step_3 from '@/public/projects/sotopia_pi/model_step_3.png'
import model_eval from '@/public/projects/sotopia_pi/model_eval.png'
import model_perf from '@/public/projects/sotopia_pi/model_perf.png'
import pomdp_sotopia from '@/public/projects/sotopia_rl/pomdp_sotopia.png'
import sotopia_rl_pipeline from '@/public/projects/sotopia_rl/sotopia_rl_pipeline.png'
import sotopia_rl_case_study from '@/public/projects/sotopia_rl/sotopia_rl_case_study.png'
import sotopia_rl_case_study_2 from '@/public/projects/sotopia_rl/sotopia_rl_case_study_2.png'
import sotopia_rl_performance from '@/public/projects/sotopia_rl/sotopia_rl_performance.png'
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
    <span className="font-display inline">Sotopia-RL</span>: Reward Design for Social Intelligence.
    </h3>
    <div className="mb-2 text-md lg:text-lg">
      <div><Link className="underline" href="https://haofeiyu.me/">Haofei Yu</Link>*</div>
      <div><Link className="underline" href="https://www.linkedin.com/in/zhengyang-jason-qi/">Zhengyang Qi</Link>*<sup>1</sup></div>
      <div><Link className="underline" href="https://www.linkedin.com/in/zhaoyining/">Yining Zhao</Link>*<sup>1</sup></div>
      <div><Link className="underline" href="https://sites.uci.edu/kolbynottingham/">Kolby Nottingham</Link><sup>2</sup></div>
      <div><Link className="underline" href="https://keyangds.github.io/">Keyang Xuan</Link><sup>1</sup></div>
      <div><Link className="underline" href="https://www.majumderb.com/">Bodhisattwa Prasad Majumder</Link><sup>3</sup></div>
      <div><Link className="underline" href="https://zhuhao.me">Hao Zhu</Link><sup>5</sup></div>
      <div><Link className="underline" href="https://pliang279.github.io/">Paul Pu Liang</Link><sup>6</sup></div>
      <div><Link className="underline" href="https://cs.stanford.edu/~jiaxuan/">Jiaxuan You</Link><sup>1</sup></div>
      
    </div>

    <div className="mb-2 text-sm lg:text-md">
      * Leading authors.
    </div>

    <span className="inline-block pr-1"><sup>1</sup>University of Illinois Urbana-Champaign,</span>
    <span className="inline-block pr-1"><sup>2</sup>University of California Irvine,</span>
    <span className="inline-block pr-1"><sup>3</sup>Allen Institute for Artificial Intelligence,</span>
    <span className="inline-block pr-1"><sup>4</sup>Carnegie Mellon Unversity,</span>
    <span className="inline-block pr-1"><sup>5</sup>Stanford University</span>
    <span className="inline-block pr-1"><sup>6</sup>Massachusetts Institute of Technology</span>
    </>              
  );
}

function Abstract() {
  return (
    <p className="antialiased mb-4 text-2xl lg:text-3xl leading-relaxed">
    How can we design rewards for RL training of social agents?

Sotopia-RL tackles this by leveraging the POMDP nature of social tasks. We introduce a multi-dimensional, utterance-level reward tailored for online RL. This approach improves Qwen2.5-7B-Instruct beyond GPT-4o on Sotopia evaluation, with stronger human evaluations and no reward hacking observed.
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
      <div className="col-span-12 text-center">Check out our <Link href="TODO"><span className="underline font-bold">paper</span></Link>, {' '}
      <Link href="https://github.com/sotopia-lab/sotopia-rl"><span className="underline font-bold">code</span></Link>, {' '}
      <Link href="https://huggingface.co/ulab-ai/sotopia-rl-qwen-2.5-7B-grpo"><span className="underline font-bold">model</span></Link>, {' '}
      <Link href="https://huggingface.co/datasets/ulab-ai/sotopia-rl-data"><span className="underline font-bold">data</span></Link>, {' '}
      and interactive demo!</div>
      <div className="col-span-12"><Abstract></Abstract></div>
      <hr className="col-span-12" />
      </SectionContent>

      
      <SectionContent>
  <SectionTitle>Why Social Tasks Are POMDPs</SectionTitle>
  <SectionText>
  Unlike problem-solving tasks that follow a <span class="underline">Markov Decision Process (MDP)</span> and can be decomposed into sub-problems with binary success/failure outcomes, social tasks are inherently partially observable and non-decomposable. A single utterance can drastically change the outcome depending on its order or context, making the structure non-Markovian. Moreover, success in social tasks involves multiple dimensions—not just task completion, but also the preservation of relationships and accurate knowledge sharing. To capture this complexity, we propose a <span class="underline">multi-dimensional, utterance-level reward design</span> that aligns with the nuanced nature of social interactions. This allows reinforcement learning to optimize beyond goal completion, ensuring socially intelligent behavior.
  </SectionText>
</SectionContent>

<Image src={pomdp_sotopia} className="col-span-12 w-2/3 my-4 lg:w-1/2 lg:my-0 mx-auto" alt="Step 1" />


      <SectionContent>
        <SectionTitle>How does Sotopia-RL work?</SectionTitle>
        <SectionText>
        The first step in our pipeline is to assign rewards to individual utterances in a multi-turn dialogue. Instead of relying solely on final outcomes, we use a language model like GPT-4o to annotate each utterance’s contribution toward achieving the agent’s social goal. This process transforms coarse episode-level feedback into <span className="underline decoration-double">utterance-level</span> signals, enabling more precise credit assignment throughout the conversation.
        </SectionText>

        <SectionText>
        Next, we enhance these utterance-level rewards by combining multiple social evaluation dimensions. Specifically, we incorporate goal completion, relationship-building, and knowledge-sharing scores—each provided by SOTOPIA-EVAL—and normalize them to form a single scalar reward per utterance. This <span className="underline decoration-double">multi-dimensional</span> reward design improves learning stability and better captures the richness of social intelligence.
        </SectionText>

        <SectionText>
        With these structured rewards, we train a <span className="underline decoration-double">reward model</span> to predict the quality of an utterance given the conversational context. Supervised using the LLM-generated reward labels, the model learns to approximate utterance-level feedback using mean squared error loss. This step offline reward labeling into online reward modeling.
        </SectionText>

        <SectionText>
        Finally, we fine-tune an LLM-based <span className="underline decoration-double">policy model</span> using GRPO. Starting with a supervised behavior cloning phase to ensure socially coherent responses, we continue training the agent with single-turn online RL. At each turn, the trained reward model provides immediate feedback for the utterance, guiding the agent to produce more effective and socially appropriate responses over time.
        </SectionText>

        <Image src={sotopia_rl_pipeline} className="my-4 col-span-12" alt="Step 1" />
    </SectionContent>

      <SectionContent>
        <SectionTitle>
          Performance evaluation
        </SectionTitle>
        
        <SectionText>
          We evaluate our model by simulating the interaction between RL-agent and RL-partner (behavior cloning based agent). {' '}
          This is then evaluated by both GPT-4o rating and human rating. 
        </SectionText>
        <Image src={model_eval} className="col-span-12 w-2/3 my-4 lg:w-1/3 lg:my-0 mx-auto" alt="Evaluation" />

        <SectionText>
          On the hard <span className="font-display">Sotopia</span> tasks, {' '}
          <span className="font-display">Sotopia-RL</span> improves the social goal completion ability of  the behavior cloned model (Qwen-2.5-7B) on both LLM-based evaluation and human evaluations. Training with Sotopia-RL also provides better performance compared with <span className="font-display">Sotopia-π</span>. {' '}
          Additionally, designing RL rewards across multiple dimensions—such as relationship maintenance, knowledge sharing, and goal completion—leads to better model performance than optimizing for goal completion alone. The reason for that is potentially because it encourages more diverse social behaviors and regularizes the training process from overfitting.
        </SectionText> 

        <Image src={sotopia_rl_performance} className="col-span-12 w-full my-4 lg:w-2/3 lg:my-0 mx-auto" alt="Performance" />

        <SectionTitle>
          Sotopia-RL builds a more intelligent social agent
        </SectionTitle>
        <SectionText>
        As shown in the examples, the model trained with Sotopia-RL is more persuasive to propose collaborative solutions compared with behavior cloning baselines. {' '}
        </SectionText>
        <Image src={sotopia_rl_case_study} className="col-span-12 w-2/3 my-4 lg:w-2/3 lg:my-0 mx-auto" alt="Step 1"/>

        <SectionText>
        Moreover, in the following example, the model trained with Sotopia-RL is able to acknowledge the social goal of both sides and offer a solution-oriented perspective.
        </SectionText>
        <Image src={sotopia_rl_case_study_2} className="col-span-12 w-2/3 my-4 lg:w-2/3 lg:my-0 mx-auto" alt="Step 1"/>
        

      </SectionContent>

      <SectionContent>
        <SectionTitle>
          Citation
        </SectionTitle>
            <code className="col-span-12 block whitespace-pre overflow-x-scroll bg-slate-100 bg-clip-border p-3"> 
            {'@misc{none,\n'}
              </code>
        

      </SectionContent>
      
      </Detail.ContentContainer>
    </Detail.Container>
  );
}
