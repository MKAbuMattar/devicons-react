import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { PhalconPlain } from '../../index'

const stories = storiesOf('phalcon', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <PhalconPlain />
    </Fragment>
  )
})
