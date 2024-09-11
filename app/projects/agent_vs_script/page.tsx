"use client"

import Image from "next/image";
import Link from "next/link";
import CoverImage from "../components";
import AgentvsStoryteller_intro from '@/public/projects/agent_vs_storyteller/agent_vs_storyteller_intro.png'
import agentvsstory from '@/public/projects/agent_vs_storyteller.jpg'
import goal_results from '@/public/projects/agent_vs_storyteller/goal_results.png'

function scriptMode() {
  return (
    <span className="italic font-grotesk">Script mode</span>
  )
}

function agentMode() {
  return (
    <span className="italic font-grotesk">Agents mode</span>
  )
}

function mindreaders() {
  return (
    <span className="italic font-grotesk">Mind readers</span>
  )
}


export default function Index() {
  return (
    <main>
      <div className="container mx-auto px-5 pt-20">
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
                  
        <h1 className="text-xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8">
            Research.              
        </h1>
                  
        </section>
        <section>
          <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-10 md:mb-18">
            <div>
              <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
              <span className="italic">Is this the real life? Is this just fantasy?</span> The Misleading Success of Simulating Social Interactions With LLMs 
              </h3>
              <div className="mb-2 text-md lg:text-lg">
                <span className="inline-block pr-1">
                  <a className="hover:underline" href="https://xuhuiz.com/">Xuhui Zhou</a><sup>1</sup>,
                </span>
                <span className="inline-block pr-1">
                  <a className="hover:underline" href="https://www.linkedin.com/in/zhesu0">Zhe Su</a><sup>1</sup>,
                </span>
                <span className="inline-block pr-1">
                  <a className="hover:underline" href="https://github.com/eisape">Tiwalayo Eisape</a><sup>2</sup>,
                </span>
                <span className="inline-block pr-1">
                  <a className="hover:underline" href="https://hyunw.kim/">Hyunwoo Kim</a><sup>3</sup>,
                </span>
                <span className="inline-block pr-1">
                  <a className="hover:underline" href="https://maartensap.com/">Maarten Sap</a><sup>1</sup>
                </span>
              </div>

              <div className="mb-2 text-md lg:text-lg">
                <span className="inline-block pr-1"><sup>1</sup>Carnegie Mellon University,</span>
                <span className="inline-block pr-1"><sup>2</sup>Massachusetts Institute of Technology,</span>
                <span className="inline-block pr-1"><sup>3</sup>Allen Institute for AI</span>
              </div>
                              
              {/* <div className="mb-4 md:mb-0 text-lg">
              <time dateTime="2024-02-07">Feburary 7, 2024</time>
              </div> */}
              <p className="antialiased mb-4 text-2xl lg:text-3xl leading-relaxed">Recent advancements in large language models (LLM) facilitate nuanced social simulations, yet most studies adopt an omniscient perspective, diverging from real human interactions characterized by information asymmetry. We devise an evaluation framework to explore these differences.</p>
              <div className="mb-2 text-1xl lg:text-2xl">
                <span className="inline-block pr-4 text-slate-500 hover:underline italic">               
                    <a href="https://arxiv.org/abs/2403.05020">Paper</a>
                </span>
                <span className="inline-block pr-4 text-slate-500 hover:underline italic">               
                    <a href="https://github.com/sotopia-lab/sotopia">Code</a>
                </span>
                <span className="inline-block pr-4 text-slate-500 hover:underline italic">               
                    <a href="https://huggingface.co/datasets/cmu-lti/agents_vs_script">Data</a>
                </span>
                <span className="inline-block pr-4 text-slate-500 hover:underline italic">               
                    <a href="/">Twitter</a>
                </span>
              </div>
            </div>
            <div>
              <div className="mb-8 md:mb-16">
                <CoverImage title={"agents vs script writer"} src={agentvsstory}/>
              </div>
            </div>
          </div>
              
          <div className="relative flex pb-5 items-center">
              <div className="flex-grow border-t border-slate-400"></div>
          </div>
          
          <div className="container mx-auto px-5">
            <section className="md:grid md:grid-cols-12 items-left md:justify-between my-10">       
              <h1 className="text-2xl md:text-3xl md:col-start-3 md:col-end-11 tracking-tighter leading-tight pb-6 font-grotesk">
                  Abstract              
              </h1>
              <p className="md:col-start-3 md:col-end-11 text-md md:text-lg antialiased">
              Recent advances in large language models (LLM) have enabled richer social simulations, allowing for the study of various social phenomena with LLM-based agents. However, most work has used an omniscient perspective on these simulations (e.g., single LLM to generate all interlocutors), which is fundamentally at odds with the non-omniscient, information asymmetric interactions that humans have. To examine these differences, we develop an evaluation framework to simulate social interactions with LLMs in various settings (omniscient, non-omniscient). Our experiments show that interlocutors simulated omnisciently are much more successful at accomplishing social goals compared to non-omniscient agents, despite the latter being the more realistic setting. Furthermore, we demonstrate that learning from omniscient simulations improves the apparent naturalness of interactions but scarcely enhances goal achievement in cooperative scenarios. Our findings indicate that addressing information asymmetry remains a fundamental challenge for LLM-based agents.
              </p>        
            </section> 

            <section className="md:grid md:grid-cols-12 items-left md:justify-between my-10">       
              <h1 className="text-2xl md:text-3xl md:col-start-3 md:col-end-11 tracking-tighter leading-tight pb-6 font-grotesk">
              Motivation               
              </h1>
              <figure className="md:col-start-3 md:col-end-11 my-8">
              <Image
                src={AgentvsStoryteller_intro}
                quality={100}
                className="md:col-start-3 md:col-end-11"
                alt="a picture of green colors"
                      />
                <figcaption className="z-10 mt-4 text-sm italic text-gray-600">
                        Figure 1: An illustration between {scriptMode()} simulation and {agentMode()} simulation. In the {agentMode()} simulation, two agents, each equipped with an LLM, negotiate and strategically seek information to reach a mutual agreement. Conversely, in {scriptMode()} simulation, a single omniscient LLM orchestrates the entire interaction based on full access to the agents&lsquo; goals. While initially appearing efficient, this interaction lacks essential human communication properties.
        </figcaption>
              </figure>
              <p className="md:col-start-3 md:col-end-11 text-md md:text-lg antialiased">
              People navigate everyday social interactions easily despite not having access to other&lsquo;s mental states (i.e., <span className="italic">information asymmetry</span>).
                As illustrated in Figure 1, the communication between two agents that are bargaining over a price requires complex interactions for them to understand the interlocutor&lsquo;s motive.
                With modern-day LLMs, simulating such interactions has gotten better.
                From building a town of AI-powered characters to simulating social media platforms, and training better chatbot systems, LLMs seem to be capable to realistically simulate human social interactions.</p>
                <p className="md:col-start-3 md:col-end-11 text-md md:text-lg antialiased">
      However, despite their impressive abilities, one key shortcoming has prevented realistic social simulation: a wide range of prior research has leveraged the <span className="italic">omniscient perspective</span> to model and simulate social interactions.
      By generating all sides of interaction at once or making agent goals transparent to all participants, these simulations diverge from the non-omniscient human interactions that rely on social inference to achieve goals in real-world scenarios. Studying these omniscient simulations could potentially lead to biased or wrong conclusions.
              </p>        
            </section>  
                  
            <section className="md:grid md:grid-cols-12 items-left md:justify-between my-10">       
              <h1 className="text-2xl md:text-3xl md:col-start-3 md:col-end-11 tracking-tighter leading-tight pb-6 font-grotesk">
              Simulating Society for Analysis               
              </h1>
              <p className="md:col-start-3 md:col-end-11 text-md md:text-lg antialiased">
              To investigate the effect of this incongruity, we create a unified simulation framework by building on Sotopia.
              We set up two modes for simulating human interaction in LLMs: {scriptMode()} and {agentMode()}.
              As shown in Figure 1, in the {scriptMode()}, one omniscient LLM has access to all the information and generates the entire dialogue from a third-person perspective. In the {agentMode()}, two LLMs assume distinct roles and engage in interaction to accomplish the task despite the presence of information asymmetry.
              </p>

              <figure className="md:col-start-3 md:col-end-11 my-8">
              <Image
                src={goal_results}
                quality={100}
                className="md:col-start-3 md:col-end-11"
                alt="a picture of green colors"
                      />
                <figcaption className="z-10 mt-4 text-sm italic text-gray-600">
                        Figure 2: Average goal completion score of models across different modes in various settings. Overall contains all the scenarios, and the other two contains representative scenarios from the cooperative and competitive scenarios. We perform pairwise t-test, and * denotes the score is statistical significantly different from the other two modes in this setting.
                        To study the effects of information asymmetry, we add one ablation setting where information asymmetry is removed from the {agentMode()} simulation by giving each agent access to other characters&lsquo; information (e.g., social goals). This is referred to as the {mindreaders()}. 
                      </figcaption>
              </figure>
            
              <p className="md:col-start-3 md:col-end-11 text-md md:text-lg antialiased">
              As shown in Figure 2, there are drastic disparities in each of these modes in terms of achieving social goals and naturalness. The {scriptMode()} significantly overestimates the ability of LLM-agents to achieve social goals, while LLM-based agents struggle to act in situations with information asymmetry. 
      Additionally, the {agentMode()} generates interactions that sound significantly less natural, further highlighting the disparities in these simulation modes.
              </p>
              
                    
            </section> 
                  
            <section className="md:grid md:grid-cols-12 items-left md:justify-between my-10">       
              <h1 className="text-2xl md:text-3xl md:col-start-3 md:col-end-11 tracking-tighter leading-tight pb-6 font-grotesk">
              Simulating Interactions for Training               
              </h1>
              <p className="md:col-start-3 md:col-end-11 text-md md:text-lg antialiased">
                We then ask the question of whether LLM agents can be learned from {scriptMode()} simulations. We finetune GPT-3.5 on a large dataset of interactions generated omnisciently.
                We find that through finetuning, {agentMode()} models become more natural yet barely improve in cooperative scenarios with information asymmetry.
                Further analysis shows that {scriptMode()} simulations contain information leakage in cooperative scenarios and tend to produce overly agreeable interlocutors in competitive settings.
              </p>        
            </section> 
  
            <section className="md:grid md:grid-cols-12 items-left md:justify-between my-10">       
              <h1 className="text-2xl md:text-3xl md:col-start-3 md:col-end-11 tracking-tighter leading-tight pb-6 font-grotesk">
              Citation               
                </h1>
                <code className="md:col-start-3 md:col-end-11 block whitespace-pre overflow-x-scroll bg-slate-100 bg-clip-border p-3"> 
                {'@misc{zhou2024real,\n'}
      {'  title={Is this the real life? Is this just fantasy? The Misleading Success of Simulating Social Interactions With LLMs},\n'}
      {'  author={Xuhui Zhou and Zhe Su and Tiwalayo Eisape and Hyunwoo Kim and Maarten Sap},\n'}
      {'  year={2024},\n'}
      {'  eprint={2403.05020},\n'}
      {'  archivePrefix={arXiv},\n'}
      {'  primaryClass={cs.CL}\n'}
      {'}\n'}
            </code>

              
            </section> 
          </div>
        </section>
      </div>
    </main>
  );
}