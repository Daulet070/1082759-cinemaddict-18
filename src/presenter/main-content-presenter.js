import { render } from '../render';
import MovieCardsView from '../view/movie-card';
import FilmsListView from '../view/films-list';
import FilmsListContainerView from '../view/films-list-container';
import FilmsListTitleView from '../view/films-list-title';
import FilmsSectionView from '../view/films-section';
import FilmsSortView from '../view/films-sort';
import FilmsNavigationView from '../view/main-navigation';
import ShowMoreBtnView from '../view/show-more-button';

export default class MainContentPresenter {

  filmsNavigation = new FilmsNavigationView();
  filmsSort = new FilmsSortView();
  filmsSection = new FilmsSectionView();
  filmsList = new FilmsListView();
  filmsContainer = new FilmsListContainerView();
  listTitle = new FilmsListTitleView();
  showMoreBtn = new ShowMoreBtnView();

  init(mainContent, filmsModel) {

    this.filmsModel = filmsModel;
    this.boardFilms = [...this.filmsModel.films];
    this.filmsCommets = [...this.filmsModel.commets];

    render(this.filmsNavigation, mainContent);
    render(this.filmsSort, mainContent);
    render(this.filmsSection, mainContent);
    render(this.filmsList, this.filmsSection.getElement());
    render(this.listTitle, this.filmsList.getElement());
    render(this.filmsContainer, this.filmsList.getElement());
    render(this.showMoreBtn, this.filmsList.getElement());

    for (let i = 0; i < this.boardFilms.length; i++) {
      render(new MovieCardsView(this.boardFilms[i]), this.filmsContainer.getElement());
    }
  }
}
