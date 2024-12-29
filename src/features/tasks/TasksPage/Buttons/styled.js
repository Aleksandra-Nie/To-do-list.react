import styled from "styled-components";

export const ButtonField = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
    padding: 20px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`;


