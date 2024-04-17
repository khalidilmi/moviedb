import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { moviesApi } from './apis/movieApi';
import { changeSearchTerm, filmsReducer } from './slice/slicesearch';


export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer, //dette er en mere sikker måde, ungår "typo's"
    films: filmsReducer
  },
  middleware: (getDefaultMiddleware) => {  //Thunk middelware er default når der benyttes Redux Toolkit configureStore.
    return getDefaultMiddleware()
    .concat(moviesApi.middleware);
  }
});

setupListeners(store.dispatch);

export { useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery,useFetchSearchMovieQuery,useFetchTvShowQuery,useFetchUpcommingMoviesQuery,useFetchMoviesByGenreQuery } from './apis/movieApi';
export {changeSearchTerm}