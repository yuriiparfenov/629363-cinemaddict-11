export const createUserRank = (array, rank) => {

  const getCountOfWatchFlag = (arr) => {
    return arr.reduce((accum, elem) => {
      if (elem.watchlistflag > 0) {
        accum++;
      }
      return accum;
    }, 0);
  };

  if (getCountOfWatchFlag(array) === 0) {
    rank = ``;
  } else if (getCountOfWatchFlag(array) < 11) {
    rank = `novice`;
  } else if (getCountOfWatchFlag(array) > 11 && getCountOfWatchFlag(array) < 21) {
    rank = `fan`;
  } else {
    rank = `movie buff`;
  }

  return rank;
};
