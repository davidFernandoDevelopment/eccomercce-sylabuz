import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './assets/styles/main.css';

import Home from './pages/Home/Home';
import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ProductsList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

import { useAppSelector } from './redux/store';
import Login from './pages/Login';


function App() {

  const { darkTheme } = useAppSelector(state => state.ui);

  useEffect(() => {
    darkTheme ? document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme');
  }, [darkTheme]);


  return (
    <Router>
      <Header />
      <Cart />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductsList />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/auth/login' element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
