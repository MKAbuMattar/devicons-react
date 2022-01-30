import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CucumberPlain, CucumberPlainWordmark } from '../../index'

const stories = storiesOf('cucumber', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <CucumberPlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <CucumberPlainWordmark height="128" width="128" />
    </Fragment>
  )
})
