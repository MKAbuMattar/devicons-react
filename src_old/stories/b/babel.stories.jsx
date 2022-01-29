import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { BabelPlain } from '../../index'

const stories = storiesOf('babel', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <BabelPlain />
    </Fragment>
  )
})
