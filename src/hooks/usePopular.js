import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopular = () => {
  const dispatch = useDispatch();
  const getPopular = async () => {
    const url = "https://api.themoviedb.org/3/movie/popular";
    const data = await fetch(url, API_Options);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopular();
  }, []);
};
export default usePopular;
