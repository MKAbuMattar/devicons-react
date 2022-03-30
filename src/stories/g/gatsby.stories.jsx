import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GatsbyPlain } from '../../index'

const stories = storiesOf('gatsby', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <GatsbyPlain />
    </Fragment>
  )
})
