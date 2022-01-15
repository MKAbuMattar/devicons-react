import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { PhoenixPlain } from '../../index'

const stories = storiesOf('phoenix', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <PhoenixPlain />
    </Fragment>
  )
})
