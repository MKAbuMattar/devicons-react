import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { BitbucketOriginal } from '../../index'

const stories = storiesOf('bitbucket', module)

stories.add('original', () => {
  return (
    <Fragment>
      <BitbucketOriginal />
    </Fragment>
  )
})
