import { createElement } from '../render';
import { filmDetailsCommentsTemplate } from './film-details-comments';
import { filmDetailsControlsBtnTemplate } from './film-details-controls';
import { filmDetailsFormTemplate } from './film-details-form';
import { filmDetailsTableRowsTemplate } from './film-details-table-rows';

const filmDetailsPopup = ({ id, filmInfo, userDetails }, filmComments) => {

  const { title, alternativeTitle, totalRating, poster, ageRating, description } = filmInfo;

  const controlData = Object.keys(userDetails).filter((key) => key !== 'watchingDate');
  const filmDetailsControls = controlData.map((state) => filmDetailsControlsBtnTemplate(userDetails[state], state)).join('');
  const filmDetailsTableRows = filmDetailsTableRowsTemplate(filmInfo);
  const filmDetailsComments = filmDetailsCommentsTemplate(filmComments[id]);
  const filmDetailsForm = filmDetailsFormTemplate(filmComments[id], id);
  const commentsLength = filmComments[id].length;

  return (
    `<section class='film-details'>
      <div class='film-details__inner'>
        <div class='film-details__top-container'>
          <div class='film-details__close'>
            <button class='film-details__close-btn' type='button'>close</button>
          </div>
          <div class='film-details__info-wrap'>
            <div class='film-details__poster'>
              <img class='film-details__poster-img' src='${poster}' alt='${alternativeTitle}'>

              <p class='film-details__age'>${ageRating}</p>
            </div>

            <div class='film-details__info'>
              <div class='film-details__info-head'>
                <div class='film-details__title-wrap'>
                  <h3 class='film-details__title'>${title}</h3>
                  <p class='film-details__title-original'>Original: ${title}</p>
                </div>

                <div class='film-details__rating'>
                  <p class='film-details__total-rating'>${totalRating}</p>
                </div>
              </div>

              <table class='film-details__table'>
                ${filmDetailsTableRows}
              </table>

              <p class='film-details__film-description'>
                ${description}
              </p>
            </div>
          </div>

          <section class='film-details__controls'>
           ${filmDetailsControls}
          </section>
        </div>

        <div class='film-details__bottom-container'>
          <section class='film-details__comments-wrap'>
            <h3 class='film-details__comments-title'>Comments <span class='film-details__comments-count'>${commentsLength}</span></h3>

            <ul class='film-details__comments-list'>
              ${filmDetailsComments}
            </ul>

            ${filmDetailsForm}
          </section>
        </div>
      </div>
    </section>`
  );
};

export default class FilmDetailsPopupView {

  constructor(film, comments) {
    this.film = film;
    this.comments = comments;
  }

  getTemplate() {

    return filmDetailsPopup(this.film, this.comments);
  }

  getElement() {

    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
