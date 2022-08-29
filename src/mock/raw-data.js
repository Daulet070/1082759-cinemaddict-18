const FILMS_COUNT = 10;
const COMMENTS_COUNT = 5;
const STR_MAX_LENGTH = 140;

const moviesRating = {
  MIN: 1,
  MAX: 9
};

const moviesDuration = {
  MIN: 20,
  MAX: 180
};

const descriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.'
];

const titles = [
  'Terminator 2',
  'Blade Runner',
  'Evil Dead',
  'Harry Potter',
  'Forrest Gump'
];

const posters = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg'
];

const filmInfoDetailsTitles = [
  'Director',
  'Writers',
  'Actors',
  'Release Date',
  'Runtime',
  'Country',
  'Genres'
];

const genres = [
  'Comedy',
  'Action',
  'Thriller',
  'Western',
  'Cartoon'
];

const directors = [
  'Tom Ford',
  'Piter Jackson',
  'Eldar Ryazanov',
  'Steven Spielberg',
  'Ridley Scott'
];

const actors = [
  'Arnold Schwarzenegger',
  'Johnny Depp',
  'Jack Nicholson',
  'Cortney Cox',
  'Angelina Jolie'
];

const ageRatings = [
  '0+',
  '3+',
  '16+'
];

const countries = [
  'USA',
  'France',
  'Russia',
  'China',
  'India',
  'Finland'
];

const writers = [
  'Takeshi Kitano',
  'Johnny Depp',
  'Jack Nicholson',
  'Cortney Cox'
];

const commentAutors = [
  'Michael',
  'Sarah',
  'John',
  'Zoe',
  'Maria'
];

const commentEmotions = [
  'smile',
  'sleeping',
  'puke',
  'angry',
  'neutral'
];

export {
  FILMS_COUNT,
  COMMENTS_COUNT,
  STR_MAX_LENGTH,
  ageRatings,
  moviesRating,
  moviesDuration,
  filmInfoDetailsTitles ,
  titles,
  posters,
  descriptions,
  directors,
  actors,
  countries,
  commentAutors,
  commentEmotions,
  genres,
  writers
};
