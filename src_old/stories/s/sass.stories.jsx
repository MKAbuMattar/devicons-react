import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { SASSOriginal } from '../../index'

const stories = storiesOf('sass', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <SASSOriginal />
    </Fragment>
  )
})
