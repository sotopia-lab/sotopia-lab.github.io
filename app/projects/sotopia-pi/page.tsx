import Image from "next/image";
import CoverImage from "../components";
import AgentvsStoryteller_intro from '@/public/projects/agent_vs_storyteller/agent_vs_storyteller_intro.png'
import sotopia_pi from '@/public/projects/sotopia_pi.jpg'
import goal_results from '@/public/projects/agent_vs_storyteller/goal_results.png'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link";

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
          <span className="font-display inline">Sotopia-π</span>: Interactive Learning of Socially Intelligent Language Agents 
          </h3>
          <div className="mb-2 text-md lg:text-lg">
            <div><Link className="underline" href="https://ruiyiw.github.io/">Ruiyi Wang</Link>*</div>
            <div><Link className="underline" href="https://haofeiyu.me/">Haofei Yu</Link>*</div>
            <div><Link className="underline" href="https://www.linkedin.com/in/sharon-zhang-48690504/">Wenxin Zhang</Link>*</div>
            <div><Link className="underline" href="https://www.linkedin.com/in/zhengyang-jason-qi/">Zhengyang Qi</Link>*</div>
            <div><Link className="underline" href="https://maarensap.com/">Maarten Sap</Link></div>
            <div><Link className="underline" href="https://www.phontron.com/">Graham Neubig</Link></div>
            <div><Link className="underline" href="https://talkingtorobots.com/yonatanbisk.html">Yonatan Bisk</Link></div>
            <div><Link className="underline" href="https://zhuhao.me">Hao Zhu</Link></div>
            
          </div>

          <div className="mb-2 text-sm lg:text-md">
            * Leading authors. All authors are from Carnegie Mellon University.
          </div>
                          

          <p className="antialiased mb-4 text-2xl lg:text-3xl leading-relaxed">
          
          </p>

        </div>
        <div>
          <div className="mb-8 md:mb-16">
            <CoverImage title={"Sotopia-pi"} src={sotopia_pi}/>
          </div>
        </div>
      </div>
          


    </section>
      </div>
    </main>
  );
}