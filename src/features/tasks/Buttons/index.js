import { selectTasks, toggleHideDone, markAllTasksCompleted, removeAllTasks } from "../tasksSlice";
import { ButtonField, StyledButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <ButtonField>
            {tasks.length > 0 && (
                <>
                    <StyledButton
                        onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </StyledButton>
                    <StyledButton
                        onClick={() => dispatch(markAllTasksCompleted())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </StyledButton>
                    <StyledButton
                        $reset
                        type="reset"
                        onClick={() => dispatch(removeAllTasks())}>
                        Usuń wszystkie
                    </StyledButton>
                </>
            )}
        </ButtonField>
    );
}

export default Buttons;