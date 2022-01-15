import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { PostgreSQLPlain } from '../../index'

const stories = storiesOf('postgresql', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <PostgreSQLPlain />
    </Fragment>
  )
})
