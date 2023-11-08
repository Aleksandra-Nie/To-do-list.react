import styled, { css } from "styled-components";

export const ButtonField = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
    padding: 20px;
    margin: 0;

    @media (max-width: 767px) {
    grid-template-columns: 1fr;
    }
`;

export const StyledButton = styled.button`
    border: none;
    padding: 0;
    color: teal;
    background-color: transparent;
    cursor: pointer;
    transition: color 0.5s;

    &:hover {
        color: rgb(60, 167, 167);
    }

    &:disabled {
    color: #ccc;
    }

    ${({ reset }) => reset && css`
    padding-right: 20px;

    @media (max-width: 767px) {
    padding: 0;
    margin-bottom: 20px;
    }
    `}
`;

