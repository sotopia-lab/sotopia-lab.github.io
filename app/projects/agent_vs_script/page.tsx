import { GitHubIcon } from "@/components/Icon";
import CoverImage from "../components";
import agentvsstory from '@/public/projects/agent_vs_storyteller.jpg'

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
                <a href="/">Paper</a>
            </span>
            <span className="inline-block pr-4 text-slate-500 hover:underline italic">               
                <a href="/">Code</a>
            </span>
            <span className="inline-block pr-4 text-slate-500 hover:underline italic">               
                <a href="/">Data</a>
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
      <section className="md:grid md:grid-cols-8 items-left md:justify-between mt-20">       
        <h1 className="text-2xl md:text-3xl md:col-start-2 md:col-end-7 tracking-tighter leading-tight pb-16 font-grotesk">
            Abstract              
        </h1>
        <p className="md:col-start-2 md:col-end-7 text-md md:text-lg antialiased">
        Recent advances in large language models (LLM) have enabled richer social simulations, allowing for the study of various social phenomena with LLM-based agents. However, most work has used an omniscient perspective on these simulations (e.g., single LLM to generate all interlocutors), which is fundamentally at odds with the non-omniscient, information asymmetric interactions that humans have. To examine these differences, we develop an evaluation framework to simulate social interactions with LLMs in various settings (omniscient, non-omniscient). Our experiments show that interlocutors simulated omnisciently are much more successful at accomplishing social goals compared to non-omniscient agents, despite the latter being the more realistic setting. Furthermore, we demonstrate that learning from omniscient simulations improves the apparent naturalness of interactions but scarcely enhances goal achievement in cooperative scenarios. Our findings indicate that addressing information asymmetry remains a fundamental challenge for LLM-based agents.
        </p>        
      </section> 

      <section className="md:grid md:grid-cols-8 items-left md:justify-between mt-20">       
        <h1 className="text-2xl md:text-3xl md:col-start-2 md:col-end-7 tracking-tighter leading-tight pb-16 font-grotesk">
        Motivation               
        </h1>
        <p className="md:col-start-2 md:col-end-7 text-md md:text-lg antialiased">
        ...
        </p>        
      </section>  
            
      <section className="md:grid md:grid-cols-8 items-left md:justify-between mt-20">       
        <h1 className="text-2xl md:text-3xl md:col-start-2 md:col-end-7 tracking-tighter leading-tight pb-16 font-grotesk">
        Simulating Society for Analysis               
        </h1>
        <p className="md:col-start-2 md:col-end-7 text-md md:text-lg antialiased">
        ...
        </p>        
      </section> 
            
      <section className="md:grid md:grid-cols-8 items-left md:justify-between my-20">       
        <h1 className="text-2xl md:text-3xl md:col-start-2 md:col-end-7 tracking-tighter leading-tight pb-16 font-grotesk">
        Simulating Interactions for Training               
        </h1>
        <p className="md:col-start-2 md:col-end-7 text-md md:text-lg antialiased">
        ...
        </p>        
      </section> 
      </div>

    </section>
      </div>
    </main>
  );
}