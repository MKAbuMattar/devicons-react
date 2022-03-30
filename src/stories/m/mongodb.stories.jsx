import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { MongoDBPlain } from '../../index'

const stories = storiesOf('mongodb', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <MongoDBPlain />
    </Fragment>
  )
})
