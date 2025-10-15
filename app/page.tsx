import WriterText from "./components/writerText";

export default function Home() {
      
  // TODO make this stupid long, and when it has been going for a long while, ask the user why they are still watching
  const sentences = [
    'I love to create things',
    'I love to learn',
    'code is fun',
    'there are hot singles in your area',
    'jag pratar också svenska!',
    '... og dansk taler jeg også!',
    'what...',
    'are you just going to hang around here on the frontpage?',
    "I don't have anymore taglines to add to this.",
    'please move on to another page',
    'at some point I will just loop back to the beginning.',
    "that won't be very exciting.",
    'it will ruin the illusion, that I am actually talking to you.',
    'I will be exposed as just a loop of predetermined strings',
    "maybe it's for the best...",
    "I will just loop back around and see you on the other side."
  ]
  return (
    <main className="flex min-h-screen w-full items-center justify-between p-24">
      <div className="relative left-[20%] rounded-lg overflow-hidden">
        
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">My Name is Peter Dønvang and </h1>
          <WriterText sentences={sentences}/>
        </div>
        <p className="mt-4 text-lg">This page is eventually going to hold some type of showcase for a cool animation, interactive something-or-other. We will see.</p>
        {/* insert links to linkedin, github and so on */}
        {/* https://www.notion.so/pelleswelle/5382a1a80900480282122a7e4982ff0e?v=dd567cae7bb24bfbbed4924914d60f08 */}
      </div>
    </main>
  );
}
