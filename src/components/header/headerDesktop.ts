import logoPng from '../../images/logo.png';

interface Props {
  onLogoClick?: () => void;
  inputSubmitHandle?: (value: string) => void;
}

const HeaderDesktop = ({ onLogoClick, inputSubmitHandle }: Props) => {
  const render = () => {
    const fragment = document.createDocumentFragment();

    const logo = document.createElement('h1');
    logo.className = 'logo';
    const logoImage = document.createElement('img');
    logoImage.src = logoPng;
    logoImage.alt = 'MovieList 로고';
    logo.appendChild(logoImage);

    const searchBox = document.createElement('form');
    searchBox.className = 'search-box';

    const searchInput = document.createElement('input');
    searchInput.className = 'search-input';
    searchInput.placeholder = '검색';

    const searchButton = document.createElement('button');
    searchButton.type = 'submit';
    searchButton.className = 'search-button';
    searchButton.textContent = '검색';

    searchBox.append(searchInput, searchButton);
    fragment.append(logo, searchBox);

    // 로고 클릭 시 검색창 초기화 및 클릭 이벤트 처리
    if (onLogoClick) {
      logo.addEventListener('click', () => {
        searchInput.value = '';
        onLogoClick();
      });
    }

    searchBox.addEventListener('submit', event => {
      event.preventDefault();
      const searchInputValue = searchInput.value.trim();

      if (searchInputValue && inputSubmitHandle) {
        inputSubmitHandle(searchInputValue);
      }
    });

    return fragment;
  };

  return render();
};

export default HeaderDesktop;
