import { createElement } from '../render';

const statistics = () => `
  <p>130 291 movies inside</p>
`;

export default class StatisticsView {

  getTemplate() {
    return statistics();
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
