import React from 'react';

const Checkout = () => {
    return (
        <div className='u-mt o-container'>
            <h2 className='u-ta-center'>Checkout</h2>
            <form className="c-form u-mt-1">
                <input name='email' className="c-form__input" type="email" placeholder="Username" autoComplete='off' />
                <input name='password' className="c-form__input" type="password" placeholder="Password" autoComplete='off' />
                <button className="c-button">
                    Iniciar sesión
                </button>
            </form>
        </div>
    );
};

export default Checkout;