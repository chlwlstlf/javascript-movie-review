import { BREAKPOINT } from '../../constants/constant';
import { debounce } from '../../utils/eventUtils';
import viewportManager from '../../utils/viewportManager';
import { getViewportType } from '../../utils/viewportUtils';
import HeaderDesktop from './headerDesktop';
import HeaderMobile from './headerMobile';

interface Props {
  onLogoClick?: () => void;
  inputSubmitHandle?: (value: string) => void;
}

const Header = (props: Props) => {
  const header = document.createElement('header');
  header.className = 'header';

  // 헤더 클릭 시 스크롤 상단으로 이동
  header.onclick = event => {
    if ((event.target as HTMLElement).tagName === 'HEADER') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isMobile = (viewport: number) => getViewportType(viewport) === 'MOBILE';

  const render = (width: number) => {
    header.innerHTML = '';
    const content = isMobile(width) ? HeaderMobile(props) : HeaderDesktop(props);
    header.appendChild(content);
  };

  const handleTrigger = (prev: number, current: number) => {
    return isMobile(prev) != isMobile(current);
  };

  const handleResize = debounce((current: number) => {
    render(current);
  }, 300);

  viewportManager.subscribe({ trigger: handleTrigger, callback: handleResize });

  render(window.innerWidth);

  return header;
};

export default Header;
