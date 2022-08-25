import { getComments, getFilms } from '../mock/film-card';
import { COMMENTS_COUNT, FILMS_COUNT } from '../mock/raw-data';

export default class FilmModel {
  films = getFilms(FILMS_COUNT);
  filmCommets = getComments(COMMENTS_COUNT);

  getFilms() {
    return this.films;
  }

  getCommets() {
    const targetComments = this.films.map((film) =>
      this.filmCommets.filter((comment) =>
        film.comments.includes(comment.id)
      )
    );

    return targetComments;
  }
}
