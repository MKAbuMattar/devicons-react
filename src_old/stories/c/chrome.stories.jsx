import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ChromePlain } from '../../index'

const stories = storiesOf('chrome', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ChromePlain />
    </Fragment>
  )
})
