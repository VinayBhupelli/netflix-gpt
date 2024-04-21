import React from "react";
import { imageURL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="w-48 pr-4">
        <img src={imageURL + movie.poster_path} alt="" />
      </div>
    </div>
  );
};

export default MovieCard;
