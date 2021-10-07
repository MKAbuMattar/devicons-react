import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { RedisPlain } from '../../index'

const stories = storiesOf('redis', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <RedisPlain />
    </Fragment>
  )
})
