import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { MochaPlain } from '../../index'

const stories = storiesOf('mocha', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <MochaPlain />
    </Fragment>
  )
})
