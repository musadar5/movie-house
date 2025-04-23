import { getMovieById, getAllMovies, getDirectorById } from '@/utils/data';
import Link from 'next/link';

export async function getStaticPaths() {
    const paths = getAllMovies().map(m => ({ params: { id: m.id } }));
    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    const movie = getMovieById(params.id);
    if (!movie) return { notFound: true };

    return {
        props: {
            movie,
            director: getDirectorById(movie.directorId),
        },
        revalidate: 10,
    };
}

export default function MoviePage({ movie, director }) {
    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p>Year: {movie.releaseYear} | Rating: {movie.rating}</p>
            <Link href={`/movies/${movie.id}/director`}>Director: {director.name}</Link>
        </div>
    );
}
