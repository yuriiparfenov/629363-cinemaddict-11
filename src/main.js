import {createUserRank} from './components/user-rank';
import {createMainMenu} from './components/main-menu';
import {createSortList} from './components/sort-list';
import {createFilmsElement} from './components/films-element';
import {createFilmsListElement} from './components/films-list-element';
import {createFilmsListExtraElement} from './components/film-list-extra-element';
import {createFilmCardElement} from './components/film-card-element';
import {createButtonFilmsShowMore} from './components/button-films-show-more';
import {createFooterStatistics} from './components/footer-statistics';
import {createFilmDetails} from './components/film-details';
import {createFormDetailsTopContainer} from './components/form-details-top-container';
import {createFilmDetailsInfoWrap} from './components/film-details-info-wrap';
import {createFilmDetailsPoster} from './components/film-details-poster';
import {createfilmDetailsInfo} from './components/film-details-info';
import {createFilmDetailsRow} from './components/film-details-row';
import {createFilmDetailsControl} from './components/film-details-control';
import {createFormDetailsBottomContainer} from './components/form-details-bottom-container';
import {createFilmDetailsComment} from './components/film-details-comment';
import {createFilmDetailsEmojiLabel} from './components/film-details-emoji-label';
import {DOUBLE_REPEAT, N_REPEAT} from './components/constants';

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

render(headerElement, createUserRank());
render(mainElement, createMainMenu());
render(mainElement, createSortList());
render(mainElement, createFilmsElement());

const filmsElement = mainElement.querySelector(`.films`);

render(filmsElement, createFilmsListElement());

const filmsListElement = filmsElement.querySelector(`.films-list`);
const filmsListContainerElement = filmsListElement.querySelector(`.films-list__container`);

renderRepeatedly(filmsListContainerElement, createFilmCardElement, N_REPEAT);

render(filmsListContainerElement, createButtonFilmsShowMore(), `afterend`);

renderRepeatedly(filmsElement, createFilmsListExtraElement, DOUBLE_REPEAT);

const filmsListExtraElement = filmsElement.querySelectorAll(`.films-list--extra`);

filmsListExtraElement.forEach((element) => {
  let filmsListExtraContainerElement = element.querySelector(`.films-list__container`);
  renderRepeatedly(filmsListExtraContainerElement, createFilmCardElement, DOUBLE_REPEAT);
});

const footerElement = document.querySelector(`.footer`);
const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);
render(footerStatisticsElement, createFooterStatistics());

render(footerElement, createFilmDetails(), `afterend`);

const formFilmsDetails = document.querySelector(`.film-details__inner`);

render(formFilmsDetails, createFormDetailsTopContainer());

const formDetailsTopContainerElement = formFilmsDetails.querySelector(`.form-details__top-container`);
render(formDetailsTopContainerElement, createFilmDetailsInfoWrap());

const filmDetailsInfoWrapElement = formDetailsTopContainerElement.querySelector(`.film-details__info-wrap`);

render(filmDetailsInfoWrapElement, createFilmDetailsPoster());
render(filmDetailsInfoWrapElement, createfilmDetailsInfo());

const filmDetailsTableElement = filmDetailsInfoWrapElement.querySelector(`.film-details__table`);

renderRepeatedly(filmDetailsTableElement, createFilmDetailsRow, (DOUBLE_REPEAT * 3), `afterbegin`);
render(formDetailsTopContainerElement, createFilmDetailsControl());
render(formFilmsDetails, createFormDetailsBottomContainer());

const filmDetailsCommentsListElement = formFilmsDetails.querySelector(`.film-details__comments-list`);

renderRepeatedly(filmDetailsCommentsListElement, createFilmDetailsComment, (DOUBLE_REPEAT * 2));

const filmDetailsEmojiListElement = formFilmsDetails.querySelector(`.film-details__emoji-list`);
renderRepeatedly(filmDetailsEmojiListElement, createFilmDetailsEmojiLabel, (DOUBLE_REPEAT * 2));
