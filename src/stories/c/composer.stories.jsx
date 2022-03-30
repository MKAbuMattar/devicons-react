import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ComposerLine, ComposerLineWordmark, ComposerOriginal } from '../../index'

const stories = storiesOf('composer', module)

stories.add('line', () => {
  return (
    <Fragment>
      <ComposerLine height="128" width="128" />
    </Fragment>
  )
})

stories.add('line wordmark', () => {
  return (
    <Fragment>
      <ComposerLineWordmark height="128" width="128" />
    </Fragment>
  )
})


stories.add('original', () => {
  return (
    <Fragment>
      <ComposerOriginal height="128" width="128" />
    </Fragment>
  )
})

