import React from 'react';
import CardProduct from '../components/CardProduct';
import { useAppSelector, useAppDispatch } from '../redux/store';
import { useCustomSWR } from '../hooks/useSWR';
import { useEffect } from 'react';
import Spinner from '../components/Spinner';
import { setProducts } from '../redux/features/products/productsSyncSlice';
import { Product } from '../redux/features/products/product.interface';


const options = ['varon', 'mujer', 'niños'];
const url = 'https://fakestoreapi.com/products';

const ProductsList = () => {

  const dispatch = useAppDispatch();
  const { data, isLoading } = useCustomSWR(url);
  const { products } = useAppSelector(state => state.products);

  useEffect(() => {
    if (data) {
      console.log({ data });
      dispatch(setProducts(data));
    }
  }, [data]);

  if (isLoading) return <Spinner />;

  return (
    <div className='u-mt o-container'>
      <nav className="c-nav-menu u-p">
        <ul className="c-nav-menu__list">
          {
            options.map((opt) => (
              <li key={opt} className="c-nav-menu__item">
                <a href="#home" className="c-nav-menu__link">
                  {opt}
                </a>
              </li>
            ))
          }
        </ul>
        <div className="c-nav-menu__close js-nav-close">
          <i className="uil uil-times c-nav-menu__icon"></i>
        </div>
      </nav>
      <div className='o-grid o-card-container'>
        {
          products.length ?
            data.map((pdx: Product) => (
              <CardProduct key={pdx.id} product={pdx} />
            )) : null
        }
      </div>
    </div>
  );
};

export default ProductsList;