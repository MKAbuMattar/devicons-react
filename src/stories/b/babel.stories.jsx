import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { BabelOriginal, BabelPlain } from '../../index'

const stories = storiesOf('babel', module)

stories.add('original', () => {
  return (
    <Fragment>
      <BabelOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <BabelPlain height="128" width="128" />
    </Fragment>
  )
})
