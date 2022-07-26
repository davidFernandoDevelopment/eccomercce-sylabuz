import { useAppSelector, useAppDispatch } from '../../redux/store';
import { toggleDarkTheme, toggleShowCart } from '../../redux/features/ui/uiSlice';
import { useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/features/user/userSlice';


const options: { label: string; path: string; }[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Destacados', path: '/featureds' },
    { label: 'Productos', path: '/products' }
];

const Header = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const ref = useRef<HTMLHeadingElement | null>(null);
    const refDiv = useRef<HTMLDivElement | null>(null);
    const { darkTheme, showCart } = useAppSelector(state => state.ui);
    const { user } = useAppSelector(state => state.auth);


    const handleChangeTheme = () => {
        dispatch(toggleDarkTheme(!darkTheme));
    };
    const handleChangeShowCart = () => {
        dispatch(toggleShowCart(!showCart));
    };
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };
    const handleMenu = () => {
        if (refDiv) {
            refDiv.current?.classList.toggle('is-show-menu');
        }
    };

    useEffect(() => {
        const onScroll: EventListener = () => {
            if (document.documentElement.scrollTop > 50) {
                ref.current?.classList.add('scroll-header');
            } else {
                ref.current?.classList.remove('scroll-header');
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header ref={ref} className="c-header">
            <div className="c-header__container o-container">
                <NavLink to='/' className="c-header__logo">
                    <i className="uil uil-watch-alt c-header__logo-icon"></i>
                    Tienda Sánchez
                </NavLink>
                <nav className="c-nav-menu" ref={refDiv} >
                    <ul className="c-nav-menu__list">
                        <>
                            {
                                options.map(({ label, path }) => (
                                    <li key={label} className="c-nav-menu__item">
                                        <NavLink
                                            onClick={handleMenu}
                                            to={path}
                                            className={
                                                ({ isActive }) => isActive ? 'c-nav-menu__link active-link' : 'c-nav-menu__link'
                                            }
                                        >
                                            {label}
                                        </NavLink>
                                    </li>
                                ))
                            }
                            <button
                                onClick={handleLogout}
                                className='u-d-lg-none c-nav-menu__link'
                            >
                                Logout
                            </button>
                        </>
                    </ul>
                    <div className="c-nav-menu__close" onClick={handleMenu}>
                        <i className="uil uil-times c-nav-menu__icon"></i>
                    </div>
                </nav>
                <div className="c-header__buttons">
                    <i className="uil uil-moon c-header__icon c-header__toggle-theme" onClick={handleChangeTheme}></i>

                    <div className="c-header__shop" onClick={handleChangeShowCart}>
                        <i className="uil uil-shopping-bag c-header__icon"></i>
                    </div>
                    <div className="c-header__menu" onClick={handleMenu}>
                        <i className="uil uil-apps c-header__icon"></i>
                    </div>
                    {
                        user ?
                            <div className='c-header__user'>
                                <h1 className='c-header__user-name'>{user.username}</h1>
                                <Link
                                    to='/auth/login'
                                    onClick={handleLogout}
                                    className='u-d-none u-d-lg-block c-button c-button--smaller'
                                >
                                    Logout
                                </Link>
                            </div> :
                            <Link to='/auth/login' className='c-button c-button--small'>Login</Link>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;