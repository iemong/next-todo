import { getTodos } from '@/lib/db';

export default async function TodoList() {
    const todos = await getTodos();

    console.log(todos)
    return (
        <ul className="mt-4">
            {todos.map((todo) => (
                <li key={todo.id} className="flex items-center justify-between py-2">
                    <span>{todo.text}</span>
                    {/* Add delete button here */}
                </li>
            ))}
        </ul>
    );
}