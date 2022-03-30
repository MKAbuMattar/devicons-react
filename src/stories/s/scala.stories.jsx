import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ScalaPlain } from '../../index'

const stories = storiesOf('scala', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ScalaPlain />
    </Fragment>
  )
})
