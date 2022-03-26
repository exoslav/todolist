import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import colors from 'styles/colors';

const StyledH2 = styled.h2`
    margin: 32px 0 15px;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: ${rgba(colors.app.primaryBlack, 0.3)}
`;

const H2: React.FC = ({ children }) => (
    <StyledH2>{children}</StyledH2>
);

export default H2;
