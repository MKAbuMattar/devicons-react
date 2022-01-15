import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { SpringPlain } from '../../index'

const stories = storiesOf('spring', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <SpringPlain />
    </Fragment>
  )
})
