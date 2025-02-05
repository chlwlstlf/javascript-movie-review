import logoPng from '../../images/logo.png';

interface Props {
  onLogoClick?: () => void;
  inputSubmitHandle?: (value: string) => void;
}

const HeaderMobile = ({ onLogoClick, inputSubmitHandle }: Props) => {
  const render = () => {
    const header = document.createElement('header');
    header.className = 'header';

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
    searchInput.style.display = 'none';

    const searchButton = document.createElement('button');
    searchButton.type = 'button';
    searchButton.className = 'search-button';
    searchButton.textContent = '검색';

    searchBox.append(searchInput, searchButton);
    header.append(logo, searchBox);

    // 헤더 클릭 시 스크롤 상단으로 이동
    header.onclick = event => {
      if ((event.target as HTMLElement).tagName === 'HEADER') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // 로고 클릭 시 검색창 초기화 및 클릭 이벤트 처리
    if (onLogoClick) {
      logo.addEventListener('click', () => {
        searchInput.value = '';
        onLogoClick();
      });
    }

    // 모바일 돋보기 버튼 클릭 이벤트
    searchButton.addEventListener('click', () => {
      if (searchButton.type === 'submit') return;

      const isInputVisible = searchInput.style.display === 'block';

      if (isInputVisible) {
        hideSearchInput();
      } else {
        showSearchInput();
        searchInput.focus();
      }
    });

    // 입력값에 따른 버튼 상태 전환
    searchInput.addEventListener('input', () => {
      const searchInputValue = searchInput.value.trim();
      toggleSearchButton(searchInputValue === '' ? 'button' : 'submit');
    });

    // 검색 버튼 클릭 시 검색 처리
    searchBox.addEventListener('submit', event => {
      console.log(searchButton.type);
      event.preventDefault();
      const searchInputValue = searchInput.value.trim();

      if (searchInputValue && inputSubmitHandle) {
        inputSubmitHandle(searchInputValue);
        setTimeout(() => {
          hideSearchInput();
          toggleSearchButton('button');
        }, 0);
      }
    });

    const showSearchInput = () => {
      searchInput.style.display = 'block';
      logo.style.display = 'none';
    };

    const hideSearchInput = () => {
      searchInput.style.display = 'none';
      logo.style.display = 'block';
    };

    const toggleSearchButton = (type: 'button' | 'submit' | 'reset') => {
      searchButton.type = type;
    };

    return header;
  };

  return render();
};

export default HeaderMobile;
