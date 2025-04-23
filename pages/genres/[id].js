import { getGenreById, getAllGenres, getAllMovies } from '@/utils/data';

export async function getStaticPaths() {
    const paths = getAllGenres().map((g) => ({ params: { id: g.id } }));
    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    const genre = getGenreById(params.id);
    if (!genre) return { notFound: true };

    const movies = getAllMovies().filter((m) => m.genreId === genre.id);

    return {
        props: {
            genre,
            movies,
        },
        revalidate: 10,
    };
}

export default function GenreDetail({ genre, movies }) {
    return (
        <div>
            <h1>Genre: {genre.name}</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <a href={`/movies/${movie.id}`}>{movie.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
