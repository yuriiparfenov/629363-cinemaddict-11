import {createUserRank} from './components/user-rank';
import MainMenu from './components/main-menu';
import SortList from './components/sort-list';
import FilmsElementContainer from './components/films-element';
import {createFooterStatistics} from './components/footer-statistics';
import {FILMS_COUNT} from './components/constants';
import {generateQuantityFilms} from './mock/films';
import UserRankShow from './components/user-rank-show';
import {render, RenderPosition} from './components/utils/render';
import PageController from './controllers/page-controller';

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);

const films = generateQuantityFilms(FILMS_COUNT);


const userRank = createUserRank(films);

render(headerElement, new UserRankShow(userRank), RenderPosition.BEFOREEND);
render(mainElement, new MainMenu(films), RenderPosition.BEFOREEND);
render(mainElement, new SortList(), RenderPosition.BEFOREEND);

const filmsContainer = new FilmsElementContainer();

// здесь ошибка не рендерит секцию!


render(mainElement, filmsContainer, RenderPosition.BEFOREEND); // render Доски фильмов

const pageController = new PageController(filmsContainer);
pageController.render(films);


const footerElement = document.querySelector(`.footer`);
const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);
render(footerStatisticsElement, createFooterStatistics());


