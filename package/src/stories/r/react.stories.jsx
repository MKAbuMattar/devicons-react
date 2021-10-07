import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ReactOriginal } from '../../index'

const stories = storiesOf('react', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ReactOriginal />
    </Fragment>
  )
})
