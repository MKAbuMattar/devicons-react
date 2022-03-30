import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { MySQLPlain } from '../../index'

const stories = storiesOf('mysql', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <MySQLPlain />
    </Fragment>
  )
})
