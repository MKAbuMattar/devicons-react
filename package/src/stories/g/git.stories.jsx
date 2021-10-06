import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GitPlain } from '../../index'

const stories = storiesOf('git', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <GitPlain />
    </Fragment>
  )
})
