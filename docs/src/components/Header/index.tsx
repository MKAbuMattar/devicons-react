import DeviconsReactOriginal from '@devicons-react/latest/lib/icons/DeviconsReactOriginal';
import {Fragment} from 'react';

import Highlight from '@/components/SyntaxHighlighter';

import {
  HeaderAlertCaution,
  HeaderAlertCautionInfo,
  HeaderAlertCautionTitle,
  HeaderAlertNote,
  HeaderAlertNoteInfo,
  HeaderAlertNoteTitle,
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
              href="https://www.npmjs.com/package/devicons-react/v/latest"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/npm/v/devicons-react/latest?style=for-the-badge&logo=npm&logoColor=white&color=d52128"
                alt=""
              />
            </a>

            <a
              href="https://www.npmjs.com/package/devicons-react/v/beta"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/npm/v/devicons-react/beta?style=for-the-badge&logo=npm&logoColor=white&color=d52128"
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
              {`import Aarch64Original from "devicons-react/icons/Aarch64Original";

const App = () => {
  return (
    <>
      <Aarch64Original />
    </>
  );
};

export default App;`}
            </Highlight>
          </HeaderCard>

          <HeaderCard>
            <HeaderCardInfo>
              <HeaderCardTitle>
                Custom size, color, and class name
              </HeaderCardTitle>
            </HeaderCardInfo>
            <Highlight language={'JavaScript'} theme={'Base16Nord'}>
              {`import Aarch64Line from "devicons-react/icons/Aarch64Line";
import Aarch64Original from "devicons-react/icons/Aarch64Original";
import Aarch64Plain from "devicons-react/icons/Aarch64Plain";

const App = () => {
  return (
    <>
      <Aarch64Line color="red" size="50" />
      <Aarch64Original color="blue" size="50" />
      <Aarch64Plain size="50" />
      <Aarch64Original className="custom-class" />
    </>
  );
};

export default App;`}
            </Highlight>
          </HeaderCard>

          <HeaderAlertNote>
            <HeaderAlertNoteTitle>Note</HeaderAlertNoteTitle>
            <HeaderAlertNoteInfo>
              The color prop works only with Plain and Line icons. All SVG props
              are also supported for advanced customization.
            </HeaderAlertNoteInfo>
          </HeaderAlertNote>

          <HeaderAlertCaution>
            <HeaderAlertCautionTitle>Caution</HeaderAlertCautionTitle>
            <HeaderAlertCautionInfo>
              Avoid importing multiple icons directly using{' '}
              <code>{`import { Aarch64Line, Aarch64Original, Aarch64Plain } from 'devicons-react';`}</code>{' '}
              as it will increase the bundle size. Instead, import icons
              individually as shown above.
            </HeaderAlertCautionInfo>
          </HeaderAlertCaution>
        </HeaderBox>
      </HeaderContainer>
    </Fragment>
  );
};

export default Header;
