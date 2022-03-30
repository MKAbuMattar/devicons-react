import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { SketchLine } from '../../index'

const stories = storiesOf('sketch', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <SketchLine />
    </Fragment>
  )
})
