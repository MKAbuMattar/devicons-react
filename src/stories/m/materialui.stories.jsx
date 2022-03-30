import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { MaterialUIPlain } from '../../index'

const stories = storiesOf('materialui', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <MaterialUIPlain />
    </Fragment>
  )
})
