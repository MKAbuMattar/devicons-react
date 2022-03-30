import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { PhotoshopPlain } from '../../index'

const stories = storiesOf('photoshop', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <PhotoshopPlain />
    </Fragment>
  )
})
