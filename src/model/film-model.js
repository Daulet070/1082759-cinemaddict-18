import { getAllComments, getAllFilms } from '../mock/film-card';
import { COMMENTS_COUNT, FILMS_COUNT } from '../mock/raw-data';

export default class FilmModel {
  #allFilms = getAllFilms(FILMS_COUNT);
  #filmCommets = getAllComments(COMMENTS_COUNT);

  get films() {
    return this.#allFilms;
  }

  get commets() {
    const targetComments = this.#allFilms.map((film) =>
      this.#filmCommets.filter((comment) =>
        film.comments.includes(comment.id)
      )
    );

    return targetComments;
  }
}
