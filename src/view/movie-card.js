import { STR_MAX_LENGTH } from '../mock/raw-data.js';
import { createElement } from '../render.js';
import { formatStringToYear, formatMinutesToTime, generateData } from '../utils.js';

const movieCardTemplate = (film) => {

  const {
    title,
    alternativeTitle,
    totalRating,
    poster,
    release,
    runtime,
    genre,
    description
  } = film.filmInfo;

  const commetsQuantity = film.comments.length;
  const oneGenre = generateData(genre);
  const releaseDateYear = release.date ? formatStringToYear(release.date) : '';
  const movieLengthTime = runtime ? formatMinutesToTime(runtime) : '';
  const modifiedDescription = description.length > STR_MAX_LENGTH
    ? `${description.slice(0, STR_MAX_LENGTH - 1)}...`
    : description;

  return (
    `<article class='film-card'>
      <a class='film-card__link'>
        <h3 class='film-card__title'>${title}</h3>
        <p class='film-card__rating'>${totalRating}</p>
        <p class='film-card__info'>
          <span class='film-card__year'>${releaseDateYear}</span>
          <span class='film-card__duration'>${movieLengthTime}</span>
          <span class='film-card__genre'>${oneGenre}</span>
        </p>
        <img src='${poster}' alt='${alternativeTitle}' class='film-card__poster'>
        <p class='film-card__description'>${modifiedDescription}</p>
        <span class='film-card__comments'>${commetsQuantity} comments</span>
      </a>
      <div class='film-card__controls'>
        <button class='film-card__controls-item film-card__controls-item--add-to-watchlist film-card__controls-item--active' type='button'>Add to watchlist</button>
        <button class='film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active' type='button'>Mark as watched</button>
        <button class='film-card__controls-item film-card__controls-item--favorite film-card__controls-item--active' type='button'>Mark as favorite</button>
      </div>
    </article>`
  );
};

export default class MovieCardsView {
  #element = null;

  constructor(film) {
    this.film = film;
  }

  getTemplate() {
    return movieCardTemplate(this.film);
  }

  getElement() {

    if (!this.#element) {
      this.#element = createElement(this.getTemplate());
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
