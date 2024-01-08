import { selectAreTasksEmpty, toggleHideDone, markAllTasksCompleted, removeAllTasks, selectIsEveryTaskDone, selectHideDone } from "../tasksSlice";
import { ButtonField, StyledButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const dispatch = useDispatch();

    return (
        <ButtonField>
            {!areTasksEmpty && (
                <>
                    <StyledButton
                        onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </StyledButton>
                    <StyledButton
                        onClick={() => dispatch(markAllTasksCompleted())}
                        disabled={isEveryTaskDone}
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