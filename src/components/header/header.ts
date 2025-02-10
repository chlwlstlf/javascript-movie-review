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

  const render = () => {
    header.innerHTML = '';
    const content = getViewportType(window.innerWidth) === 'MOBILE' ? HeaderMobile(props) : HeaderDesktop(props);
    header.appendChild(content);
  };

  const handleTrigger = (prevViewport: number, currentViewport: number) => {
    return (
      (getViewportType(prevViewport) === 'MOBILE' && getViewportType(currentViewport) !== 'MOBILE') ||
      (getViewportType(prevViewport) !== 'MOBILE' && getViewportType(currentViewport) === 'MOBILE')
    );
  };

  const handleResize = debounce((currentViewport: number) => {
    console.log('헤더 리렌더링', getViewportType(currentViewport));
    render();
  }, 300);

  viewportManager.subscribe({ trigger: handleTrigger, callback: handleResize });

  render();

  return header;
};

export default Header;
