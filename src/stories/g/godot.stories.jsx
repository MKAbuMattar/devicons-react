import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GodotPlain } from '../../index'

const stories = storiesOf('godot', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <GodotPlain />
    </Fragment>
  )
})
