import Link from 'next/link';
import { getAllGenres, getAllMovies } from '@/utils/data';

export async function getServerSideProps() {
    const genres = getAllGenres();
    const movies = getAllMovies();

    return {
        props: {
            genres,
            movies,
        },
    };
}

export default function GenresPage({ genres, movies }) {
    return (
        <div>
            <h1>Genres</h1>
            <ul>
                {genres.map((genre) => (
                    <li key={genre.id}>
                        <Link href={`/genres/${genre.id}`}>{genre.name}</Link>
                    </li>
                ))}
            </ul>

            <h2>All Movies</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
