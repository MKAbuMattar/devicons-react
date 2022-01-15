import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { JiraPlain } from '../../index'

const stories = storiesOf('jira', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <JiraPlain />
    </Fragment>
  )
})
