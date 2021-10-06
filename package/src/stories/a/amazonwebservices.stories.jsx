import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AmazonwebservicesPlainWordmark } from '../../index'

const stories = storiesOf('amazonwebservices', module)

stories.add('plain word mark', () => {
  return (
    <Fragment>
      <AmazonwebservicesPlainWordmark />
    </Fragment>
  )
})
