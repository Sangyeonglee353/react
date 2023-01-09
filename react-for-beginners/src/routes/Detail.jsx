import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import Movie from '../components/Movie';
import styles from './Detail.module.css';

function Detail(){
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? (
            <div className={styles.loader}>
                <span>Loading...</span>
            </div>) : (
            <div>
                <h2>{movie.title}</h2>
                <img src={movie.medium_cover_image}/>
                <p>{movie.year}</p>
                <p>
                    <img src="https://image.msscdn.net/skin/musinsa/images/icon_like_small_on.png" />
                    <span style={{color: "red"}}> {movie.like_count}</span>
                </p>
                {movie.genres.map((e) => <li>{e}</li>)}
                <p>{movie.description_full}</p>
                <h3>
                    <Link to="/">Home</Link>
                </h3>
            </div> )  
            }
        </div>
    )
}

export default Detail;