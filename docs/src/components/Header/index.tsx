import { Fragment, useEffect } from 'react';

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

import DeviconsReactOriginal from 'devicons-react/icons/DeviconsReactOriginal';

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
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <Fragment>
      <HeaderContainer>
        <HeaderBox>
          <HeaderTitleBox>
            <DeviconsReactOriginal height="60" width="60" />
            <HeaderTitle>
              Devicons <span>React</span>
            </HeaderTitle>
          </HeaderTitleBox>
          <HeaderInfo>
            Devicons React is a collection of icons that symbolize programming
            languages, design tools, and development software.
          </HeaderInfo>

          <HeaderBoxGitHubLabel>
            <a href="https://github.com/MKAbuMattar/devicons-react/releases">
              <img
                alt="GitHub release (latest by semver)"
                src="https://img.shields.io/github/v/release/MKAbuMattar/devicons-react?color=%2360be86&label=Latest%20release&style=for-the-badge&sort=semver"
              />
            </a>
            <a href="https://github.com/MKAbuMattar/devicons-react/LICENSE">
              <img
                alt="GitHub"
                src="https://img.shields.io/github/license/MKAbuMattar/devicons-react?color=%2360be86&style=for-the-badge"
              />
            </a>
            <a href="https://github.com/MKAbuMattar/devicons-react/stargazers">
              <img
                alt="GitHub Repo stars"
                src="https://img.shields.io/github/stars/MKAbuMattar/devicons-react?color=%2360be86&label=github%20stars&style=for-the-badge"
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
            <pre>
              <code className="bash language-bash hljs">
                {`#npm
npm install --save devicons-react

#yarn
yarn add devicons-react

#pnpm
pnpm add devicons-react`}
              </code>
            </pre>
          </HeaderCard>

          <HeaderCard>
            <HeaderCardInfo>
              <HeaderCardTitle>Demo</HeaderCardTitle>
            </HeaderCardInfo>
            <pre>
              <code className="js hljs language-javascript">
                {`import { Fragment } from 'react'
import { Aarch64Plain, ReactOriginal } from 'devicons-react'
import AndroidOriginal from 'devicons-react/icons/AndroidOriginal'

const App = () => {
  return (
    <Fragment>
      <Aarch64Plain />
      <ReactOriginal fill="red" height="500" width="500" />
      <AndroidOriginal fill="#d35" height="128" width="128"/>
    </Fragment>
  )
}

export default App`}
              </code>
            </pre>
          </HeaderCard>
        </HeaderBox>
      </HeaderContainer>
    </Fragment>
  );
};

export default Header;