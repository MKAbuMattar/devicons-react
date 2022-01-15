import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { JuliaPlain } from '../../index'

const stories = storiesOf('julia', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <JuliaPlain />
    </Fragment>
  )
})
