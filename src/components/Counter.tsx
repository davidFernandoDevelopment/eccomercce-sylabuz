import { changeProductInCart, deleteProductInCart } from '../redux/features/cart/cartSlice';
import { useAppDispatch } from '../redux/store';
interface Props {
    value: number;
    idProduct: number;
}

const Counter = ({ value, idProduct }: Props) => {

    const dispatch = useAppDispatch();


    const handleClick = (value: number) => {
        dispatch(changeProductInCart({
            productId: idProduct, quantity: value
        }));
    };

    const handleDelete = (id: number) => {
        dispatch(deleteProductInCart(id));
    };


    return (
        <div className="c-counter">
            <div className="c-counter__content">
                <span className={`c-counter__box ${value > 1 ? '' : 'c-counter__box--disabled'}`} onClick={() => handleClick(-1)}>
                    <i className="uil uil-minus"></i>
                </span>
                <span className="c-counter__number">
                    {value}
                </span>
                <span className="c-counter__box" onClick={() => handleClick(+1)}>
                    <i className="uil uil-plus"></i>
                </span>
            </div>
            <i className="uil uil-trash-alt c-counter__trash" onClick={() => handleDelete(idProduct)}></i>
        </div>
    );
};

export default Counter;
