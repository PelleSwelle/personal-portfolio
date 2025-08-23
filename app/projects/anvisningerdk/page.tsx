import Image from "next/image";

export default function AnvisningerDK() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center p-24 gap-12">
            <h1>Anvisninger.dk Project Page</h1>
            <h4>A complete redesign of the publication website for the BUILD institute at Aalborg University</h4>
            <Image
                src={"/images/anvisninger.png"}
                width={600}
                height={600}
                alt="Anvisninger.dk project screenshot"
            />
            <ul className="list-disc list-inside">
                <li>Role: Full-Stack Developer & Designer</li>
                <li>Technologies: Next.js, React, Tailwind CSS, Node.js, MongoDB</li>
                <li>Duration: 3 months</li>
            </ul>
        </main>
    )
}