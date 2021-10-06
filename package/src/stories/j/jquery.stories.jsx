import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { JQueryPlain } from '../../index'

const stories = storiesOf('jquery', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <JQueryPlain />
    </Fragment>
  )
})
