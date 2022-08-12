import { createElement } from '../render';

const filmsListContainer = () => `
  <div class='films-list__container'></div>
`;

export default class FilmsListContainerView {

  getTemplate() {
    return filmsListContainer();
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
