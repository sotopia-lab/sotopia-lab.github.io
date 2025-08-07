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
      <div><Link className="underline" href="https://zhuhao.me">Hao Zhu</Link>†<sup>5</sup></div>
      <div><Link className="underline" href="https://pliang279.github.io/">Paul Pu Liang</Link>†<sup>6</sup></div>
      <div><Link className="underline" href="https://cs.stanford.edu/~jiaxuan/">Jiaxuan You</Link>†<sup>1</sup></div>
      
    </div>

    <div className="mb-2 text-sm lg:text-md">
      * Leading authors.
      † Equal advising.
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
    How can social agents learn to generate high-quality utterances in social interactions? We propose Sotopia-RL, an RL framework that tackles partial observability and multi-dimensionality in social interactions by assigning fine-grained, utterance-level rewards. We reach the state-of-the-art performance on Sotopia with Qwen2.5-7B-Instruct as the base model.
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
      <div className="col-span-12 text-center">Check out our <Link href="https://arxiv.org/pdf/2508.03905"><span className="underline font-bold">paper</span></Link>, {' '}
      <Link href="https://github.com/sotopia-lab/sotopia-rl"><span className="underline font-bold">code</span></Link>, {' '}
      <Link href="https://huggingface.co/ulab-ai/sotopia-rl-qwen-2.5-7B-grpo"><span className="underline font-bold">policy model</span></Link>, {' '} <Link href="https://huggingface.co/ulab-ai/sotopia-rl-qwen2.5-7B-rm"><span className="underline font-bold">reward model</span></Link>, {' '}
      <Link href="https://huggingface.co/datasets/ulab-ai/sotopia-rl-reward-annotation"><span className="underline font-bold">data</span></Link>, {' '}
      and interactive demo!</div>
      <div className="col-span-12"><Abstract></Abstract></div>
      <hr className="col-span-12" />
      </SectionContent>

      
      <SectionContent>
  <SectionTitle>Why we need reward design for social intelligence?</SectionTitle>
  <SectionText>
    Social agent naturally learn skills through interactions. However, two key features of social interactions (partial observability and multi-dimensionality) make it challenging to train social agents with reinforcement learning (RL).
  </SectionText>
  <SectionText>
  <span className="font-display">Partial Observability</span>. In social interactions, agents operate under partial observability—they only observe the dialogue history, not hidden factors like intentions, emotions, or social norms that drive outcomes. This makes credit assignment difficult: even low-quality utterances may appear in successful conversations, and high-quality ones may go unrewarded. For RL, this creates high-variance reward signals that hinder stable policy learning compared to tasks like math or coding.
</SectionText>

<SectionText>
<span className="font-display">Multi-Dimensionality</span>. Rapport building and knowledge seeking can indirectly contribute to the final goal achievement of social interactions. Single-dimensional reward on goal completion score oversimplifies this complexity, encouraging agents to exploit narrow signals while ignoring diverse social behaviors. For RL, this increases the risk of reward hacking or overfitting to spurious features, making it harder to generalize and develop socially intelligent strategies that align with human expectations.
  </SectionText>

<SectionText>
    Overall, we target at designing RL framework for social agents that makes training efficient and effective, making social agents perform well under diverse social scenarios.
    </SectionText>
</SectionContent>

<Image src={pomdp_sotopia} className="col-span-18 w-10/12 my-4 mx-auto" alt="Step 1" />




      <SectionContent>
        <SectionTitle>How does Sotopia-RL work?</SectionTitle>
        <SectionText> 
            SOTOPIA-RL consists of three stages: (1) reward design, (2) reward model training, and (3) policy training.
        </SectionText> 
        <SectionText> 
        <span className="font-display">Reward Design</span>. To build better offline reward labels for RL training, we expand the reward signal along two axes. First, we shift from coarse episode-level feedback to fine-grained <span className="underline decoration-double">utterance-level</span> credit, capturing the temporal granularity of social interactions. Second, we enrich the signal from a single-dimensional score to a <span className="underline decoration-double">multi-dimensional</span> evaluation that includes goal completion, relationship-building, and knowledge-sharing, as provided by SOTOPIA-EVAL. Multi-dimensional scores are normalized and aggregated into a scalar reward, producing robust and socially grounded supervision for RL.
            </SectionText> 

        <SectionText> 
        <span className="font-display">RM Training</span>. In the second stage, we train a reward model to predict the quality of an utterance given the conversation history. Supervised by offline reward labels, the model learns to approximate utterance-level feedback via mean squared error loss, enabling utterance-level online reward inference during policy training. 
        </SectionText> 
        <SectionText> 
        <span className="font-display">Policy Training</span>. Finally, we fine-tune an LLM-based policy model using GRPO. Starting with behavior cloning to ensure fluency and coherence, we continue with single-turn online RL. At each turn, the reward model provides immediate feedback for the utterance, guiding the agent toward socially effective behaviors through interaction. 
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
  {'@misc{yu2025sotopiarlrewarddesignsocial,\n' +
  '  title={Sotopia-RL: Reward Design for Social Intelligence},\n' +
  '  author={Haofei Yu and Zhengyang Qi and Yining Zhao and Kolby Nottingham and Keyang Xuan and Bodhisattwa Prasad Majumder and Hao Zhu and Paul Pu Liang and Jiaxuan You},\n' +
  '  year={2025},\n' +
  '  eprint={2508.03905},\n' +
  '  archivePrefix={arXiv},\n' +
  '  primaryClass={cs.CL},\n' +
  '  url={https://arxiv.org/abs/2508.03905}\n' +
  '}'}
</code>
        

      </SectionContent>
      
      </Detail.ContentContainer>
    </Detail.Container>
  );
}
