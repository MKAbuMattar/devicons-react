import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { WeblatePlain } from '../../index'

const stories = storiesOf('weblate', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <WeblatePlain />
    </Fragment>
  )
})
