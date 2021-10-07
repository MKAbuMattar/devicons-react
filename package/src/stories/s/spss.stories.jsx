import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { SpssPlain } from '../../index'

const stories = storiesOf('spss', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <SpssPlain />
    </Fragment>
  )
})
