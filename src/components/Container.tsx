import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import colors from 'styles/colors';

const StyledContainer = styled.div<{ wide: boolean }>`
    max-width: ${props => props.wide ? '884px' : '475px'};
    margin: 0 auto 70px;
    background: ${colors.base.white};
    border-radius: 15px;
    padding: 60px 30px 40px 60px;
    box-shadow: 3px 2px 0px 0px ${colors.app.primaryBlack};
`;

const Container: React.FC = ({ children }) => {
    const location = useLocation();
    const wide = location.pathname === '/homework';

    return (
        <StyledContainer wide={wide}>
            {children}
            <Outlet />
        </StyledContainer>
    )
}

export default Container;
