import {
  generateData,
  getRandomFloat,
  getRandomArr,
  getRange
} from '../utils';
import {
  FILMS_COUNT,
  COMMENTS_COUNT,
  ageRatings,
  moviesRating,
  moviesDuration,
  commentAutors,
  commentEmotions,
  titles,
  posters,
  descriptions,
  directors,
  actors,
  countries,
  genres,
  writers
} from './raw-data';

const getAllComments = (commentsCount = COMMENTS_COUNT) => {

  const getCommentObj = (id) => ({
    id,
    author: generateData(commentAutors),
    comment: generateData(descriptions),
    date: '2019-05-11T16:12:32.554Z',
    emotion: commentEmotions
  });

  return Array.from({ length: commentsCount }, (_value, index) => getCommentObj(index));
};

const getAllFilms = (filmsCount = FILMS_COUNT) => {

  const getFilmObj = (id) => ({
    id,
    comments: getRandomArr([0, 1, 2, 3, 4]),
    filmInfo: {
      title: generateData(titles),
      alternativeTitle: generateData(titles),
      totalRating: getRandomFloat(moviesRating.MIN, moviesRating.MAX, 1),
      poster: `images/posters/${generateData(posters)}`,
      ageRating: generateData(ageRatings),
      director: generateData(directors),
      writers: getRandomArr(writers),
      actors: getRandomArr(actors),
      release: {
        date: '2019-05-11T00:00:00.000Z',
        releaseCountry: generateData(countries)
      },
      runtime: generateData(getRange(moviesDuration.MIN, moviesDuration.MAX)),
      genre: getRandomArr(genres),
      description: generateData(descriptions)
    },
    userDetails: {
      watchlist: false,
      alreadyWatched: true,
      watchingDate: '2019-04-12T16:12:32.554Z',
      favorite: false
    }
  });

  return Array.from({ length: filmsCount }, (_value, index) => getFilmObj(index));
};

export {
  getAllFilms,
  getAllComments
};
