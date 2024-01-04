import { useTasks } from "../../useTasks";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import { MainContainer } from "../../common/Container/styled";

function Tasks() {

  const {
    //tasks,
    removeTask,
    markAllTasksCompleted,
    removeAllTasks,
  } = useTasks();

  return (
    <MainContainer>
      <Header title="Lista zadań"

      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <TaskList
            removeTask={removeTask}
          />
        }
        extraHeaderContent={
          <Buttons
            markAllTasksCompleted={markAllTasksCompleted}
            removeAllTasks={removeAllTasks}
          />
        }
      />
      <Footer />
    </MainContainer>
  );
}

export default Tasks;
