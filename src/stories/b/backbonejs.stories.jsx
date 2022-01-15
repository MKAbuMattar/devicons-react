import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { BackbonejsPlain } from '../../index'

const stories = storiesOf('backbonejs', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <BackbonejsPlain />
    </Fragment>
  )
})
