import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({});
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setDetail(json);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, [])
    return <div>{loading ? <h1>Loaing....</h1> : (
        <div>
            <img src={detail.data.movie.large_cover_image} />
            <h1>{detail.data.movie.title}({detail.data.movie.year})</h1>
            <ul>
                {detail.data.movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <p>{detail.data.movie.description_full}</p>
        </div>)}
    </div>;
}

export default Detail;