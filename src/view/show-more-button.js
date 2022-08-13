import { createElement } from '../render';

const showMoreBtn = () => `
  <button class='films-list__show-more'>Show more</button>
`;

export default class ShowMoreBtnView {

  getTemplate() {
    return showMoreBtn();
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
