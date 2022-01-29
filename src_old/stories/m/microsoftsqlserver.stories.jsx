import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { MicrosoftsqlserverPlain } from '../../index'

const stories = storiesOf('microsoftsqlserver', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <MicrosoftsqlserverPlain />
    </Fragment>
  )
})
