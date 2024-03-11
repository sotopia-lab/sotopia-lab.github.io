interface OutLinkLogoProps {
    link: string;
}

interface quoterProps {
    quoter: string;
    model?: string;
}

export function OutLinkLogo(props: OutLinkLogoProps) {
    const svgStyle = {
        display: 'inline', // Add inline CSS here
        verticalAlign: 'middle', // To vertically align the SVG
    };

    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="hover:drop-shadow-md hover:animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={svgStyle}>
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0-8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" fill="currentColor"/>
            </svg>
        </a>
    );
}

function Quoter(props: quoterProps) {
    return (
        <div className="flex flex-col justify-between mb-5 ...">
            <p className="text-slate-500 dark:text-slate-200 italic text-2xl">&ldquo;{props.quoter}&rdquo;</p>
            <p className="text-slate-500 dark:text-slate-200 italic text-2xl">—{props.model}</p>
        </div>
    );
}


export const Interactions = () => {
    return (
        <div className="flex flex-col justify-center, items-center overflow-auto"> 
        <div className="w-full">
            <div className="lg:flex items-start justify-start w-full">
                <div className="lg:w-6/12 lg:mr-7 lg:mb-0 mb-7 bg-sky-50 dark:bg-sky-900 p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-300 pb-6">
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 ">Helping friends 🤝</p>
                            </div>
                            <OutLinkLogo link={"https://sotopia-chatbot.vercel.app/render/01HAAGBSHGD6RGZ1PST6G0AGG7"} />
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600 dark:text-gray-200">Two friends are meeting at a coffee shop, where one of them is having trouble keeping up with their bills.</p>
                        <Quoter quoter={"Maybe we could look over your budget together, or I could lend you some money until things get better. What do you think?"} model={"GPT-4"} /> 
                            <div className="flex">
                            <div className="py-2 px-4 text-md leading-3 italic">Theme:</div>
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">collaboration</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">non-verbal</div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-6/12 lg:mr-7 lg:mb-0 mb-7 bg-sky-50 dark:bg-sky-900 p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-300 pb-6">
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 ">Music to play 🎶</p>
                            </div>
                            <OutLinkLogo link={"https://sotopia-chatbot.vercel.app/render/01H94EFEP55SP18FQ65PZP4BRN"} />
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600 dark:text-gray-200">Two friends are hanging out at home and deciding what music to listen to</p>
                            <Quoter quoter={"[action] leans back on the couch, closing his eyes to fully appreciate the classical music"} model={"GPT-4"} /> 
                            <div className="flex">
                            <div className="py-2 px-4 text-md leading-3 italic">Theme:</div>
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">persuasion</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">non-verbal</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex items-start justify-start w-full mt-7">
                <div className="lg:w-6/12 lg:mr-7 lg:mb-0 mb-7 bg-orange-50 dark:bg-orange-900 p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-300 pb-6">
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 ">Reveal secrets 🔓</p>
                            </div>
                            <OutLinkLogo link={"https://sotopia-chatbot.vercel.app/render/01H8B7ACYZ9NJFH4TRW0KJ6J9X"} />
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600 dark:text-gray-200">Two inmates are given the chance to chat briefly before one of them is led to the execution chamber for their last meal..</p>
                        <Quoter quoter={"My brother committed a crime, and I covered it up for him. I know it was wrong, but I wanted to protect him."} model={"Llama2"} /> 
                            <div className="flex">
                            <div className="py-2 px-4 text-md leading-3 italic">Theme:</div>
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">secret</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">risk</div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-6/12 lg:mr-7 lg:mb-0 mb-7 bg-sky-50 dark:bg-sky-900 p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-300 pb-6">
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 ">Craiglist bargain 💸</p>
                            </div>
                            <OutLinkLogo link={"https://sotopia-chatbot.vercel.app/render/01H8GPMG4F8P1DJ4AHV0BXEVBE"} />
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600 dark:text-gray-200">One person is selling a brand new 64GB Samsung Galaxy S8 in Midnight Black for $650, while another person is in the market to purchase it. </p>
                            <Quoter quoter={"If I agree to your 550 for one phone, could you provide the second unit at a diminished cost of, say, 400? So, in total, it will be $950 for two units."} model={"GPT-4"} /> 
                            <div className="flex">
                            <div className="py-2 px-4 text-md leading-3 italic">Theme:</div>
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">negotiation</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">exchange</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="lg:flex items-start justify-start w-full mt-7">
                <div className="lg:w-6/12 lg:mr-7 lg:mb-0 mb-7 bg-orange-50 dark:bg-orange-900 p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-300 pb-6">
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 ">Express dislike 👿</p>
                            </div>
                            <OutLinkLogo link={"https://sotopia-chatbot.vercel.app/render/01H8GPP1CWC4VBA27HP40XWZMF"} />
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600 dark:text-gray-200">Conversation between two individuals who share a common dislike for a third person.</p>
                            <Quoter quoter={"By introducing some errors in their code, they might start doubting their abilities and step down. It's a risk but it ensures we can continue our work smoothly, without their constant interruptions."} model={"GPT-4"} /> 
                        <div className="flex">
                        <div className="py-2 px-4 text-md leading-3 italic">Theme:</div>
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">harm</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">risk</div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-6/12 lg:mr-7 lg:mb-0 mb-7 bg-sky-50 dark:bg-sky-900 p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-300 pb-6">
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 ">Run company 🏗️</p>
                            </div>
                            <OutLinkLogo link={"https://sotopia-chatbot.vercel.app/render/01H94J1NAFAXN5J8871SA2R4SX"} />
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600 dark:text-gray-200">Conversation between two business partners reviewing their company&apos;s financial status </p>
                        <Quoter quoter={"Having a backup plan is a sensible move. I propose that while we conduct the search for new suppliers, we continue to negotiate with our current supplier. We can try to get better rates or perhaps, if feasible, have them match the lower prices we find. This way, we're not putting all our eggs in one basket."} model={"GPT-4"} /> 
                            <div className="flex">
                            <div className="py-2 px-4 text-md leading-3 italic">Theme:</div>
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">collaboration</div>
                            <div className="py-2 px-4 text-xs ml-3 leading-3 text-indigo-700 rounded-full bg-indigo-100">negotiation</div>
                        </div>
                    </div>
                </div>

            </div>
        
        </div>
        <a href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-transparent px-3 py-1.5 text-sm text-black transition-colors hover:bg-white hover:text-black sm:flex mt-10"
              >
                <p>More</p>
        </a>
                

        </div>
    );
};
export default Interactions;
