import AbstractComponent from './abstract-component';

const createFilmsElementContainer = () => {
  return (
    `<section class="films"></section>`
  );
};

export default class FilmsElementContainer extends AbstractComponent {
  getTemplate() {
    return createFilmsElementContainer();
  }
}
