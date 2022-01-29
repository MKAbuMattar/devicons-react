import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { BowerPlain } from '../../index'

const stories = storiesOf('bower', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <BowerPlain />
    </Fragment>
  )
})
