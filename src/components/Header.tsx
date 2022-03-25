import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useSelectCategory } from 'hooks';
import H1 from 'components/semantic/H1';
import Arrow from 'components/Arrow';

const StyledHeader = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    a {
        position: absolute;
        left: -32px;
    }
`;


const Header: React.FC = () => {
    const location = useLocation();
    const category = useSelectCategory();

    const displayBackLink = !['/', '/board'].includes(location.pathname);
    const title = location.pathname.includes('category')
        ? category?.name : 'ToDo List';

    return (
        <StyledHeader>
            {
                displayBackLink &&
                <Link to="/board">
                    <Arrow />
                </Link>

            }
            <H1 title={title} />
        </StyledHeader>
    )
}

export default Header;