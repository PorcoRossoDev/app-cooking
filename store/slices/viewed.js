import { createSlice } from '@reduxjs/toolkit'

export const viewedSlice = createSlice({
    name: 'viewed',
    initialState: {
        items: []
    },
    reducers: {
        addViewed(state, action){
            const { id } = action.payload
            const existing = state.items.find(item => item.id == id)
            if( !existing ){
                state.items = [...state.items, id]
            } else {
                state.items = state.items.filters(item => item !== id)
            }
            console.log(state.items)
            return state
        },
        removeViewed(state, action){
            const { id } = action.payload
            state.items = state.items.filter(item => item !== id)
            return state
        },
        removeAllViewed(state, action){
            state.items = []
            return state
        }
    }
})

export const { addViewed, removeViewed, removeAllViewed } = viewedSlice.actions

export default viewedSlice.reducer