import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ReduxOriginal } from '../../index'

const stories = storiesOf('redux', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ReduxOriginal />
    </Fragment>
  )
})
