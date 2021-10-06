import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { JetbrainsPlain } from '../../index'

const stories = storiesOf('jetbrains', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <JetbrainsPlain />
    </Fragment>
  )
})
