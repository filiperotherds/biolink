import { Squircle } from "@squircle-js/react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 w-full h-16 z-50 backdrop-blur-sm">
            <div className="flex w-full h-full items-center justify-center">
                <div className="flex flex-row items-center justify-between h-full w-full max-w-[980px]">
                    <div className="flex flex-row items-center h-full gap-16">
                        <Link href="/" className="flex items-center h-full">
                            <Image
                                src="/extended_logo.png"
                                alt="Logo"
                                width={112}
                                height={28}
                            />
                        </Link>
                    </div>
                    <div className="flex flex-row items-center h-full gap-20">
                        <div className="flex flex-row items-center gap-8">
                            <Link href="/" className="text-sm font-bold text-zinc-700 hover:text-zinc-500 transition-all duration-200">
                                Benefícios
                            </Link>
                            <Link href="/pontos-de-coleta" className="text-sm font-bold text-zinc-700 hover:text-zinc-500 transition-all duration-200">
                                Pontos de Coleta
                            </Link>
                            <Link href="/" className="text-sm font-bold text-zinc-700 hover:text-zinc-500 transition-all duration-200">
                                Sobre
                            </Link>
                            <Link href="/" className="text-sm font-bold text-zinc-700 hover:text-zinc-500 transition-all duration-200">
                                Blog
                            </Link>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <Link href="/seja-parceiro" className="text-sm font-bold text-zinc-700 hover:text-zinc-500 transition-all duration-200">Seja Parceiro</Link>
                            <Link href="/login">
                                <Squircle
                                    cornerRadius={8}
                                    cornerSmoothing={1}
                                    className="flex items-center justify-center px-3 h-7 bg-green-500 text-white font-bold text-[13px] hover:bg-green-300 transition-all duration-200">
                                    Acessar Painel
                                </Squircle>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}