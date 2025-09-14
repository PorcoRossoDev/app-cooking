import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        items: []
    },
    reducers: {
        toggleFavorite(state, action) {
            const { id } = action.payload
            const existing = state.items.find(item => item === id)
            if(existing){
                state.items = state.items.filter(item => item !== id)
            } else {
                state.items = [...state.items, id]
            }
            return state
        },
        removeFavorite(state, action){
            const { id } = action.payload
            state.items = state.items.filter(item => item !== id)
            return state
        },
        removeAllFavorite(state, action){
            state.items = []
            return state
        }
    }
})

export const { toggleFavorite, removeFavorite, removeAllFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer