import { createElement } from '../render';

const filmsSection = () => `
  <section class='films'></section>
`;

export default class FilmsSectionView {

  getTemplate() {
    return filmsSection();
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
