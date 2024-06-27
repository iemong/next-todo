'use server'

import { revalidatePath } from 'next/cache';
import { getTodos as getDbTodos, addTodoToDb, deleteTodoFromDb } from '../lib/db';

export async function getTodos() {
    return getDbTodos();
}

export async function addTodo(formData: FormData) {
    const text = formData.get('text') as string;
    await addTodoToDb(text);
    revalidatePath('/');
}

export async function deleteTodo(formData: FormData) {
    const id = Number(formData.get('id'));
    await deleteTodoFromDb(id);
    revalidatePath('/');
}