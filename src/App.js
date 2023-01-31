import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import Home from './pages/Home';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header/index';
import './App.scss';

export const SearchContext = createContext(null);

const App = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <SearchContext.Provider value={{searchText, setSearchText}}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </SearchContext.Provider>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
