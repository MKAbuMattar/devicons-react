import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { PythonPlain } from '../../index'

const stories = storiesOf('python', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <PythonPlain />
    </Fragment>
  )
})
