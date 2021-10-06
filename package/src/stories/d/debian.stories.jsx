import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DebianPlain } from '../../index'

const stories = storiesOf('debian', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <DebianPlain />
    </Fragment>
  )
})
