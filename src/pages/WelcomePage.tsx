import React, { useEffect, useContext } from 'react';

import { StoreContext } from 'store';
import { changePageTitle } from 'store/page';
import Item from 'components/Item';

const pageTitle = 'Welcome';

const WelcomePage: React.FC = () => {
    const { dispatch } = useContext(StoreContext);

    useEffect(() => changePageTitle(dispatch, { title: pageTitle, active: true }), []);

    return (
        <div>
            <ul>
                <Item
                    to='/board'
                    title='Todo List'
                    done={false}
                />
                <Item
                    to='/code'
                    title='Code from homework'
                    done={false}
                />
            </ul>
        </div>
    );
}

export default WelcomePage;
