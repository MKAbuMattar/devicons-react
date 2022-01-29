import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { KrakenjsPlain } from '../../index'

const stories = storiesOf('krakenjs', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <KrakenjsPlain />
    </Fragment>
  )
})
