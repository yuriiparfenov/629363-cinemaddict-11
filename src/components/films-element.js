import {createElement} from '../components/utils';

const createFilmsElementContainer = () => {
  return (
    `<section class="films"></section>`
  );
};

export default class FilmsElementContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsElementContainer();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }


}
