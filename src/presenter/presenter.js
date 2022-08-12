import { render } from '../render';
import MovieCardsView from '../view/movie-card';
import FilmsListView from '../view/films-list';
import FilmsListContainerView from '../view/films-list-container';
import FilmsListTitleView from '../view/films-list-title';
import FilmsSectionView from '../view/films-section';
import FilmsSortView from '../view/films-sort';
import FilmsNavigationView from '../view/main-navigation';
import StatisticsView from '../view/movies-statistics';
import ProfileView from '../view/user-profile';
import ShowMoreBtnView from '../view/show-more-button';
import FilmDetailsPopupView from '../view/film-details-popup';

export default class Presenter {

  filmsNavigation = new FilmsNavigationView();
  filmsSort = new FilmsSortView();
  filmsSection = new FilmsSectionView();
  filmsList = new FilmsListView();
  filmsContainer = new FilmsListContainerView();
  listTitle = new FilmsListTitleView();
  movieCards = new MovieCardsView();
  userProfile = new ProfileView();
  moviesStatistics = new StatisticsView();
  showMoreBtn = new ShowMoreBtnView();
  filmDetailsPopup = new FilmDetailsPopupView();

  init = (headerContent, mainContent, statistics) => {
    render(this.userProfile, headerContent);
    render(this.filmsNavigation, mainContent);
    render(this.filmsSort, mainContent);
    render(this.filmsSection, mainContent);
    render(this.filmsList, this.filmsSection.getElement());
    render(this.listTitle, this.filmsList.getElement());
    render(this.filmsContainer, this.filmsList.getElement());
    render(this.showMoreBtn, this.filmsList.getElement());
    render(this.movieCards, this.filmsContainer.getElement());
    render(this.moviesStatistics, statistics);
    render(this.filmDetailsPopup, mainContent);
  };
}
