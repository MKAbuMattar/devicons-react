import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { PerlPlain } from '../../index'

const stories = storiesOf('perl', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <PerlPlain />
    </Fragment>
  )
})
