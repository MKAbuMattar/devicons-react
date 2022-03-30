import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { LinkedinPlain } from '../../index'

const stories = storiesOf('linkedin', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <LinkedinPlain />
    </Fragment>
  )
})
