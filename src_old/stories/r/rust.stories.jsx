import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { RustPlain } from '../../index'

const stories = storiesOf('rust', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <RustPlain />
    </Fragment>
  )
})
