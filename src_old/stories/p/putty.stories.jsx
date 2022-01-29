import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { PuttyPlain } from '../../index'

const stories = storiesOf('putty', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <PuttyPlain />
    </Fragment>
  )
})
