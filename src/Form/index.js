import React, { useState, useRef } from 'react';
import { StyledForm, StyledInput, StyledButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();

        if (trimmedNewTaskContent === "") {
            return;
        }

        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    };

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >
            <StyledInput
                ref={inputRef}
                value={newTaskContent}
                type="text" name="task"
                placeholder="Co jest do zrobienia?" autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <StyledButton onClick={focusInput}>Dodaj zadanie</StyledButton>
        </StyledForm>
    );
};

export default Form;