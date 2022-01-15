import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ErlangPlain } from '../../index'

const stories = storiesOf('erlang', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ErlangPlain />
    </Fragment>
  )
})
