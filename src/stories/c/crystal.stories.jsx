import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CrystalOriginal, CrystalOriginalWordmark } from '../../index'

const stories = storiesOf('crystal', module)

stories.add('original', () => {
  return (
    <Fragment>
      <CrystalOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <CrystalOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})