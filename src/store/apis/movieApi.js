import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.themoviedb.org/3/'
  }),
  endpoints(builder) {
    return {
      fetchPopularMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'popularity.desc',
              api_key: '155cf085740d5e0ae84f96fa475b23ee'
            },
            method: 'GET',
          };
        },
      }),
      fetchTvShow: builder.query({
        query: () => {
          return {
            url: 'discover/tv',
            params: {
              api_key: '155cf085740d5e0ae84f96fa475b23ee'
            },
            method: 'GET',
          };
        },
      }),
      fetchHighestRatedMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'vote_average.desc',
              api_key: '155cf085740d5e0ae84f96fa475b23ee'
            },
            method: 'GET',
          };
        },
      }),
      fetchSearchMovie: builder.query({
        query: (searchTerm) => {
          return {
            url: 'search/movie',
            params: {
              query: searchTerm,
              api_key: '155cf085740d5e0ae84f96fa475b23ee'
            },
            method: 'GET',
          };
        },
      }),
      fetchUpcommingMovies: builder.query({
        query: (startDate) => {
          return {
            url: "discover/movie",
            params: {
              api_key: "155cf085740d5e0ae84f96fa475b23ee",
              "primary_release_date.gte": startDate,
            },
            method: "GET",
          };
        },
      }),
      fetchMoviesByGenre: builder.query({
        query: (genreId) => ({
          url: 'discover/movie',
          params: {
            api_key: "155cf085740d5e0ae84f96fa475b23ee",
            with_genres: genreId,
          },
          method: 'GET',
        }),
      }),  
    };
  },
});

export const {useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery,useFetchTvShowQuery,useFetchUpcommingMoviesQuery,useFetchMoviesByGenreQuery} = moviesApi;
export { moviesApi };
