import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Windows8Original } from '../../index'

const stories = storiesOf('windows8', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <Windows8Original />
    </Fragment>
  )
})
