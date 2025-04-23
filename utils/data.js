import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'movies.json');
const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

export function getAllMovies() {
    return jsonData.movies;
}

export function getMovieById(id) {
    return jsonData.movies.find((m) => m.id === id);
}

export function getAllGenres() {
    return jsonData.genres;
}

export function getGenreById(id) {
    return jsonData.genres.find((g) => g.id === id);
}

export function getAllDirectors() {
    return jsonData.directors;
}

export function getDirectorById(id) {
    return jsonData.directors.find((d) => d.id === id);
}
