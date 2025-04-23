import { getAllDirectors, getAllMovies } from '@/utils/data';

export default function handler(req, res) {
    const directors = getAllDirectors().map((director) => {
        const directedMovies = getAllMovies().filter((m) => m.directorId === director.id);
        return {
            ...director,
            movies: directedMovies,
        };
    });

    res.status(200).json(directors);
}
