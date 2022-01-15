import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GoogleCloudPlain } from '../../index'

const stories = storiesOf('googlecloud', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <GoogleCloudPlain />
    </Fragment>
  )
})
