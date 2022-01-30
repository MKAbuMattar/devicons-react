import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CodeigniterPlain, CodeigniterPlainWordmark } from '../../index'

const stories = storiesOf('codeigniter', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <CodeigniterPlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <CodeigniterPlainWordmark height="128" width="128" />
    </Fragment>
  )
})

