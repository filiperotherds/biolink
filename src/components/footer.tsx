import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center w-full bg-zinc-100">
            <div className="flex flex-row items-start justify-between w-full max-w-[980px] py-8">
                <Image
                    src={'/extended_logo_gray.png'}
                    alt="BioLink Logo"
                    width={120}
                    height={30}
                    className="object-contain object-left"
                    priority
                />
                <div className="flex flex-row items-start justify-end gap-12">
                    <div className="flex flex-col items-start justify-start gap-6">
                        <p className="text-sm font-semibold text-zinc-700">Institucional</p>
                        <div className="flex flex-col items-start justify-start gap-2">
                            <a href="/" className="text-sm font-semibold text-zinc-500 hover:text-zinc-400 transition-all duration-200">Sobre</a>
                            <a href="/" className="text-sm font-semibold text-zinc-500 hover:text-zinc-400 transition-all duration-200">Blog</a>
                            <a href="/" className="text-sm font-semibold text-zinc-500 hover:text-zinc-400 transition-all duration-200">Início</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-6">
                        <p className="text-sm font-semibold text-zinc-700">Faça Parte</p>
                        <div className="flex flex-col items-start justify-start gap-2">
                            <a href="/" className="text-sm font-semibold text-zinc-500 hover:text-zinc-400 transition-all duration-200">Seja Parceiro</a>
                            <a href="/" className="text-sm font-semibold text-zinc-500 hover:text-zinc-400 transition-all duration-200">Pontos de Coleta</a>
                            <a href="/" className="text-sm font-semibold text-zinc-500 hover:text-zinc-400 transition-all duration-200">Acessar Painel</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-6">
                        <p className="text-sm font-semibold text-zinc-700">Informações</p>
                        <div className="flex flex-col items-start justify-start gap-2">
                            <a href="/" className="text-sm font-semibold text-zinc-500 hover:text-zinc-400 transition-all duration-200">Contatos</a>
                            <a href="/" className="text-sm font-semibold text-zinc-500 hover:text-zinc-400 transition-all duration-200">Áreas de Atuação</a>
                            <a href="/" className="text-sm font-semibold text-zinc-500 hover:text-zinc-400 transition-all duration-200">Benefícios</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between h-16 w-full max-w-[980px] border-t border-zinc-300">
                <p className="text-sm font-semibold text-zinc-500">© 2025 BioLink Eco. Todos os direitos reservados.</p>
                <div className="flex flex-row items-center justify-end gap-4">
                    <a target="_blank" href="https://instagram.com/biolink.org">
                        <Instagram
                            color="#71717a"
                        />
                    </a>
                    <a target="_blank" href="https://linkedin.com/biolinkeco">
                        <Linkedin
                            color="#71717a"
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}