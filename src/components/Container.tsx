import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import colors from 'styles/colors';

const StyledContainer = styled.div`
    max-width: 475px;
    margin: 50px auto 70px;
    background: ${colors.base.white};
    border-radius: 15px;
    padding: 60px 30px 60px 60px;
    box-shadow: 3px 2px 0px 0px ${colors.app.primaryBlack};
`;

const Container: React.FC = ({ children }) => {
    return (
        <StyledContainer>
            {children}
            <Outlet />
        </StyledContainer>
    )
}

export default Container;
