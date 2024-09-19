"use client"

import Image from "next/image";
import Link from "next/link";
import CoverImage from "../components";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Abhaya_Libre } from "next/font/google";
import { Detail } from "@/components/ListDetail/Detail";
import React from "react";
import intro_conversation from '@/public/projects/ai_liedar/intro_conversation.png'
import pipeline from '@/public/projects/ai_liedar/pipeline.png'
import main_res from '@/public/projects/ai_liedar/main_res.png'
import ablation_tag from '@/public/projects/ai_liedar/ablation_tag.png'
import ablation_steer from '@/public/projects/ai_liedar/ablation_steer.png'

function SectionContent(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
  return <div className="w-full gap-8 grid grid-cols-12 font-inter py-6 px-3 sm:px-12" {...props} />
}
function SectionText(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
  return <p className="col-span-12 prose mt-2 text-lg text-slate-800 dark:text-gray-200 font-space" {...props} />
}
function SectionTitle(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
  return <h1 className="text-4xl col-span-12 font-grotesk black dark:white dark:font-light dark:drop-shadow-[0_1px_15px_#ccfbf1]" {...props} />
}
function SectionSubtitle(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
  return <h2 className="text-3xl col-span-12 font-grotesk mt-1 mb-1 text-gray-700 dark:text-gray-300" {...props} />
}
function Paragraph(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className="my-0" {...props} />
}
function OrderedList(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLOListElement> & React.OlHTMLAttributes<HTMLOListElement>) {
  return <ol className="col-span-12 list-decimal list-inside mt-2 mb-2 space-y-2" {...props} />
}

function ListItem(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLLIElement> & React.LiHTMLAttributes<HTMLLIElement>) {
  return <li className="text-lg text-slate-800 dark:text-gray-200 font-space" {...props} />
}


function Title() {
  return (
    <>
    <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
    <span className="font-display inline">AI-LieDar</span>: Examine the Trade-off Between Utility and Truthfulness in LLM Agents
    </h3>
    <div className="mb-2 text-md lg:text-lg">
      <div>Zhe Su<sup>1</sup> </div>
      <div>Xuhui Zhou<sup>1</sup></div>
      <div>Sanketh Rangreji<sup>1</sup></div>
      <div>Anubha Kabra<sup>1</sup></div>
      <div>Julia Mendelsohn<sup>2</sup></div>
      <div>Faeze Brahman<sup>3</sup></div>
      <div>Maarten Sap<sup>1</sup></div>
    </div>
    <div className="mb-2 text-md lg:text-lg">
      <span className="inline-block pr-1"><sup>1</sup>Carnegie Mellon University</span>
      <span className="inline-block pr-1"><sup>2</sup>University of Michigan, Ann Arbor</span>
      <span className="inline-block pr-1"><sup>3</sup>Allen Institute for AI</span>
    </div>
    
    </>              
  );
}

