import { createSlice } from "lib/cbi-react-core"


const initialState = {
    openMenu: false
}

export const { reducer: pageReducer, actions: pageAction } = createSlice({
    name: 'page',
    initialState,
    reducers: {
        toggleMenu(state, action) {
            state.openMenu = action.payload ?? !state.openMenu
        }
    }
})


export const {...ref} =  pageAction