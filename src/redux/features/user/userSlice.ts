import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from './user.interface';

export const login = createAsyncThunk<any, {
    username: string;
    password: string;
}>(
    'user/login',
    async (data, { dispatch, getState }) => {
        return fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json());
    }
);


interface State {
    user: User | null;
    loading: boolean;
}

const initialState: State = {
    user: null,
    loading: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: () => {
            localStorage.clear();
            return {
                user: null,
                loading: false
            };
        },

    },
    extraReducers: {
        [`${login.pending}`]: (state, action: PayloadAction<any>) => {
            state.loading = true;
        },
        [`${login.fulfilled}`]: (state, action: PayloadAction<any>) => {
            let data = action.payload.result;
            state.loading = false;
            localStorage.setItem('token', data.tokens.accessToken);
            state.user = {
                email: data.user.email,
                id: data.user.id,
                username: data.user.name
            };
        },
        [`${login.rejected}`]: (state, action: PayloadAction<any>) => {
            state.loading = false;
        }
    }
});


export const { logout } = userSlice.actions;
export default userSlice.reducer; 