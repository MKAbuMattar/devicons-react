import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { XDPlain } from '../../index'

const stories = storiesOf('xd', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <XDPlain />
    </Fragment>
  )
})
