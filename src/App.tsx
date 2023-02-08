import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import Home from './pages/Home';
import Parent from './components/Parent/Parent';

import './App.scss';
import Spinner from './components/ui/Spinner';

const CartPage = lazy(() => import('./pages/CartPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ItemPage = lazy(() => import('./pages/ItemPage'));

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Parent />}>
                        <Route path="" element={<Home />} />
                        <Route
                            path="cart"
                            element={
                                <Suspense fallback={<Spinner />}>
                                    <CartPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="page/:id"
                            element={
                                <Suspense fallback={<Spinner />}>
                                    <ItemPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <Suspense fallback={<Spinner />}>
                                    <NotFoundPage />
                                </Suspense>
                            }
                        />
                    </Route>
                </Routes>
            </Provider>
        </BrowserRouter>
    );
};

export default App;
