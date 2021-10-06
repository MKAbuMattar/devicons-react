import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GruntPlain } from '../../index'

const stories = storiesOf('grunt', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <GruntPlain />
    </Fragment>
  )
})
