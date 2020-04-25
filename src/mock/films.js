const titles = [`Made for each other`, `Popeye meets Sindbad`, `Sagebrush trail`, `Santa Claus conquers the martians`, `The dance of life`, `The great flamation`, `The man with the golden arm`];
const pictures = [`made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`, `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`];
const genres = [`Musical`, `Western`, `Drama`, `Comedy`, `Cartoon`];
const directors = [`Antony Mann`, `Antony Breeze`, `Mark Besplov`, `Klint Istvood`, `Peter John`];
const writers = [`Anne Wigton`, `Heinz Herald`, `Richard Weil`, `Big Ben`, `Pur Pur`, `China Man`];
const actors = [`Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`, `Will Smith`, `Alen Delon`, `2pac Shakur`];
const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
const countries = [`USA`, `Russia`, `China`];
const descriptions = [`The film opens following a murder`, `at a cabaret in Mexico City in 1936`, `and then presents the events leading up to it in flashback.`, `The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant`, `Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other assistant. Flamarion falls in love with Connie, the movie's femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts`];

const getRandomNumber = (max, min = 0) => {
  return Math.floor((Math.random() * (max - min) + min));
};

const getRandomArrayItem = (array, min) => {
  return array[getRandomNumber(array.length, min)];
};

const generateFilm = () => {
  return {
    title: getRandomArrayItem(titles),
    rating: getRandomNumber(10, 1).toFixed(1),
    year: getRandomNumber(2000, 1920),
    duration: `${getRandomNumber(3, 1)}h ${getRandomNumber(60, 1)}m`,
    genre: getRandomArrayItem(genres, 1),
    genres() {
      return genres.slice(0, getRandomNumber(genres.length, 1));
    },
    img: pictures[Math.round(Math.random() * (pictures.length - 1))],
    description() {
      return descriptions.slice(0, getRandomNumber(descriptions.length, 1)).join(` `);
    },
    comments: `0000${getRandomNumber(5)} comments`,
    director: getRandomArrayItem(directors, 1),
    writers() {
      const count = getRandomNumber(writers.length, 1);
      return writers.slice(0, count);
    },
    actors() {
      const count = getRandomNumber(actors.length, 1);
      return actors.slice(0, count);
    },
    date: `${getRandomNumber(30, 1)} ${getRandomArrayItem(months)} ${getRandomNumber(2000, 1920)}`,
    country: getRandomArrayItem(countries, 1),
    watchlistflag: getRandomNumber(2),
    hystoryflag: getRandomNumber(2),
    favoriteflag: getRandomNumber(2),
  };
};

const generateQuantityFilms = (count) => {
  return new Array(count).fill(``).map(generateFilm);
};

export {generateQuantityFilms};
