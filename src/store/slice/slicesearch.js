import {createSlice} from '@reduxjs/toolkit';
const filmSlice = createSlice({
    name: 'films',
    initialState: {
        searchTerm: '',
    },
    reducers:{
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        //accepter en state og en action og retunere en ny state 
    }
})
export const {changeSearchTerm} = filmSlice.actions;
export const filmsReducer = filmSlice.reducer;
//slicess bruger man til håndtere state 