import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { YarnOriginal } from '../../index'

const stories = storiesOf('yarn', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <YarnOriginal />
    </Fragment>
  )
})
