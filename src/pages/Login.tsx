import React, { useState } from 'react';
import { login } from '../redux/features/user/userSlice';
import { useAppDispatch } from '../redux/store';
import { useNavigate } from 'react-router-dom';

interface Auth {
    username: string;
    password: string;
}

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState<Auth>({
        username: '',
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
        if (!!data.username || !!data.password) return;

        dispatch(login(data));
        navigate('/');
    };

    return (
        <div className='u-mt o-container'>
            <form className="c-form" onSubmit={handleSubmit}>
                <input onChange={handleChange} name='username' className="c-form__input" type="text" placeholder="Username" autoComplete='off' />
                <input onChange={handleChange} name='password' className="c-form__input" type="password" placeholder="Password" autoComplete='off' />
                <button className="c-button" type='submit'>
                    Iniciar sesión
                </button>
            </form>
        </div>
    );
};

export default Login;