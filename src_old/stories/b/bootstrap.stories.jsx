import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { BootstrapPlain } from '../../index'

const stories = storiesOf('bootstrap', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <BootstrapPlain />
    </Fragment>
  )
})
