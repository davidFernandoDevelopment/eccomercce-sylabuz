import { Link } from 'react-router-dom';
import { changeProductInCart } from '../redux/features/cart/cartSlice';
import { Product } from '../redux/features/products/product.interface';
import { useAppSelector, useAppDispatch } from '../redux/store';

interface Props {
    featured?: boolean;
    featuredTitle?: string;
    product?: Product;
}

const CardProduct = ({ featured, featuredTitle, product }: Props) => {

    const dispatch = useAppDispatch();

    const {
        id,
        title,
        price,
        image
    } = product!;

    const handleClick = (quantity: number) => {
        dispatch(changeProductInCart({
            productId: id,
            quantity,
            price: product?.price!,
            title: product?.title!,
            image: product?.image!
        }));
    };

    return (
        <>
            <article className={`c-card ${featured ? 'c-card--featured' : ''}`}>
                {!!featured && <span className="c-card__tag">{featuredTitle}</span>}
                <img className="c-card__img" src={image} alt="product" />

                <div className="c-card__data">
                    <Link className="c-card__title" to={`/products/${id}`}>
                        {title}
                    </Link>
                    <span className="c-card__price">
                        S/ {price}
                    </span>
                </div>
                <button
                    className="c-button c-card__button"
                    onClick={() => handleClick(+1)}
                >
                    {
                        !!featured ?
                            'Agregar al carrito' :
                            <i className="uil uil-shopping-bag"></i>
                    }
                </button>
            </article>
        </>
    );
};

export default CardProduct;