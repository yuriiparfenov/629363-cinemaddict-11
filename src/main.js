import {createUserRank} from './components/user-rank';
import MainMenu from './components/main-menu';
import SortList from './components/sort-list';
import FilmsElementContainer from './components/films-element';
import FilmsListElementContainer from './components/films-list-element';
import FilmsListExtraElement from './components/film-list-extra-element';
import FilmCardElement from './components/film-card-element';
import ButtonFilmsShowMore from './components/button-films-show-more';
import {createFooterStatistics} from './components/footer-statistics';
import {DOUBLE_REPEAT, N_REPEAT, FILMS_COUNT, TOP_RATED, MOST_COMMENTED} from './components/constants';
import {generateQuantityFilms} from './mock/films';
import FilmDetailsElement from './components/film-details-element';
import UserRankShow from './components/user-rank-show';
import {render, RenderPosition} from './components/utils';
import LackOfFilm from './components/lack-of-film';

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);

const films = generateQuantityFilms(FILMS_COUNT);
let firstFilmsShowCount = N_REPEAT;

const userRank = createUserRank(films);

render(headerElement, new UserRankShow(userRank).getElement(), RenderPosition.BEFOREEND);
render(mainElement, new MainMenu(films).getElement(), RenderPosition.BEFOREEND);
render(mainElement, new SortList().getElement(), RenderPosition.BEFOREEND);
render(mainElement, new FilmsElementContainer().getElement(), RenderPosition.BEFOREEND);

const filmsElement = mainElement.querySelector(`.films`);


const renderFilm = (filmListElement, film) => {
  const popUp = new FilmDetailsElement(film).getElement();

  const filmComponent = new FilmCardElement(film);
  render(filmListElement, filmComponent.getElement(), RenderPosition.BEFOREEND);

  const onEscClose = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      document.body.removeChild(popUp);
      document.removeEventListener(`keydown`, onEscClose);
    }
  };

  filmComponent.getElement().addEventListener(`click`, (evt) => {
    evt.preventDefault();
    document.body.appendChild(popUp);
    document.addEventListener(`keydown`, onEscClose);
  });

  popUp.querySelector(`.film-details__close-btn`).addEventListener(`click`, () => {
    popUp.removeEventListener(`keydown`, onEscClose);
    document.removeEventListener(`keydown`, onEscClose);
    document.body.removeChild(popUp);
  });
};


render(filmsElement, new FilmsListElementContainer().getElement(), RenderPosition.BEFOREEND);

const filmsListElement = filmsElement.querySelector(`.films-list`);
const filmsListContainerElement = filmsListElement.querySelector(`.films-list__container`);

if (films.length !== 0) {
  films.slice(0, firstFilmsShowCount)
  .forEach((film) => {
    renderFilm(filmsListContainerElement, film);
  });
} else {
  render(filmsListElement, new LackOfFilm().getElement(), RenderPosition.BEFOREEND);
}


const topName = TOP_RATED;
const mostName = MOST_COMMENTED;

render(filmsElement, new FilmsListExtraElement(topName).getElement(), RenderPosition.BEFOREEND);
render(filmsElement, new FilmsListExtraElement(mostName).getElement(), RenderPosition.BEFOREEND);

const filmsListExtElement = filmsElement.querySelectorAll(`.films-list--extra`);


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

const footerElement = document.querySelector(`.footer`);
const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);
render(footerStatisticsElement, createFooterStatistics());

const showButton = new ButtonFilmsShowMore();

render(filmsListContainerElement, showButton.getElement(), RenderPosition.BEFOREEND);

showButton.getElement().addEventListener(`click`, () => {
  const prevFilmsCount = firstFilmsShowCount;
  firstFilmsShowCount = firstFilmsShowCount + N_REPEAT;

  films.slice(prevFilmsCount, firstFilmsShowCount).forEach((film) => {
    renderFilm(filmsListContainerElement, film);
    render(filmsListContainerElement, showButton.getElement(), RenderPosition.BEFOREEND);
  });

  if (firstFilmsShowCount >= films.length) {
    showButton.getElement().remove();
    showButton.removeElement();
  }
});
