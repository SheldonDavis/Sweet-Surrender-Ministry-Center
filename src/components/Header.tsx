import { NavLink } from 'react-router-dom';

import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FullLogo from '../assets/SSMC_full_logo.svg';

interface Link {
  text: string;
  url: string;
  optClasses: string;
  active: boolean;
}

const links: Array<Link> = [
  {
    text: 'Home',
    url: '/',
    optClasses: '',
    active: true,
  },
  {
    text: 'Contact',
    url: '/contact',
    optClasses: '',
    active: true,
  },
  {
    text: 'About',
    url: '/about',
    optClasses: '',
    active: false,
  },
  {
    text: 'Projects',
    url: '/projects',
    optClasses: '',
    active: true,
  },
  {
    text: 'Donate',
    url: '/donate',
    optClasses: 'btn',
    active: true,
  },
  {
    text: 'Legal',
    url: '/legal',
    optClasses: '',
    active: false,
  },
  {
    text: 'Other',
    url: '/other',
    optClasses: 'This_Is_Placeholder_Use_As_Baseline_For_More_Links',
    active: false,
  },
];

interface Properties {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
}
function Header(props: Properties) {
  const { setIsMenuOpen, isMenuOpen } = props;
  function handle_menuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }
  function handle_menuClose() {
    setIsMenuOpen(false);
  }
  return (
    <>
      <header className={`outerDrawer ${isMenuOpen ? `open` : `closed`}`}>
        <a href={`/`} className={`fullLogoLink`} onClick={handle_menuClose}>
          <img
            src={FullLogo}
            alt={`Sweet Surrender Ministry Center Logo text with icon`}
          />
        </a>
        <button
          onClick={handle_menuToggle}
          className={`MenuButton btn ${isMenuOpen ? `open` : `closed`}`}
        >
          {/* {isMenuOpen ? (
            <FontAwesomeIcon icon={faChevronLeft} />
          ) : (
            <FontAwesomeIcon icon={faChevronRight} />
          )} */}
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <nav className={`innerDrawer ${isMenuOpen ? `open` : `closed`}`}>
          {links.map((page, i) => {
            return (
              page.active && (
                <p key={`${page.text}_${i}`}>
                  <NavLink
                    to={page.url}
                    className={`${page.optClasses}`}
                    onClick={handle_menuClose}
                  >
                    {page.text}
                  </NavLink>
                </p>
              )
            );
          })}
        </nav>
      </header>
    </>
  );
}
export default Header;
