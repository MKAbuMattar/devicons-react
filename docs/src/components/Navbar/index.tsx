import DeviconsReactOriginal from '@latest/devicons-react/lib/icons/DeviconsReactOriginal';
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

const index = () => {
  return (
    <>
      <Navbar>
        <Sticky>
          <div>
            <Link href="/">
              <NavbarLogoContainer>
                <DeviconsReactOriginal size={60} />
                <NavbarTitle>
                  Devicons <span>React</span>
                </NavbarTitle>
              </NavbarLogoContainer>
            </Link>
            <NavbarList>
              <NavbarItem>
                <Link href="/">Home</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/latest">Icons @latest</Link>
              </NavbarItem>
              {/* <NavbarItem>
                <Link href="/latest/new">What's new? @latest</Link>
              </NavbarItem> */}
              <NavbarItem>
                <Link href="/beta">Icons @beta</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/beta/new">What's new? @beta</Link>
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
