import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { WebPackPlain } from '../../index'

const stories = storiesOf('webpack', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <WebPackPlain />
    </Fragment>
  )
})
