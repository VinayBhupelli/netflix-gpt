import React from "react";
import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useTrending from "../hooks/useTrending";
import useUpcoming from "../hooks/useUpcoming";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useTrending();
  useUpcoming();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
