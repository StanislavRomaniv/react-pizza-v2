import { Outlet } from 'react-router-dom';

import Header from '../Header/index';

const Parent = () => {
    return (
        <div className="App">
            <Header />
            <Outlet />
        </div>
    );
};

export default Parent;
