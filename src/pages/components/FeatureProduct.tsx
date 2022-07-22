import { useCustomSWR } from '../../hooks/useSWR';
import Spinner from '../../components/Spinner';
import { useAppDispatch } from '../../redux/store';
import { changeProductInCart } from '../../redux/features/cart/cartSlice';
import { Link } from 'react-router-dom';


const url = 'https://fakestoreapi.com/products/18';

const FeatureProduct = () => {
    const { data, isLoading } = useCustomSWR(url);
    const dispatch = useAppDispatch();

    const handleClick = (quantity: number) => {
        if (data) {
            dispatch(changeProductInCart({
                productId: data.id,
                quantity,
                price: data.price,
                title: data.title,
                image: data.image
            }));
        }
    };

    if (isLoading) return <Spinner />;

    return (

        data ? (
            <section className="c-home" id="home" >
                <div className="c-home__container o-container o-grid">
                    <div className="c-home__img-bg">
                        <img className="c-home__img" src={data.image} alt="Nicolini" />
                    </div>
                    <div className="c-home__social">
                        <a href="#" className="c-home__social-link">Facebook</a>
                        <a href="#" className="c-home__social-link">Twiter</a>
                        <a href="#" className="c-home__social-link">Instagram</a>
                    </div>
                    <div className="c-home__data">
                        <h1 className="c-home__title">
                            {data.title}
                        </h1>
                        <p className="c-home__description">
                            {data.description}
                        </p>
                        <span className="c-home__price">
                            S/ {data.price}
                        </span>
                        <div className="c-home__buttons">
                            <Link to={`/products/${data.id}`} className="c-button c-button--gray c-button--small">
                                Ver detalles
                            </Link>
                            <button className="c-button c-home__button" onClick={() => handleClick(1)}>
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        ) : null
    );
};

export default FeatureProduct;