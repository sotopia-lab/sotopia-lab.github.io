import FormRSC from "@/components/form-rsc";
import Image from "next/image";
import teaser from "../public/teaser.png";
import scenarios from "../public/scenarios.png";
import characters from "../public/characters.png";
import profiles from "../public/profiles.png";

export default function Home() {
  return (
  <div className="h-screen w-full snap-mandatory snap-y overflow-y-scroll">
    <div className="snap-start w-full px-6 sm:px-12 overflow-hidden flex flex-col bg-[url('../public/bg_small.png')] md:bg-[url('../public/bg_large.png')] bg-cover bg-center bg-no-repeat justify-center">
    <div className="text-lg flex flex-row items-start sm:text-xl text-white -mx-6 px-3 sm:px-6 py-16 mb-lh">
      <div className="relative w-full sm:w-[34rem] px-6 py-6 mt-32 md:mt-48 backdrop-blur-sm bg-black/30 font-space">
        <p>A platform for realistic social simulations,</p>
        <p>& an incubator for social intelligence.</p>
      </div>
    </div>
    </div>
      
    
    <div className="snap-start w-full flex flex-col py-16 px-6 sm:px-12">
      <div className="items-start w-full flex flex-col">
        <h1 className="text-2xl w-full font-space text-teal-700 font-bold">Key features of Sotopia</h1>
        <div className="flex flex-col lg:flex-row w-full mt-4 space-y-8 lg:space-y-0 lg:space-x-8 justify-between">
          <div className="w-64 sm:w-96 lg:w-64">
            <h2 className="text-xl font-space text-teal-700 font-bold">Human in the loop</h2>
            <p className="prose mt-4 text-md  text-gray-500 font-space break-all">
            Sotopia is designed to natively support the interaction among humans and AI agents. With simple configuration, you can watch AI agent interacting, start chatting with AI agents, or even join a game with other human players. You can use the default frontend, or build your own frontend using the Sotopia REST API.
            </p>
          </div>
          <div className="w-64 sm:w-96 lg:w-64">
            <h2 className="text-xl font-space text-teal-700 font-bold">Imperfect information</h2>
            <p className="prose mt-4 text-md  text-gray-500 font-space break-all">
            Scenarios in Sotopia typically include both public info for all characters and private info for each character. Character profiles are hidden or partially hidden from other characters based on their relationships. This feature makes Sotopia a perfect testbed for AI agents to learn to reason about imperfect information.
            </p>
          </div>
          <div className="w-64 sm:w-96 lg:w-64">
            <h2 className="text-xl font-space text-teal-700 font-bold">Open-Ended</h2>
            <p className="prose mt-4 text-md  text-gray-500 font-space break-all">
            You are not limited to the original set of tasks in sotopia. We have a tutorial teaching you how to create your own characters and scenarios and bring them to life in Sotopia. The evaluation framework is also open-ended, you can create your own evaluation metrics, whether it&rsquo;s LLM-based or rule-based.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="snap-start w-full flex flex-col py-12 px-6 sm:px-12 space-y-8">
    <h1 className="text-2xl w-full font-space text-teal-700 font-bold">Sotopia concepts</h1>
    <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-between">  
      <div className="w-64 h-48 flex-col">
        <Image
          src={scenarios} className="object-contain object-center w-full h-full" alt="scenarios image" placeholder="blur" />
        <p className="font-space  text-gray-500 font-lg">Scenarios cover a large range of social interaction types</p>
      </div>
      <div className="w-64 h-48">
        <Image
          src={profiles} className="object-contain object-center w-full h-full" alt="scenarios image" placeholder="blur" />
        <p className="font-space  text-gray-500 font-lg">Diverse character profiles</p>
      </div>
      <div className="w-64 h-48">
        <Image
          src={characters} className="object-contain object-center w-full h-full" alt="scenarios image" placeholder="blur" />
        <p className="font-space  text-gray-500 font-lg">Realistic character relationships</p>
      </div>
    </div>
    </div>
    <div className="snap-start h-screen w-full flex flex-col py-12 px-6 sm:px-12 space-y-8">
    <h1 className="text-2xl w-full font-space text-teal-700 font-bold">Demostration</h1>
    TODO add a video/gif demo here
    </div>
    <div className="snap-start h-screen w-full flex flex-col py-12 px-6 sm:px-12 space-y-8">
    <h1 className="text-2xl w-full font-space text-teal-700 font-bold">Get started</h1>
    TODO add code snippets here: two lines of code to start a game. And links to the tutorial.
    </div>
    <div className="snap-start h-screen w-full flex flex-col py-12 px-6 sm:px-12 space-y-8">
    <h1 className="text-2xl w-full font-space text-teal-700 font-bold">Team</h1>
    TODO add team members here. 
    </div>
  </div>
  );
}
