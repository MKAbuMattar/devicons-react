import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { FlutterPlain } from '../../index'

const stories = storiesOf('flutter', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <FlutterPlain />
    </Fragment>
  )
})
