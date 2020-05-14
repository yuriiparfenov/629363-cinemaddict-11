import AbstractComponent from './abstract-component';

const createFilmsListExtraElement = (blockName) => {
  return (
    `<section class="films-list--extra">
      <h2 class="films-list__title">${blockName}</h2>
      <div class="films-list__container"></div>
    </section>`
  );
};

export default class FilmsListExtraElement extends AbstractComponent {
  constructor(blockName) {
    super();

    this._blockname = blockName;
  }

  getTemplate() {
    return createFilmsListExtraElement(this._blockname);
  }
}
