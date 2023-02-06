import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';

const Parent: FC = () => {
    return (
        <div className="App">
            <Header />
            <Outlet />
        </div>
    );
};

export default Parent;
