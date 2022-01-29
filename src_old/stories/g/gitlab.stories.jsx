import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GitLabPlain } from '../../index'

const stories = storiesOf('gitlab', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <GitLabPlain />
    </Fragment>
  )
})