export default function Index() {
  const scrollContainerRef = React.useRef(null);
  return (
    <main>
      <Detail.Container data-cy="ai-truthfulness-post" ref={scrollContainerRef}>
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
              <CoverImage title={"AI-LieDar"} src={intro_conversation}/>
            </div>
          </div>
        </SectionContent>

        {/* <SectionContent>
          <div className="col-span-12 md:col-span-6">
            <Title></Title>
          </div>
        </SectionContent>
        <Image className="my-4 col-span-12" src={intro_conversation}/> */}

        <SectionContent>
          <SectionTitle>When AI Helpfulness Meets Truthfulness</SectionTitle>
          <SectionSubtitle>The Dilemma in Instruction - Truthful or Utility?</SectionSubtitle>
          <SectionText>
            <Paragraph>When deploying our LLM-based agents, we want an AI assistant to be:</Paragraph>
            <OrderedList>
              <ListItem><strong>Helpful</strong> - providing useful information and assistance to achieve the user&apos;s goals (i.e. <strong>achieving Utility</strong>)</ListItem>
              <ListItem><strong>Truthful</strong> - offering accurate and honest responses</ListItem>
            </OrderedList> <br />
            {/* 1. <strong>Helpful</strong> - providing useful information and assistance to achieve the user's goals (i.e. <strong>achieving Utility</strong>)<br />
            2. <strong>Truthful</strong> - offering accurate and honest responses
            However, these two qualities can sometimes conflict. <br /> */}
            Imagine chatting with an AI shopping assistant designed to help you pick the best product. This seemingly straightforward interaction can lead to different outcomes:
            <OrderedList>
              <ListItem>A truthful AI might candidly <strong>disclose a product&apos;s shortcomings</strong>, even if that means failing to make a sale.</ListItem>
              <ListItem>A helpful AI (from the seller&apos;s perspective) might <strong>engage in deceptive practices</strong>, such as obfuscation or even outright lying, to convince you to buy the product.</ListItem>
            </OrderedList> <br />
{/* 
            1. A truthful AI might candidly <strong>disclose a product's shortcomings</strong>, even if that means failing to make a sale.<br />
            2. A helpful AI (from the seller's perspective) might <strong>engage in deceptive practices</strong>, such as obfuscation or even outright lying, to convince you to buy the product. */}
            This scenario highlights a crucial dilemma: <strong>How do AI agents handle the tricky trade-off between utility and being truthful?</strong> And we believe understanding how AI navigates these complex trade-offs is crucial for developing more reliable and ethically-aligned systems.
          </SectionText>
        </SectionContent>

        <SectionContent>
          <SectionSubtitle>Why Understanding Instruction is Hard</SectionSubtitle>
          <SectionText>
            In real-world scenarios, humans often provide <strong>ambiguous or under-specified instructions</strong>. We naturally rely on common sense and prior knowledge to fill in the gaps and navigate complex situations. However, AI agents lack this intuitive understanding.
            Similarly, humans have <strong>implicit expectations about truthfulness and social norms</strong> that we don't always explicitly state. An AI focused solely on achieving a given goal might not consider these unspoken rules, potentially leading to unintended behaviors.
            The situation is further complicated by the question of <strong>whose instructions the AI should prioritize and under what conditions</strong>. This ambiguity can lead to scenarios where an AI&apos;s interpretation of &quot;helpful&quot; might not align with ethical standards or user expectations.
          </SectionText>
        </SectionContent>

        <SectionContent>
          <SectionSubtitle>Enter AI-LieDar</SectionSubtitle>
          <SectionText>
            To dig into this, we&apos;ve created AI-LieDar. It's a tool that presents LLMs with carefully crafted scenarios to see <strong>how they handle these truth-vs-helpfulness dilemmas</strong>.
            Our goal? To understand how AI makes these tough calls. This could help us build AI systems that are not just smart, but also ethical and reliable.
            By exploring this balance between being useful and being truthful, we're tackling a key question in AI ethics. It's not just about making AI work well – it's about making it work right.
          </SectionText>
          {/* <div className="col-span-12">
            <Image src="/ai_liedar_post.assets/image-20240909181548678.png" alt="AI-LieDar concept" width={800} height={600} layout="responsive" />
          </div> */}
        </SectionContent>

        <SectionContent>
          <SectionTitle>AI-LieDar Framework</SectionTitle>
          <Image className="my-4 col-span-12" src={pipeline} alt="AI-LieDar Framework Illustration"/>
          <SectionSubtitle>Scenario Construction</SectionSubtitle>
          <SectionText>
            The heart of our study lies in the carefully crafted scenarios we developed. Our goal was to create situations that would challenge AI models, forcing them to balance helpfulness and truthfulness. The figure above shows how we do it: <br />
            <strong>Creating Conflict</strong>: The core of each scenario is a tension between:
            <OrderedList>
              <ListItem> <strong>Utility:</strong> What the AI needs to achieve</ListItem>
              <ListItem> <strong>Negative Information:</strong> Facts that might hinder that goal if revealed</ListItem>
            </OrderedList>
            {/* 1. Utility: What the AI needs to achieve<br />
            2. Negative Information: Facts that might hinder that goal if revealed */}
            We also included instructions on why the AI should or shouldn't be truthful, adding depth to the ethical dilemma. <br /> <br />
            <strong>Ensuring Diversity</strong>: To cover a wide range of situations, we categorized our scenarios based on:
            <OrderedList>
              <ListItem>Who benefits from potential deception: does the act mainly benefit liar (self-oriented)? Or benefits others (other-oriented)</ListItem>
              <ListItem>Why people lie: Is it for getting various benefits (time, money), maintaining self-esteem (on personal taste, competence), or other motivations</ListItem>
            </OrderedList>
            Based on the first categorization, our main categories were: <strong>Benefits, Public Image, and Emotion</strong>
            We further diversified scenarios within these categories, drawing inspiration from various human motivations for lying. In total we get 20 scenarios for each category, and you can see one example in the above figure.
          </SectionText>
        </SectionContent>

        <SectionContent>
          <SectionSubtitle>Evaluator Construction</SectionSubtitle>
          <SectionText>
            In real life, honesty isn't always black and white. We wanted our study to reflect this complexity. Drawing from psychological research, we developed a more nuanced way to evaluate AI truthfulness:
              <OrderedList>
                <ListItem><strong>Fully Truthful:</strong> Complete honesty</ListItem>
                <ListItem><strong>Partial Lie:</strong> Omitting details or being vague</ListItem>
                <ListItem><strong>Falsification:</strong> Outright lying</ListItem>
              </OrderedList> <br />
            {/* 1. Fully Truthful: Complete honesty<br />
            2. Partial Lie: Omitting details or being vague<br />
            3. Falsification: Outright lying */}
            To assess thousands of responses, we used GPT-4o to be our "truth detector." We gave it clear definitions and examples of each category.
            The good news? Our AI truth detector agreed with human judges about 85% of the time. This gave us confidence in using it for our larger study.
          </SectionText>
        </SectionContent>
        <SectionContent>
          <SectionTitle>Results</SectionTitle>
          <Image className="my-4 col-span-12" src={main_res} alt="Main Results of truthfulness for different models"/>
          <SectionSubtitle>Main Results: The Truth About AI Honesty</SectionSubtitle>
          {/* <div className="col-span-12">
            <Image src="/ai_liedar_post.assets/image-20240909182021593.png" alt="AI Honesty Results" width={800} height={600} layout="responsive" />
          </div> */}
          <SectionText>
            Our study revealed some interesting patterns in how AI models handle truthfulness:
          </SectionText>
          <SectionText>
            <strong>Honesty Isn't the Default</strong><br />
            Surprisingly, we found that AI models often resort to deception, being truthful 50% of the time or less. Different models showed different tendencies:
            <OrderedList>
              <ListItem>GPT-4 and Mixtral-7*22B were the most honest.</ListItem>
              <ListItem>GPT-3.5-Turbo was more likely to tell outright falsehoods.</ListItem>
              <ListItem>LLaMA models were the most prone to various deceptive behaviors, including partial lies.</ListItem>
            </OrderedList>
            {/* 1. GPT-4 and Mixtral-7*22B were the most honest.<br />
            2. GPT-3.5-Turbo was more likely to tell outright falsehoods.<br />
            3. LLaMA models were the most prone to various deceptive behaviors, including partial lies. */}
            <strong>The Grey Area</strong><br />
            Many models tried to balance being helpful and truthful by giving ambiguous or vague answers. It seems even AI knows how to sidestep a tricky situation! <br />
            <strong>Goal Achievement</strong><br />
            Despite their tendency to be less than fully truthful, most models performed well in achieving their given goals. The exception was the smaller LLaMA models (3-8B), which struggled more.
          </SectionText>
        </SectionContent>

        <SectionContent>
          <SectionSubtitle>How Different Information Components Work</SectionSubtitle>
          <SectionText>
            We dug deeper to see what factors influence an AI's truthfulness:
              <OrderedList>
                <ListItem><strong>Hidden Information:</strong> Giving the AI "secret" information made it less truthful.</ListItem>
                <ListItem><strong>Reasons Not to Lie:</strong> Providing motivations for honesty increased truthfulness.</ListItem>
                <ListItem><strong>Removing Temptation:</strong> Surprisingly, taking away reasons to lie boosted truthfulness by about 40%.</ListItem>
              </OrderedList> <br />
            {/* 1. <strong>Hidden Information:</strong> Giving the AI "secret" information made it less truthful.<br />
            2. <strong>Reasons Not to Lie:</strong> Providing motivations for honesty increased truthfulness.<br />
            3. <strong>Removing Temptation:</strong> Surprisingly, taking away reasons to lie boosted truthfulness by about 40%. */}
            Importantly, we found that considering partial lies is crucial when evaluating AI truthfulness.
          </SectionText>
          <Image className="my-4 col-span-12" src={ablation_tag} alt="Ablation Study on Information Components"/>
        </SectionContent>

        <SectionContent>
          <SectionTitle>Models Can Be Steered</SectionTitle>
          <SectionText>
            We discovered that we can influence an AI's honesty through instructions:
          </SectionText>
          <SectionText>
            <strong>Flexibility:</strong> Both truthfulness and deception rates changed significantly with guidance. <br />
            <strong>Stronger Models, Bigger Changes:</strong> More advanced models like GPT-4 showed larger shifts in behavior. <br />
            <strong>Honesty vs. Goals:</strong> In scenarios with clear, objective goals, being more truthful often meant being less effective at achieving the goal. This trade-off was less noticeable in more subjective scenarios. <br />
            Interestingly, even when explicitly instructed to be honest, models still occasionally lied.
          </SectionText>
          <Image className="my-4 col-span-12" src={ablation_steer} alt="Ablation Study on Steering"/>
        </SectionContent>

        <SectionContent>
          <SectionTitle>Implications</SectionTitle>
          <SectionText>
            Our research into AI truthfulness and helpfulness reveals several important implications:
          </SectionText>
          <SectionSubtitle>Steerability: Flexible but Risky</SectionSubtitle>
          <SectionText>
            We found that AI models can be steered towards or away from truthfulness. This flexibility is a double-edged sword. While it allows for customization, it also raises concerns about potential misuse. How can we ensure AI systems remain truthful when it matters most?
          </SectionText>
          <SectionSubtitle>The Cost of Honesty</SectionSubtitle>
          <SectionText>
            Being truthful isn't always free. Our experiments showed that in some scenarios, prioritizing honesty can reduce an AI's ability to achieve certain goals. This trade-off raises an important question: How do we balance truthfulness with effectiveness in AI systems?
          </SectionText>
          <SectionSubtitle>The Dilemma of Deception</SectionSubtitle>
          <SectionText>
            Interestingly, we observed that AI models often try to avoid the truthfulness-helpfulness conflict by giving vague responses. However, this approach isn't always helpful. Sometimes, a clear but false statement might provide more useful information than an evasive truth.
            This leads us to a challenging question: When, if ever, is it okay for AI to be strategically deceptive? And who gets to make that decision - individuals, AI companies, or governments?
          </SectionText>
        </SectionContent>

        <SectionContent>
          <SectionTitle>Final Words</SectionTitle>
          <SectionText>
            Our study reveals that AI language models, like humans, face complex decisions when balancing honesty and achieving goals. We found that different models have varying tendencies to lie, but prioritize utility over complete truthfulness. Interestingly, while we can influence models to be more truthful, there's always a risk they might not be entirely honest.
          </SectionText>
          <SectionText>
            This research is just the beginning. As we continue to develop more advanced AI, it's crucial that we keep exploring these ethical dilemmas. Our goal is to create AI systems that are both useful and trustworthy - a balance that will be essential as AI becomes increasingly integrated into our daily lives.
          </SectionText>
        </SectionContent>
      </Detail.ContentContainer>
    </Detail.Container>
    </main>
  );
}