import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GitterPlain } from '../../index'

const stories = storiesOf('gitter', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <GitterPlain />
    </Fragment>
  )
})
