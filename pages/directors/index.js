import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DirectorsPage() {
    const { data, error } = useSWR('/api/directors', fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>Directors</h1>
            {data.map((director) => (
                <div key={director.id}>
                    <h2>{director.name}</h2>
                    <p>{director.biography}</p>
                    <h3>Movies:</h3>
                    <ul>
                        {director.movies.map((movie) => (
                            <li key={movie.id}>
                                <a href={`/movies/${movie.id}`}>{movie.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
