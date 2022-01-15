import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DoctrinePlain } from '../../index'

const stories = storiesOf('doctrine', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <DoctrinePlain />
    </Fragment>
  )
})
