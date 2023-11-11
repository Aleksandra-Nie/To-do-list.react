import { useState } from "react";
import { useLocalStorageState } from "./useLocalStorageState";

const exampleTasks = [
    { id: 1, content: "przejść na Reacta", done: false },
    { id: 2, content: "zrobić obiad", done: true },
];

const localStorageTasksKey = "tasks";

export const useTasks = () => {

    const [tasks, setTasks] = useLocalStorageState(localStorageTasksKey, exampleTasks);
    const [hideDone, setHideDone] = useState(false);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        }));
    };

    const markAllTasksCompleted = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })))
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            },
        ]);
    }

    const removeAllTasks = () => {
        setTasks([]);
    };

    return {
        tasks,
        hideDone,
        toggleHideDone,
        removeTask,
        toggleTaskDone,
        markAllTasksCompleted,
        addNewTask,
        removeAllTasks,
    }
};