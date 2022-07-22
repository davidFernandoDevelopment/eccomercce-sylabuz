import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './assets/styles/main.css';

import Home from './pages/Home/Home';
import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ProductsList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

import { useAppDispatch, useAppSelector } from './redux/store';
import Login from './pages/Login';
import { PrivateRoute } from './routes/PrivateRoute';
import Checkout from './pages/Checkout';
import { setProducts } from './redux/features/products/productsSyncSlice';
import { useCustomSWR } from './hooks/useSWR';
import Spinner from './components/Spinner';

const url = 'https://fakestoreapi.com/products';

function App() {

  const { darkTheme } = useAppSelector(state => state.ui);
  const { user } = useAppSelector(state => state.auth);

  useEffect(() => {
    darkTheme ? document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme');
  }, [darkTheme]);

  const dispatch = useAppDispatch();
  const { data, isLoading } = useCustomSWR(url);

  useEffect(() => {
    if (data) {
      console.log({ data });
      dispatch(setProducts(data));
    }

  }, [data, dispatch]);

  if (isLoading) <Spinner />;

  return (
    <Router>
      <Header />
      <Cart />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductsList />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/auth/login' element={<Login />} />
        <Route
          path='/checkout'
          element={
            <PrivateRoute isAuthenticate={!!user} >
              <Checkout />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
