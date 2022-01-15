import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GooglePlain } from '../../index'

const stories = storiesOf('google', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <GooglePlain />
    </Fragment>
  )
})
