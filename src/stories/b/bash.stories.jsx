import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { BashPlain } from '../../index'

const stories = storiesOf('bash', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <BashPlain />
    </Fragment>
  )
})
