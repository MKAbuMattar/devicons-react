import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { PHPPlain } from '../../index'

const stories = storiesOf('php', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <PHPPlain />
    </Fragment>
  )
})
