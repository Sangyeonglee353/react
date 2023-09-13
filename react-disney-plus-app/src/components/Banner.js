import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "requests";
import styled from "styled-components";

const Banner = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보를 가져오기(여러 영화)
    const request = await axios.get(requests.fetchNowPlaying);
    // 여러 영화 중 영화 하나의 ID를 가져오기
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    // 특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  };

  // [기능 1] 설명글 100자 이상이면 자른 후... 붙이기
  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  };

  if (!isClicked) {
    return (
      <>
        <Container>
          <HomeConntainer>
            <Iframe
              onScroll={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=&autoplay=1&loop=1&mute=1`}
            ></Iframe>
          </HomeConntainer>
        </Container>
        <button onClick={() => setIsClicked(false)}>X</button>
      </>
    );
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner_title">
          {movie.title || movie.name || movie.original_name}
        </h1>

        <div className="banner__buttons">
          {movie.videos?.result[0]?.key && (
            <button
              className="banner__button play"
              onClick={() => setIsClicked(true)}
            >
              {" "}
              Play
            </button>
          )}
        </div>

        <h1 className="banner__description">{truncate(movie.overview, 100)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeConntainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
