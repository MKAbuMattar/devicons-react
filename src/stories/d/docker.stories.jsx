import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DockerOriginal, DockerOriginalWordmark, DockerPlain, DockerPlainWordmark } from '../../index'

const stories = storiesOf('docker', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <DockerOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <DockerOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <DockerPlain height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain wordmark ', () => {
  return (
    <Fragment>
      <DockerPlainWordmark height="128" width="128" />
    </Fragment>
  )
})
