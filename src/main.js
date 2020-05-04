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
      filmListElement.removeChild(popUp);
    };
  };

  filmComponent.getElement().addEventListener(`click`, (evt) => {
    evt.preventDefault();
    filmListElement.appendChild(popUp);
    document.addEventListener(`keydown`, onEscClose);
  });

  popUp.querySelector(`.film-details__close-btn`).addEventListener(`click`, () => {
    filmListElement.removeChild(popUp);


  });

};


render(filmsElement, new FilmsListElementContainer().getElement(), RenderPosition.BEFOREEND);

const filmsListElement = filmsElement.querySelector(`.films-list`);
const filmsListContainerElement = filmsListElement.querySelector(`.films-list__container`);

films.slice(0, firstFilmsShowCount)
  .forEach((film) => {
    renderFilm(filmsListContainerElement, film);
  });

render(filmsListContainerElement, new ButtonFilmsShowMore().getElement(), RenderPosition.BEFOREEND);

const topName = TOP_RATED;
const mostName = MOST_COMMENTED;
render(filmsElement, new FilmsListExtraElement(topName).getElement(), RenderPosition.BEFOREEND);
render(filmsElement, new FilmsListExtraElement(mostName).getElement(), RenderPosition.BEFOREEND);

const filmsListExtElement = filmsElement.querySelectorAll(`.films-list--extra`);

filmsListExtElement.forEach((element) => {
  let filmsListExtraContainerElement = element.querySelector(`.films-list__container`);

  for (let i = 0; i < DOUBLE_REPEAT; i++) {
    renderFilm(filmsListExtraContainerElement, films[i]);
  }

});

const footerElement = document.querySelector(`.footer`);
const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);
render(footerStatisticsElement, createFooterStatistics());


const showButton = filmsListElement.querySelector(`.films-list__show-more`);
showButton.addEventListener(`click`, () => {
  const prevFilmsCount = firstFilmsShowCount;
  firstFilmsShowCount = firstFilmsShowCount + N_REPEAT;

  films.slice(prevFilmsCount, firstFilmsShowCount).forEach((film) => {
    render(filmsListContainerElement, new FilmCardElement(film).getElement(), RenderPosition.AFTEREND);
  });

  if (firstFilmsShowCount >= films.length) {
    showButton.remove();
  }
});


