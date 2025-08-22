import { CarouselDemo } from "./carouselDemo";
import { ModeToggle } from "./themeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to My personal portfolio!</h1>
      <ModeToggle/>
      <CarouselDemo/>
    </main>
  );
}
