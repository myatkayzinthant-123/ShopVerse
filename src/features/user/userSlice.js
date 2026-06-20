const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    user: {username: 'shoipfy'},
    theme: 'dracula'
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            console.log('login');
        },
        logoutUser: (state) => {
            console.log('logout');
        },
        toggleTheme: (state) => {
            console.log('toggle theme');
        }
    }
})