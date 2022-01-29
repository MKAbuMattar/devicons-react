import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DotNetPlain } from '../../index'

const stories = storiesOf('dot-net', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <DotNetPlain />
    </Fragment>
  )
})
