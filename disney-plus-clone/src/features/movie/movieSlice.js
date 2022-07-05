import {createSlice} from "@reduxjs/toolkit"

//at intial movies is empty
const initialState ={
    recommend: null,
    newDisney: null,
    original: null,
    trending: null,
}

const movieSlice = createSlice({

    name : "movie",
    initialState,
    reducers : {

        setMovies: (state, action) => {
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
          }
    }
})

export const {setMovies} = movieSlice.actions;

//export movies by selecting by state or id etc
export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
// call the store thet we have that reducer
export default  movieSlice.reducer;