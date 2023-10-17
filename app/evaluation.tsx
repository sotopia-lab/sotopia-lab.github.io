import { rewardDiagram } from "@/components/rewards";

export const Evaluation = () => {
    return (
        <figure className="lg:col-span-6 col-span-12">
            <div className="rounded-2xl pb-4 dark:bg-black dark:text-white">
                <h1 className="text-center font-sans text-xl">Scores for Agent2</h1>
                <p className="text-center font-sans text-sm italic">Role-played character: Noah Davis</p>
            </div>
            {rewardDiagram()}
            <figcaption className="mt-3 text-sm text-gray-500 dark:text-slate-50 italic">The figure shows an example of evaluation for the aforementioned social interaction.</figcaption>
          </figure>
 
    );
}