import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { OperaPlain } from '../../index'

const stories = storiesOf('opera', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <OperaPlain />
    </Fragment>
  )
})
