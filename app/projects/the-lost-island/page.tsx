import openDb from "@/app/api/database"
import Image from "next/image";
import { Activity, technology } from "@/types/interfaces";
import Example from "@/app/components/codeBlockDemo";
import CodeWithExplanation from "@/app/components/CodeWithExplanation";

export default async function Thelostisland(
) {
    const db = await openDb();
    const project = await db.get('SELECT * FROM projects where id = 2');

    const activities = await db.all(`
        SELECT
            a.id as activity_id,
            a.title
        FROM
            project_activities pa
        JOIN
            activities a ON pa.activity_id = a.id
        WHERE
            pa.project_id = ${project.id}
    `)

    const allTech = await db.all(`
        SELECT 
            t.id as technology_id,
            t.title,
            t.image
        FROM 
            project_technologies pt
        JOIN 
            technologies t ON pt.technology_id = t.id
        WHERE 
            pt.project_id = ?
    `, [project.id]);


    const villagerBehavoirCode = [
        {
            language: 'csharp',
            filename: 'VillagerBehavior.cs',
            code: `void Update()
{
    isDead = stamina.isEmpty;
    isUnderWater = transform.position.y < WaterBehavior.Instance.currentLevel;

    if (!isDead && !hasBeenExtracted)
    {
        if (isUnderWater) 
            stamina.decrease();
    }
    if (isDead)
        layDownAndDrown();
}`,
        },
    ];

    const playerCode = [
        {
            language: 'csharp',
            filename: 'Player.cs',
            code: `
            // Player.cs Update() method

// I always wrap inputs in a single call in order to factor out long calls to the Input class.
enableInputs(); 

// always have a reference to check whether the player is in water.
isInWater = WaterBehavior.Instance.currentLevel > transform.position.y + overWaterThreshold;

if (isInWater)
{
    stamina.decrease();
    UiController.instance.displayPanicPanel();
}
else
{
    stamina.increase();
    UiController.instance.hidePanicPanel();
}

// I usually have a GameState enum in the Player class 
// in order to split functionality into different phases of the game
if (stamina.isEmpty && isInWater)
    state = GameState.DROWNED;

if (state == GameState.DROWNED)         
		UiControlller.Instance.setDeadScreen();

if (state == GameState.EXTRACTED)       
		UiControlller.Instance.setWinScreen();

// in case the player has either finished or lost the game
UiState currentState = UiControlller.Instance.state;
if (currentState == UiState.DEAD || currentState == UiState.WIN)
    enableMenuInputs()
            `
        }
    ]

    return (
        <main className="relative flex min-h-screen w-full flex-col items-start justify-center p-24 gap-4">
            <div className="w-full flex">
                <Image src={`/images/cover/island.png`} alt={project.image} width={2000} height={200} className="rounded-md object-cover h-120" />
            </div>

            <h2 className="text-4xl font-bold dark:text-white">{project.title}</h2>
            <div className="h-0.5 w-[100%] bg-white"></div>
            <div className="flex w-full flex-row justify-between">
                <p>{project.subTitle}</p>
                <div className="flex flex-row">
                    {
                        activities.map((activity: Activity) => (
                            <span key={activity.activity_id} className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-white/10 border border-white/20">{activity.title}</span>
                        ))
                    }
                </div>
            </div>

            <p className="pr-[30%] mb-20">This game was built for the game design and -development course at Medialogy, Aalborg Copenhagen. All programming and implementation of systems done by me, Peter Dønvang. The idea for this game was to make a horror game including themes of climate change. Featuring a dark atmosphere and a chaotic environment of screams, ominous background sound design and blinking lights, the game was commended by our professor for being very intense and immersive. Given more time during the semester specifically for this project, some of the code would have looked very different. However in the timeframe given, I am very satisfied with the result.</p>

            <CodeWithExplanation code={villagerBehavoirCode}>
                The Villager class is fairly sparse, having most of the functionality called from the Player class when interacted with.
            </CodeWithExplanation>
            
            <CodeWithExplanation code={playerCode}>
                <p>The Player class shows how I usually approach state and input handling in a small project like this.</p>
            </CodeWithExplanation>
        </main>
    )
}