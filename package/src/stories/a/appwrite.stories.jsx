import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AppwritePlain } from '../../index'

const stories = storiesOf('appwrite', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <AppwritePlain />
    </Fragment>
  )
})
