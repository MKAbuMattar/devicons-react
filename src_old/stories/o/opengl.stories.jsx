import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { OpenGLPlain } from '../../index'

const stories = storiesOf('opengl', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <OpenGLPlain />
    </Fragment>
  )
})
