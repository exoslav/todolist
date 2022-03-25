import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import colors from 'styles/colors';

interface H2Props {
    title: string;
}

const StyledH2 = styled.h2`
    margin: 32px 0 15px;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: ${rgba(colors.app.primaryBlack, 0.3)}
`;

const H2: React.FC<H2Props> = ({ title }) => (
    <StyledH2>{title}</StyledH2>
);

export default H2;
