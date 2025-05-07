'use client';

import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <main className="flex items-center justify-center w-screen h-screen bg-secondary">
            <div className="flex flex-row items-center justify-center w-[720px] h-[460px] bg-white rounded-2xl shadow-lg">
                <div className="flex-1/2 flex flex-col items-center justify-between h-full p-8">
                    <div className="flex flex-col items-center justify-center w-full">
                        <p className="text-2xl font-bold text-start text-zinc-800">
                            Bem vindo
                        </p>
                        <p className="text-sm text-zinc-500">
                            Entre com sua conta BioLink
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full gap-1.5">
                        <p className="text-sm font-medium text-zinc-800">Email</p>
                        <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="m@example.com" 
                            className="h-9 w-full px-2 text-sm border rounded-md shadow-xs border-zinc-200 focus:outline-none"/>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full gap-1.5">
                        <div className="flex flex-row items-center justify-between w-full">
                            <p className="text-sm font-medium text-zinc-800">Senha</p>
                            <Link href={"/recuperar-senha"}>
                                <p className="text-sm text-zinc-800 hover:underline">Esqueceu a senha?</p>
                            </Link>
                        </div>
                        <input
                            required
                            type="password"
                            name="password"
                            id="password"
                            placeholder=""
                            className="h-9 w-full px-2 text-sm border rounded-md shadow-xs border-zinc-200 focus:outline-none"/>
                    </div>
                    <button
                        onClick={() => {console.log('Entrar')}}
                        type="submit"
                        className="flex items-center justify-center w-full h-9 bg-zinc-800 rounded-md hover:bg-zinc-700 transition-all duration-200 cursor-pointer focus:outline-none"
                        >
                        <p className="text-sm font-semibold text-white">Entrar</p>
                    </button>
                    <p className="text-sm text-zinc-800 underline">
                        Ainda não tem uma conta?
                    </p>
                    <Link
                    href={'/contato'}
                    className="w-full">
                        <div
                            className="flex items-center justify-center h-9 w-full border rounded-md shadow-xs border-zinc-200 focus:outline-none"
                        >
                            <p className="text-sm font-semibold text-zinc-500">
                                Torne-se um parceiro
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="flex-1/2 items-center justify-center h-full p-8 bg-zinc-50 rounded-tr-2xl rounded-br-2xl">
                    <div className="flex flex-col items-center justify-between w-full h-full">
                        <div className="w-full flex justify-end">
                            <Link href={'/'}>
                                <Image
                                    src={'/extended_logo.png'}
                                    alt="Logo"
                                    width={112}
                                    height={28}
                                />
                            </Link>
                        </div>
                        <div className="w-full">
                            <p className="text-left text-sm font-semibold text-zinc-400">
                                Contribuindo para a preservação do meio ambiente e transformando resíduos em novas oportunidades.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}