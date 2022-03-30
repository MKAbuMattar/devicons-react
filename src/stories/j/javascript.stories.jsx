import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { JavascriptPlain } from '../../index'

const stories = storiesOf('javascript', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <JavascriptPlain />
    </Fragment>
  )
})
