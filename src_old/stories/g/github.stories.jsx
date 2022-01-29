import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GitHubOriginal } from '../../index'

const stories = storiesOf('github', module)

stories.add('original', () => {
  return (
    <Fragment>
      <GitHubOriginal />
    </Fragment>
  )
})
