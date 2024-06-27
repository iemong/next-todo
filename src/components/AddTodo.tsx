import {addTodo} from '@/app/actions';
import {Button} from './ui/button';
import { Input } from './ui/input';

export default function AddTodo() {
    return (
        <form action={addTodo} className="flex gap-2">
            <Input
                type="text"
                name="text"
                className="flex-grow p-2 border rounded"
                placeholder="Add a new todo"
                required
            />
            <Button type="submit">
                Add
            </Button>
        </form>
    );
}