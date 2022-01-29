import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ModxPlain } from '../../index'

const stories = storiesOf('modx', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ModxPlain />
    </Fragment>
  )
})
