import { CarouselDemo } from "./carouselDemo";
import { ModeToggle } from "./themeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">My Name is Peter Dønvang and I enjoy building things!</h1>
      <ModeToggle/>
      <CarouselDemo/>

      {/* insert links to linkedin, github and so on */}
    </main>
  );
}
