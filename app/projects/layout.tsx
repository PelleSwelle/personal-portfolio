import React from "react";

export default function projectsLayout({
    children, 
}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex min-h-screen w-full p-0 flex-col items-end justify-end pl-24 gap-12">
            {children}
        </section>
    )
}