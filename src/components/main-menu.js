import AbstractComponent from './abstract-component';

const createMainMenu = (array) => {

  const getCountOfWatchFlag = (arr) => {
    return arr.reduce((accum, elem) => {
      if (elem.watchlistflag > 0) {
        accum++;
      }
      return accum;
    }, 0);
  };

  const getCountOfHystoryFlag = (arr) => {
    return arr.reduce((accum, elem) => {
      if (elem.hystoryflag > 0) {
        accum++;
      }
      return accum;
    }, 0);
  };

  const getCountOfFavoriteFlag = (arr) => {
    return arr.reduce((accum, elem) => {
      if (elem.favoriteflag > 0) {
        accum++;
      }
      return accum;
    }, 0);
  };


  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${getCountOfWatchFlag(array)}</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${getCountOfHystoryFlag(array)}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${getCountOfFavoriteFlag(array)}</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

export default class MainMenu extends AbstractComponent {
  constructor(array) {
    super();
    this._array = array;
  }

  getTemplate() {
    return createMainMenu(this._array);
  }
}
