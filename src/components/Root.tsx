import React, { useEffect } from 'react';

import { StoreContext } from 'store';
import { getTodoList } from 'store/todos';
import { getCategories } from 'store/categories';
import Container from 'components/Container';
import Header from 'components/Header';

const Root: React.FC = () => {
    const { dispatch } = React.useContext(StoreContext);

    useEffect(() => {
        getTodoList(dispatch);
        getCategories(dispatch);
    }, []);

    return (
        <Container>
            <Header />
        </Container>
    )
}

export default Root;
