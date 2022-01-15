import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { QtOriginal } from '../../index'

const stories = storiesOf('qt', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <QtOriginal />
    </Fragment>
  )
})
