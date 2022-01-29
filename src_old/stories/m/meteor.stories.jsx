import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { MeteorPlain } from '../../index'

const stories = storiesOf('meteor', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <MeteorPlain />
    </Fragment>
  )
})
