import {createElement} from '../components/utils';

const createFilmsListExtraElement = (blockName) => {
  return (
    `<section class="films-list--extra">
      <h2 class="films-list__title">${blockName}</h2>
      <div class="films-list__container"></div>
    </section>`
  );
};

export default class FilmsListExtraElement {
  constructor(blockName) {
    this._blockname = blockName;
    this._element = null;
  }

  getTemplate() {
    return createFilmsListExtraElement(this._blockname);
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
