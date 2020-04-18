const titles = [`Made for each other`, `Popeye meets Sindbad`, `Sagebrush trail`, `Santa Claus conquers the martians`, `The dance of life`, `The great flamation`, `The man with the golden arm`];
const pictures = [`made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`, `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`];
const genres = [`Musical`, `Western`, `Drama`, `Comedy`, `Cartoon`];
const directors = [`Antony Mann`, `Antony Breeze`, `Mark Besplov`, `Klint Istvood`, `Peter John`];
const writers = [`Anne Wigton`, `Heinz Herald`, `Richard Weil`, `Big Ben`, `Pur Pur`, `China Man`];
const actors = [`Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`, `Will Smith`, `Alen Delon`, `2pac Shakur`];
const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
const countries = [`USA`, `Russia`, `China`];

const generateFilm = () => {
  return {
    title: titles[Math.round((Math.random() * ((titles.length - 1) - 0) + 0))],
    rating: (Math.random() * (10 - 1) + 1).toFixed(1),
    year: Math.floor(Math.random() * (2000 - 1920) + 1920),
    duration: `${Math.floor(Math.random() * (3 - 1) + 1)}h ${Math.floor(Math.random() * (60 - 1) + 1)}m`,
    genre: genres[Math.round((Math.random() * ((genres.length - 1) - 0) + 0))],
    img: pictures[Math.round((Math.random() * ((pictures.length - 1) - 0) + 0))],
    description: `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…`,
    comments: `0000${Math.floor(Math.random() * (5 - 0) + 0)} comments`,
    director: directors[Math.round((Math.random() * ((pictures.length - 1) - 0) + 0))],
    writers() {
      const count = Math.round((Math.random() * ((writers.length - 1) - 1) + 1));
      return writers.slice(0, count);
    },
    actors() {
      const count = Math.round((Math.random() * ((actors.length - 1) - 1) + 1));
      return actors.slice(0, count);
    },
    date: `${Math.floor(Math.random() * (30 - 1) + 1)} ${months[Math.round((Math.random() * ((months.length - 1) - 0) + 0))]} ${Math.floor(Math.random() * (2000 - 1920) + 1920)}`,
    country: countries[Math.round((Math.random() * ((countries.length - 1) - 0) + 0))]
  };
};

const generateQuantityFilms = (count) => {
  return new Array(count).fill(``).map(generateFilm);
};

export {generateQuantityFilms};
