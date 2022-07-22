import CardProduct from '../../components/CardProduct';
import { useAppSelector } from '../../redux/store';
import FeatureProduct from '../components/FeatureProduct';

const Home = () => {

    const { products } = useAppSelector(state => state.products);


    return (
        <main className="c-main">
            <FeatureProduct />
            <section className="c-featured o-section o-container" id="featured">
                <h2 className="o-section__title">Destacados</h2>
                <div className='o-grid o-card-container'>
                    {
                        products.slice(2, 5).map((pdx) => (
                            <CardProduct key={pdx.id} product={pdx} featured featuredTitle='Oferta' />
                        ))
                    }
                </div>
            </section>

            <section className="c-products o-section o-container" id="products">
                <h2 className="o-section__title">
                    Productos
                </h2>
                <div className='o-grid o-card-container'>
                    {
                        products.slice(5, 8).map((pdx) => (
                            <CardProduct key={pdx.id} product={pdx} />
                        ))
                    }
                </div>
            </section>


            <section className="c-products o-section o-container" id="products">
                <h2 className="o-section__title">
                    Novedades
                </h2>
                <div className='o-grid o-card-container'>
                    {
                        products.slice(4, 7).map((pdx) => (
                            <CardProduct key={pdx.id} product={pdx} featured featuredTitle='Nuevo' />
                        ))
                    }
                </div>
            </section>

            <section className="c-newslettwer o-section o-container">
                <div className="c-newsletter__bg o-grid">
                    <div className="c-newsletter__info">
                        <h2 className="c-newsletter__title">
                            Suscribete a nuestras <br /> Noticias
                        </h2>
                        <p className="c-newsletter__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt cum mollitia temporibus nulla
                            repellendus? Voluptatem totam numquam temporibus, enim voluptatum repellat, earum et suscipit
                            eum deleniti cupiditate, laudantium perferendis possimus!
                        </p>
                    </div>
                    <form className="c-form">
                        <input className="c-form__input" type="email" placeholder="Email" />
                        <button className="c-button">
                            Suscribete
                        </button>
                    </form>
                </div>
            </section>

        </main>
    );
};

export default Home;