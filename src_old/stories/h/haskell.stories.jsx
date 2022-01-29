import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { HaskellPlain } from '../../index'

const stories = storiesOf('haskell', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <HaskellPlain />
    </Fragment>
  )
})
