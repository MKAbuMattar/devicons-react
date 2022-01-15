import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { SocketioOriginal } from '../../index'

const stories = storiesOf('socketio', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <SocketioOriginal />
    </Fragment>
  )
})
