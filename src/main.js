'use strict';
const DOUBLE_REPEAT = 2;
const N_REPEAT = 5;

const createUserRank = () => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">Movie Buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

const createMainMenu = () => {
  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

const createSortList = () => {
  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`
  );
};

const createFilmsElement = () => {
  return (
    `<section class="films"></section>`
  );
};

const createFilmsListElement = () => {
  return (
    `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container"></div>
    </section>`
  );
};

const createFilmsListExtraElement = () => {
  return (
    `<section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container"></div>
    </section>`
  );
};

const createFilmCardElement = () => {
  return (
    `<article class="film-card">
      <h3 class="film-card__title">The Dance of Life</h3>
      <p class="film-card__rating">8.3</p>
      <p class="film-card__info">
        <span class="film-card__year">1929</span>
        <span class="film-card__duration">1h 55m</span>
        <span class="film-card__genre">Musical</span>
      </p>
      <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
      <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
      <a class="film-card__comments">5 comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
  );
};

const createButtonFilmsShowMore = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

const createFooterStatistics = () => {
  return (
    `<p>130 291 movies inside</p>`
  );
};

const createFilmDetails = () => {
  return (
    `<section class="film-details visually-hidden">
      <form class="film-details__inner" action="" method="get"></form>
    </section>`
  );
};

const createFormDetailsTopContainer = () => {
  return (
    `<div class="form-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
    </div>`
  );
};

const createFilmDetailsInfoWrap = () => {
  return (
    `<div class="film-details__info-wrap"></div>`
  );
};

const createFilmDetailsPoster = () => {
  return (
    `<div class="film-details__poster">
      <img class="film-details__poster-img" src="./images/posters/the-great-flamarion.jpg" alt="">
      <p class="film-details__age">18+</p>
    </div>`
  );
};

const createfilmDetailsInfo = () => {
  return (
    `<div class="film-details__info">
    <div class="film-details__info-head">
      <div class="film-details__title-wrap">
        <h3 class="film-details__title">The Great Flamarion</h3>
        <p class="film-details__title-original">Original: The Great Flamarion</p>
      </div>
      <div class="film-details__rating">
        <p class="film-details__total-rating">8.9</p>
      </div>
    </div>
    <table class="film-details__table">
      <tr class="film-details__row">
        <td class="film-details__term">Genres</td>
        <td class="film-details__cell">
          <span class="film-details__genre">Drama</span>
          <span class="film-details__genre">Film-Noir</span>
          <span class="film-details__genre">Mystery</span></td>
      </tr>
    </table>
    <p class="film-details__film-description">
      The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other assistant. Flamarion falls in love with Connie, the movie's femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.
    </p>
  </div>`
  );
};

const createFilmDetailsRow = () => {
  return (
    `<tr class="film-details__row">
      <td class="film-details__term">Director</td>
      <td class="film-details__cell">Anthony Mann</td>
    </tr>`
  );
};

const createFilmDetailsControl = () => {
  return (
    `<section class="film-details__controls">
      <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
      <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
      <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
      <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
      <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
      <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
    </section>`
  );
};

const createFormDetailsBottomContainer = () => {
  return (
    `<div class="form-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">4</span></h3>
        <ul class="film-details__comments-list"></ul>
        <div class="film-details__new-comment">
          <div for="add-emoji" class="film-details__add-emoji-label"></div>
          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>
          <div class="film-details__emoji-list"></div>
        </div>
      </section>
    </div>`
  );
};

const createFilmDetailsComment = () => {
  return (
    `<li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
      </span>
      <div>
        <p class="film-details__comment-text">Interesting setting and a good cast</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">Tim Macoveev</span>
          <span class="film-details__comment-day">2019/12/31 23:59</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`
  );
};

const createFilmDetailsEmojiLabel = () => {
  return (
    `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
      <label class="film-details__emoji-label" for="emoji-smile">
        <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
      </label>`
  );
};

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
