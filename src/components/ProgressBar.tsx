import React, { useContext } from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';

import colors from 'styles/colors';
import { StoreContext } from 'store';

const ProgressBar: React.FC = () => {
    const { state } = useContext(StoreContext);

    TopBarProgress.config({
        barColors: {
            '0': colors.app.primaryGreen,
            '1.0': colors.app.primaryGray3
        },
        shadowBlur: 2
    });

    return state.todos.loading ? <TopBarProgress /> : null;
};

export default ProgressBar;
