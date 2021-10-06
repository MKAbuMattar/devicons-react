import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { KnockoutPlainWordmark } from '../../index'

const stories = storiesOf('knockout', module)

stories.add('plain word mark', () => {
  return (
    <Fragment>
      <KnockoutPlainWordmark />
    </Fragment>
  )
})
