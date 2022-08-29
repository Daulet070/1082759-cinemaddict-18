import { render, RenderPosition } from '../render';
import FilmDetailsPopupView from '../view/film-details-popup';

export default class FilmDetailsPopupPresenter {

  filmDetailsPopup = new FilmDetailsPopupView();

  init = (filmsModel) => {

    this.filmsModel = filmsModel;
    this.films = [...this.filmsModel.films];
    this.filmsCommets = [...this.filmsModel.commets];

    render(new FilmDetailsPopupView(this.films[0], this.filmsCommets), document.body, RenderPosition.BEFOREEND);

  };

  destroy = () => {
    this.filmDetailsPopup.element.remove();
    this.filmDetailsPopup.removeElement();
  };
}
