import Image from "next/image";
import WriterText from "./components/writerText";
import SocialButton from "./components/socialButton";

export default function Home() {

  // TODO make this stupid long, and when it has been going for a long while, ask the user why they are still watching
  const sentences = [
    'I love to create things',
    'I love to learn',
    'code is fun',
    'there are hot singles in your area',
    'jag pratar också svenska!',
    '... dansk taler jeg også!',
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
    <main className="min-h-screen w-full items-center justify-between p-24">
      <div className="relative flex h-full flex-col justify-between">

        <div className="md:ml-50">
          <h1 className="text-4xl font-bold">My Name is Peter Dønvang and </h1>
          <WriterText sentences={sentences} />
        </div>

        <div className="flex justify-end gap-10">
          <SocialButton image={'/images/socials/github-mark-white.png'} link="https://github.com/PelleSwelle" />
          <SocialButton image={'/images/socials/InBug-White.png'} link="https://linkedin.com/in/peter-donvang" />
        </div>
        {/* https://www.notion.so/pelleswelle/5382a1a80900480282122a7e4982ff0e?v=dd567cae7bb24bfbbed4924914d60f08 */}
      </div>
    </main>
  );
}
