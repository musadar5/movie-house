import { getMovieById, getDirectorById } from '@/utils/data';

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }) {
    const movie = getMovieById(params.id);
    if (!movie) return { notFound: true };
    const director = getDirectorById(movie.directorId);

    return {
        props: { director },
        revalidate: 10,
    };
}

export default function DirectorPage({ director }) {
    return (
        <div>
            <h1>{director.name}</h1>
            <p>{director.biography}</p>
        </div>
    );
}
