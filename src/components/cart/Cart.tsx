import { toggleShowCart } from '../../redux/features/ui/uiSlice';
import { useAppSelector, useAppDispatch } from '../../redux/store';

import Counter from '../Counter';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useAppDispatch();
    const showCart = useAppSelector(state => state.ui.showCart);
    const { products, total } = useAppSelector(state => state.cart);

    const handleChangeShowCart = () => {
        dispatch(toggleShowCart(!showCart));
    };

    return (
        <div className={`c-cart ${showCart ? 'is-show-cart' : ''}`}>
            <i className="uil uil-times c-cart__close" onClick={handleChangeShowCart}></i>
            <h2 className="c-cart__title-center">
                Mi carrito de compras
            </h2>
            {
                products.length ? (
                    <>
                        <div className="c-cart__cards">
                            {
                                products.map(({ productId, quantity, price, title, image }) => (

                                    <article key={productId} className="c-cart__card">
                                        <div className="c-cart__box">
                                            <img className="c-cart__img" src={image} alt="product" />
                                        </div>

                                        <div className="c-cart__details">
                                            <h3 className="c-cart__title">{title}</h3>
                                            <span className="c-cart__price">{price}</span>
                                            <Counter value={quantity} idProduct={productId} />
                                        </div>

                                    </article>
                                ))
                            }
                        </div>
                        <div className="c-cart__abstract">
                            <span className="c-cart__prices-items">{products.length} Articulos</span>
                            <span className="c-cart__prices-total">S/ {total.toFixed(2)}</span>
                        </div>
                        <Link
                            to='/checkout'
                            className='c-button u-mt-1 u-w-full'
                        >Pagar</Link>
                    </>
                ) : <h3 className='u-ta-center'>CARRITO VACÍO</h3>
            }
        </div>
    );
};

export default Cart;