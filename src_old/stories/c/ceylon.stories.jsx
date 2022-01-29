import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CeylonPlain } from '../../index'

const stories = storiesOf('ceylon', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <CeylonPlain />
    </Fragment>
  )
})
