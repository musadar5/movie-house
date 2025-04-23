import Link from 'next/link';
import { useRouter } from 'next/router';
import { getAllMovies } from '@/utils/data';

export async function getStaticProps() {
  return {
    props: {
      movies: getAllMovies().slice(0, 3),
    },
    revalidate: 10,
  };
}

export default function Home({ movies }) {
  const router = useRouter();

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => router.push('/genres')}>Browse Genres</button>
    </div>
  );
}
