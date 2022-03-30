import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { JenkinsPlain } from '../../index'

const stories = storiesOf('jenkins', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <JenkinsPlain />
    </Fragment>
  )
})
