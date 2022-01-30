import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AppleOriginal } from '../../index'

const stories = storiesOf('apple', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AppleOriginal height="128" width="128" />
    </Fragment>
  )
})
