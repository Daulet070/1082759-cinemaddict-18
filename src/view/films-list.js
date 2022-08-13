import { createElement } from '../render';

const filmsList = () => `
  <section class='films-list'></section>
`;

export default class FilmsListView {

  getTemplate() {
    return filmsList();
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
