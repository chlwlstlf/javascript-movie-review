import filledStar from '../../images/star_filled.png';
import emptyPng from '../../images/empty_poster.png';

const MovieCard = (movie: Movie) => {
  const movieCard = render(movie);
  return movieCard;
};

const render = (movie: Movie) => {
  const list = document.createElement('li');
  list.className = 'movie-list';

  const anchor = document.createElement('a');

  const itemCard = document.createElement('div');
  itemCard.className = 'item-card';

  const thumbnail = document.createElement('img');
  thumbnail.className = 'item-thumbnail skeleton';
  thumbnail.src = movie.poster_path
    ? `https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}.jpg`
    : emptyPng;
  thumbnail.loading = 'lazy';
  thumbnail.alt = movie.title;
  thumbnail.onload = () => {
    thumbnail.classList.remove('skeleton');
  };

  const title = document.createElement('p');
  title.className = 'item-title skeleton';

  const score = document.createElement('p');
  score.className = 'item-score';
  score.textContent = String(movie.vote_average);

  const scoreImage = document.createElement('img');
  scoreImage.src = filledStar;
  scoreImage.alt = '별점';

  score.appendChild(scoreImage);
  itemCard.append(thumbnail, title, score);
  anchor.appendChild(itemCard);
  list.appendChild(anchor);

  return list;
};

export default MovieCard;
