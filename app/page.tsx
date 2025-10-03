import WriterText from "./components/writerText";

export default function Home() {
      
  // TODO make this stupid long, and when it has been going for a long while, ask the user why they are still watching
  const sentences = [
    'I love to create things',
    'I love to learn',
    'code is fun'
  ]
  return (
    <main className="flex min-h-screen w-full items-center justify-between p-24">
      <div className="relative left-[20%] rounded-lg overflow-hidden">
        <div className="flex">
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
