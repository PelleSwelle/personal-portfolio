import { CarouselDemo } from "../components/carouselDemo";
import { ModeToggle } from "../components/themeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      <h1 className="text-4xl font-bold">My Name is Peter Dønvang and I enjoy building things!</h1>
      <ModeToggle/>
      <CarouselDemo/>
      
      {/* insert links to linkedin, github and so on */}
      {/* https://www.notion.so/pelleswelle/5382a1a80900480282122a7e4982ff0e?v=dd567cae7bb24bfbbed4924914d60f08 */}
    </main>
  );
}
