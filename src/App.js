import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Header from './components/Header/index';
import Filter from './components/Filter/index';
import Content from './components/Content/index';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Filter />
              <Content />
            </>} 
          />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
