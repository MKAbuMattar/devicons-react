import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { KnockoutPlainWordmark } from '../../index'

const stories = storiesOf('knockout', module)

stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <KnockoutPlainWordmark />
    </Fragment>
  )
})
