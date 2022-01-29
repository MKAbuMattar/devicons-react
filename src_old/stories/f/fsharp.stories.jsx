import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { FSharpPlain } from '../../index'

const stories = storiesOf('foundation', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <FSharpPlain />
    </Fragment>
  )
})
