import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { NestJSPlain } from '../../index'

const stories = storiesOf('nestjs', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <NestJSPlain />
    </Fragment>
  )
})
