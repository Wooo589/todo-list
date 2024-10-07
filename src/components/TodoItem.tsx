import { Todo } from "../types/to_do";

export default function TodoItem({ to_do, toggleTodo }: { to_do: Todo, toggleTodo: (id: number) => void}) {
    return (
        <>
            <li 
                onClick={ () => toggleTodo(to_do.id) }
            >
                {to_do.text}    
            </li>
        </>
    );
}