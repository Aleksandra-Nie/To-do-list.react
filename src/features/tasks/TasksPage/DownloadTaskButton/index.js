import { Container } from "./styled";
import { StyledButton } from "../Button";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { useSelector, useDispatch } from "react-redux";

const DownloadTaskButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Container>
            <StyledButton
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={loading}
            >
                {loading
                    ? "Ładowanie..."
                    : "Pobierz przykładowe zadania"
                }
            </StyledButton>
        </Container>
    );
};

export default DownloadTaskButton;