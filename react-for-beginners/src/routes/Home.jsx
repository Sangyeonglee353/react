import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import styles from './Home.module.css';

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
  
    // Version 1: fetch...then...then
    // useEffect(() =>{
    //   fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     //console.log(json.data);
    //     setMovies(json.data.movies);
    //     setLoading(false);
    //   });
    // },[])
  
    // Version 2: async...await
    const getMoives = async() => {
      // sol 1
      // const response = await fetch(
      //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      // );
      // const json = await response.json();
  
      // sol 2
      const json = await (
        await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )).json();
      setMovies(json.data.movies);
      console.log(json.data.movies);
      setLoading(false);
    }
  
    useEffect(() => {
      getMoives()
    }, []);

    return (
      <div className={styles.container}>
        {loading ? 
          (
          <div className={styles.loader}>
            <span>Loading...</span>
          </div>
          ) : (
              <div className={styles.movies}>
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  year={movie.year}
                  genres={movie.genres}
                />
              ))}
              </div>
              )}
          </div>
        );
}

export default Home;