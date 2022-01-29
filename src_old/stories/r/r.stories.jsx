import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { RPlain } from '../../index'

const stories = storiesOf('r', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <RPlain />
    </Fragment>
  )
})
