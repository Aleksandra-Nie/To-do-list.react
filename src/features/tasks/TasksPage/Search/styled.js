import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;

export default styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.alto};
`;