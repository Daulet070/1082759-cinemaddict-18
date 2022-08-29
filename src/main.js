import FilmModel from './model/film-model';
import FilmDetailsPopupPresenter from './presenter/film-details-popup-presenter';
import MainContentPresenter from './presenter/main-content-presenter';
import { render } from './render';
import StatisticsView from './view/movies-statistics';
import ProfileView from './view/user-profile';

const headerContent = document.querySelector('.header');
const mainContent = document.querySelector('.main');
const footerContent = document.querySelector('.footer');
const statistics = footerContent.querySelector('.footer__statistics');

const filmsModel = new FilmModel();

render(new ProfileView(), headerContent);
render(new StatisticsView(), statistics);

const mainContentPresenter = new MainContentPresenter();
const filmDetailsPopupPresenter = new FilmDetailsPopupPresenter();

mainContentPresenter.init(mainContent, filmsModel);
filmDetailsPopupPresenter.init(filmsModel);
