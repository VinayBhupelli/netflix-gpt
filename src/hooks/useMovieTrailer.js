import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    const data = await fetch(url, API_Options);
    const json = await data.json();
    // console.log(json);
    const trailer = json.results.filter((video) => video.type === "Trailer");
    const video = trailer[Math.floor(Math.random() * trailer.length)];
    dispatch(addTrailerVideo(video.key));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
