import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { JamstackOriginal } from '../../index'

const stories = storiesOf('jamstack', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <JamstackOriginal />
    </Fragment>
  )
})
