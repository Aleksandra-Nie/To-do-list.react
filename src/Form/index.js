import React, { useState } from 'react';
import { StyledForm, StyledInput, StyledButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >
            <StyledInput
                value={newTaskContent}
                type="text" name="task"
                placeholder="Co jest do zrobienia?" autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <StyledButton>Dodaj zadanie</StyledButton>
        </StyledForm>
    );
};

export default Form;