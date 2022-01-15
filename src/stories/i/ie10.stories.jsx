import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { IE10Original } from '../../index'

const stories = storiesOf('ie10', module)

stories.add('original', () => {
  return (
    <Fragment>
      <IE10Original />
    </Fragment>
  )
})
