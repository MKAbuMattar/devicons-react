import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { LuaPlain } from '../../index'

const stories = storiesOf('lua', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <LuaPlain />
    </Fragment>
  )
})
