import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ExpressOriginal } from '../../index'

const stories = storiesOf('express', module)

stories.add('original', () => {
  return (
    <Fragment>
      <ExpressOriginal />
    </Fragment>
  )
})
