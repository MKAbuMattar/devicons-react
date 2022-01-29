import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { WebStormPlain } from '../../index'

const stories = storiesOf('webstorm', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <WebStormPlain />
    </Fragment>
  )
})
