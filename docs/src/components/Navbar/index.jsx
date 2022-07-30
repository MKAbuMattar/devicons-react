import React, { useState } from 'react'

import Link from 'next/link'

import ScrollToTop from '@/components/ScrollToTop'

import DeviconsReactOriginal from 'devicons-react/icons/DeviconsReactOriginal'

import {
  Navbar,
  Sticky,
  NavbarLogoContainer,
  NavbarTitle,
  NavbarScrollToTopBox,
  NavbarList,
  NavbarItem,
} from './style'

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
                <Link href="/icons">
                  <a>Icons</a>
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/beta">
                  <a>Icons beta</a>
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
  )
}

export default index
