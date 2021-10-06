import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AngularjsPlain } from '../../index'

const stories = storiesOf('angularjs', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <AngularjsPlain />
    </Fragment>
  )
})
