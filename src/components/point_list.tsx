
interface Todos {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export default async function PointList() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await data.json();
    return (
        <>
            {todos.map((todos: Todos) => (
                <div key={todos.id} className="flex flex-col items-start justify-start w-72 gap-4">
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                        <p className="text-lg font-bold text-zinc-700">{todos.title}</p>
                        <p className="text-sm text-zinc-500">Endereço: Rua Exemplo, 123 - Bairro - Cidade - Estado</p>
                        <p className="text-sm text-zinc-500">Telefone: (00) 00000-0000</p>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                        <a href="/" className="text-sm text-green-500 hover:text-green-400 transition-all duration-200">Ver no Mapa</a>
                        <a href="/" className="text-sm text-green-500 hover:text-green-400 transition-all duration-200">Enviar Mensagem</a>
                    </div>  
                </div>
            ))}
        </>
    )
}