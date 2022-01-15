import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { LESSPlainWordmark } from '../../index'

const stories = storiesOf('less', module)

stories.add('plain word mark', () => {
  return (
    <Fragment>
      <LESSPlainWordmark />
    </Fragment>
  )
})
