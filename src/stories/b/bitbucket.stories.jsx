import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { BitbucketOriginal, BitbucketOriginalWordmark } from '../../index'

const stories = storiesOf('bitbucket', module)

stories.add('original', () => {
  return (
    <Fragment>
      <BitbucketOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <BitbucketOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})

