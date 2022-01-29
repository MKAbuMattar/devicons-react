import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { FirebasePlain } from '../../index'

const stories = storiesOf('firebase', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <FirebasePlain />
    </Fragment>
  )
})
