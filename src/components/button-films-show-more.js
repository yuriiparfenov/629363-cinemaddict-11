import {createElement} from '../components/utils';

const createButtonFilmsShowMore = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

export default class ButtonFilmsShowMore {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createButtonFilmsShowMore();
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
