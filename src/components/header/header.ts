import { BREAKPOINT } from '../../constants/constant';
import { debounce } from '../../utils/eventUtils';
import HeaderDesktop from './headerDesktop';
import HeaderMobile from './headerMobile';

interface Props {
  onLogoClick?: () => void;
  inputSubmitHandle?: (value: string) => void;
}

const Header = (props: Props) => {
  const render = () => {
    const isMobile = window.innerWidth <= BREAKPOINT.MOBILE;
    return isMobile ? HeaderMobile(props) : HeaderDesktop(props);
  };

  const handleResize = () => {
    const header = document.querySelector('.header');
    if (header) {
      header.replaceWith(render());
    }
  };

  window.addEventListener('resize', debounce(handleResize, 300));

  return render();
};

export default Header;
