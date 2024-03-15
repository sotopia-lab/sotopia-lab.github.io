'use client'
import { SectionContent } from "../page";
import { SectionTitle } from "../page";
import Link from "next/link";
import ImageWithTextOverlay from "@/components/ui/image-text-overlay";
import agentvsstory from '@/public/projects/agent_vs_storyteller.jpg'
import sotopiaPi from '@/public/projects/sotopia_pi.jpg'
import sotopia from '@/public/projects/sotopia.jpg'
import { Detail } from '@/components/ListDetail/Detail'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="w-full">
            <div>{children}</div>
            <Detail.ContentContainer className="mx-auto max-w-2xl lg:max-w-5xl">
            <SectionContent>
            <SectionTitle>More research</SectionTitle>
                <div className="col-span-12 lg:col-span-4">
                <Link href="/projects/agent_vs_script">
                <ImageWithTextOverlay
                src={agentvsstory}
                alt="a picture of green colors"
                title={<p>Is this the real life? Is this just fantasy? The Misleading Success of Simulating Social Interactions With LLMs</p>}
                />
                <p className="prose mt-4 text-lg  text-black dark:text-gray-200 font-space italic hover:underline">
                TL;DR: Omniscenient social simulation with LLMs is different from realistic human social interactions.
                </p>
                </Link>
                </div>
                <div className="col-span-12 lg:col-span-4">
                <Link href="/projects/sotopia-pi">
                    <ImageWithTextOverlay
                    src={sotopiaPi}
                    alt="a picture of green colors"
                    title={<p><span className='font-display inline'>Sotopia-π</span>: Interactive Learning of Socially Intelligent Language Agents</p>}
                    />
                    <p className="prose mt-4 text-lg  text-black dark:text-gray-200 font-space italic hover:underline">
                    
                    Check out our newest training method aiming for more socially intelligent and aligned agents.
                    </p>
                </Link>
                </div>
                <div className="col-span-12 lg:col-span-4">
                <Link href="/projects/sotopia">
                <ImageWithTextOverlay
                    src={sotopia}
                    alt="road to purple"
                    title={<p><span className="font-display inline">Sotopia</span>: Interactive Evaluation for Social Intelligence in Language Agents</p>}
                    />
                    <p className="prose mt-4 text-lg  text-black dark:text-gray-200 font-space italic hover:underline">
                    TL;DR: A interation-based framework for evaluating social intelligence in language agents.
                    </p>
                    {/* <p className="prose mt-4 text-sm  text-gray-500 dark:text-gray-200 font-space">
                    TL;DR: We introduce a new benchmark for social intelligence, where AI agents are evaluated on their ability to understand and generate stories.
                    </p> */}
                </Link>
                </div>
                    </SectionContent>
            </Detail.ContentContainer>
      </div>
    );
  }