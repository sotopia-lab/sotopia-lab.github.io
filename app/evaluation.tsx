import { rewardDiagram } from "@/components/rewards";

export const Evaluation = () => {
    return (
        <div className="lg:col-span-6">
            <div className="rounded-2xl pb-4 dark:bg-black dark:text-white">
                <h1 className="text-center font-sans text-xl">Scores for Agent2</h1>
                <p className="text-center font-sans text-sm italic">Role-played character: Noah Davis</p>
            </div>
            {rewardDiagram()}
        </div>
    );
}