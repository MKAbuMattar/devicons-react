import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GatlingPlain } from '../../index'

const stories = storiesOf('gatling', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <GatlingPlain />
    </Fragment>
  )
})
