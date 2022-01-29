import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { FlaskOriginal } from '../../index'

const stories = storiesOf('flask', module)

stories.add('original', () => {
  return (
    <Fragment>
      <FlaskOriginal />
    </Fragment>
  )
})
