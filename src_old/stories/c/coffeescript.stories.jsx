import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CoffeescriptOriginal } from '../../index'

const stories = storiesOf('coffeescript', module)

stories.add('original', () => {
  return (
    <Fragment>
      <CoffeescriptOriginal />
    </Fragment>
  )
})
