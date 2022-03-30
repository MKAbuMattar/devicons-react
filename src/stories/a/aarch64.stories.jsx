import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Aarch64Original, Aarch64Plain } from '../../index'

const stories = storiesOf('aarch64', module)

stories.add('original', () => {
  return (
    <Fragment>
      <Aarch64Original height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <Aarch64Plain height="128" width="128" />
    </Fragment>
  )
})
