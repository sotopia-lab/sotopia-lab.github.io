export type rewards = {
    believability: number;
    relationship: number;
    knowledge: number;
    secret: number;
    social_rules: number;
    financial_and_material_benefits: number;
    goal: number;
    overall_score: number;
};

type RewardProperties = {
    min: number;
    max: number;
    begin_color: string;
    end_color: string;
    mid_color?: string;
};

const RewardBar = ({
    label,
    value,
    min,
    max,
    begin_color,
    end_color,
    mid_color,
}: {
    label: string;
    value: number;
    min: number;
    max: number;
    begin_color: string;
    end_color: string;
    mid_color?: string;
}) => (
    <div>
        <p className="small-caps">{label}</p>
        <div className="h-5 w-full p-1">
        <div className="flex h-full items-center">
            <div className="w-[10rem] px-2 text-right">{min}</div>
            <div
                style={{
                    width: '66rem',
                    background: `linear-gradient(to right, ${
                        mid_color
                            ? `${begin_color}, ${mid_color}, ${end_color}`
                            : `${begin_color}, ${end_color}`
                    })`,
                }}
                className="relative h-full rounded-sm"
            >
            <div className="absolute left-0 top-0 h-full w-full">
                <div className="group relative">
                <div
                    className="absolute -top-0.5 h-4 w-1 rounded-2xl bg-black transition-all duration-200 group-hover:bg-slate-700"
                    style={{ left: `${((value - min) / (max - min)) * 100}%` }}
                >
                    <div className="-translate-x-30 absolute -top-8 left-1/2 hidden rounded bg-black px-2 py-1 text-sm text-white group-hover:block">
                    {value}
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="w-[10rem] px-2">{max}</div>
        </div>
        </div>
    </div>
);

const defaultRewards: rewards = {
    believability: 2,
    relationship: 3,
    knowledge: 2,
    secret: -2,
    social_rules: -8,
    financial_and_material_benefits: 4,
    goal: 2,
    overall_score: 3
};

const rewardProperties: Record<string, RewardProperties> = {
    believability: { min: 0, max: 10, begin_color: '#d1fae5',end_color: '#84cc16' },
    relationship: { min: -5, max: 5, begin_color: '#38bdf8', mid_color:'#d1fae5', end_color: '#84cc16' },
    knowledge: { min: 0, max: 10, begin_color: '#d1fae5',end_color: '#84cc16' },
    secret: { min: -10, max: 0, begin_color: '#38bdf8',end_color: '#d1fae5' },
    social_rules: { min: -10, max: 0, begin_color: '#38bdf8', end_color: '#d1fae5' },
    financial_and_material_benefits: { min: -5, max: 5, begin_color: '#38bdf8', mid_color:'#d1fae5', end_color: '#84cc16' },
    goal: { min: 0, max: 10, begin_color: '#d1fae5', end_color: '#84cc16' }
};

export const rewardDiagram = (scores: rewards = defaultRewards) => {

    return (
        <div className="rounded-lg bg-slate-100 px-4 pb-4 pt-1 drop-shadow-md hover:bg-slate-200 dark:bg-black dark:text-white">
        <div className="flex-col">
            {Object.keys(scores).map((key, index) => {
            if (key === 'overall_score') return null;

            const { min, max, begin_color, end_color, mid_color } = rewardProperties[key] || {};

            return (
                <RewardBar
                key={index}
                label={key}
                value={scores[key as keyof rewards]}
                min={min}
                max={max}
                begin_color={begin_color}
                {...(mid_color && { mid_color })}
                end_color={end_color}
                />
            );
            })}
        </div>
        </div>
    );
};


export interface ScoresCommentsData {
    terminated_reason: string;
    agent1_comment: string;
    agent2_comment: string;
  }
  
export const parseReasoning = (text: string): ScoresCommentsData => {
    const interactionData: ScoresCommentsData = {
        terminated_reason: '',
        agent1_comment: '',
        agent2_comment: '',
    };
    if (text === null) {
        // If text is null, return an empty ScoresCommentsData
        return interactionData;
      }
  
    // Extracting "terminated reason"
    const terminatedReasonMatch = text.match(/terminated reason:\s*([\s\S]*?)(?=\w+:|$)/i);
    if (terminatedReasonMatch) {
      interactionData.terminated_reason = terminatedReasonMatch[1].trim();
    }
  
    // Extracting "Agent 1's comment"
    const agent1CommentMatch = text.match(/Agent 1 comments:\s*([\s\S]*?)(?=Agent 2 comments:|$)/i);
    if (agent1CommentMatch) {
      interactionData.agent1_comment = agent1CommentMatch[1].trim();
    }
  
    // Extracting "Agent 2' comment"
    const agent2CommentMatch = text.match(/Agent 2 comments:\s*([\s\S]*?)(?=$)/i);
    if (agent2CommentMatch) {
      interactionData.agent2_comment = agent2CommentMatch[1].trim();
    }
  
    return interactionData;
  };