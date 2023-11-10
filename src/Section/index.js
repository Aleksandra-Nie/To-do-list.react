import { StyledSection, StyledSectionContainer, StyledSectionHeader, StyledSectionBody } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (

    <StyledSection>
        <StyledSectionContainer>
            <StyledSectionHeader
                $second
            >
                {title}
            </StyledSectionHeader>
            {extraHeaderContent}
        </StyledSectionContainer>
        <StyledSectionBody>
            {body}
        </StyledSectionBody>
    </StyledSection>
);

export default Section;