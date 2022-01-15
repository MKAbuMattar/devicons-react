import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { IonicOriginal } from '../../index'

const stories = storiesOf('ionic', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <IonicOriginal />
    </Fragment>
  )
})
