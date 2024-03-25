import logoPng from '../../images/logo.png';

export function createHeader(inputSubmitHandle) {
  const header = render(inputSubmitHandle);
  return header;
}

function render(inputSubmitHandle) {
  const header = document.createElement('header');
  header.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });  
  }

  const logo = document.createElement('h1');
  const logoImage = document.createElement('img');
  logoImage.src = logoPng;
  logoImage.alt = 'MovieList 로고';
  logo.appendChild(logoImage);

  const searchBox = document.createElement('form');
  searchBox.className = 'search-box';

  const searchInput = document.createElement('input');
  searchInput.placeholder = '검색';

  const searchButton = document.createElement('button');
  searchButton.type = 'submit';
  searchButton.className = 'search-button';
  searchButton.textContent = '검색';

  searchBox.append(searchInput, searchButton);

  header.append(logo, searchBox);

  if (inputSubmitHandle) {
    searchBox.addEventListener('submit', (event) => {
      event.preventDefault();
      if (searchInput.value.trim() !== '') inputSubmitHandle(searchInput.value);
    });
  }

  return header;
}
