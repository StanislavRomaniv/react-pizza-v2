import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import Home from './pages/Home';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import ItemPage from './pages/ItemPage';
import Parent from './components/Parent/Parent';

import './App.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Parent />}>
                        <Route path="" element={<Home />} />
                        <Route path="cart" element={<CartPage />} />
                        <Route path="page/:id" element={<ItemPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Provider>
        </BrowserRouter>
    );
};

export default App;
