import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { FirefoxPlain } from '../../index'

const stories = storiesOf('firefox', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <FirefoxPlain />
    </Fragment>
  )
})
