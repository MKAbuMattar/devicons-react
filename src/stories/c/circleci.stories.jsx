import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CircleciPlain, CircleciPlainWordmark } from '../../index'

const stories = storiesOf('circleci', module)



stories.add('plain', () => {
  return (
    <Fragment>
      <CircleciPlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain Wordmark', () => {
  return (
    <Fragment>
      <CircleciPlainWordmark height="128" width="128" />
    </Fragment>
  )
})
