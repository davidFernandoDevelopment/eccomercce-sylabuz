import React, { useState } from 'react';

interface Auth {
    email: string;
    password: string;
}

const Login = () => {
    const [data, setData] = useState<Auth>({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);
        if (!!data.email && !!data.password) return;

        fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => console.log(json));
    };

    return (
        <div className='u-mt o-container'>
            <form className="c-form" onSubmit={handleSubmit}>
                <input onChange={handleChange} name='email' className="c-form__input" type="email" placeholder="Username" autoComplete='off' />
                <input onChange={handleChange} name='password' className="c-form__input" type="password" placeholder="Password" autoComplete='off' />
                <button className="c-button">
                    Iniciar sesión
                </button>
            </form>
        </div>
    );
};

export default Login;