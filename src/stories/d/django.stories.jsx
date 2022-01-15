import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DjangoPlain } from '../../index'

const stories = storiesOf('django', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <DjangoPlain />
    </Fragment>
  )
})
