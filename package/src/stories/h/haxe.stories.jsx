import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { HaxePlain } from '../../index'

const stories = storiesOf('haxe', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <HaxePlain />
    </Fragment>
  )
})
