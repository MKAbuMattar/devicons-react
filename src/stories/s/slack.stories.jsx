import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { SlackPlain } from '../../index'

const stories = storiesOf('slack', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <SlackPlain />
    </Fragment>
  )
})
