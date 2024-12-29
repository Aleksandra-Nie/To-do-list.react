import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { MainContainer } from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => selectTaskById(state, id));

    return (
        <MainContainer>
            <Header
                title="Szczegóły zadania"
            />
            <Section
                title={task ? task.content : "Sorka, nie znaleziono takiego zadania 😜"}
                body={task ? (
                    <>
                        <strong>Ukończono: </strong> {task.done ? "Tak" : "Nie"}
                    </>
                ) : null}
            />
        </MainContainer>
    );
}

export default TaskPage;