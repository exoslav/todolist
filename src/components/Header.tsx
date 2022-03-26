import React, { useContext } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import colors from 'styles/colors';
import { StoreContext } from 'store';
import { capitalizeFirstLetter } from 'utils/strings';
import H1 from 'components/semantic/H1';
import Arrow from 'components/Arrow';

const StyledHeader = styled.div<{ active: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    a {
        position: absolute;
        left: -32px;
        top: 11px;
    }

    h1 {
        color: ${props => props.active ? colors.app.primaryBlack : colors.app.primaryGray2}
    }
`;

const Header: React.FC = () => {
    const location = useLocation();
    const { state } = useContext(StoreContext);

    const displayBackLink = !['/', '/board'].includes(location.pathname);

    return (
        <StyledHeader active={state.page.title.active}>
            {
                displayBackLink &&
                <Link to="/board">
                    <Arrow />
                </Link>

            }
            <H1>{capitalizeFirstLetter(state.page.title.text)}</H1>
        </StyledHeader>
    )
}

export default Header;