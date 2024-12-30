import { nanoid } from '@reduxjs/toolkit';

export const getExampleTasks = async () => {
    const response = await fetch("/Todo-list-react/exampleTasks.json");

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const tasks = await response.json();

    return tasks.map(task => ({
        ...task,
        id: nanoid()
    }));
};