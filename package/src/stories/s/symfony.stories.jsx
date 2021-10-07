import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { SymfonyOriginal } from '../../index'

const stories = storiesOf('symfony', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <SymfonyOriginal />
    </Fragment>
  )
})
