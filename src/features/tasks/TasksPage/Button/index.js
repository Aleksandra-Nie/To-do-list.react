import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    border: none;
    padding: 0;
    color: ${({ theme }) => theme.color.primary};
    background-color: transparent;
    cursor: pointer;
    transition: color 0.5s;

    &:hover {
        color: rgb(60, 167, 167);
    }

    &:disabled {
        color: #ccc;
    }

    ${({ $reset }) => $reset && css`
        padding-right: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 0;
        margin-bottom: 20px;
    }
    `}
`;
