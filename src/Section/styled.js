import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
    background: white;
    box-shadow: 0 0 5px #ddd;
`;

export const StyledSectionContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr auto auto;
    border-bottom: 1px solid #ddd;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledSectionHeader = styled.h2`
    padding: 20px;
    margin: 0;
    font-size: 20px;
    border-bottom: 1px solid #ddd;

    ${({ second }) => second && css`
    border-bottom: none;
    `}
`;

export const StyledSectionBody = styled.div`
    padding: 20px;
`;



