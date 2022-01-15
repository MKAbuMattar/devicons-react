import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { EmbeddedcPlain } from '../../index'

const stories = storiesOf('embeddedc', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <EmbeddedcPlain />
    </Fragment>
  )
})
