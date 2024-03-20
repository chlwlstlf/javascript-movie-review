import { showSkeleton, updateCard } from '../components/movieCard/movieCard';
import { Movie } from '../interface/Movie';

export function loadMovieList() {
  const itemList = document.querySelector('.item-list');
  if (!itemList) return;
  const liList = Array.from({ length: 20 }, () => showSkeleton());
  itemList.append(...liList);
  return liList;
}

export function completeMovieList(liList: any, movies: any) {
  movies.forEach((movie: any, index: any) => {
    updateCard(liList[index], movie);
  });
  document.querySelectorAll('li.skeleton').forEach(element => {
    element.remove();
  });
}

export function mapDataToMovies(movies: any): Movie[] {
  return movies.results.map((data: any) => {
    return {
      id: data.id,
      title: data.title,
      poster_path: data.poster_path,
      vote_average: data.vote_average,
    };
  });
}
