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
  render(boardComponent, new FilmsListElementContainer(), RenderPosition.BEFOREEND);

  const filmsListElement = boardComponent.getElement().querySelector(`.films-list`);
  const filmsListContainerElement = filmsListElement.querySelector(`.films-list__container`);
  const topName = TOP_RATED;
  const mostName = MOST_COMMENTED;

  if (films.length !== 0) {
    films.slice(0, firstFilmsShowCount)
    .forEach((film) => {
      renderFilm(filmsListContainerElement, film);
    });

    render(boardComponent, new FilmsListExtraElement(topName), RenderPosition.BEFOREEND);
    render(boardComponent, new FilmsListExtraElement(mostName), RenderPosition.BEFOREEND);

  } else {
    render(filmsListElement, new LackOfFilm(), RenderPosition.BEFOREEND);
  }

  const filmsListExtElement = boardComponent.getElement().querySelectorAll(`.films-list--extra`);


  let beforeSortFilms = films;
  let filmsListExtraContainerElement = filmsListExtElement[0].querySelector(`.films-list__container`);
  let afterSortFilms = beforeSortFilms.sort((a, b) => {
    if (Number(a.rating) < Number(b.rating)) {
      return 1;
    }
    if (Number(a.rating) === Number(b.rating)) {
      return 0;
    }
    return -1;
  });

  for (let i = 0; i < DOUBLE_REPEAT; i++) {
    if (Number(afterSortFilms[i].rating) !== 0) {
      renderFilm(filmsListExtraContainerElement, afterSortFilms[i]);
    }
  }

  let beforeSortFilmsCommented = films;
  let filmsListExtraContainerElementCommented = filmsListExtElement[1].querySelector(`.films-list__container`);
  let afterSortFilmsCommented = beforeSortFilmsCommented.sort((a, b) => {
    if (Number(a.comments) < Number(b.comments)) {
      return 1;
    }
    if (Number(a.comments) === Number(b.comments)) {
      return 0;
    }
    return -1;
  });

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
