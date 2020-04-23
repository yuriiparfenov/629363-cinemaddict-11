import {createUserRank} from './components/user-rank';
import {createMainMenu} from './components/main-menu';
import {createSortList} from './components/sort-list';
import {createFilmsElement} from './components/films-element';
import {createFilmsListElement} from './components/films-list-element';
import {createFilmsListExtraElement} from './components/film-list-extra-element';
import {createFilmCardElement} from './components/film-card-element';
import {createButtonFilmsShowMore} from './components/button-films-show-more';
import {createFooterStatistics} from './components/footer-statistics';
import {DOUBLE_REPEAT, N_REPEAT} from './components/constants';
import {generateQuantityFilms} from './mock/films';
import {createFilmDetailsElement} from './components/film-details-element';
import {showUserRank} from './components/user-rank-show';


const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const renderRepeatedly = (element, createElementFunction, n, place = `beforeend`) => {
  for (let i = 0; i < n; i++) {
    render(element, createElementFunction(), place);
  }
};

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);

const filmsCount = generateQuantityFilms(N_REPEAT);
let firstFilmsShowCount = N_REPEAT;

const userRank = createUserRank(filmsCount);

render(headerElement, showUserRank(userRank));
render(mainElement, createMainMenu(filmsCount));
render(mainElement, createSortList());
render(mainElement, createFilmsElement());

const filmsElement = mainElement.querySelector(`.films`);

render(filmsElement, createFilmsListElement());

const filmsListElement = filmsElement.querySelector(`.films-list`);
const filmsListContainerElement = filmsListElement.querySelector(`.films-list__container`);

for (let i = 0; i < firstFilmsShowCount; i++) {
  render(filmsListContainerElement, createFilmCardElement(filmsCount[i]));
}

render(filmsListContainerElement, createButtonFilmsShowMore(), `afterend`);

renderRepeatedly(filmsElement, createFilmsListExtraElement, DOUBLE_REPEAT);

const filmsListExtraElement = filmsElement.querySelectorAll(`.films-list--extra`);

filmsListExtraElement.forEach((element) => {
  let filmsListExtraContainerElement = element.querySelector(`.films-list__container`);
  for (let i = 0; i < DOUBLE_REPEAT; i++) {
    render(filmsListExtraContainerElement, createFilmCardElement(filmsCount[i]));
  }
});

const footerElement = document.querySelector(`.footer`);
const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);
render(footerStatisticsElement, createFooterStatistics());

render(footerElement, createFilmDetailsElement(filmsCount[0]), `afterend`);

const showButton = filmsListElement.querySelector(`.films-list__show-more`);
showButton.addEventListener(`click`, () => {
  firstFilmsShowCount = firstFilmsShowCount + N_REPEAT;

  filmsCount.slice().forEach((film) => {
    render(filmsListContainerElement, createFilmCardElement(film));
  });

  if (firstFilmsShowCount >= filmsCount.length) {
    showButton.remove();
  }
});

