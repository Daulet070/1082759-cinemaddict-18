import Presenter from './presenter/presenter';

const headerContent = document.querySelector('.header');
const mainContent = document.querySelector('.main');
const footerContent = document.querySelector('.footer');
const statistics = footerContent.querySelector('.footer__statistics');

const mainPresenter = new Presenter();

mainPresenter.init(headerContent, mainContent, statistics);
