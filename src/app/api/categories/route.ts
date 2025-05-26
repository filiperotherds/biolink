import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const categories = await prisma.category.findMany();
        return NextResponse.json(categories);
    } catch (e) {
        return NextResponse.json({ error: 'Failed to fetch users: ', e }, { status: 500 });
    }
}