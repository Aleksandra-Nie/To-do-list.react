import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    }
`;

export const StyledInput = styled.input`
    border: 1px solid #ddd;
    padding: 10px;
`;

export const StyledButton = styled.button`
border: none;
    padding: 10px;
    color: white;
    background-color: hsl(180, 100%, 25%);
    cursor: pointer;
    transition: 0.5s;

    &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.1);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }
`;