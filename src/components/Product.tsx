import image from '../assets/img/nicolini.png';
import { Product as ProductInterface } from '../redux/features/products/product.interface';
import { useAppSelector } from '../redux/store';

interface Props {
    product: ProductInterface;
}


const Product = ({ product }: Props) => {

    return (
        <div className="c-story__container o-grid o-section">
            <div className="c-story__data">
                <h2 className="o-section__title c-story__section-title">
                    S/ {product.price.toFixed(2)}
                </h2>
                <h1 className="c-story__title">
                    {product.title}
                </h1>
                <p className="c-story__description">
                    {product.description}
                </p>

                <a href="#" className="c-button c-button--small">
                    Agregar al carrito
                </a>
            </div>
            <div className="c-story__images">
                <img className="c-story__img" src={product.image} alt="nicolini" />
                <div className="c-story__square"></div>
            </div>
        </div>
    );
};

export default Product;