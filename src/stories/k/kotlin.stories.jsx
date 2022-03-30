import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { KotlinPlain } from '../../index'

const stories = storiesOf('kotlin', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <KotlinPlain />
    </Fragment>
  )
})
