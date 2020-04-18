export const createUserRank = (rank) => {
  const rankNumber = Math.floor(Math.random() * (30 - 0) + 0);
  if (rankNumber === 0) {
    rank = ``;
  } else if (rankNumber < 11) {
    rank = `novice`;
  } else if (rankNumber > 11 && rankNumber < 21) {
    rank = `fan`;
  } else {
    rank = `movie buff`;
  }

  return (
    `<section class="header__profile profile">
      <p class="profile__rating">${rank}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};
