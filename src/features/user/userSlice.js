import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'

const themes = {
    winter: 'winter',
    dracula: 'dracula'
}

const getThemeFromLocalStorage = () => {
    return localStorage.getItem('theme') || themes.dracula
}

const initialState = {
    user: {username: 'kkzt'},
    theme: getThemeFromLocalStorage()
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            console.log('login');
        },
        logoutUser: (state) => {
            state.user = null
            localStorage.removeItem('user')
            toast.success('Logged out successfully')
        },
        toggleTheme: (state) => {
            const {winter, dracula} = themes
            state.theme = state.theme === dracula ? winter : dracula
            document.documentElement.setAttribute('data-theme', state.theme)
            localStorage.setItem('theme', state.theme)
        }
    }
})

export const {loginUser, logoutUser, toggleTheme} = userSlice.actions

export default userSlice.reducer