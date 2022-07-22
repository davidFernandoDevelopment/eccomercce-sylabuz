import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import { useEffect } from 'react';
import { useCustomSWR } from '../hooks/useSWR';
import Spinner from '../components/Spinner';


const ProductDetail = () => {
    const params = useParams();
    const { data, isLoading } = useCustomSWR(`https://fakestoreapi.com/products/${params.id}`);

    useEffect(() => {
        console.log(data);
    }, [data]);

    if (isLoading) return <Spinner />;

    return (
        data ? (
            <div className='o-container u-mt-5'>
                <Product product={data} />
            </div>
        ) : null

    );
};

export default ProductDetail;