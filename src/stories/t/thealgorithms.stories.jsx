import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ThealgorithmsPlain } from '../../index'

const stories = storiesOf('thealgorithms', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ThealgorithmsPlain />
    </Fragment>
  )
})
