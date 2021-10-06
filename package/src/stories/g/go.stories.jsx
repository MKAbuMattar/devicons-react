import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GoPlain } from '../../index'

const stories = storiesOf('go', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <GoPlain />
    </Fragment>
  )
})
