import { ModeToggle } from "./components/themeToggle";
import openDb from "./api/database"

    
export default async function Home() {
      
  // open database
  const db = await openDb();

  // query data
  const allPosts = await db.all('SELECT * FROM projects');
  
  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">My Name is Peter Dønvang and I enjoy building things!</h1>
        <p className="mt-4 text-lg">This page is eventually going to hold some type of showcase for a cool animation, interactive something-or-other. We will see.</p>
      </div>
      <ModeToggle/>
      
      {/* insert links to linkedin, github and so on */}
      {/* https://www.notion.so/pelleswelle/5382a1a80900480282122a7e4982ff0e?v=dd567cae7bb24bfbbed4924914d60f08 */}
    </main>
  );
}
