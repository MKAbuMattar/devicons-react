import Link from 'next/link';

import ScrollToTop from '@/components/ScrollToTop';

import {
  Navbar,
  NavbarItem,
  NavbarList,
  NavbarLogoContainer,
  NavbarScrollToTopBox,
  NavbarTitle,
  Sticky,
} from './style';

import DeviconsReactOriginal from 'devicons-react/icons/DeviconsReactOriginal';

const index = () => {
  return (
    <>
      <Navbar>
        <Sticky>
          <div>
            <Link href="/">
              <a>
                <NavbarLogoContainer>
                  <DeviconsReactOriginal height={60} width={60} />
                  <NavbarTitle>
                    Devicons <span>React</span>
                  </NavbarTitle>
                </NavbarLogoContainer>
              </a>
            </Link>
            <NavbarList>
              <NavbarItem>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/latest">
                  <a>Icons @latest</a>
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/beta">
                  <a>Icons @beta</a>
                </Link>
              </NavbarItem>
            </NavbarList>
          </div>
          <NavbarScrollToTopBox>
            <ScrollToTop />
          </NavbarScrollToTopBox>
        </Sticky>
      </Navbar>
    </>
  );
};

export default index;
