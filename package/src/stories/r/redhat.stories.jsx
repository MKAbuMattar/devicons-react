import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { RedhatPlain } from '../../index'

const stories = storiesOf('redhat', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <RedhatPlain />
    </Fragment>
  )
})
