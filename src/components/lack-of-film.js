import AbstractComponent from './abstract-component';

const lackFilm = () => {
  return (
    `<h2 class="films-list__title">There are no movies in our database</h2>`
  );
};

export default class LackOfFilm extends AbstractComponent {
  getTemplate() {
    return lackFilm();
  }
}
