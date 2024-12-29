import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Footer from "../../../common/Footer";
import Header from "../../../common/Header";
import { MainContainer } from "../../../common/Container";
import DownloadTaskButton from "./DownloadTaskButton";
import Search from "../TasksPage/Search";

function TasksPage() {

  return (
    <MainContainer>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<DownloadTaskButton />}
        body={<Form />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
      <Footer />
    </MainContainer>
  );
}

export default TasksPage;
