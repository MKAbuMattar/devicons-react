import { Fragment, useEffect } from 'react'
import Link from 'next/link'

import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)

import {
  HeaderContainer,
  HeaderBox,
  HeaderTitleBox,
  HeaderTitle,
  HeaderInfo,
  HeaderLink,
  HeaderCard,
  HeaderCardInfo,
  HeaderCardTitle,
  HeaderArrowWaveBox,
  HeaderArrowWave,
} from './Style'

import { DeviconsReactOriginal } from 'devicons-react'

const Header = () => {
  useEffect(() => {
    hljs.initHighlighting()
  }, [])

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

          <HeaderArrowWaveBox>
            <Link href="#search">
              <a>
                <HeaderArrowWave>
                  <span />
                  <span />
                  <span />
                </HeaderArrowWave>
              </a>
            </Link>
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
yarn add devicons-react`}
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
import DeviconsReactOriginal from 'devicons-react/icons/deviconsreact-original'

const App = () => {
  return (
    <Fragment>
      <Aarch64Plain />
      <ReactOriginal color="red" size="500" />
      <DeviconsReactOriginal />
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
  )
}

export default Header
