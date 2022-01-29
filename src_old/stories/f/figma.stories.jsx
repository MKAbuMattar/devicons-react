import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { FigmaPlain } from '../../index'

const stories = storiesOf('figma', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <FigmaPlain />
    </Fragment>
  )
})
