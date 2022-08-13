import Presenter from './presenter/presenter';
import { render } from './render';
import StatisticsView from './view/movies-statistics';
import ProfileView from './view/user-profile';

const headerContent = document.querySelector('.header');
const mainContent = document.querySelector('.main');
const footerContent = document.querySelector('.footer');
const statistics = footerContent.querySelector('.footer__statistics');

render(new ProfileView(), headerContent);
render(new StatisticsView(), statistics);

const mainPresenter = new Presenter();

mainPresenter.init(mainContent);
