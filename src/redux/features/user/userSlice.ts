import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from './user.interface';


const initialState: User | null = {
    id: 1,
    email: 'david@gmail.com',
    username: 'David',
    password: 'string',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state: User | null, action: PayloadAction<User>) => {

            return {
                ...state,
                ...action.payload
            };
        },
        
    }
});


export const { setUser } = userSlice.actions;
export default userSlice.reducer; 