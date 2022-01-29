import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { TwitterOriginal } from '../../index'

const stories = storiesOf('twitter', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <TwitterOriginal />
    </Fragment>
  )
})
