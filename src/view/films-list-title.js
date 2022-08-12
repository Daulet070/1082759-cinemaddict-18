import { createElement } from '../render';

const filmsListTitle = () => `
  <h2 class='films-list__title visually-hidden'>All movies. Upcoming</h2>
`;

export default class FilmsListTitleView {

  getTemplate() {
    return filmsListTitle();
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
