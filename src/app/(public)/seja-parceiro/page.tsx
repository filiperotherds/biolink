'use client';

import PhoneInput from '@/components/phone_input';
import Image from 'next/image';
import { useState } from 'react';

export default function SejaParceiro() {
   const [telefone, setTelefone] = useState('');

    return (
        <main className="flex flex-col items-center justify-center w-full pt-16 mx-auto">
            <section className="flex flex-row items-center justify-center w-full h-[calc(100vh-64px)] max-w-[980px] pt-16 pb-16">
                <div className="flex-1/2 flex items-center justify-center">
                    <div className="flex w-full h-[280px] justify-center items-center relative">
                        <Image 
                            src={'/handshake.png'} 
                            alt="BioLink Handshake"
                            fill
                            style={{ objectFit: 'contain', objectPosition: 'left' }}
                            priority
                        />
                    </div>
                </div>
                <div className="flex-1/2 flex flex-col h-full items-start justify-center gap-16">
                    <div className='flex flex-col w-full gap-2 items-start justify-center'>
                        <p className="text-4xl font-extrabold text-start text-zinc-800">
                            Torne-se um parceiro!
                        </p>
                        <p className="text-sm font-semibold text-start text-zinc-400">
                            Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível.
                        </p>
                    </div>
                    <div className='flex flex-col w-full gap-4 items-center justify-center'>
                        <div className='flex flex-row items-center justify-center w-full gap-4'>
                            <div className="flex flex-col items-start justify-center w-full gap-1.5">
                                <p className="text-sm font-medium text-zinc-800">Nome</p>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Nome" 
                                    className="h-9 w-full px-2 text-sm border rounded-md shadow-xs border-zinc-200 focus:outline-none"/>
                            </div>
                            <div className="flex flex-col items-start justify-center w-full gap-1.5">
                                <p className="text-sm font-medium text-zinc-800">Sobrenome</p>
                                <input
                                    required
                                    type="text"
                                    name="surname"
                                    id="surname"
                                    placeholder="Sobrenome" 
                                    className="h-9 w-full px-2 text-sm border rounded-md shadow-xs border-zinc-200 focus:outline-none"/>
                            </div>
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
                            <p className="text-sm font-medium text-zinc-800">Telefone</p>
                            <div className='flex flex-row items-center justify-center w-full gap-4'>
                                <p className='text-sm text-zinc-800 font-semibold'>
                                    +55
                                </p>
                                <PhoneInput
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                />
                            </div>
                         </div>
                         <button
                            className='w-full h-9 rounded-md bg-zinc-800'
                        >
                            <p className='text-sm text-white font-semibold'>
                                Enviar
                            </p>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}