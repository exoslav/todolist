import React, { useContext, useEffect } from 'react';

import { StoreContext } from 'store';
import { changePageTitle } from 'store/page';
import Paragraph from 'components/semantic/Paragraph';

const pageTitle = '404 Page Not Found';

const NotFoundPage: React.FC = () => {
    const { dispatch } = useContext(StoreContext);
    useEffect(() => changePageTitle(dispatch, { title: pageTitle, active: true }), [])

    return (
        <Paragraph>
            Oops! Something went wrong and page you were looking for in not here.
        </Paragraph>
    );
}

export default NotFoundPage;
