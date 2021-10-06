import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CPlain } from '../../index'

const stories = storiesOf('c', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <CPlain />
    </Fragment>
  )
})
