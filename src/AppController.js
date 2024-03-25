import { createHeader } from "./components/header/header";
import MovieListWrapper from "./components/movieListWrapper/MovieListWrapper";

class AppController {
  #currentView ;

  constructor() {
    this.#currentView = new MovieListWrapper('지금 인기 있는 영화', 'popular');
  }
  
  async start() {
    const app = document.querySelector('#app');

    const header = createHeader({
      onLogoClick: () => {
        this.#currentView = new MovieListWrapper('지금 인기 있는 영화', 'popular')
        this.#currentView.create();
      },
      inputSubmitHandle: (inputValue) => {
        this.#currentView = new MovieListWrapper(`"${inputValue}" 검색 결과`, 'search', inputValue)
        this.#currentView.create();
      }
    });
    app.prepend(header);

    this.#currentView.create();
  }
};

export default AppController;
