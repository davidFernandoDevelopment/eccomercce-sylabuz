import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    showCart: boolean;
    darkTheme: boolean;
}

const initialState: State = {
    showCart: false,
    darkTheme: false
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleShowCart: (state: State, action: PayloadAction<boolean>) => {
            return {
                ...state,
                showCart: action.payload
            };
        },
        toggleDarkTheme: (state: State, action: PayloadAction<boolean>) => {
            return {
                ...state,
                darkTheme: action.payload
            };
        }
    }
});


export const { toggleDarkTheme, toggleShowCart } = uiSlice.actions;
export default uiSlice.reducer;