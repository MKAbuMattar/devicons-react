import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { SafariPlain } from '../../index'

const stories = storiesOf('safari', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <SafariPlain />
    </Fragment>
  )
})
