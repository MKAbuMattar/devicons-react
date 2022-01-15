import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { MoodlePlain } from '../../index'

const stories = storiesOf('moodle', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <MoodlePlain />
    </Fragment>
  )
})
