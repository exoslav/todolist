import React from 'react';
import styled from 'styled-components';

import colors from 'styles/colors';

export const StyledParagraph = styled.p`
    margin-bottom: 13px;
    font-size: 18px;
    line-height: 26px;
    color: ${colors.app.primaryBlack}
`;

const Paragraph: React.FC = ({ children }) => (
    <StyledParagraph>
        {children}
    </StyledParagraph>
);

export default Paragraph;
