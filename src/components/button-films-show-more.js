import AbstractComponent from './abstract-component';

const createButtonFilmsShowMore = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

export default class ButtonFilmsShowMore extends AbstractComponent {
  getTemplate() {
    return createButtonFilmsShowMore();
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
