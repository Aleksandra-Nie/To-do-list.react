import { ButtonField, StyledButton } from "./styled"

const Buttons = ({ tasks, hideDone, toggleHideDone, markAllTasksCompleted, removeAllTasks }) => (
    <ButtonField>
        {tasks.length > 0 && (
            <>
                <StyledButton onClick={toggleHideDone}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </StyledButton>
                <StyledButton
                    onClick={markAllTasksCompleted}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </StyledButton>
                <StyledButton reset type="reset"
                    onClick={removeAllTasks}>
                    Usuń wszystkie
                </StyledButton>
            </>
        )}
    </ButtonField>
);


export default Buttons;