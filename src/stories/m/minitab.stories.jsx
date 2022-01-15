import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { MinitabPlain } from '../../index'

const stories = storiesOf('minitab', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <MinitabPlain />
    </Fragment>
  )
})
