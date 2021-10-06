import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { InkscapePlain } from '../../index'

const stories = storiesOf('inkscape', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <InkscapePlain />
    </Fragment>
  )
})
