import { NavLink } from 'react-router-dom';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FullLogo from '../assets/SSMC_full_logo.svg';
import Logo_Text from '../assets/SSMC_Logo_Text.svg';
import Logo_Icon from '../assets/SSMC_Logo_Icon.svg';
import { useState } from 'react';

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
    active: true,
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
  const [scrollPos, setScrollPos] = useState(0);
  function handle_menuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }
  function handle_menuClose() {
    setIsMenuOpen(false);
  }

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPos(position);
  };
  const breakpoint = 1;
  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <header
        className={`outerDrawer ${isMenuOpen ? `open` : `closed`} ${
          scrollPos >= breakpoint ? `shadowAdded` : ``
        }`}
      >
        <a
          href={`/`}
          className={`fullLogoLink ${scrollPos >= breakpoint ? `hideME` : ``}`}
          onClick={handle_menuClose}
        >
          <img
            src={FullLogo}
            alt={`Sweet Surrender Ministry Center Logo Icon with text`}
          />
        </a>
        <a
          href={`/`}
          className={`LogoLink_Text  ${
            scrollPos >= breakpoint ? `` : `hideME`
          }`}
          onClick={handle_menuClose}
        >
          <img
            src={Logo_Text}
            alt={`Sweet Surrender Ministry Center Logo Text`}
          />
        </a>
        <a
          href={`/`}
          className={`LogoLink_Icon ${
            scrollPos >= breakpoint ? `hideME` : `hideME`
          }`}
          onClick={handle_menuClose}
        >
          <img
            src={Logo_Icon}
            alt={`Sweet Surrender Ministry Center Logo Icon`}
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
