import { selectTasks, toggleHideDone } from "../tasksSlice";
import { ButtonField, StyledButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = ({ markAllTasksCompleted, removeAllTasks }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch()

    return (
        <ButtonField>
            {tasks.length > 0 && (
                <>
                    <StyledButton
                        onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </StyledButton>
                    <StyledButton
                        onClick={markAllTasksCompleted}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </StyledButton>
                    <StyledButton
                        $reset
                        type="reset"
                        onClick={removeAllTasks}>
                        Usuń wszystkie
                    </StyledButton>
                </>
            )}
        </ButtonField>
    );
}

export default Buttons;