import DeviconsReactOriginal from 'devicons-react/lib/icons/DeviconsReactOriginal';
import { Fragment } from 'react';

import Highlight from '@/components/SyntaxHighlighter';

import {
  HeaderArrowWave,
  HeaderArrowWaveBox,
  HeaderBox,
  HeaderBoxGitHubLabel,
  HeaderCard,
  HeaderCardInfo,
  HeaderCardTitle,
  HeaderContainer,
  HeaderInfo,
  HeaderTitle,
  HeaderTitleBox,
} from './style';

const Header = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <HeaderBox>
          <HeaderTitleBox>
            <DeviconsReactOriginal size="60" />
            <HeaderTitle>
              Devicons <span>React</span>
            </HeaderTitle>
          </HeaderTitleBox>
          <HeaderInfo>
            Devicons React is a collection of icons that symbolize programming
            languages, design tools, and development software.
          </HeaderInfo>

          <HeaderBoxGitHubLabel>
            <a
              href="https://www.npmjs.com/package/devicons-react"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/badge/npm-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"
                alt=""
              />
            </a>

            <a
              href="https://github.com/MKAbuMattar/devicons-react"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/badge/github-%23181717.svg?style=for-the-badge&logo=github&logoColor=white"
                alt=""
              />
            </a>

            <a href="https://github.com/MKAbuMattar/devicons-react/releases">
              <img
                alt="GitHub release"
                src="https://img.shields.io/github/v/release/MKAbuMattar/devicons-react?color=%23d52128&label=Latest%20release&style=for-the-badge"
              />
            </a>

            <a href="/LICENSE">
              <img
                alt="GitHub"
                src="https://img.shields.io/github/license/MKAbuMattar/devicons-react?color=%23d52128&style=for-the-badge"
              />
            </a>

            <a href="https://github.com/MKAbuMattar/devicons-react/stargazers">
              <img
                alt="GitHub Repo stars"
                src="https://img.shields.io/github/stars/MKAbuMattar/devicons-react?color=%23d52128&label=github%20stars&style=for-the-badge"
              />
            </a>
          </HeaderBoxGitHubLabel>

          <HeaderArrowWaveBox>
            <HeaderArrowWave>
              <span />
              <span />
              <span />
            </HeaderArrowWave>
          </HeaderArrowWaveBox>

          <HeaderCard>
            <HeaderCardInfo>
              <HeaderCardTitle>Install package</HeaderCardTitle>
            </HeaderCardInfo>

            <Highlight language={'Bash'} theme={'Base16Nord'}>
              {`#npm
npm install --save devicons-react

#yarn
yarn add devicons-react

#pnpm
pnpm add devicons-react`}
            </Highlight>
          </HeaderCard>

          <HeaderCard>
            <HeaderCardInfo>
              <HeaderCardTitle>Demo</HeaderCardTitle>
            </HeaderCardInfo>
            <Highlight language={'JavaScript'} theme={'Base16Nord'}>
              {`import { Aarch64Plain } from 'devicons-react'

const App = () => {
  return (
    <>
      <Aarch64Plain color="red" size="500"  />
    </>
  )
}

export default App`}
            </Highlight>
          </HeaderCard>
        </HeaderBox>
      </HeaderContainer>
    </Fragment>
  );
};

export default Header;
