import { useState, useEffect } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Footer from "./Footer";
import Header from "./Header";
import Container from "./Container";

const exampleTasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zrobić obiad", done: true },
];

const localStorageTasksKey = "tasks"

function App() {

  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem(localStorageTasksKey)) || exampleTasks);

  useEffect(() => {
    localStorage.setItem(localStorageTasksKey, JSON.stringify(tasks));
  }, [tasks]);

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

  return (
    <Container>
      <Header title="Lista zadań"

      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            markAllTasksCompleted={markAllTasksCompleted}
            removeAllTasks={removeAllTasks}
          />
        }
      />
      <Footer />
    </Container>
  );
}

export default App;