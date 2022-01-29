import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ElixirPlain } from '../../index'

const stories = storiesOf('elixir', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ElixirPlain />
    </Fragment>
  )
})
