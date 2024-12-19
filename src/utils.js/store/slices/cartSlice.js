import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state,actions) => {
            /**
             * Vanilla (older) Redux => DON'T MUTATE STATE, returning is mandatory
             * const newState = [...state]
             * newState.items.push(action.payload)
             * return newState;
             */


            // Redux Toolkit (uses immer behind the scene)
            // mutating the store here
            state.items.push(actions.payload)
        },
        removeItems: (state, actions) => {
            state.items.pop()
        },
        clearItems: (state, actions) => {
            state.items.length = 0
        }
    }
})

// export const {addItems, removeItems, clearItems} = cartSlice.actions;
export const { addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;