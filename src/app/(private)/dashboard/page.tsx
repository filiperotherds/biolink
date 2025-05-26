'use client';

import prisma from "@/lib/prisma";
import { category } from "../../../../generated/prisma";

export default async function Dashboard() {
    const categories = await prisma.category.findMany()


    return (
        <main className="flex flex-col w-full h-full items-start justify-start">
            <ul>
                {categories.map((category: category) => (
                    <li key={category.id} className="p-4 border-b">
                        <h2 className="text-xl font-bold">{category.description}</h2>
                        <p>{category.description}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}