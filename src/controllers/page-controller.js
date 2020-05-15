import FilmsListElementContainer from '../components/films-list-element';
import FilmsListExtraElement from '../components/film-list-extra-element';
import FilmCardElement from '../components/film-card-element';
import ButtonFilmsShowMore from '../components/button-films-show-more';
import {DOUBLE_REPEAT, N_REPEAT, TOP_RATED, MOST_COMMENTED} from '../components/constants';
import FilmDetailsElement from '../components/film-details-element';
import LackOfFilm from '../components/lack-of-film';
import {render, RenderPosition, remove} from '../components/utils/render';


let firstFilmsShowCount = N_REPEAT;

const renderFilm = (filmListElement, film) => {
  const popUp = new FilmDetailsElement(film);

  const filmComponent = new FilmCardElement(film);
  render(filmListElement, filmComponent, RenderPosition.BEFOREEND);

  const onEscClose = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      document.body.removeChild(popUp.getElement());
      document.removeEventListener(`keydown`, onEscClose);
    }
  };

  filmComponent.setClickFilmHandler((evt) => {
    evt.preventDefault();
    document.body.appendChild(popUp.getElement());
    document.addEventListener(`keydown`, onEscClose);
  });

  popUp.setClickFilmDetailsHandler(() => {
    popUp.getElement().removeEventListener(`keydown`, onEscClose);
    document.removeEventListener(`keydown`, onEscClose);
    document.body.removeChild(popUp.getElement());
  });
};

const renderBoardFilms = (boardComponent, films) => {

  const boardElement = boardComponent.getElement();
  render(boardElement, new FilmsListElementContainer(), RenderPosition.BEFOREEND);

  const filmsListElement = boardElement.querySelector(`.films-list`);
  const filmsListContainerElement = filmsListElement.querySelector(`.films-list__container`);

  if (films.length !== 0) {
    films.slice(0, firstFilmsShowCount)
    .forEach((film) => {
      renderFilm(filmsListContainerElement, film);
    });

    render(boardElement, new FilmsListExtraElement(TOP_RATED), RenderPosition.BEFOREEND);
    render(boardElement, new FilmsListExtraElement(MOST_COMMENTED), RenderPosition.BEFOREEND);

  } else {
    render(filmsListElement, new LackOfFilm(), RenderPosition.BEFOREEND);
  }

  const filmsListExtElement = boardElement.querySelectorAll(`.films-list--extra`);


  let beforeSortFilms = films;
  let filmsListExtraContainerElement = filmsListExtElement[0].querySelector(`.films-list__container`);
  let afterSortFilms = beforeSortFilms.sort((a, b) => b.rating - a.rating);

  for (let i = 0; i < DOUBLE_REPEAT; i++) {
    if (Number(afterSortFilms[i].rating) !== 0) {
      renderFilm(filmsListExtraContainerElement, afterSortFilms[i]);
    }
  }

  let beforeSortFilmsCommented = films;
  let filmsListExtraContainerElementCommented = filmsListExtElement[1].querySelector(`.films-list__container`);
  let afterSortFilmsCommented = beforeSortFilmsCommented.sort((a, b) => b.comments - a.comments);

  for (let i = 0; i < DOUBLE_REPEAT; i++) {
    if (Number(afterSortFilmsCommented[i].comments) !== 0) {
      renderFilm(filmsListExtraContainerElementCommented, afterSortFilmsCommented[i]);
    }
  }

  const showButton = new ButtonFilmsShowMore();

  render(filmsListContainerElement, showButton, RenderPosition.BEFOREEND);

  showButton.setClickHandler(() => {
    const prevFilmsCount = firstFilmsShowCount;
    firstFilmsShowCount = firstFilmsShowCount + N_REPEAT;

    films.slice(prevFilmsCount, firstFilmsShowCount).forEach((film) => {
      renderFilm(filmsListContainerElement, film);
      render(filmsListContainerElement, showButton, RenderPosition.BEFOREEND);
    });

    if (firstFilmsShowCount >= films.length) {
      remove(showButton);
    }
  });
};


export default class PageController {
  constructor(container) {
    this._container = container;

  }

  render(films) {
    renderBoardFilms(this._container, films);
  }
}
